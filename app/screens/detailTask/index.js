import React from 'react'
import { Text, Button, View } from 'react-native'

export class DetailTaskScreen extends React.Component {
    static navigationOptions = {
        title: 'Task Detail',
    };
    render() {
        return (
            <View>
                <Text>Task Detail Screen</Text>
                <Button
                    title="Signature Screen"
                    onPress={() => { this.props.navigation.navigate('signature') }}
                />
            </View>
        );
    }
}