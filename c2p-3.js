class Vehicle extends React.Component{
    state={
        vehicleList:''
    }
    render(){
        let {vehicleList}=this.state
        return <div>
            <h1>Vehicle Store</h1>
            
                {/* {list} */}
                {vehicleList.map((val,idx)=>{
            return <li key={idx}>{val}</li>
        })}
            
            <List reply={this.getList.bind(this)} />
        </div>
    }
    getList(data){
        this.setState({
            vehicleList:data
        },()=>{console.log(this.state.vehicleList)})
        console.log('data:',data);
        // console.log('List',this.state.vehicleList);
    }
}
function List(props){
    let bikes=['Apache','Pulsar','Royal Enfield','Avenger','Splendor']
    return <div>
        <button onClick={()=>{props.reply(bikes)}}>Click Here</button>
    </div>
}

ReactDOM.render(<Vehicle />,document.getElementById('container'))