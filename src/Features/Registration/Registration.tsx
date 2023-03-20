import { Input } from "../../UI/Input/Input"
import { TextContent } from "../../UI/TextContent/TextContent"
import { Form } from "../Form/Form"
import styles from "./styles.module.css"
import {useEffect, useState} from 'react'
import { Button } from "../../UI/Button/Button"
import { getListIfNotExist } from "../../Store/registrationList/thunks/getListIfNotExist"
import { Table } from "../../Components/Table/Table"
import { useDispatch, useSelector } from "react-redux"
import { selectRegistrationList } from "../../Store/registrationList/selectors"
import { TableRow } from "../../UI/TableRow/TableRow"
import { nanoid } from "@reduxjs/toolkit"
import { TableHeader } from "../../UI/TableHeader/TableHeader"
const TABLE_HEADERS = ['NAME', 'EMAIL', 'ADDRESS'];
const INPUT_PLACEHOLDER = 'We will display your name in participation list '

export const Registration = () => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getListIfNotExist())
  }, [dispatch])  
  const tableData = Object.values(useSelector(state => selectRegistrationList(state)))
  const onSubmit = (e: React.FormEvent) => {
    console.log(e)
  }
  const [form, setForm] = useState({name: '', email: ''})
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <section className={styles.section}>

    <div className={styles.form_wrapper}>
      <h3 className={styles.title}>
      Beta test registration
      </h3>
      <TextContent />
      <Form onSubmit={onSubmit}>
        <>
          <Input 
          value={form.name} 
          setValue={handleChange} 
          name={'name'} 
          placeholder={INPUT_PLACEHOLDER}
          />
          <Input 
          value={form.email} 
          setValue={handleChange} 
          name={'email'} 
          placeholder={INPUT_PLACEHOLDER}
          />
        </>
      </Form>
      <Button onClick={() => {
        console.log(form)
      }}
      label={"Get early access"} />
    </div>
    {tableData && 
    <div className={styles.table_wrapper}>
    <h2 className={styles.title}>Participation listing (enable only for participants)</h2>
    <Table>
          <>
            <thead className={styles.table_header}>
                <TableHeader headers={TABLE_HEADERS}/>
            </thead>
            <tbody className={styles.table_content}>
              {tableData.map((el: any) => <TableRow data={el} key={nanoid()}/>)}
            </tbody>
          </>
        </Table>
        </div>}
    </section>
  )
}