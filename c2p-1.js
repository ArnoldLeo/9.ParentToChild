class Parent extends React.Component{
    state={
        msg:''
    }
    render(){
        return <div>
            <h1>This is Parent</h1>
            <h2>Data from Child:{this.state.msg}</h2>
            <Child action={this.getDataFromChild.bind(this)} />
        </div>
    }
    getDataFromChild(data){
        console.log(data);
        this.setState({
            msg:data
        })
    }
}

function Child(props){
    let str="I have the Mobile"
    return <div>
        <h1>Im Child</h1>
        <button onClick={()=>{props.action(str)}}>Send Data to Parent</button>
    </div>
}

ReactDOM.render(<Parent />,document.getElementById('container'))