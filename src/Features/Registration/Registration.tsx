import { Input } from "../../UI/Input/Input";
import { TextContent } from "../../UI/TextContent/TextContent";
import { Form } from "../Form/Form";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { getListIfNotExist } from "../../Store/registrationList/thunks/getListIfNotExist";
import { Table } from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import { selectRegistrationList } from "../../Store/registrationList/selectors";
import { TableRow } from "../../UI/TableRow/TableRow";
import { nanoid } from "@reduxjs/toolkit";
import { TableHeader } from "../../UI/TableHeader/TableHeader";
import { UserInfo } from "../../Components/UserInfo/UserInfo";
import { useNavigate } from "react-router-dom";
const TABLE_HEADERS = ["NAME", "EMAIL", "ADDRESS"];
const INPUT_PLACEHOLDER = "We will display your name in participation list ";

export const Registration = () => {
  const navigate = useNavigate();
  const { address } = localStorage;
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getListIfNotExist());
  }, [dispatch]);
  const [isDisplayTable, setIsDisplayTable] = useState(false);
  const [isDisplayForm, setIsDisplayForm] = useState(true);
  const tableData = useSelector((state) => selectRegistrationList(state));
  const [users, setUsers] = useState(tableData);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsers(
      [{ address, username: form.name, email: form.email }].concat(tableData)
    );
    setIsDisplayTable(true);
    setIsDisplayForm(false);
  };

  const [form, setForm] = useState({ name: "", email: "" });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    setUsers(users.slice(1));
    setIsDisplayForm(true);
    setForm({ name: "", email: "" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.form_wrapper}>
        <span className={styles.form_title}>Beta test registration</span>
        <TextContent />
        {isDisplayForm ? (
          <Form onSubmit={onSubmit}>
            <>
              <Input
                value={form.name}
                setValue={handleChange}
                name={"name"}
                placeholder={INPUT_PLACEHOLDER}
              />
              <Input
                value={form.email}
                setValue={handleChange}
                name={"email"}
                placeholder={INPUT_PLACEHOLDER}
              />
            </>
          </Form>
        ) : (
          <UserInfo username={form.name} email={form.email} />
        )}
        <Button
          onClick={onSubmit}
          type="submit"
          label={isDisplayForm ? "Get early access" : "List me to the table"}
          disabled={!isDisplayForm}
        />
      </div>
      {isDisplayTable && (
        <div className={styles.table_wrapper}>
          <h2 className={styles.title}>
            Participation listing (enable only for participants)
          </h2>
          <Table>
            <>
              <thead className={styles.table_header}>
                <TableHeader headers={TABLE_HEADERS} />
              </thead>
              <tbody className={styles.table_content}>
                {users.map((el: any) => (
                  <TableRow
                    data={el}
                    key={nanoid()}
                    handleDelete={handleDelete}
                    onclick={() => {
                      navigate(`/user/${JSON.stringify(el)}`);
                    }}
                  />
                ))}
              </tbody>
            </>
          </Table>
        </div>
      )}
    </section>
  );
};
