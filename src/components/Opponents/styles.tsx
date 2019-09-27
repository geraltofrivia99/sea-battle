import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

export const Wrapper = styled.div`
  position: absolute;
  right: 2rem;
  bottom: 2rem;
`;

export const StyledSelect = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // borderRadius: 3,
    minWidth: 100,
    border: 0,
    
    color: 'white',
    padding: '3px 26px 3px 6px',
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    '&:focus': {
      backgroundColor: 'transparent',
      borderRadius: '3px'
    }
  },
})(Select);

