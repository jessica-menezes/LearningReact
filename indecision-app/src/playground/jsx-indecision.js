console.log('App.js is running');

//JSX - Javascript XML

const app = {
    title: 'Indecision App',
    subtitle: 'This is some text',
    options: []
};

const onFormSubmit = (e) => { //e is event
    e.preventDefault(); //stops a full page refresh
    
    const option = e.target.elements.option.value;
    if (option){ //if there is a value in the input
        //appends new elements to the array
        app.options.push(option);
        e.target.elements.option.value = '';
        RenderApp();
    }
};

const removeAll = () =>{
    //equal empty array
    app.options = [];
    RenderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length); //math.floor rounds the number down
    const options = app.options[randomNum];
    alert(options);
};

const appRoot = document.getElementById('app');

//const numbers = [55, 100, 200];
//modifies option length as new values entered into the input form
const RenderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle  && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ?  'Here are your options' : 'No options'}</p>
            <button disabled = {app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    //trying to map over the array options
                    app.options.map((option) => {
                        //for a arrays of JSX need a key prop
                        //key allows jsc to optimise the rendering process
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

RenderApp();

