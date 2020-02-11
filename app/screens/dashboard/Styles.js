import {StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50
    },
    userProfileContainer: {
        padding: 30,
        borderWidth: 1,
        borderColor: Colors.GREYSCALE,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskContainer: {
        width: '100%',
        marginTop: 30,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#B8B8B8',
        alignItems: 'center'
    },
    bpkbContainer: {
        flex: 0.5,
        height: 80,
        backgroundColor: '#0E4D92',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 4
    },
    unitContainer: {
        flex: 0.5,
        height: 80,
        backgroundColor: '#0E8DCC',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 4
    },
    userProfileIcon: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    taskText: {
        fontSize: 32,
        fontWeight: '300',
        letterSpacing: 0.33,
        marginBottom: 20,
        color: Colors.WHITE
    },
    titleTypeText: {
        fontSize: 16,
        color: Colors.WHITE
    },
    countText: {
        fontSize: 24,
        marginTop: 5,
        color: Colors.WHITE
    }
});
