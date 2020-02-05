import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    userProfileContainer: {
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: Colors.GREYSCALE,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskContainer: {
        width: '100%',
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#B8B8B8',
        alignItems: 'center'
    },
    bpkbContainer: {
        flex: 0.5,
        height: 60,
        backgroundColor: '#0E4D92',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4
    },
    unitContainer: {
        flex: 0.5,
        height: 60,
        backgroundColor: '#0E8DCC',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4
    },
    userProfileIcon: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    taskText: {
        fontSize: 24,
        letterSpacing: 0.33,
        marginBottom: 10
    }
});
