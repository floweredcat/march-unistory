import { nanoid } from '@reduxjs/toolkit';
import styles from "./styles.module.css"

type TableRowProps = {
  data: {
    username: string;
    email: string;
    address: string;
  }
  onclick?: () => void;
}

export const TableRow = ({data, onclick}: TableRowProps) => {
  const {username, email, address} = data;
  const dataArr = [username, email, address] 
  return (
  <tr className={styles.table_row} onClick={onclick}>
    {dataArr.map((el, idx) => <td
                        key={nanoid()}
                      className={styles.table_cell}
                    >
                      <div>
                    {el}
                    {idx === dataArr.length -1 && <button className={styles.close} type='button' onClick={() => {}} />}
                    </div>
                    </td>)}
                  </tr>
)}