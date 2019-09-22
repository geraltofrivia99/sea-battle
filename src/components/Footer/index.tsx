import React, { memo } from 'react';
import { useShallowEqualSelector, useActions } from '../../Hooks';
import { oppList } from '../../utils';
import * as S from './styles';
import { IItemMes, IState } from '../../types';

// interface IFooter {
//   itemMessage: IItemMes;
// }

const getFooterText = (state: IState) => ({
  opponent: state.init.opponent,
  footerText: state.init.footerText
});

export const Footer = memo(() => {
  const { footerText: { isUser, messages }, opponent } = useShallowEqualSelector(getFooterText);
  if (messages) {
    return (
      <S.Wrapper>
        <strong>{isUser ? 'You' : oppList[opponent].name}</strong>
        &nbsp;
        <span>{messages}</span> 
      </S.Wrapper>
    )
  }
  return (<S.Wrapper/>)
});