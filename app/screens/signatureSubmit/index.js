import React from 'react'
import { Text, Button, View } from 'react-native'

export class SignatureScreen extends React.Component {
    static navigationOptions = {
        title: 'Signature Screen',
    };
    render() {
        return (
            <View>
                <Text>Signature Screen</Text>
                <Button
                    title="Quizioner"
                    onPress={() => { this.props.navigation.navigate('quizioner') }}
                />
            </View>
        );
    }
}