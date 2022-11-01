import styled from "styled-components";
import {  BlurCircular } from '@styled-icons/material/BlurCircular';
import { Message } from '@styled-icons/material-rounded/Message';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded'

export const Container = styled.div`    
    grid-area: PO;

    display: flex;
    align-items: center;
    justify-content: space-between;
  
    background-color: var(--primary);
    padding: 11px 16px;
  
    max-height: 100vh;

`;

export const SecondContainer = styled.div`    
`;

export const Button = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;

    background-color: var(--blue);

    cursor: pointer;

`;

export const Status = styled(BlurCircular)`

    width: 24px;
    height: 24px;
    padding: 0 12px;
    color: var(--tertiary);

    cursor: pointer;

`;

export const NewChat = styled(Message)`

    width: 24px;
    height: 24px;
    padding: 0 0 0 10px;


    color: var(--tertiary);

    cursor: pointer;

`;

export const Config = styled(DotsVerticalRounded)`

    width: 24px;
    height: 24px;

    padding: 0 0 0 12px;

    color: var(--tertiary);

    cursor: pointer;

`;