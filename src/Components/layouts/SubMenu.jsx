import React, { useState } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (<>
        <ListItem onClick={item.items && showSubnav} disablePadding>
            <ListItemButton>
                <ListItemIcon >
                    {item.icon}
                </ListItemIcon>
                <ListItemText>
                    <Link to={item.to} style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography color="white" variant="subtitle1">
                            {item.title}
                        </Typography>
                    </Link>
                </ListItemText>
                {item.items && subnav
                    ? item.open
                    : item.items
                        ? item.close
                        : null}
            </ListItemButton>
        </ListItem>
        {subnav &&
            item.items.map((item, index) => {
                return (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <Link to={item.to} style={{ textDecoration: 'none', color: 'white' }}>
                                    <Typography sx={{ ml: 6.90 }} color="white" variant="subtitle1">
                                        {item.title}
                                    </Typography>
                                </Link>
                            </ListItemText>

                        </ListItemButton>
                    </ListItem>
                );
            })}
    </>);
}

export default SubMenu;