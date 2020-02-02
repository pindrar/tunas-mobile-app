import React from 'react'
import { Text, Button, View } from 'react-native'

export class ListTaskScreen extends React.Component {
    static navigationOptions = {
        title: 'Task List',
    };
    render() {
        return (
            <View>
                <Text>Task List Screen</Text>
                <Button
                    title="Task Detail"
                    onPress={() => { this.props.navigation.navigate('detailTask') }}
                />
            </View>
        );
    }
}