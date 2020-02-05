import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Styles from './Styles';
import Colors from '../../common/Colors';

export default class DashboardScreen extends React.Component {

    goToDetails(){
        this.props.navigation.navigate("DashboardDetails")
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.userProfileContainer}>
                    <Image source={require('../../assets/images/user.png')} style={Styles.userProfileIcon} />
                </View>

                <View style={Styles.taskContainer}>
                    <Text style={Styles.taskText}>TASK TODAY</Text>

                    <View style={{flexDirection: 'row', paddingLeft: 8, paddingRight: 8}}>
                        <View style={Styles.bpkbContainer}>
                            <Text style={{fontSize: 14, color: Colors.WHITE}}>BPKB</Text>
                        </View>
                        <View style={Styles.unitContainer}>
                            <Text style={{fontSize: 14, color: Colors.WHITE}}>UNIT</Text>
                        </View>
                    </View>
                </View>
                
            </View>
            
        );
    }
}