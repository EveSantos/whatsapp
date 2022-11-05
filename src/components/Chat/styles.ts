import styled from "styled-components";
import { Mic } from '@styled-icons/fluentui-system-filled/Mic';
import { PaperClip } from '@styled-icons/heroicons-outline/PaperClip';
import { FaceGrinBeam } from '@styled-icons/fa-regular/FaceGrinBeam';

export const Container = styled.div`    
    grid-area: CH;

    display: flex;
    align-items: center;
    justify-content: space-between;
  
    background-color: var(--chat);
  
    max-height: 100vh;
    align-items: end;

`;

export const InputWrapper = styled.div`

    width: 100%;

`

export const  SearchContainer = styled.div` 

display: flex;
flex-direction: row;
align-items: center;
padding: 15px;


width: 100%;
height: 35px;
background-color: var(--primary);

`

export const Input = styled.input`  

  height: 100%;
  width: 90%;
  border-radius: 8px;
  background-color: var(--chat-message);

  color: var(--quaternary);

  ::placeholder { 
    color: var(--tertiary);
    font-weight: 300;
  }

  &:focus{
    ::placeholder{
      visibility: hidden;
    }
  }

  font-size: 14px;
  padding: 5px 0 5px 15px;

`
export const FaceGrinBeamIcon = styled(FaceGrinBeam)`
  width: 24px;
  height: 24px;
  margin: 8px;
  color: var(--tertiary);
`

export const PaperClipIcon = styled(PaperClip)`
  width: 24px;
  height: 24px;
  margin: 0 20px 0 8px;
  color: var(--tertiary);
`


export const MicIcon = styled(Mic)`

  width: 24px;
  height: 24px;
  margin: 15px;
  padding: 0 25px 0 5px;
  color: var(--tertiary);

`