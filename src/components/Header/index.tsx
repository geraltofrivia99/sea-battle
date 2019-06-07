import React from 'react';
import { useActions } from '../../Hooks';
// import { IState } from '../../redux/Field/reducer';
import { randomLocationShip, clearField } from '../../redux/Field/actions';

import { ShipsCollection } from '../ShipsCollections';

import * as S from './styles';

export const Header = React.memo(() => {
  const [onStart, onClear] = useActions([randomLocationShip, clearField], []);
  return (
    <S.Wrapper>
      <S.ButtonsGroup>
        <S.Button onClick={onStart}>
          Start
        </S.Button>
        <S.Button onClick={onClear}>
          Clear
        </S.Button>
      </S.ButtonsGroup>
      <ShipsCollection />
    </S.Wrapper>
  );
});
