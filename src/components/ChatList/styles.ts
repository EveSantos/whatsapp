import styled from "styled-components";

import { AlignHorizontalRight } from '@styled-icons/material-outlined/AlignHorizontalRight'
import { Search } from  '@styled-icons/evil/Search'

export const Container = styled.div`    

    grid-area: FL;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    background-color: var(--secondary);
    padding: 11px 16px;
  
    max-height: 100vh;

`

export const InputWrapper = styled.div`  

  width: 100%;
  padding: 0 16px;

`

export const Input = styled.input`  

width: 75%;
height: 35px;
margin: 0 15px 0 0;

padding: 0 10px 0 57px;
border-radius: 8px;

position: relative;

background-color: var(--primary);
color: var(--quaternary);

::placeholder { 
  color: var(--quaternary);
}

˜svg{
  position: relative;
  top: -50%;
  left: 14px;
  transition: 180ms ease-in-out;
}

`

export const SearchIcon = styled(Search)`

width: 24px;
height: 24px;

color: var(--tertiary);

`

export const InputIcon = styled(AlignHorizontalRight)`

  width: 18px;
  height: 18px;

  color: var(--tertiary);

`

export const Separator = styled.div`
  
  width: 350px;
  border-bottom: 0.5px solid var(--tertiary);
  opacity : 0.3;

  margin-bottom: 8px;
`;