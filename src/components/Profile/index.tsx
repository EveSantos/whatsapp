import React from "react";

// import Default from "src/components/Profile/foto.jpg";


import { Status, Container, Button, NewChat, Config, SecondContainer } from "./styles";

const Profile: React.FC = () => {
    return (
        <Container>
            <Button/>
            <SecondContainer>
                <Status />
                <NewChat />
                <Config />
            </SecondContainer>
        </Container>
    )
}

export default Profile;