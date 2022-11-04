import React from "react";
import { Container, FirstInfo, Hour, IconMessage, InfoStatus, InfoWrapper, LastMessage, Name, ProfilePic, SecondInfo, Status } from "./styles";

const UserButton: React.FC = () => {

    return(
        <Container>
            <FirstInfo>
                <ProfilePic/>
                <InfoWrapper>
                    <Name>Nome Usuário</Name>
                    <LastMessage><IconMessage/>ultima mensagem enviada</LastMessage>
                </InfoWrapper>
            </FirstInfo>
            <SecondInfo>
                <InfoStatus>
                    <Hour>10:43</Hour>
                    <Status/>
                </InfoStatus>
            </SecondInfo>
        </Container>
    );

}

export default UserButton;