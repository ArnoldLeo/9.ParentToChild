//Parent Component
function Market(props){
    const data={vegetables:['Carrot','Cauliflower','Potato'],
                Fruits:['Apple','Mango','Chiku']}
    return <div>
        <h1>Welcome to {props.title} </h1>

        {/* <Home userName="Arnold" appName="NETFLIX"/> */}
        <List userName="Arnold" marketData={data} />
    </div>
}
//Child Component
function List(props){
    return <div>
        <h2>Hi {props.userName}</h2>
        <h3>Here are the list of Vegetables Available:</h3>
        {props.marketData.vegetables.map((val,idx)=>{
            return <li key={idx}>{val}</li>
        })}
       <br></br><br></br>
       <h3>Here are the list of Fruits Available:</h3>
        {props.marketData.Fruits.map((val,idx)=>{
            return <li key={idx}>{val}</li>
        })}
    </div>
}
ReactDOM.render(<Market title='Family Market'/>,document.getElementById('container'))