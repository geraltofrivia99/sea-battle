import React from 'react';
import * as S from './styles';

export default React.memo(() => (
  <S.Wrapper>
    <S.Main>
      <S.Circle type='h' />
      <S.Circle type='v' />
      <S.Center>
        <S.Orbit />
        <S.Orbit2 />
        <S.Orbit3 />
      </S.Center>
    </S.Main>
  </S.Wrapper>
))