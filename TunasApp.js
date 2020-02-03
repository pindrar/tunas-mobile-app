import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginScreen from "./app/screens/login/LoginScreen";
import MainTabNavigator from './app/navigation/MainTabNavigator';

class TunasApp extends React.Component {
    
    render(){
        console.warn(this.props.auth);
        const renderScreen = !this.props.auth.login.status ? <LoginScreen /> : <MainTabNavigator />;
        return renderScreen
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(TunasApp);