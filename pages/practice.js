import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Practicos from '../components/practicecomponent/practicecomp';
import {Indexgrid, Nav, GridA, GridB, GridC, GridD, Main, Bottom} from '../components/grid/grid.js'

export default function Practice(){
return(
<>
<Indexgrid>test

<Nav>nav</Nav>
<Main>main</Main>
<GridA>grida</GridA>
<GridB>gridb</GridB>
<GridC>gridC</GridC>
<GridD>gridD</GridD>
<Bottom>bottom</Bottom>

</Indexgrid>

</>
)}

//export default Practice;