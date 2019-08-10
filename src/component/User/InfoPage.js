import React, { Component } from 'react'
import { Dimensions, View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ToastAndroid } from "react-native"
const _height = Dimensions.get('window').height
const _width = Dimensions.get('window').width
import ScreenHeader from "../ScreenHeader"
import { Container, Content, Card, Button, Icon } from "native-base"
import InfoModal from './InfoModal'
export default class InfoPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: -1
        }
    }

    static navigationOptions = {
        header: null
    }

    openFeatureModal = (item) => {
        var temp = this.featureModalObj;
        if (temp === undefined) {
        } else {
            temp.ShowGalery(item)
        }
    }

    render() {
        const { active } = this.state
        return (
            <Container>
                <Content contentContainerStyle={{ flex: 1, backgroundColor: '#f3f4f4' }}>

                    <ScreenHeader
                        headerColor="#FFFFFF"
                        androidStatusBarColor="#f3f4f4"
                        title={'Traffic Laws & Penalties'}
                        subTitle=""
                        left={-60}
                        onLeftIconPress={() => this.props.navigation.goBack()}
                    />

                    <View style={{ flex: 1, padding: 16 }}>

                        <InfoModal
                            {...this.props}
                            ref={featureModalObj => { this.featureModalObj = featureModalObj }}
                        />
                        <View style={{ flex: 1, marginBottom: 60 }}>
                            <View style={{ height: '33%', width: '100%', flexDirection: 'row' }}>
                                <View style={{ padding: 16, paddingLeft: 0, paddingRight: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(1)} style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="book" type="FontAwesome" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Document
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(2)} style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="drivers-license" type="FontAwesome" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Driving
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(3)} style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="road" type="FontAwesome" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Road
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ height: '33%', width: '100%', flexDirection: 'row' }}>
                                <View style={{ padding: 16, paddingLeft: 0, paddingRight: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(4)} style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="confirmation-number" type="MaterialIcons" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Number
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Plate Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(5)} style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="towing" type="MaterialCommunityIcons" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Towing
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(6)} style={{ height: '100%', width: '100%', backgroundColor: 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="car" type="AntDesign" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Vehicle Light
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ height: '33%', width: '100%', flexDirection: 'row' }}>
                                <View style={{ padding: 16, paddingLeft: 0, paddingRight: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(7)} style={{ height: '100%', width: '100%', backgroundColor: active === 3 ? '#adcdff' : 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="traffic-light" type="FontAwesome5" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Traffic
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(8)} style={{ height: '100%', width: '100%', backgroundColor: active === 4 ? '#adcdff' : 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="speedometer" type="MaterialCommunityIcons" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Speed
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ padding: 16, paddingRight: 0, paddingLeft: 8, width: '33%', height: '100%' }}>
                                    <TouchableOpacity onPress={() => this.openFeatureModal(9)} style={{ height: '100%', width: '100%', backgroundColor: active === 4 ? '#adcdff' : 'white', borderRadius: 8 }}>
                                        <View style={{ alignSelf: 'center', justifyContent: 'center', marginTop: 40, backgroundColor: '#f3f4f4', height: 60, width: 60, borderRadius: 30 }}>
                                            <Icon style={{ color: '#0078ff', alignSelf: 'center' }} name="traffic-cone" type="Entypo" />
                                        </View>
                                        <Text style={{ position: 'absolute', bottom: 30, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Other
                                        </Text>
                                        <Text style={{ position: 'absolute', bottom: 10, marginTop: 4, alignSelf: 'center', fontSize: 16, color: '#2a2a2a' }}>
                                            Offence
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>



                        </View>

                    </View>
                </Content>
            </Container>
        )
    }
}