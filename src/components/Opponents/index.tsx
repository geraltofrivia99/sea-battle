import React, { memo } from 'react';
import { useShallowEqualSelector, useActions } from '../../Hooks';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Avatar } from '../Avatar';
import { Fade } from '../Animations/Fade';

import { setOpponent } from '../../redux/Initial/actions';
import { oppList } from '../../utils';
import { IState } from '../../types';
import * as S from './styles';

const getOpponents = (state: IState) => ({
  opponent: state.init.opponent,
  isGameStarted: state.init.isGameStarted
});

export const OpponentMenu = memo(() => {
  const { opponent, isGameStarted } = useShallowEqualSelector(getOpponents);
  const [onSetOpponent] = useActions([setOpponent], []);
  const handleOpponent = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    onSetOpponent(event.target.value);
  }
  return (
    <S.Wrapper>
      <Fade show={!isGameStarted}>
        <FormControl>
          <InputLabel htmlFor="age-simple">{oppList[opponent].name}</InputLabel>
          <S.StyledSelect
            value={opponent}
            onChange={handleOpponent}
            disabled={isGameStarted}
            renderValue={value => <Avatar img={oppList[value as number].img} />}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
          >
            {oppList.map(({ img, name }, i) => <MenuItem value={i} key={name + i}><Avatar img={img} />{name}</MenuItem>)}
          </S.StyledSelect>
        </FormControl>
      </Fade>
    </S.Wrapper>
  )
})