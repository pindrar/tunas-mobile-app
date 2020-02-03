import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class DashboardScreen extends React.Component {

    goToDetails(){
        this.props.navigation.navigate("DashboardDetails")
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>DashBoard Screen</Text>

                <TouchableOpacity style={{padding: 20, backgroundColor: 'red'}}
                    onPress={() => this.goToDetails()}
                >
                    <Text>Go to Dashboard Details</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}