import React, { useRef, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import * as S from './styles';
import { randomLocationShip } from '../../redux/Field/actions';
import { IState } from '../../redux/Field/reducer';

// import { Field } from '../../service';

const TableComp = React.memo(({ randomLocationShip, squadron }: any) => {
    const onClick = useCallback(() => { randomLocationShip() }, [])
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
       <div style={{ position: 'relative' }}>
          <S.Table id="user_field" onClick={onClick}>
            <tbody>
                {renderRows()}
            </tbody>
          </S.Table>
          {squadron.length === 10 && squadron.map((s: any, i: number) => <Ship ship={s} key={s.shipname + i}/>)}
       </div>
    )
});

const Cell = React.memo(({ count, id }: { count: number, id: string }) => (
  <S.Cell id={id}></S.Cell>
));

const Row = React.memo(({ id, cell }: { id: string, cell: any }) => (
  <tr id={id}>{cell}</tr>
));

const Ship = React.memo(({ ship }: any) => (
  <S.Ship left={`${ship.y0 * 33}px`} top={`${ship.x0 * 33}px`} decks={ship.decks}>
    
  </S.Ship>
))

const mapStateToProps = (state: IState) => ({
  squadron: state.field.squadron
})

const mapDispatchToProps = {
  randomLocationShip,
}

export const Table = connect(mapStateToProps, mapDispatchToProps)(TableComp);