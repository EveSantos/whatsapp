import styled from 'styled-components';

// PO PROFLE OPTIONS
// PC PROFILE CHAT
// SB SEARCH BAR
// CH CHAT HISTORY
// FL LIST FRIENDS 
// INPUT CHAT
// @styled-icons/material-rounded/DataSaverOn
export const Grid = styled.div`
    display: grid;

    grid-template-columns: 450px auto;
    grid-template-rows: 60px auto;

    grid-template-areas: 
    'PO PC'
    'SB CH'
    'FL CH';

    height: 100vh;
`
