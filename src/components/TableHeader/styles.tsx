import styled from 'styled-components';

export const Wrapper = styled('div')<{ isUser: boolean }>`
    display: flex;
    flex-direction: ${({ isUser }) => isUser ? 'row' : 'row-reverse'};
    padding: 0.5rem 1rem;
`;

export const Name = styled.div`

`;