import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Styles from './Styles';
import Colors from '../../common/Colors';
import CommonUtils from '../../common/CommonUtils';

export default class DashboardScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        console.log(navigation)
        return CommonUtils.getHeaderChatButton()
    };

    goToDetails(){
        this.props.navigation.navigate("DashboardDetails")
    }

    getBpkb(){
        return (
            <View style={Styles.bpkbContainer}>
                <Text style={Styles.titleTypeText}>BPKB</Text>
                <Text style={Styles.countText}>19</Text>
            </View>
        )
    }

    getUnit(){
        return(
            <View style={Styles.unitContainer}>
                <Text style={Styles.titleTypeText}>UNIT</Text>
                <Text style={Styles.countText}>20</Text>
            </View>
        )
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={Styles.container}>
                <View style={Styles.userProfileContainer}>
                    <Image source={require('../../assets/images/user.png')} style={Styles.userProfileIcon} />
                </View>

                <View style={Styles.taskContainer}>
                    <Text style={Styles.taskText}>TASK TODAY</Text>

                    <View style={{flexDirection: 'row', paddingLeft: 8, paddingRight: 8}}>
                        {this.getBpkb()}
                        {this.getUnit()}
                    </View>
                </View>
                
            </LinearGradient>
            
        );
    }
}