import { nanoid } from '@reduxjs/toolkit';
import styles from "./styles.module.css"

type TableHeaderProps = {
  headers: string[]
}

export const TableHeader = ({headers}: TableHeaderProps) => (
  <tr className={styles.table_row}>
    {headers.map(el => <th
                        key={nanoid()}
                      className={styles.table_cell}
                    >
                      {el}
                    </th>)}
                  </tr>
)