import React, { useCallback } from 'react';
import { useShallowEqualSelector, useActions, useMousePosition } from '../../Hooks';
import {
  changeShipDirection,
  setDragging,
  setFakeShip,
  setDraggableShipCollection,
  updateSquadron
} from '../../redux/Field/actions';
import { Ship } from '../Ship';
import { IconElement } from '../IconElement';
import { TableHeader } from '../TableHeader';

import { getCloneCoords, getCoord, oppList } from '../../utils';

import * as S from './styles';
import { IState, IdraggbleShip, IDragableCollections } from '../../types';

const lines = [0, 33, 66, 99, 132, 165, 198, 231, 264, 297, 330];


const getSquadron = (state: IState) => ({
  squadron: state.field.squadron,
  cells: state.field.cells,
  opponent: state.init.opponent
});

export const Table = React.memo(({ innerRef }: any) => {
  const { squadron, cells, opponent } = useShallowEqualSelector(getSquadron);
  const [
    onChangeDirection,
    setDraggingAction,
    setFakeShipAction,
    setDraggableShipCollectionAction,
    updateSquadronAction
  ] = useActions([
    changeShipDirection,
    setDragging,
    setFakeShip,
    setDraggableShipCollection,
    updateSquadron
  ], []);
  const onShipDown = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.button !== 0) return;
    setDragging(true);
    const { target: el } = e;
    const { left, top } = getCoord(el);
    const shiftX = e.pageX - left;
    const shiftY = e.pageY - top;
    const { dataset: { decks, shipname } } = el;
    const defaultShip = {
      isVisible: false,
      shipname,
      decks,
      isDragging: true
    }
    const fake = {
      left: e.pageX - shiftX,
      top: e.pageY - shiftY,
      decks,
      shiftX: shiftX,
      shiftY: shiftY,
      isSuccess: false,
      kx: 0,
      ky: 1,
      defaultElement: {
        downX: e.pageX,
        downY: e.pageY,
        ...defaultShip
      },
    }
    const newSquadron = squadron.map((cur: any) => {
      if (cur.shipname === shipname) {
        return {
          ...cur,
          isVisible: false
        }
      }
    })
    updateSquadronAction(newSquadron);
    setFakeShip(fake);
  }
  const renderIcons = (cells: any) => cells.map((cell: any, index: number) =>
    <IconElement cell={cell} key={`${cell.coords.x}-${cell.coords.y}-${index}`} />)
  // const {x, y} = useMousePosition();
  return (
    <S.Container isVisible={true}>
    <TableHeader name={'You'} isUser={true} img={oppList[opponent].img} />
    <S.Wrapper>
      <S.Field id="field_user" ref={innerRef}>
        {lines.map((cur: number) => <S.HorizontalRow top={cur} key={`horizontal-${cur}`}/>)}
        {lines.map((cur: number) => <S.VerticalRow left={cur} key={`vertical-${cur}`}/>)}
      </S.Field>
      {squadron && !!squadron.length && squadron.map((s: any, i: number) =>
        <Ship ship={s} key={s.shipname + i} onContextMenu={onChangeDirection} onShipDown={onShipDown}/>
      )}
      {renderIcons(cells)}
    </S.Wrapper>
    </S.Container>
  )
});
