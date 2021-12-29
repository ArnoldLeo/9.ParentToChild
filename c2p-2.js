class Teacher extends React.Component{
    state={
        teacherName:"Satyam",
        teacherExperience:5,
        teacherExpertise:"React",
        info:'',
        isClicked:true
    }
    render(){
        let {teacherExperience,teacherExpertise,teacherName,info,isClicked}=this.state
        return <div>
            <h1>Hello All this is {teacherName} here!</h1>
            <h1>I'm your {teacherExpertise} teacher with a experience of {teacherExperience}yrs.</h1>
            <h2>Student Info:</h2>
            <h3>Name:{info.name}</h3>
            <h3>Age:{info.Age}</h3>
            <Student action={this.getDataFromStudent.bind(this)} />
        </div>
    }
    getDataFromStudent(data){
        console.log(data);
        if(this.state.isClicked){
        this.setState({
            info:data,
            isClicked:false
        },()=>{console.log(this.state);})
    }
    else{
        this.setState({
            info:"",
            isClicked:true
        })
    }
    
    }
}

function Student(props){
    let student={name:"Arnold",Age:22}
    return <div>
        {/* <h1>Im Child</h1> */}
        <button onClick={()=>{props.action(student)}}>Send Data to Teacher</button>
    </div>
}

ReactDOM.render(<Teacher />,document.getElementById('container'))