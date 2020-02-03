import React from 'react'
import { View, TouchableOpacity, TextInput, Text } from 'react-native'
import Constants from '../../common/Constants';
import Styles from './Styles';
import Colors from '../../common/Colors';

class LoginScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    loginButtonPressed() {
        console.log("Login button is pressed")
    }

    render() {
        return (
            <View style={Styles.container}>
                <TextInput
                    placeholder={Constants.USERNAME}
                    placeholderTextColor={Colors.WHITE}
                    style={Styles.textInput}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'email-address'}
                    onChangeText={(text) => this.setState({
                        username: text
                    })}
                    maxLength={100} />

                <TextInput
                    placeholder={Constants.PASSWORD}
                    placeholderTextColor={Colors.WHITE}
                    style={[Styles.textInput, {marginTop: 20}]}
                    keyboardType={Platform.OS === 'ios' ? 'ascii-capable' : 'email-address'}
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

export default LoginScreen