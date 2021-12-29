class App extends React.Component{
    state = {
        name: "",
       }
    render(){
        const {name} = this.state;
        return(
            <div>
                <Child parentCall = {this.getFromChild.bind(this)}/>
                {name}
            </div>
        )}
        getFromChild(childData){
            this.setState({name: childData})
            // console.log(childData);
        }
}
class Child extends React.Component{
    
    onTrigger = (event) => {
        // console.log(event.target.myname);
        this.props.parentCall(event.target.myname.value);
        event.preventDefault();
    }
  
    render(){
        return(
        <div>
            <form onSubmit = {this.onTrigger}>
                <input type = "text" 
                name = "myname" placeholder = "Enter Name"/>
                <br></br><br></br>
                <input type = "submit" value = "Submit"/>
                <br></br><br></br>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('container'))