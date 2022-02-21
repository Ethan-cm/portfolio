import styled from 'styled-components';
import React from "react" 

export const Indexgrid = styled.div`
display: grid;
height:100vh;
grid-template-columns: 2fr repeat(4, 0.5fr);
grid-template-rows: 0.3fr repeat(4, 0.5fr) 1fr;

grid-template-areas: "nav nav nav nav nav"
                     "main gridA gridA gridB gridB"
                     "main gridA gridA gridB gridB"
                     "main gridC gridC gridD gridD"
                     "main gridC gridC gridD gridD"
                     "main bottom bottom bottom bottom";

grid-column-gap: 0px;
grid-row-gap: 0px;
text-align: center; 
grid-gap: 0.25rem;
`;

export const Nav = styled.nav`
grid-area: nav;
background: Aqua;`;

export const GridA = styled.div`
grid-area: gridA;
background: Burlywood;`;

export const GridB = styled.div`
grid-area: gridB;
background: Cornsilk;`;

export const GridC = styled.div`
grid-area: gridC;
background: Chocolate;
`;
export const GridD = styled.div`
grid-area: gridD;
background: GreenYellow;
`;
export const Bottom = styled.div`
grid-area: bottom;
background: Gold;
`;
export const Main = styled.div`
grid-area: bottom;
background: GreenYellow;
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
    
