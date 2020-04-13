import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StatusBar, ToastAndroid } from 'react-native'
import { Thumbnail } from 'native-base'
import { auth } from "../../config/Config"

import ProfileHeaderComponent from '../../components/ProfileHeaderComponent';

import styles from './SettingsScreenStyle';

let profileImage = require('../../assets/img/male-18.png');

export default class SettingsScreen extends Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            email: '',
            password: '',
            latitude: null,
            longitude: null,
            errorMessage: null,
            visible: false,
            Onprosess: false,
        };
    }

    componentDidMount() {
        this._isMounted = true;
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    hideToast = () => {
        this.setState({
            visible: false,
        });
    };
    
    render() {
        return (

            <View style={styles.container}>
                <View style={{ marginVertical: 100, alignItems: 'center' }}>

                    <Text style={{ fontSize: 18, marginBottom: 20 }}>
                        Settings
                </Text>
                    <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center', marginLeft: 2, marginRight: 2 }}>
                        Here will be displayed a list of settings for your profile
                </Text>

                </View>
            </View >
            // <ProfileHeaderComponent
            //     name={auth.currentUser.displayName}
            //     email={auth.currentUser.email}
            //     image={profileImage}
            //     onTapProfile={() => alert('navigate to profile')}>
            // </ProfileHeaderComponent>
        )
    }
}
