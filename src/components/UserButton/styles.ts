import styled from 'styled-components';
import {Check} from '@styled-icons/boxicons-regular/Check';
import {VolumeMute} from '@styled-icons/boxicons-solid/VolumeMute';


export const Container = styled.div`   

    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    margin-top: 8px;

    max-height: 100vh;
    &:hover{
      background-color: var(--hover-chat);
    }

    &:focus{
      background-color: var(--notification);
    }

`
export const FirstInfo = styled.div` 
    display: flex;
    align-items: center;

`
export const SecondInfo = styled.div` 
    display: flex;

`

export const ProfilePic = styled.button`    
    width: 45px;
    height: 45px;
    margin: 0 20px;
    border-radius: 50%;

    background-color: var(--gray);

    cursor: pointer;
`
export const InfoWrapper = styled.div`  

    display: flex;
    flex-direction: column;
    align-items: start;

`
export const Name = styled.h2` 

    color: var(--quinary);
    font-size: 16px;
    font-weight: normal;
`
export const LastMessage = styled.p`  

    color: var(--gray);  
    font-size: 14px;
    font-weight: normal;

`

export const IconMessage = styled(Check)` 

    width: 18px;
    heigth: 18px;
    color: var(--gray);  

`
export const InfoStatus = styled.div` 

    display: flex;
    flex-direction: column;
    align-items: end;
    margin: 0 20px;

`
export const Hour = styled.p`  

    font-size: 12px;
    color: var(--gray);  

`
export const Status = styled(VolumeMute)`  
    width: 14px;
    heigth: 14px;
    color: var(--gray);  

`

