import React from "react";
import ChatList from "../ChatList";
import Profile from "../Profile";

import { Grid } from './styles';

const Layout: React.FC = () => {
    return(
        <Grid>
            <Profile/>
            <ChatList/>
        </Grid>
    )
}

export default Layout;