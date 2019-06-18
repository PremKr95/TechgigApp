import React, { Component } from "react"
// import { Loader } from "../../components/app/Loader"
import { Container, Content, Card, Button, Icon } from "native-base"
const _width = Dimensions.get('window').width
import ScreenHeader from "../ScreenHeader"
import { Dimensions, View, Text, Image, FlatList, TouchableOpacity, StyleSheet,ToastAndroid } from "react-native"
var dummyArray = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']
export default class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active : 0,
        }
    }

    static navigationOptions = {
        header: null
    }

    proceedToNextPage(){
        const {active}= this.state
        if(active === 0)
            ToastAndroid.show('P', ToastAndroid.SHORT);
        else{
            global.selectedCase = this.state.active
            this.props.navigation.navigate('CreateComplaint')
        }
    }

    render() {
        const {active}= this.state
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, backgroundColor: '#f3f4f4' }}>

                    <ScreenHeader
                        headerColor="#f3f4f4"
                        androidStatusBarColor="#f3f4f4"
                        title={''}
                        subTitle=""
                        onLeftIconPress={() => this.props.navigation.goBack()}
                    />

                    <View style={{ flex: 1, padding: 16 }}>


                        <Text style={{ marginTop: 16, fontSize: 28, fontWeight: '500', color: '#2a2a2a' }}>Choose the Complain you want to lodge</Text>

                        <View style={{ flex: 1, marginBottom: 60 }}>
                            <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>
                                <View style={{ padding: 16, paddingLeft: 0, paddingRight: 8, width: '50%', height: '100%' }}>
                                    <TouchableOpacity onPress={()=>this.setState({active:1})} style={{ height: '100%', width: '100%', backgroundColor:active===1?'#adcdff' :'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 100, width: 100, borderRadius: 50 }}>
                                            <Image resizeMode={'contain'} style={{ alignSelf: 'center', height: 60, width: 60 }} source={require('../../res/knife.png')} />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 20, alignSelf: 'center', fontSize: 20, color: '#2a2a2a' }}>
                                            Murder
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '50%', height: '100%' }}>
                                    <TouchableOpacity  onPress={()=>this.setState({active:2})}  style={{ height: '100%', width: '100%', backgroundColor:active===2?'#adcdff' : 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 100, width: 100, borderRadius: 50 }}>
                                            <Image resizeMode={'contain'} style={{ alignSelf: 'center', height: 60, width: 60 }} source={require('../../res/knife.png')} />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 20, alignSelf: 'center', fontSize: 20, color: '#2a2a2a' }}>
                                            Rape
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ height: '50%', width: '100%', flexDirection: 'row' }}>
                                <View style={{ padding: 16, paddingLeft: 0, paddingRight: 8, width: '50%', height: '100%' }}>
                                    <TouchableOpacity onPress={()=>this.setState({active:3})}  style={{ height: '100%', width: '100%', backgroundColor:active===3?'#adcdff' : 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 100, width: 100, borderRadius: 50 }}>
                                            <Image resizeMode={'contain'} style={{ alignSelf: 'center', height: 60, width: 60 }} source={require('../../res/knife.png')} />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 20, alignSelf: 'center', fontSize: 20, color: '#2a2a2a' }}>
                                            Theft
                                            </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '50%', height: '100%' }}>
                                    <TouchableOpacity onPress={()=>this.setState({active:4})}  style={{ height: '100%', width: '100%', backgroundColor:active===4?'#adcdff' : 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 100, width: 100, borderRadius: 50 }}>
                                            <Image resizeMode={'contain'} style={{ alignSelf: 'center', height: 60, width: 60 }} source={require('../../res/knife.png')} />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 20, alignSelf: 'center', fontSize: 20, color: '#2a2a2a' }}>
                                            Others
                                            </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>


                        <View
                            style={{
                                height: 56,
                                position: 'absolute',
                                bottom: 16,
                                marginBottom: 0,
                                marginLeft: 0,
                                marginRight: 0,
                                width: _width,
                                borderRadius: 8
                            }}>
                            <Button
                                block
                                onPress={()=>this.proceedToNextPage()}
                                style={{ borderRadius: 8, alignSelf: 'center', height: '100%', width: '90%', backgroundColor: '#2f4efa', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: '#ffffff', minWidth: '20%', fontSize: 16, }}>Continue</Text>

                                <View style={{ position: 'absolute', right: 10, borderRadius: 8, backgroundColor: '#1232e6', height: '90%', justifyContent: 'center' }}>
                                    <Icon style={{ color: '#ffffff', fontSize: 20 }} name="arrow-right" type="MaterialCommunityIcons" />
                                </View>

                            </Button>
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}



