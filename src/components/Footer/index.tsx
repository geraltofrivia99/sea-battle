import React, { memo } from 'react';
import * as S from './styles';

interface IFooter {
  text: string;
}

export const Footer = memo(({ text }: IFooter) => (
    <S.Wrapper>
      {text}
    </S.Wrapper>
  )
)