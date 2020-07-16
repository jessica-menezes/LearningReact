const app = {
    title: 'Visibility Toggle',
};

const appRoot = document.getElementById('app');

const details = () =>{
    visability = !visability;
    
    if (document.getElementById('button').innerText == 'Show details'){
        document.getElementById('button').innerText = 'Hide details';
   

    }else if (document.getElementById('button').innerText == 'Hide details'){
        document.getElementById('button').innerText = 'Show details';
        
        console.log('hidden');
    }
buttonClicked();
};

let visability = false;
const buttonClicked = () =>{
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button id='button' onClick={details}>Show details</button>
             <p id='Myp'>
                 {visability ? 'hello' : ''}
             </p>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

buttonClicked();
