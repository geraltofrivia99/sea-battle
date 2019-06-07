import React from 'react';
import * as S from './styles';

export const FakeShip = ({ decks, top, left, innerRef, isSuccess }: any) => {
  return (
    <S.FakeShip
      top={top}
      left={left}
      decks={decks}
      ref={innerRef}
      id="fake_ship"
      isSuccess={isSuccess}
    />
  )
}