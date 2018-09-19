console.log("hello");

let visibility = false;

const toggle = () => {
    visibility = !visibility;
    render();
}
var appRoot = document.getElementById("demo");

const render = () => {
const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggle}>{visibility ? "Hide Details" : "Show Details"}</button>
        
        {visibility && (
            <div>
                <p>
                    Here is the text
                </p>
            </div>
        )}

    </div>
);

ReactDOM.render(template , appRoot);
}
render();