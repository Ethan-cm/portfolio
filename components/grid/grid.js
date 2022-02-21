import styled from 'styled-components';
import React from "react" 

const indexgrid = styled.div`
display: grid;
grid-template-columns: 2fr repeat(4, 0.5fr);
grid-template-rows: 0.3fr repeat(4, 0.5fr) 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
text-align: center; 
grid-gap: 0.25rem;
`;



//.parent {
//    display: grid;
//    grid-template-columns: 2fr repeat(4, 0.5fr);
//    grid-template-rows: 0.3fr repeat(4, 0.5fr) 1fr;
//    grid-column-gap: 0px;
//    grid-row-gap: 0px;
//    }
    
//.navigation { grid-area: 1 / 1 / 2 / 6; }
//.gridbutton { grid-area: 2 / 2 / 4 / 4; }
//.gridbutton { grid-area: 2 / 4 / 4 / 6; }
//.gridbutton { grid-area: 4 / 4 / 6 / 6; }
//.gridbutton { grid-area: 4 / 2 / 6 / 4; }
//.maintext   { grid-area: 2 / 1 / 7 / 2; }
//.bottomtext { grid-area: 6 / 2 / 7 / 6; } 
    