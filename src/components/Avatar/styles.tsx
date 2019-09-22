import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

export const StyledChip = withStyles({
  root: {
    flexDirection: 'row-reverse',
    // cursor: 'pointer',
    // '&:hover': {
    //   backgroundColor: 'rgba(0, 0, 0, 0.23)',
    // }
  }
})(Chip);

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