import { nanoid } from "@reduxjs/toolkit";
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
    <tr className={styles.table_row} onClick={onclick}>
      {dataArr.map((el, idx) => (
        <td key={nanoid()} className={styles.table_cell}>
          <div>
            {el}
            {idx === dataArr.length - 1 && !id && (
              <button
                className={styles.close}
                type="button"
                onClick={handleDelete}
              />
            )}
          </div>
        </td>
      ))}
    </tr>
  );
};
