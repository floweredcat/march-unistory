import { nanoid } from "@reduxjs/toolkit";
import classNames from "classnames";
import styles from "./styles.module.css";

type TableRowProps = {
  data: {
    username: string;
    email: string;
    address: string;
    id?: number | string;
  };
  handleDelete: () => void;
  onclick?: () => void;
};

export const TableRow = ({ data, onclick, handleDelete }: TableRowProps) => {
  const { username, email, address, id } = data;
  const dataArr = [username, email, address];
  return (
    <tr className={styles.table_row}>
      {dataArr.map((el, idx) => (
        <td
          key={nanoid()}
          className={classNames(styles.table_cell, {
            [styles.table_cell__newbest]: !data.id,
          })}
        >
          <div onClick={onclick}>{el}</div>
          {idx === dataArr.length - 1 && !id && (
            <button
              className={styles.close}
              type="button"
              onClick={handleDelete}
            />
          )}
        </td>
      ))}
    </tr>
  );
};
