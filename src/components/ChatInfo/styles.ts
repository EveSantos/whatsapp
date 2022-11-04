import styled from "styled-components";
import {  BlurCircular } from '@styled-icons/material/BlurCircular';
import { Message } from '@styled-icons/material-rounded/Message';
import { DotsVerticalRounded } from '@styled-icons/boxicons-regular/DotsVerticalRounded';
import { Search } from '@styled-icons/evil/Search';

export const Container = styled.div`    
    grid-area: PC;

    display: flex;
    align-items: center;
    justify-content: space-between;
  
    background-color: var(--primary);
    padding: 11px 16px;
  
    max-height: 100vh;

`;

export const ContainerChat = styled.div`    

    display: flex;
    align-items: center;

`;



export const SecondContainer = styled.div`    
`;

export const Button = styled.div`

    width: 40px;
    height: 40px;
    border-radius: 50%;

    background-color: var(--mention-detail);

    cursor: pointer;

`;

export const Status = styled(BlurCircular)`

    width: 24px;
    height: 24px;
    padding: 0 12px;
    color: var(--tertiary);

    cursor: pointer;

`;

export const InfoChat = styled.div`    

    display: flex;
    flex-direction: column;
    align-items: initial;
    margin-left: 15px;

`;


export const Viz = styled.h4` 

    color: var(--tertiary);
    font-size: 12px;
    font-weight: normal;
`

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

    color: var(--tertiary);

    cursor: pointer;

`;

export const SearchIcon = styled(Search)`

  width: 24px;
  height: 24px;
  margin: 0 15px;
  color: var(--tertiary);

`

export const Name = styled.h2` 

    color: var(--quinary);
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 2px;
`