import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const useStyles = makeStyles((theme: Theme) =>
createStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export const Container = styled('div')<{isUser: boolean}>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ isUser }) => isUser ? 'row' : 'row-reverse'};
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  float: left;
  border-radius: inherit;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  border-radius: 100%;
  border: solid black;
  border-width: 1px;
  width: 3.5rem;
  height: 3.5rem;
  z-index: 2;
  box-shadow: inset 0 0 14px;
  cursor: pointer;
  &::before {
    content: "";
    border-radius: inherit;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		box-shadow: inset 0 0 8px rgba(0,0,0,.6);
		-moz-box-shadow: inset 0 0 8px rgba(0,0,0,.6);
		-webkit-box-shadow: inset 0 0 8px rgba(0,0,0,.6);
  }
`;

export const Wrapper = styled('div')<{width: number, isUser: boolean}>`
  /* padding: 10px 25px; */
  padding-left: 35px;
  height: 3rem;
  min-width: 5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  transform: ${({ width, isUser }) => `translateX(${isUser ? -width : width}px)`};
  opacity: 0;
  z-index: 1;
  transition: transform .3s, opacity .2s;
  ${Container}:hover & {
    transform: translateX(-25px);
    opacity: 1;
  }
`;

