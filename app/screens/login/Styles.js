import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30
    },
    textInput: {
        width: '100%',
        height: 50,
        borderColor: Colors.WHITE,
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        color: Colors.WHITE
    },
    loginButton: {
        width: '100%',
        height: 50,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#111E6C"
    }
});
