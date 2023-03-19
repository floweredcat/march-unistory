import { nanoid } from "@reduxjs/toolkit";
import styles from "./styles.module.css";

type InputProps = {
  placeholder: string;
  value: string;
  setValue: (e: React.FormEvent) => void;
  name: string;
};

export const Input = (props: InputProps) => {
  const {placeholder, value, setValue, name} = props
  const ID = name.concat(nanoid())
  return (<div className={styles.container}>
  <input
    name={name}
    autoComplete="new-password"
    id={ID}
    type="text"
    className={styles.input}
    placeholder={placeholder}
    value={value}
    onChange={setValue}
  />
  <label htmlFor={ID} className={styles.label}>
    {name.toUpperCase()}
  </label>
</div>)
}