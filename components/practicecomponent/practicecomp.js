import React from 'react'; 
import ReactDOM from 'react-dom';


class Containerbutton extends React.Component {
        constructor(props){
                super(props);
                this.state = {
                        brand: "testingprop",
                        buttoncontext: "squished",
                };
        }

        buttonchangetext = () => {
                if(this.state.buttoncontext === "expanded"){//executed if expanded is the current state
                        this.setState({buttoncontext: "squished"});
                } else { // executed if squished is the current state
                        this.setState({buttoncontext: "expanded"});
                }
        }

        expandnavbar = () => {

        }

        render(){return(
                <p>
                        test {}
                <button type="button" onClick={this.buttonchangetext}> {this.state.buttoncontext} </button>
                </p>
        )}
}




export default Containerbutton;