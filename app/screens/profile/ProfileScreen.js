import React from 'react'
import { Button, View, Text } from 'react-native'

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
        <View>
            <Text>{this.props.navigation.getParam('name')}</Text>
            <Button
                title="Go Setting"
                onPress={() => {this.props.navigation.navigate('Setting')}}
            />
        </View>
        )
    }
}