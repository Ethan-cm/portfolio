import React from 'react'; 
import ReactDOM from 'react-dom';


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
                test {}
                <button type="button" onClick={this.Buttonchangetext}> {this.state.buttoncontext} </button>
                <Navbar newcon={this.state.buttoncontext}/>             
        </p>//navbar line WIP not working properly, cant figure out how to pass data coherently
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
                <>expanded</>
        </>    
        );}
        else{
        return(
                <>Not squished</>
        );}
}

function Navwork () {//redirect button for work
        return(
                <button type="button">Work</button>
        );
}
function Navhome () {//redirect button for home
        return(
                <button type="button">Home</button>
        );
}
function Navfrontend () {//redirect button for frontend
        return(
                <button type="button">Frontend</button>
        );
}
function Naveducation () {//redirect button for education
        return(
                <button type="button">Education</button>
        );
}

export default Containerbutton;