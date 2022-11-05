import React from "react";
import Chat from "../Chat";
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
            <Chat/>
        </Grid>
    )
}

export default Layout;