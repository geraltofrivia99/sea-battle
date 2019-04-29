import React, { useRef, useEffect } from 'react';
import * as S from './styles';

import { Field } from '../../service';

export const Table = React.memo(() => {
    
    const renderRows = () => {
      let rows = [];
      for (let i = 0; i < 10; i++) {
        let rowID = `row${i}`
        let cell = []
        for (let idx = 0; idx < 10; idx++) {
          let cellID = `cell${i}-${idx}`
          cell.push(<Cell id={cellID} key={cellID} count={1} />)
        }
        rows.push(<Row id={rowID} key={i} cell={cell}/>)
      }
    return rows;
    }
    return (
        <table id="user_field">
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
});

const Cell = React.memo(({ count, id }: { count: number, id: string }) => (
  <td id={id}>{count}</td>
));

const Row = React.memo(({ id, cell }: { id: string, cell: any }) => (
  <tr id={id}>{cell}</tr>
));