import React from 'react';
import { useStyles } from './styles';
import AvatarUI from '@material-ui/core/Avatar';

interface IAvatar {
    img: string
}

export const Avatar = React.memo(({img}: IAvatar) => {
    const classes = useStyles();
    return (
        <AvatarUI alt="Remy Sharp" src={img} className={classes.avatar} />
    );
})