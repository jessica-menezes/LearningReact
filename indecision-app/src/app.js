console.log('App.js is running');

//JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is some text',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle  && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ?  'Here are your options' : 'No options'}</p>
        <ol>
            <li>Raul Smells</li>
            <li>Raul Smells a lot</li>
            </ol>
    </div>
);

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


const appRoot = document.getElementById('app');

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
 