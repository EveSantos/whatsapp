import React from "react";
import ChatInfo from "../ChatInfo";
import ChatList from "../ChatList";
import Profile from "../Profile";

import { Grid } from './styles';

const Layout: React.FC = () => {
    return(
        <Grid>
            <Profile/>
            <ChatList/>
            <ChatInfo/>
        </Grid>
    )
}

export default Layout;