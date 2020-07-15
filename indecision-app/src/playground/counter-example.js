let count = 0;
const addOne= () =>{
    count++;
    RenderCounterApp();
};
const minusOne= () =>{
    count--;
    RenderCounterApp();
};
const reset= () =>{
    count=0;
    RenderCounterApp();
};


ReactDOM.render(template, appRoot);

const RenderCounterApp = () => {
    const templateTwo = ( //className used not class
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo,appRoot);
};

RenderCounterApp();
 