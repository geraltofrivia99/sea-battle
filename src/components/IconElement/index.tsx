import React from 'react';
import { xMark } from '../../images';

import * as S from './styles';

export const IconElement = ({ cell: { icon, coords: { x, y } } }: any) => (
  <S.IconWrapper top={x*33} left={y*33} isShaded={icon === 'shaded'}>
    {Icon(icon)}
  </S.IconWrapper>
);

const Icon = (icon: string) => {
  switch(icon) {
    case 'dot':
      return <S.DotWrapper></S.DotWrapper>
    case 'red-cross':
      return <S.Cross> <S.XMark src={xMark} alt=""/> </S.Cross>
    case 'shaded':
      return <S.Shaded />
    default:
      return;
  }
}