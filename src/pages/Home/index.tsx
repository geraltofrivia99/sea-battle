import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useShallowEqualSelector, useActions } from '../../Hooks';
import { initialFieldStart, setFakeShip } from '../../redux/Field/actions';
import { getElement } from '../../utils';
import { IState } from '../../redux/Field/reducer';

import * as S from './styles';

import { Table } from '../../components/Table';
import { Header } from '../../components/Header';
import { FakeShip } from '../../components/FakeShip';


const getDeps = (state: IState) => ({
    fakeShip: state.field.fakeShip,
    isDragging: state.field.isDragging
})

export default () => {
    const [initialFieldAction, setRefForCloneShip] = useActions([initialFieldStart, setFakeShip], []);
    const { fakeShip, isDragging } = useShallowEqualSelector(getDeps);
    let fakeEl = useRef(null);
    useLayoutEffect(() => {
        initialFieldAction(getElement('field_user'));
    }, []);
    useEffect(() => {
        setRefForCloneShip({ ...fakeShip, ref: fakeEl.current });
      }, [fakeEl.current]);
    return (
        <S.Wrapper>
            <Header />
            <Table />
            {isDragging && fakeShip &&
                <FakeShip
                    top={fakeShip.top}
                    left={fakeShip.left}
                    decks={fakeShip.decks}
                    innerRef={fakeEl}
                    isSuccess={fakeShip.isSuccess}
                />
            }
        </S.Wrapper>
    )
};