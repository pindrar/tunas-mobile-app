import React from 'react'
import { Button, View, Text } from 'react-native'

export class SettingScreen extends React.Component {
    static navigationOptions = {
        title: 'Setting',
    };
    render() {
        return (
        <View>
            <Button
                title="Go Back"
                onPress={() => {this.props.navigation.navigate('Profile')}}
            />
        </View>
        )
    }
}