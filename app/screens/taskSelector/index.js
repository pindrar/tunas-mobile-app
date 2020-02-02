import React from 'react'
import { Text, Button, View } from 'react-native'

export class TaskSelectorScreen extends React.Component {
    static navigationOptions = {
        headerShown: false,
      };
    render() {
        return (
            <View>
                <Text>Task Selector Screen</Text>
                <Button
                    title="Task"
                    onPress={() => { this.props.navigation.navigate('task') }}
                />
            </View>
        );
    }
}