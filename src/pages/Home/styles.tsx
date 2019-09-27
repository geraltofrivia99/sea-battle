import styled, { createGlobalStyle } from 'styled-components';
import { newspapper } from '../../images';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    /* background-image: url(${newspapper});
    background-size: cover;
    background-repeat: no-repeat; */
    /* height: 100vh; */
`;

export const FieldWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-evenly;
`;

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Mansalva&display=swap');
    * {
        font-family: Mansalva, cursive   
    }
`;