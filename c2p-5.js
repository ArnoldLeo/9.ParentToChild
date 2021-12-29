class Civilian extends React.Component{
    state={name:"Netaji",
            msg:''
        }
    render(){
        return <div>
            <h1>This is our Civilan {this.state.name}</h1>
            <p> {this.state.message} </p>
            <Child CivilianCallback = {this.callbackFunction}/>
              
        </div>
    }
    callbackFunction = (childData) => {
        this.setState({message: childData})
  }
}
class Child extends React.Component{
    sendData = () => {
             this.props.CivilianCallback("Your Income Certificate is under Process");
        }
    render() { 
            return <div>
                <h4>Child Component</h4>
                <button onClick={()=>{this.sendData()}}>Click Here</button>
                </div>
        }
    };

ReactDOM.render(<Civilian />,document.getElementById('container'))