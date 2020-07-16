
let visability = false;

const appRoot = document.getElementById('app');

const details = () =>{
    visability = !visability;
    buttonClicked();
};



const buttonClicked = () =>{
    
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={details}>
                {visability ? 'Hide details' : 'Show details'}
            </button>

            {visability && (
                <div>
                    <p>
                    You can see this now
                    </p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

buttonClicked();
