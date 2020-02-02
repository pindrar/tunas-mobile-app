import React from 'react'
import { Button } from 'react-native'

export class HomeScreen extends React.Component {
    render() {
        return (
            <Button
                title="Go to the profile"
                onPress={() => {this.props.navigation.navigate('Profile', { name: 'NAMA PROFIL' })}}
            />
        );
    }
}