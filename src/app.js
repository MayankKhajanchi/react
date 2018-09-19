class IndecisionApp extends React.Component{
    render(){
        const title="Indecision App";
        const subtitle="First react project";
        const options = ["one", "two", "three"];
        return(
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action/>
            <Options option={options}/>
            <AddOption/>
        </div>
        );
    }
}

class Header extends React.Component{
    render(){ 
        return (
        <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
        </div>
        );
    }
}

/*const Action = (props) => {
    return (
        <button onClick={this.handlePick}>
            What should i do ?
        </button>
            );
}*/

class Action extends React.Component{
    handlePick(){
        alert("handlePick");
    }
    render(){
        return (
        <button onClick={this.handlePick}>
            What should i do ?
        </button>
            );
    }
}

class Options extends React.Component{
    handleremoveAll(){
        //alert("removeAll");
        console.log(this.props.option);
    }
    render(){
        return(
        <div>
        {
            this.props.option.map((option) => <Option key={option} optionText={option}/>
        )
        }
            <Option/> 
        <button onClick={this.handleremoveAll}>Remove all options
        </button>
        </div>
            );
    }
}

class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const xyz = e.target.elements.option.value.trim();
        if(xyz){
            alert(xyz);
        }
    }
    render(){
        return  (
        <div>
            This text is from the AddOption component
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>{this.props.optionText}</div>
        );
    }
}

const jsx = (
    <div>
        <IndecisionApp/>
    </div>
);

var appRoot = document.getElementById("demo");
ReactDOM.render(jsx, appRoot);

/*const User = (props) => {
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
    )
}

ReactDOM.render(<User name="Mayank" age={21}/>, document.getElementById("demo2"));*/