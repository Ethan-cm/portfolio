import React from 'react'; 
import ReactDOM from 'react-dom';
import Link from 'next/link'
import {Butano, Linko, Baro} from './Navbar.styles'

class Containerbutton extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        buttoncontext: "squished",
                };
        }

        Buttonchangetext = () => {
                if(this.state.buttoncontext === "expanded"){//executed if expanded is the current state
                        this.setState({buttoncontext: "squished"});
                } else { // executed if squished is the current state
                        this.setState({buttoncontext: "expanded"});
                }
        }

        render(){ //rendermethod
        return(
        <p>
                <Baro>
                <Butano type="button" onClick={this.Buttonchangetext}> {this.state.buttoncontext} </Butano>
                <Navbar newcon={this.state.buttoncontext}/>
                </Baro>             
        </p>
        )}
};

function Navbar(props) {
        if(props.newcon === "expanded"){
        return(
        <>
                <Navhome/>
                <Navwork/>
                <Navfrontend/>
                <Naveducation/>
        </>    
        );}
        else{
        return(
                <></>
        );}
}

function Navwork () {//redirect button for work
        return(
                <Butano type="button">
                        <Link href="../../Work">Work experience</Link>
                </Butano>
        );
}
function Navhome () {//redirect button for home
        return(

                <Butano type="button">
                        <Link href="../../">Home</Link>
                </Butano>
        );
}
function Navfrontend () {//redirect button for frontend
        return(
                <Butano type="button">
                        <Link href="../../Frontend">Frontend development</Link>
                </Butano>    
        );
}
function Naveducation () {//redirect button for education
        return(
                <Butano type="button">
                        <Link href="../../Education">Education</Link>
                </Butano>
        );
}

export default Containerbutton;