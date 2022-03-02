import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link'
import { render } from 'react-dom';
import Practicos from '../components/practicecomponent/practicecomp';
import Navbar from '../components/Navbar/Navbar.js'
import {Indexgrid, Nav, GridA, GridB, GridC, GridD, Main, Bottom} from '../components/grid/grid.js'

export default function Practice(){
return(

<Indexgrid>
<Nav><Navbar/></Nav>
<Main>main</Main>
<GridA>grida</GridA>
<GridB>gridb</GridB>
<GridC>gridC</GridC>
<GridD>gridD</GridD>

<Bottom>     
    BOTTOM
    
    <button type='button' className='prettybutton'>
        <h2>
          <Link href="/">
            <a>Return to main page</a>
          </Link>
        </h2>
    </button>
</Bottom>

</Indexgrid>

)};
