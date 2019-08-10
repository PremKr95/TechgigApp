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
var b = []
var c = []
var d = []
var e = []

export default class TrafficPoliceHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 1,
            selectedTabForUserComplaints: 0
        }
    }

    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        console.log('CompoenntWillMont')
        var firebaseConfig = {
            apiKey: "AIzaSyBYF-SrdAWSYXyGf38R_YKRV1_4mw1X85E",
            authDomain: "techigfinal.firebaseapp.com",
            databaseURL: "https://techigfinal.firebaseio.com",
            projectId: "techigfinal",
            storageBucket: "techigfinal.appspot.com",
            messagingSenderId: "529831432325",
            appId: "1:529831432325:web:5f75f8b37e650057"
        };

        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        console.log('firebase')
        firebase.database().ref('murder').on('value', (data) => {
            console.log(data.toJSON());
            if (data != undefined && data != null && data.toJSON()!=null && data.toJSON()!=undefined) 
                     b = data.toJSON().b
            if (b!=undefined && b!=null && b.length > 1)
                b = b.reverse()
            this.forceUpdate(
            )
            this.setState({ selectedTabForUserComplaints: 0 })
        })

        firebase.database().ref('rape').on('value', (data) => {
            console.log(data.toJSON());
            if (data != undefined && data != null && data.toJSON()!=null && data.toJSON()!=undefined) 
                c = data.toJSON().c
            if (c!=undefined && c!=null && c.length > 1)
                c = c.reverse()
            this.forceUpdate(
                this.setState({ selectedTabForUserComplaints: 1 })
            )
        })

        firebase.database().ref('theft').on('value', (data) => {
            console.log(data.toJSON());
            if (data != undefined && data != null && data.toJSON()!=null && data.toJSON()!=undefined) 
                d = data.toJSON().d
            if (d!=undefined && d!=null && d.length > 1)
                d = d.reverse()
            this.forceUpdate()
            this.setState({ selectedTabForUserComplaints: 2 })
            
        })

        firebase.database().ref('other').on('value', (data) => {
            console.log(data.toJSON());
            if (data != undefined && data != null && data.toJSON!=null && data.toJSON!=undefined) 
                e = data.toJSON().e
            if (e!=undefined && e!=null &&  e.length > 1)
                e = e.reverse()
            this.forceUpdate()
                this.setState({ selectedTabForUserComplaints: 3 })
            
        })

    }

    ListendToFireBase(value) {
        if (value === 0) {
            firebase.database().ref('murder').on('value', (data) => {
                console.log(data.toJSON());
                if (data != undefined && data != null) {
                    b = data.toJSON().b
                }
            })
        }
        else if (value === 1) {
            firebase.database().ref('rape').on('value', (data) => {
                console.log(data.toJSON());
                if (data != undefined && data != null) {
                    c = data.toJSON().c
                }
            })
        }
        else if (value === 2) {
            firebase.database().ref('theft').on('value', (data) => {
                console.log(data.toJSON());
                if (data != undefined && data != null) {
                    d = data.toJSON().d
                }
            })
        }
        else if (value === 3) {
            firebase.database().ref('other').on('value', (data) => {
                console.log(data.toJSON());
                if (data != undefined && data != null) {
                    e = data.toJSON().e
                }
            })
        }

        this.forceUpdate()
        this.setState({})

    }

    InsertFirebase() {
        let ob = {
            "Name": "Hello",
            "Age": "24"
        }

        a.push(ob)

        setTimeout(() => {
            firebase.database().ref('complaint').set(
                {
                    a
                }
            ).then(() => {
                console.log('INSERTED !');
            }).catch((error) => {
                console.log(error);
            });
        }, 5000);
    }


    componentDidMount() {
        this.props.navigation.addListener('didFocus', (payload) => {
            this.setState({ selectedTab: 1 })
        });
    }

    _renderUserComplaints() {
        console.log("TCL: TrafficPoliceHome -> _renderUserComplaints -> _renderUserComplaints", b, c , d ,e)
        const { selectedTabForUserComplaints } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#f3f4f4' }}>
                <View
                    style={{
                        height: 66,
                        flexDirection: "row",
                        position: 'absolute',
                        top: -8,
                        backgroundColor: '#F3F4F4',
                        marginBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        padding: 16,
                        marginTop: 10,
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >

                    <Button
                        block
                        onPress={() => {
                            this.ListendToFireBase(0)
                            this.setState({ selectedTabForUserComplaints: 0 })
                        }}
                        style={{ alignItems: 'center', height: '100%', borderRadius: 17, width: '24%', backgroundColor: selectedTabForUserComplaints === 0 ? '#2f4efa' : '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: selectedTabForUserComplaints === 0 ? '#ffffff' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Murder</Text>
                    </Button>


                    <Button
                        block
                        onPress={() => {
                            this.ListendToFireBase(1)
                            this.setState({ selectedTabForUserComplaints: 1 })
                        }}
                        style={{ alignItems: 'center', height: '100%', borderRadius: 17, width: '24%', backgroundColor: selectedTabForUserComplaints === 1 ? '#2f4efa' : '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: selectedTabForUserComplaints === 1 ? '#ffffff' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Rape</Text>
                    </Button>

                    <Button
                        block
                        onPress={() => {
                            this.ListendToFireBase(2)
                            this.setState({ selectedTabForUserComplaints: 2 })
                        }}
                        style={{ alignItems: 'center', height: '100%', borderRadius: 17, width: '24%', backgroundColor: selectedTabForUserComplaints === 2 ? '#2f4efa' : '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: selectedTabForUserComplaints === 2 ? '#ffffff' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Theft</Text>
                    </Button>

                    <Button
                        block
                        onPress={() => {
                            this.ListendToFireBase(4)
                            this.setState({ selectedTabForUserComplaints: 3 })
                        }}
                        style={{ alignItems: 'center', height: '100%', borderRadius: 17, width: '24%', backgroundColor: selectedTabForUserComplaints === 3 ? '#2f4efa' : '#e0e0e0', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ alignSelf: 'center', textAlign: 'center', color: selectedTabForUserComplaints === 3 ? '#ffffff' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Other</Text>
                    </Button>

                </View>

                <FlatList
                    extraData={this.state}
                    // data={a && a != undefined && a != null && a.length > 0 ? a : dummyArray}
                    data={selectedTabForUserComplaints === 0 ? b : selectedTabForUserComplaints === 1 ? c : selectedTabForUserComplaints === 2 ? d : selectedTabForUserComplaints === 3 ? e :  null}
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

    // _renderListView() {
    //     return (
    //         <FlatList
    //             extraData={this.state}
    //             data={a && a != undefined && a != null && a.length > 0 ? a : dummyArray}
    //             renderItem={item => this._renderListViewItems(item)}
    //             keyExtractor={(item, index) => index.toString()}
    //         />
    //     )
    // }

    // _renderListViewItems() {
    //     console.log("_renderListViewItems", item)
    //     return (
    //         <Card style={{ backgroundColor: '#ffffff', paddingLeft: 16, paddingRight: 16, marginTop: 16, height: 120, width: '92%', alignSelf: 'center', borderRadius: 8 }}>
    //             <View>
    //                 <View style={{ height: '33%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 16, justifyContent: 'center', width: '100%' }}>
    //                     <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>BR Ambedkar Road, Ghansoli, Mumbai, 400701</Text>
    //                 </View>

    //                 <View style={{ alignSelf: 'center', height: 1, width: '80%', backgroundColor: '#979797', opacity: 0.1 }} />
    //                 <View style={{ height: '33%', alignItems: 'center', flexDirection: 'row', paddingLeft: 16, justifyContent: 'space-between', width: '100%' }}>
    //                     <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Dist. 2km</Text>
    //                     <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Congestion time: 45 mins</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', alignItems: 'center', height: '33%', width: '100%' }}>
    //                     <TouchableOpacity onPress={() => BridgeModule.navigateToLocation()}>
    //                         <Text style={{ color: '#0065ff', fontSize: 14, fontWeight: '500' }}>CLICK TO NAVIGATE</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         </Card>
    //     )
    // }

    // _renderFooter() {
    //     return (
    //         <View style={{ height: 60, width: '100%' }} />
    //     )
    // }


    // _renderMapView() {
    //     return (
    //         <View style={{
    //             flex: 1,
    //             justifyContent: "center",
    //             alignItems: "center"
    //         }}>
    //             <WebView
    //                 originWhitelist={["*"]}
    //                 source={{
    //                     html: `<html>
    //   <head>
    //   <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    //   <script src="http://js.api.here.com/v3/3.0/mapsjs-core.js"
    //   type="text/javascript" charset="utf-8"></script>
    //   <script src="http://js.api.here.com/v3/3.0/mapsjs-service.js"
    //   type="text/javascript" charset="utf-8"></script>
    //   </head>
    //   <body>
    //   <div style="width: 640px; height: 480px" id="mapContainer"></div>
    //   <script>
    //     // Initialize the platform object:
    //     var platform = new H.service.Platform({
    //     'app_id': '{nxgJHAV9Agbypr4Uv760}',
    //     'app_code': '{mWBflFbZs6RX0hTjvUo1Bw}'
    //     });

    //     // Obtain the default map types from the platform object
    //     var maptypes = platform.createDefaultLayers();

    //     // Instantiate (and display) a map object:
    //     var map = new H.Map(
    //     document.getElementById('mapContainer'),
    //     maptypes.normal.map,
    //     {
    //       zoom: 10,
    //       center: { lng: 13.4, lat: 52.51 }
    //     });
    //   </script>
    //   </body>
    // </html>`
    //                 }}
    //             />
    //         </View>
    //     );
    // }








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
                            <Text style={{ color: selectedTab === 2 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>List View</Text>
                        </Button>
                    </Card>

                </Content>
            </Container>
        )
    }
}


