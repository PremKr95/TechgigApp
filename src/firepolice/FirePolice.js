import React, { Component } from "react"
import { StyleSheet, WebView, Dimensions, View, Text, FlatList, TouchableOpacity } from "react-native"
// import { Loader } from "../../components/app/Loader"
import ScreenHeader from "../component/ScreenHeader"
import { Container, Content, Card, Button } from "native-base"
import HTML from 'react-native-render-html';
const _width = Dimensions.get('window').width
import firebase from "react-native-firebase"

import BridgeModule from '../../Bridging'

var dummyArray = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']
var e = []

export default class TrafficPoliceHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 1,
        }
    }

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBYF-SrdAWSYXyGf38R_YKRV1_4mw1X85E",
            authDomain: "techigfinal.firebaseapp.com",
            databaseURL: "https://techigfinal.firebaseio.com",
            projectId: "techigfinal",
            storageBucket: "techigfinal.appspot.com",
            messagingSenderId: "529831432325",
            appId: "1:529831432325:web:5f75f8b37e650057"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.database().ref('fire').on('value', (data) => {
            console.log("Prem")
            console.log(data.toJSON());
            e = data.toJSON().e
            this.setState({ selectedTab: 2 })
            this.forceUpdate()
        })
    }

    ListendToFireBase(value) {
           firebase.database().ref('fire').on('value', (data) => {
                console.log(data.toJSON());
                if (data != undefined && data != null) {
                    e = data.toJSON().e
                }
            })
        this.forceUpdate()
        this.setState({})

    }


    componentDidMount() {
        this.props.navigation.addListener('didFocus', (payload) => {
            this.setState({ selectedTab: 1 })
        });
    }

    _renderUserComplaints() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f3f4f4' }}>
    
                <FlatList
                    extraData={this.state}
                    // data={a && a != undefined && a != null && a.length > 0 ? a : dummyArray}
                    data={e}
                    renderItem={(item) => this._renderItem(item)}
                    style={{ marginTop: 56 }}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        )
    }

    _renderItem(item) {
        console.log("TCL: TrafficPoliceHome -> _renderItem -> item", item)
        // console.log("_renderListViewItems", item, a, JSON.stringify(a))
        return (
            <Card style={{ backgroundColor: '#ffffff', paddingLeft: 16, paddingRight: 16, marginTop: 16, height: 200, width: '92%', alignSelf: 'center', borderRadius: 8 }}>
                <View>
                    <View style={{ marginTop: 10, height: 40, justifyContent: 'center', paddingHorizontal: 10, alignItems: 'flex-start', justifyContent: 'center', width: '100%' }}>
                        <Text numberOfLines={1} style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>{item.item!=undefined && item.item!=null && item.item.Location!=undefined && item.item.Location!=null && item.item.Location}</Text>
                    </View>

                    <View style={{ alignSelf: 'center', height: 1, width: '80%', backgroundColor: '#979797', opacity: 0.1 }} />
                    <View style={{ height: 34, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10, justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Dist. 2km</Text>
                        <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Congestion time: 45 mins</Text>
                    </View>

                    <View style={{ paddingHorizontal: 10, alignSelf: 'center', justifyContent: 'center', width: '100%', height: 70, backgroundColor: 'rgba(216,216,216,0.26)', borderRadius: 4, }}>
                        <Text numberOfLines={3} style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>
                            {item.item!=undefined && item.item!=null && item.item.Name!=undefined && item.item.Name!=null && item.item.Name && item.item.Name}
                        </Text>
                    </View>


                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 44, width: '100%' }}>
                        <TouchableOpacity onPress={() => BridgeModule.navigateToLocation()}>
                            <Text style={{ color: '#0065ff', fontSize: 14, fontWeight: '500' }}>CLICK TO NAVIGATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        )
    }


    render() {
        const { selectedTab } = this.state
        return (
            <Container>
                <ScreenHeader
                    headerColor="#FFFFFF"
                    androidStatusBarColor="#FFFFFF"
                    title={selectedTab === 0 ? 'Map View' : 'List View'}
                    subTitle=""
                    left={-50}
                    onLeftIconPress={() => this.props.navigation.goBack()}
                />

                <Content contentContainerStyle={{ flex: 1 }}>

                    <View style={{ backgroundColor: '#f3f4f4', flex: 1 }}>
                        {selectedTab === 0 ?
                            <View style={{ backgroundColor: 'blue', flex: 1 }} >
                                {this._renderUserComplaints()}
                            </View>
                            :
                            this._renderUserComplaints()
                        }
                    </View>
                    <Card
                        style={{
                            borderTopColor: "#ECECEC",
                            borderTopWidth: 2,
                            height: 56,
                            flexDirection: "row",
                            position: 'absolute',
                            bottom: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            elevation: 2,
                            justifyContent: 'space-between'
                        }}
                    >

                        <Button
                            block
                            onPress={() => {
                                this.setState({ selectedTab: 0 })
                                BridgeModule.navigateToPolice()
                            }
                            }
                            style={{ height: '100%', width: '50%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: selectedTab === 0 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Map View</Text>

                        </Button>

                        <View style={{ height: 42, width: 1.2, alignSelf: 'center', backgroundColor: '#979797' }} />


                        <Button
                            block
                            onPress={() => this.setState({ selectedTab: 1 })}
                            style={{ height: '100%', width: '50%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: selectedTab === 1 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>List View</Text>
                        </Button>
                    </Card>

                </Content>
            </Container>
        )
    }
}


