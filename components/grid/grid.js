import styled from 'styled-components';
import React from "react" 

export const Indexgrid = styled.div`
display: grid;
height:  100vh;
width:   100vh;
grid-template-columns: 2fr repeat(4, 0.5fr);
grid-template-rows: 0fr repeat(4, 0.5fr) 1fr;

grid-template-areas: "nav  nav    nav    nav      nav"
                     "main gridA  gridA  gridB    gridB"
                     "main gridA  gridA  gridB    gridB"
                     "main gridC  gridC  gridD    gridD"
                     "main gridC  gridC  gridD    gridD"
                     "main bottom bottom bottom   bottom";

grid-column-gap: 0px;
grid-row-gap: 0px;
text-align: center; 
grid-gap: 0rem;
padding-top: 0px;
`;

export const Nav = styled.nav`
grid-area: nav;
background-color: Grey;
padding: 0px 0px 0px 0px;
`;

export const GridA = styled.div`
grid-area: gridA;
background: Burlywood;
padding: 15px 15px 15px 15px;
`;

export const GridB = styled.div`
grid-area: gridB;
background: Cornsilk;
padding: 15px 15px 15px 15px;
`;

export const GridC = styled.div`
grid-area: gridC;
background: Chocolate;
padding: 15px 15px 15px 15px;
`;
export const GridD = styled.div`
grid-area: gridD;
background: GreenYellow;
padding: 15px 15px 15px 15px;
`;
export const Bottom = styled.div`
grid-area: bottom;
background: Teal;
color: white;
padding: 15px 15px 15px 15px;
`;
export const Main = styled.div`
grid-area: main;
color: white;
background: Plum;
padding: 10px 10px 10px 10px;
`;
