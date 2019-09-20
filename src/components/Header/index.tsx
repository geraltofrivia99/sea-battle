import React, { useCallback } from 'react';
import { useActions, useShallowEqualSelector } from '../../Hooks';
import { startGameWithRandomShips, clearField, randomLocationShip } from '../../redux/Field/actions';
import { enemyShoot, setShootMatrixStart } from '../../redux/EnemyField/actions';
import { startGame } from '../../redux/Initial/actions';
import { IState } from '../../types';

import { OpponentMenu } from '../Opponents';

import { ShipsCollection } from '../ShipsCollections';

import * as S from './styles';

const getDeps = (state: IState) => ({
  isShipsOnBoard: state.init.isShipsOnBoard,
})

export const Header = React.memo(() => {
  const { isShipsOnBoard } = useShallowEqualSelector(getDeps);
  const [onStartWithRandomShips, onClear, onRandomLocationShip, onEnemyShoot, onStart] = useActions([
    startGameWithRandomShips, clearField, randomLocationShip, enemyShoot, startGame
  ], []);
  // const onR = () => {
  //   onRandomLocationShip('enemy');
  // }
  return (
    <S.Wrapper>
      <S.ButtonsGroup>
        {!isShipsOnBoard && <S.Button onClick={onStartWithRandomShips}>
          Arrange ships
        </S.Button>}
        {isShipsOnBoard && <S.Button onClick={onStart}>
          Start
        </S.Button>}
        {/* <S.Button onClick={onR}>
          Start2
        </S.Button> */}
        {/* <S.Button onClick={onClear}>
          Clear
        </S.Button> */}
      </S.ButtonsGroup>
      <OpponentMenu />
      {/* <ShipsCollection /> */}
    </S.Wrapper>
  );
});
