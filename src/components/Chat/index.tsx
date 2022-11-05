import React from "react";

import { Container, FaceGrinBeamIcon, Input, InputWrapper, MicIcon, PaperClipIcon, SearchContainer } from "./styles";

const Chat: React.FC = () => {
    return (
        <Container>
            <InputWrapper>
                <SearchContainer>
                    <FaceGrinBeamIcon />
                    <PaperClipIcon/>
                    <Input type="text" placeholder="Mensagem" />
                    <MicIcon/>
                </SearchContainer>
            </InputWrapper>
        </Container>
    )
}

export default Chat;