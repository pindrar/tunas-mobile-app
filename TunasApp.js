import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import LoginScreen from "./app/screens/login/LoginScreen";
import MainTabNavigator from './app/navigation/MainTabNavigator';

class TunasApp extends React.Component {
    
    render(){
        const renderScreen = !this.props.auth.login.status ? <LoginScreen /> : <MainTabNavigator />;
        return <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{flex: 1}}>
              {renderScreen}
            </LinearGradient>
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(TunasApp);