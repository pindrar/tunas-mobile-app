import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Constants from '../../common/Constants';
import Styles from './Styles';
import Colors from '../../common/Colors';
import { fetchLogin } from './Action'

class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    loginButtonPressed() {
        const paramsObj = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.fetchLogin(paramsObj)
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    placeholder={Constants.USERNAME}
                    placeholderTextColor={Colors.WHITE}
                    style={Styles.textInput}
                    onChangeText={(text) => this.setState({
                        username: text
                    })}
                    maxLength={100} />

                <TextInput
                    placeholder={Constants.PASSWORD}
                    placeholderTextColor={Colors.WHITE}
                    style={[Styles.textInput, {marginTop: 20}]}
                    onChangeText={(text) => this.setState({
                        password: text
                    })}
                    maxLength={100} />

                <TouchableOpacity style={Styles.loginButton}
                    onPress={() => this.loginButtonPressed()}
                >
                    <Text style={{color: Colors.WHITE}}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchLogin}, dispatch);

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);