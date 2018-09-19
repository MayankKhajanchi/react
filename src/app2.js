class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }
    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count + 1
        }
        });
        
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count - 1
            }
        });
    }
    handleReset(){
        this.setState(() => {
            return{
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <p>With state</p>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>  
            </div>
        );
    }
}

ReactDOM.render(<Counter/>,document.getElementById("demo2"));


let count = 0;
const add = () => {
    count++;
    renderxyz();
}
const minus = () => {
    count--;
    renderxyz();
}
const reset = () => {
    count = 0;
    renderxyz();
}

const xyz = document.getElementById("demo");

const renderxyz = () => {
var templatexyz = (
    <div>
        <p>Without state</p>
        <h1>Count: {count}</h1>
        <button onClick={add}>+1</button>
        <button onClick={minus}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

ReactDOM.render(templatexyz , xyz);
}
renderxyz();