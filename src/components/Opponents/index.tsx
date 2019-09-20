import React, { memo } from 'react';
import { useShallowEqualSelector, useActions } from '../../Hooks';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { setOpponent } from '../../redux/Initial/actions';
import { oppList } from '../../utils';
import { IState } from '../../types';
import * as S from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      minWidth: 300,
    },
    input: {
      // color: 'red',
    },
    select: {
      color: 'red'
    },
  }),
);

const getOpponents = (state: IState) => state.init.opponent;

export const OpponentMenu = memo(() => {
  const classes = useStyles();
  const opponent: number = useShallowEqualSelector(getOpponents);
  const [onSetOpponent] = useActions([setOpponent], []);
  const handleOpponent = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    // onSetOpponent(event.value);
    console.log(event.target.value);
  }
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });


  function handleChange(event: React.ChangeEvent<{ name?: string; value: unknown }>) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value,
    }));
  }
  return (
    <S.Wrapper>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-simple" className={classes.input}>Opponent</InputLabel>
        <Select
          className={classes.select}
          value={values.age}
          onChange={handleChange}
        >
          {oppList.map((cur, i) => <MenuItem value={i} key={cur + i}>{cur}</MenuItem>)}
        </Select>
      </FormControl>
    </S.Wrapper>
  )
})