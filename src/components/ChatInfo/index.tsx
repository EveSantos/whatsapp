import React from "react";

import { Container, Button, SearchIcon, Config, SecondContainer, Name, ContainerChat, Viz, InfoChat } from "./styles";

const ChatInfo: React.FC = () => {
    return (
        <Container>
            <ContainerChat>
                <Button/>
                <InfoChat>
                    <Name>Nome chat</Name>  
                    <Viz>visto por último às 18:32</Viz>
                </InfoChat>
            </ContainerChat>
            <SecondContainer>
                <SearchIcon/>
                <Config />
            </SecondContainer>
        </Container>
    )
}

export default ChatInfo;