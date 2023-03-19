import { Input } from "../../UI/Input/Input"
import { TextContent } from "../../UI/TextContent/TextContent"
import { Form } from "../Form/Form"
import styles from "./styles.module.css"
import {useEffect, useState} from 'react'
import { Button } from "../../UI/Button/Button"
import { useDispatch } from "react-redux"
import { getListIfNotExist } from "../../store/registrationList/thunks/getListIfNotExist"

export const Registration = () => {
  const dispatch = useDispatch()
  const onSubmit = (e: React.FormEvent) => {
    console.log(e)
  }
  useEffect(() => {
    dispatch(getListIfNotExist)
  }, [])
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
          placeholder={
            'We will display your name in participation list '
            }
          />
          <Input 
          value={form.email} 
          setValue={handleChange} 
          name={'email'} 
          placeholder={
            'We will display your name in participation list '
            }
          />
        </>
      </Form>
      <Button onClick={() => {
        console.log(form)
      }}
      label={"Get early access"} />
    </div>
    </section>
  )
}