//Parent Component
function App(props){
    const data=['Petta','Kabali','Baasha','Linga','Johnny']
    return <div>
        <h1>Welcome to {props.title} </h1>

        <Home userName="Arnold" appName="NETFLIX"/>
        <List movies={data} />
    </div>
}

//Child Component
function Home(props){
    return <div>
        <h2>Hi {props.userName}</h2>
        <h3>Wait is over {props.appName} is here!</h3>
    </div>
}
function List(props){
    return <div>
        <h2>Hi {props.userName}</h2>
        <h3>Here are the list of Rajini Movies you wanted To Watch!!</h3>
        {props.movies.map((val,idx)=>{
            return <li key={idx}>{val}</li>
        })}
    </div>
}
ReactDOM.render(<App title='AppStore'/>,document.getElementById('container'))