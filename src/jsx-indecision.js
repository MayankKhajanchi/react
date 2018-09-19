console.log('app.js is running');
// console.log("done");

var app = {
    title : "My first React app",
    subtitle : "Hello World",
    options : []
}

const xyz = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
    }
    e.target.elements.option.value = " ";
    render();
}
const wipe = () => {
    app.options = [];
    render();
}

const pick = () => {
    const randomNum =Math.floor( Math.random() * app.options.length);
    const task = app.options[randomNum];
    alert(task);
}
var appRoot = document.getElementById("demo");

const render = () => {
var template =  (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}    
        <p>{app.options.length > 0 ? "You have options" : "No options"}</p>
        <p>{app.options.length}</p>
        <button onClick={wipe}>Remove All</button>
        <form onSubmit={xyz}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            
        </form>
        <button onClick={pick}>What should I do ?</button>
        
        
        {
            app.options.map((item) => {
                return <li key={item}>{item}</li>;
            })
        }

    </div>
);
ReactDOM.render(template , appRoot);
}

render();
