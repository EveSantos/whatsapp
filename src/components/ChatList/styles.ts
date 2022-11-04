import styled from "styled-components";

import { AlignHorizontalRight } from '@styled-icons/material-outlined/AlignHorizontalRight'
import { Search } from '@styled-icons/evil/Search'

export const Container = styled.div`    

    grid-area: FL;

    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    background-color: var(--secondary); 
  
    max-height: 100vh;  
    overflow-y: scroll;
    overflow-x: hidden; 

    ::-webkit-scrollbar {  
      width: 6px!important;
      height: 6px!important;
    }

    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar); 
    }

`

export const  SearchContainer = styled.div` 

  display: flex;
  flex-direction: row;
  margin: 8px 8px 8px 0;
  align-items: center;
  border-radius: 8px;

  width: 100%;
  height: 35px;
  background-color: var(--primary);

`

export const InputWrapper = styled.div`  

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;

`

export const Input = styled.input`  

  height: 100%;
  width: 90%;
  border-radius: 8px;
  background-color: var(--primary);

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

`

export const SearchIcon = styled(Search)`

  width: 24px;
  height: 24px;
  margin: 0 15px;
  color: var(--tertiary);

`

export const InputIcon = styled(AlignHorizontalRight)`

  width: 18px;
  height: 18px;
  padding-right: 5px;

  color: var(--tertiary);

`

export const Separator = styled.div`
  
  width: 350px;
  border-bottom: 0.5px solid var(--tertiary);
  opacity : 0.3;

`;