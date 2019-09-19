import React, { useCallback } from 'react';
import { useActions } from '../../Hooks';
import { startGameWithRandomShips, clearField, randomLocationShip } from '../../redux/Field/actions';
import { enemyShoot, setShootMatrixStart } from '../../redux/EnemyField/actions';

import { ShipsCollection } from '../ShipsCollections';

import * as S from './styles';

export const Header = React.memo(() => {
  const [onStartWithRandomShips, onClear, onRandomLocationShip, onEnemyShoot, onAIMatrixInit] = useActions([
    startGameWithRandomShips, clearField, randomLocationShip, enemyShoot, setShootMatrixStart
  ], []);
  const onR = () => {
    onRandomLocationShip('enemy');
  }
  return (
    <S.Wrapper>
      <S.ButtonsGroup>
        <S.Button onClick={onStartWithRandomShips}>
          Start
        </S.Button>
        <S.Button onClick={onR}>
          Start2
        </S.Button>
        <S.Button onClick={onClear}>
          Clear
        </S.Button>
        <S.Button onClick={onAIMatrixInit}>
          EInit
        </S.Button>
        <S.Button onClick={onEnemyShoot}>
          EShoot
        </S.Button>
      </S.ButtonsGroup>
      <ShipsCollection />
    </S.Wrapper>
  );
});
