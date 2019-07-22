import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { useShallowEqualSelector, useActions } from '../../Hooks';
import { initialFieldStart, setFakeShip } from '../../redux/Field/actions';
import { initialEnemyFieldStart } from '../../redux/EnemyField/actions';
import { IState } from '../../types';

import * as S from './styles';

import { Table } from '../../components/Table';
import { EnemyTable } from '../../components/EnemyTable';
import { Header } from '../../components/Header';
import { FakeShip } from '../../components/FakeShip';
import { Footer } from '../../components/Footer';

const getDeps = (state: IState) => ({
    fakeShip: state.field.fakeShip,
    isDragging: state.field.isDragging,
    footerText: state.init.text
})


export default () => {
    const [
        initialFieldAction,
        setRefForCloneShip,
        initialEnemyFieldAction
    ] = useActions([
            initialFieldStart, setFakeShip, initialEnemyFieldStart
        ], []);
    const { fakeShip, isDragging, footerText } = useShallowEqualSelector(getDeps);
    let fakeEl = useRef(null);
    let userField = useRef(null);
    let enemyField = useRef(null);
    useLayoutEffect(() => {
        initialFieldAction(userField.current);
        initialEnemyFieldAction(enemyField.current);
    }, []);
    useEffect(() => {
        setRefForCloneShip({ ...fakeShip, ref: fakeEl.current });
      }, [fakeEl.current]);
    return (
        <S.Wrapper>
            <Header />
            <S.FieldWrapper>
                <Table innerRef={userField}/>
                <EnemyTable innerRef={enemyField}/>
            </S.FieldWrapper>
            <Footer text={footerText} />
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