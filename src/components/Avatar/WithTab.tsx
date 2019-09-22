import React from 'react';
import { useStyles, StyledChip } from './styles';
import AvatarUI from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

interface IAvatarWithTab {
    img: string;
    lable: string;
    isUser: boolean;
}

export const AvatarWithTab = React.memo(({img, lable, isUser}: IAvatarWithTab) => {
    const classes = useStyles();
    const onChipClick = () => {
        console.log(lable)
    }
    if (isUser) {
        return (
            <Chip
                avatar={<AvatarUI alt={lable} src={img} />}
                label={lable}
                className={classes.chip}
                variant="outlined"
            />
        );
    }
    return (
        <StyledChip
            avatar={<AvatarUI alt={lable} src={img} />}
            label={lable}
            className={classes.chip}
            variant="outlined"
            onClick={onChipClick}
        />
    )
})