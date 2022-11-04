import React from "react";
import UserButton from "../UserButton";
import { Container, Input, InputIcon, InputWrapper, SearchContainer, SearchIcon, Separator } from "./styles";

const ChatList: React.FC = () => {
    return(
        <Container>
            <InputWrapper>
                <SearchContainer>
                    <SearchIcon/>
                    <Input type="text" placeholder="Pesquisar ou comerçar uma nova conversa"/>
                </SearchContainer>
                <InputIcon/>
            </InputWrapper>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            <Separator/>
            <UserButton/>
            
        </Container>
    );
}

export default ChatList;