import React, { Component } from 'react'
import { StatusBar, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { Card } from 'native-base'
const _height = Dimensions.get('window').height
import ScreenHeader from '../../component/ScreenHeader'
import LottieView from 'lottie-react-native'
export default class SelectComplaintType extends Component {

    static navigationOptions = {
        header: null
    }


    render() {
        return (
            <View style={{ backgroundColor: '#f3f4f4', flex: 1 }}>

                {/* <StatusBar
                    barStyle="light-content"
                    backgroundColor={'#f3f4f4'}
                /> */}

                <ScreenHeader
                    {...this.props}
                    headerColor="#FFFFFF"
                    androidStatusBarColor="#FFFFFF"
                    title={'Departments'}
                    subTitle=""
                    left={-50}
                    onLeftIconPress={() => this.props.navigation.goBack()}
                />
                <View style={{ flex: 1, backgroundColor: '#f3f4f4', padding: 16, backgroundColor: '#f7f7f7', paddingLeft: 24, paddingRight: 24, }}>
                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CreateComplaint', { type: 'Traffic' })
                            global.ComplaintDepartment = 1
                        }
                        } >

                            <Card style={{ height: _height / 4, width: '100%', borderRadius: 8 }}>
                            <LottieView source={require('../../res/traffic.json')} autoPlay loop />
                                <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Traffic Department </Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('LodgeAComplaintStepOne', { type: 'Police' })
                            global.ComplaintDepartment = 2
                            }}>

                            <Card style={{ height: _height / 4, width: '100%', borderRadius: 8 }}>
                                <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Police Department </Text>
                            </Card>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('CreateComplaint', { type: 'Fire' })
                            global.ComplaintDepartment = 3
                            }}>
                            <Card style={{ height: _height / 4, width: '100%', borderRadius: 8 }}>
                            <LottieView source={require('../../res/fire.json')} autoPlay loop />
                                <Text style={{ position: 'absolute', bottom: 10, fontWeight: 'bold', color: '#212121', fontSize: 21, alignSelf: 'center' }}> Fire Department </Text>
                            </Card>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}