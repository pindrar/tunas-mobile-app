import React from 'react'
import {createAppContainer} from 'react-navigation'
import {Navigator} from './app/navigation'
import LoginScreen from './app/screens/login/LoginScreen';

class App extends React.Component {

    render(){
        return <LoginScreen />
    }
}

export default App;