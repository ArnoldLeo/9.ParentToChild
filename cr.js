class MyApp extends React.Component{
    state={
        adminName:"Raghu",
        userName:"Maghu",
        isAdmin:true
    }

    render(){
        let {adminName,userName,isAdmin}=this.state
        let renderData=null

        if(isAdmin){
            renderData=<div>
                <h1>Admin Name: {adminName}</h1>
                <h2>Home</h2>
                <h2>Login</h2>
            </div>
        }
        else{
            renderData=<div>
            <h1>User Name: {userName}</h1>
            <h2>Login</h2>
        </div>
        }

        return <div>
            {renderData}
            <button onClick={()=>{this.changeView()}}>{isAdmin?"Click to see User":"Click to see Admin"}</button>
        </div>
    }
    changeView(){
        this.setState({
            isAdmin:!this.state.isAdmin
        })
    }
}
ReactDOM.render(<MyApp/>,document.getElementById('container'))