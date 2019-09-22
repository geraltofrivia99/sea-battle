import React, { memo } from 'react';
import { AvatarWithTab } from '../Avatar/WithTab';
import * as S from './styles';

interface ITName {
    name: string;
    isUser: boolean;
    img: string;
}

export const TableHeader = memo(({ name, isUser, img }: ITName) => (
    <S.Wrapper isUser={isUser}>
        <AvatarWithTab img={img} lable={name} isUser={isUser}/>
    </S.Wrapper>
))