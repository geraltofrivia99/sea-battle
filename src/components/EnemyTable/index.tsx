import React, { useCallback } from 'react';
import { useShallowEqualSelector, useActions, useMousePosition } from '../../Hooks';
import {
  shoot, setBlockedCell
} from '../../redux/EnemyField/actions';
import { Ship } from '../Ship';
import { IconElement } from '../IconElement';

import { getCloneCoords, getCoord } from '../../utils';

import * as S from '../Table/styles';
import { IState } from '../../types';

const lines = [0, 33, 66, 99, 132, 165, 198, 231, 264, 297, 330];

const getSquadron = (state: IState) => ({
  squadron: state.enemy.squadron,
  cells: state.enemy.cells
});

export const EnemyTable = React.memo(({ innerRef }: any) => {
  const { squadron, cells } = useShallowEqualSelector(getSquadron);
  const [
    onShoot,
    setShadedCell
  ] = useActions([
    shoot,
    setBlockedCell
  ], []);
  const onClick = (e: React.SyntheticEvent) => {
    e.persist();
    onShoot(e);
  }
  const onRightClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.persist();
    setShadedCell(e);
  }
  const renderIcons = (cells: any) => cells.map((cell: any, index: number) =>
    <IconElement cell={cell} key={`${cell.coords.x}-${cell.coords.y}-${index}`} />)
  return (
    <div style={{ position: 'relative' }} onClick={onClick} onContextMenu={onRightClick}>
      <S.Field id="field_enemy" ref={innerRef}>
        {lines.map((cur: number) => <S.HorizontalRow top={cur} key={`horizontal-${cur}`}/>)}
        {lines.map((cur: number) => <S.VerticalRow left={cur} key={`vertical-${cur}`}/>)}
      </S.Field>
      {squadron && !!squadron.length && squadron.map((s: any, i: number) =>
        <Ship ship={s} key={s.shipname + i} />
      )}
      {renderIcons(cells)}
    </div>
  )
});
