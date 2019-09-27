import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, Container, Avatar, AvatarWrapper } from './styles';

interface IAvatarWithTab {
    img: string;
    lable: string;
    isUser: boolean;
}

export const AvatarWithTab = React.memo(({ img, lable, isUser }: IAvatarWithTab) => {
    const wrapper = useRef<HTMLDivElement>(null);
    const [wrapperWidth, setWidth] = useState<number>(0);
    useEffect(() => {
        if (wrapper.current) {
            setWidth(wrapper.current.getBoundingClientRect().width);
        }
    }, [wrapper.current])
    return (
        <Container isUser={isUser}>
            <AvatarWrapper>
                <Avatar src={img} alt={lable} />
            </AvatarWrapper>
            <Wrapper ref={wrapper} width={wrapperWidth} isUser={isUser}>
                {lable}
            </Wrapper>
        </Container>
    )
})