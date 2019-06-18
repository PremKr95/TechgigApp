
import React, { Component } from 'react';
import { Platform, StatusBar, Dimensions, StyleSheet, Text, View, TouchableOpacity, NativeModules } from 'react-native';
import LottieView from 'lottie-react-native'
import { Card } from 'native-base'
const _height = Dimensions.get('window').height
const _width = Dimensions.get('window').width
import ScreenHeader from '../component/ScreenHeader'
import firebase from "react-native-firebase"

export default class App extends Component<Props> {

    static navigationOptions = {
        header: null
    }

    componentWillMount(){

    }


    render() {
        return (
            <View style={{ backgroundColor: '#f3f4f4', flex: 1 }}>

                <StatusBar
                    barStyle="light-content"
                    backgroundColor={'#f3f4f4'}
                />

                <View style={{ flex:1,backgroundColor:'#f3f4f4', padding: 16, backgroundColor: '#f7f7f7',paddingLeft:24,paddingRight:24, }}>
                    <Text style={{ marginTop:16, fontSize: 28, fontWeight: '500', color: '#2a2a2a' }}>Please Select any option</Text>
                    <View style={{flex:1, justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={()=>{ 
                        this.props.navigation.navigate('TrafficPoliceHome')}}>
                        <Card style={{ height: _height / 3, width: '100%', borderRadius: 8 }}>
                            <LottieView source={require('../res/splashs.json')} autoPlay loop />
                            <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Traffic Police </Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity  
                        onPress={()=>this.props.navigation.navigate('PoliceStationHome')}>
                        <Card style={{ height: _height / 3, width: '100%', borderRadius: 8 }}>
                            <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Police Department </Text>
                        </Card>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
