import React from 'react';
import {Image, TouchableOpacity} from 'react-native'

export default {
    getHeaderChatButton(){
        return {
            headerRight: <TouchableOpacity onPress={() => this.onPressChat()}>
                <Image source={require('../assets/images/chat.png')} style={{width: 30, resizeMode: 'contain', marginRight: 24}} />
            </TouchableOpacity>
        }
    },

    onPressChat(){
        console.warn('GO TO CHAT')
    }
}