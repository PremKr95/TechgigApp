
import React, { Component } from 'react';
import { Platform, StatusBar, Dimensions, StyleSheet, Text, View, TouchableOpacity, NativeModules } from 'react-native';
import LottieView from 'lottie-react-native'
import { Card } from 'native-base'
const _height = Dimensions.get('window').height
const _width = Dimensions.get('window').width
import ScreenHeader from '../component/ScreenHeader'
import firebase from "react-native-firebase"

export default class App extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = {
            trafficDetails: []
        }
    }

    static navigationOptions = {
        header: null,
    }

    componentWillMount() {
        this.fetchTrafficDetails()
    }

    fetchTrafficDetails() {
        var finalArr = []
        var ob
        let url = "https://traffic.api.here.com/traffic/6.2/flow.json?bbox=19.131486,73.004211;19.12539,73.01364&app_code=mWBflFbZs6RX0hTjvUo1Bw&app_id=nxgJHAV9Agbypr4Uv760"
        fetch(url).then(response => response.json()).then(responseJson => {
            console.log(JSON.stringify(responseJson))
            responseJson.RWS[0].RW.map((item) => {
                item.FIS[0].FI.map((element) => {
                    ob = {
                        name: element.TMC.DE,
                        length: element.TMC.LE
                    }
                    finalArr.push(ob)
                })
            })
            console.log("TCL: App -> fetchTrafficDetails -> element", finalArr)
            this.setState({ trafficDetails: finalArr })
        }).catch(error => {

        })
    }

    componentDidMount() {

    }


    render() {
        const { trafficDetails } = this.state
        return (
            <View style={{ backgroundColor: '#f3f4f4', flex: 1 }}>

                <StatusBar
                    barStyle="light-content"
                    backgroundColor={'#f3f4f4'}
                />

                <View style={{ flex: 1, backgroundColor: '#f3f4f4', padding: 16, backgroundColor: '#f7f7f7', paddingLeft: 24, paddingRight: 24, }}>
                    {/* <Text style={{ marginTop:16, fontSize: 28, fontWeight: '500', color: '#2a2a2a' }}>Please Select  </Text> */}
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('TrafficPoliceHome', { trafficData: trafficDetails })
                        }}>
                            <Card style={{ height: _height / 4, width: '100%', borderRadius: 8 }}>
                                <LottieView style={{ height: _height / 5, alignSelf: 'center' }} source={require('../res/traffic.json')} autoPlay loop />
                                <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Traffic Department </Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PoliceStationHome')}>
                            <Card style={{ height: _height / 4, width: '100%', borderRadius: 8 }}>
                                <LottieView style={{ height: _height / 5, alignSelf: 'center' }} source={require('../res/police.json')} autoPlay loop />
                                <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Police Department </Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('FirePolice')}>
                            <Card style={{ height: _height / 4, width: '100%', borderRadius: 8 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <LottieView style={{ marginLeft: 10, height: _height / 4, alignSelf: 'center' }} source={require('../res/fire.json')} autoPlay loop />
                                    <LottieView style={{ height: _height / 4, alignSelf: 'center' }} source={require('../res/fire.json')} autoPlay loop />
                                    <LottieView style={{ height: _height / 4, alignSelf: 'center' }} source={require('../res/fire.json')} autoPlay loop />
                                </View>
                                <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Fire Department </Text>
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
