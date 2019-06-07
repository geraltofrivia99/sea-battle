import React from 'react';
import { useShallowEqualSelector } from '../../Hooks';
import * as S from './styles';
import { IState } from '../../redux/Field/reducer';

const lines = [33, 66, 99, 132, 165, 198, 231, 264, 297];

const getSquadron = (state: IState) => state.field.squadron;

export const Table = React.memo(() => {
  const squadron = useShallowEqualSelector(getSquadron);
  console.log('sq', squadron);
    return (
       <div style={{ position: 'relative' }}>
          <S.Field id="field_user">
            {lines.map((cur: number) => <S.HorizontalRow top={cur} key={`horizontal-${cur}`}/>)}
            {lines.map((cur: number) => <S.VerticalRow left={cur} key={`vertical-${cur}`}/>)}
          </S.Field>
          {squadron && !!squadron.length && squadron.map((s: any, i: number) => <Ship ship={s} key={s.shipname + i}/>)}
       </div>
    )
});

const Ship = React.memo(({ ship }: any) => (
  <S.Ship left={`${ship.y0 * 33}px`} top={`${ship.x0 * 33}px`} decks={ship.decks} isVertical={!!ship.kx}/>
));
