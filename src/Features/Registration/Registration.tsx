import { Input } from "../../UI/Input/Input";
import { TextContent } from "../../UI/TextContent/TextContent";
import { Form } from "../Form/Form";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { getListIfNotExist } from "../../Store/registrationList/thunks/getListIfNotExist";
import { Table } from "../../Components/Table/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsRegistrationListEdited,
  selectRegistrationList,
} from "../../Store/registrationList/selectors";
import { TableRow } from "../../UI/TableRow/TableRow";
import { nanoid } from "@reduxjs/toolkit";
import { TableHeader } from "../../UI/TableHeader/TableHeader";
import { UserInfo } from "../../Components/UserInfo/UserInfo";
import { useNavigate } from "react-router-dom";
import { registrationListSliceActions } from "../../Store/registrationList/registrationList";
import {
  INPUT_PLACEHOLDER,
  TABLE_HEADERS,
} from "../../Assets/Constants/constants";
import validator from "validator";

export const Registration = () => {
  const navigate = useNavigate();
  const { address } = localStorage;
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getListIfNotExist());
  }, [dispatch]);
  const tableData = useSelector((state) => selectRegistrationList(state));
  const isTableDisplay = useSelector((state) =>
    selectIsRegistrationListEdited(state)
  );
  const [isDisabled, setIsdisabled] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      registrationListSliceActions.addUser([
        {
          address,
          username: form.username,
          email: form.email,
        },
      ])
    );
    setIsdisabled(true);
  };

  const [form, setForm] = useState({ username: "", email: "" });
  useEffect(() => {
    if (
      !validator.isEmail(form.email) ||
      validator.isEmpty(form.email) ||
      validator.isEmpty(form.username) ||
      !localStorage.address
    ) {
      setIsdisabled(true);
    } else setIsdisabled(false);
  }, [form.username, form.email]);
  const { username, email } = form;
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDelete = () => {
    dispatch(registrationListSliceActions.deleteUser());
    setForm({ username: "", email: "" });
  };

  return (
    <section className={styles.section}>
      <div className={styles.form_wrapper}>
        <span className={styles.form_title}>Beta test registration</span>
        <TextContent />
        {tableData[0]?.id ? (
          <Form onSubmit={onSubmit}>
            <>
              <Input
                value={username}
                setValue={handleChange}
                name={"username"}
                placeholder={INPUT_PLACEHOLDER}
              />
              <Input
                value={email}
                setValue={handleChange}
                name={"email"}
                placeholder={INPUT_PLACEHOLDER}
              />
            </>
          </Form>
        ) : (
          <UserInfo
            username={tableData[0]?.username}
            email={tableData[0]?.email}
          />
        )}
        <Button
          onClick={onSubmit}
          type="submit"
          label={tableData[0]?.id ? "Get early access" : "List me to the table"}
          disabled={isDisabled}
        />
      </div>
      {isTableDisplay && (
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
                {tableData?.map((el: any) => (
                  <TableRow
                    data={el}
                    key={nanoid()}
                    handleDelete={handleDelete}
                    onclick={() => {
                      navigate(`user/${JSON.stringify(el)}`);
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
