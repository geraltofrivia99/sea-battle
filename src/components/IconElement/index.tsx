import React from 'react';
import * as S from './styles';

export const IconElement = ({ cell: { icon, coords: { x, y } } }: any) => (
  <S.IconWrapper top={x*33} left={y*33}>
    {Icon(icon)}
  </S.IconWrapper>
);

const Icon = (icon: string) => {
  switch(icon) {
    case 'dot':
      return <S.Dot />
    case 'red-cross':
      return <S.Cross />
    case 'shaded':
      return <S.Shaded />
    default:
      return;
  }
}