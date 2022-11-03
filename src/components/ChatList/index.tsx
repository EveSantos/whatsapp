import React from "react";
import { Container, Input, InputIcon, InputWrapper, SearchIcon, Separator } from "./styles";

const ChatList: React.FC = () => {
    return(
        <Container>
            <InputWrapper>
                <Input type="text" placeholder="Pesquisar ou comerçar uma nova conversa">
                    {/* <SearchIcon/> */}
                </Input>
                <InputIcon/>
            </InputWrapper>
            <Separator/>
            <Separator/>
            <Separator/>
        </Container>
    );
}

export default ChatList;