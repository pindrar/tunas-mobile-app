import React from 'react'
import { Text, Button, View } from 'react-native'

export default class TaskScreen extends React.Component {
    static navigationOptions = {
        title: 'Task',
    };
    render() {
        return (
            <View>
                <Text>Task Screen</Text>
                <Button
                    title="List Task"
                    onPress={() => { this.props.navigation.navigate('listTask') }}
                />
            </View>
        );
    }
}