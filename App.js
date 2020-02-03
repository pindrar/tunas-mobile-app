import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import RootReducer from './app/RootReducer';
import TunasApp from './TunasApp';

const store = createStore(RootReducer, applyMiddleware(thunk));

class App extends React.Component {

    render(){
        return <Provider store={ store }>
                <TunasApp />
            </Provider>
    }
}

export default App;