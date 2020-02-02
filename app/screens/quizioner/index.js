import React from 'react'
import { Text, Button, View } from 'react-native'
import { NavigationActions, StackActions } from 'react-navigation';

export class QuizionerScreen extends React.Component {
    static navigationOptions = {
        title: 'Quizioner Screen',
    };

    resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'FirstPage' })],
    });

    render() {
        return (
            <View>
                <Text>Quizioner Screen</Text>
                <Button
                    title="Selesai"
                    onPress={() => { this.props.navigation.dispatch(this.resetAction); }}
                />
            </View>
        );
    }
}