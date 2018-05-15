import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux';
import * as reducers from './reducers';
import {Provider} from 'react-redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Sidebar from './Components/sidebar'


const rootReducer = combineReducers (reducers)
const store = createStore(rootReducer); 
store.subscribe(() => {
    console.log(store.getState());
})


function run (){
    ReactDOM.render(
    <Provider  store={store}>
        <App>
        <div style = {{display: 'flex'}}>
            <div className ='side_bar'>
                <Sidebar/>
            </div>
            < div className = 'main_field' >
                <h4> {'Hello. Here is a main field body'} </h4> 
            </div>
        </div>
        </App>
    </Provider>,
    document.getElementById('root'));
}

registerServiceWorker();
run();
store.subscribe (run);

