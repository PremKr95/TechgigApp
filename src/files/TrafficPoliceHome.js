import React, { Component } from "react"
import { StyleSheet, WebView, Dimensions, View, Text, FlatList, TouchableOpacity } from "react-native"
// import { Loader } from "../../components/app/Loader"
import ScreenHeader from "../component/ScreenHeader"
import { Container, Content, Card, Button } from "native-base"
import HTML from 'react-native-render-html';
const _width = Dimensions.get('window').width
import BridgeModule from '../../Bridging'
import firebase from 'react-native-firebase'
var dummyArray = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5']
var trafficData
var a = []
export default class TrafficPoliceHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 0,
            selectedTabForUserComplaints: 1,
        }
    }

    static navigationOptions = {
        header: null
    }

    componentWillMount() {

        trafficData = this.props.navigation.getParam('trafficData', 'no-data')
        trafficData.sort(function (a, b) {
            return parseFloat(a.length) - parseFloat(b.length);
        });
        trafficData = trafficData.reverse()
        console.log("TCL: TrafficPoliceHome -> componentWillMount -> trafficData", trafficData)

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

        firebase.database().ref('traffic').on('value', (data) => {
            console.log("Prem")
            console.log(data.toJSON());
            a = data.toJSON().a
            this.setState({ selectedTab: 2 })
            this.forceUpdate()
        })

    }
    componentDidMount() {
        this.props.navigation.addListener('didFocus', (payload) => {
            this.setState({ selectedTab: 1 })
        });

    }

    _renderUserComplaints() {
        const { selectedTabForUserComplaints } = this.state
        return (
            <View style={{ flex: 1, backgroundColor: '#f3f4f4' }}>
                <Card
                    style={{
                        borderTopColor: "#ECECEC",
                        borderTopWidth: 2,
                        height: 56,
                        flexDirection: "row",
                        position: 'absolute',
                        top: -8,
                        marginBottom: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        elevation: 2,
                        justifyContent: 'space-between'
                    }}
                >

                    <Button
                        block
                        onPress={() => this.setState({ selectedTabForUserComplaints: 0 })}
                        style={{ height: '100%', width: '50%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: selectedTabForUserComplaints === 0 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Resolved</Text>

                    </Button>

                    <View style={{ height: 42, width: 1.2, alignSelf: 'center', backgroundColor: '#979797' }} />

                    <Button
                        block
                        onPress={() => this.setState({ selectedTabForUserComplaints: 1 })}
                        style={{ height: '100%', width: '50%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: selectedTabForUserComplaints === 1 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Pending</Text>
                    </Button>
                </Card>

                <FlatList
                    extraData={this.state}
                    data={a != undefined && a != null && a.length > 0 ? a.reverse() : dummyArray}
                    // data={a}
                    renderItem={item => this._renderItem(item)}
                    style={{ marginTop: 56 }}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={() => this._renderFooter()}
                />

            </View>
        )
    }

    _renderItem(item) {
        console.log("TCL: TrafficPoliceHome -> _renderItem -> item", item, a)
        return (
            <Card style={{ backgroundColor: '#ffffff', paddingLeft: 16, paddingRight: 16, marginTop: 16, height: 190, width: '92%', alignSelf: 'center', borderRadius: 8 }}>
                <View style={{ marginTop: 10 }}>
                    <View style={{ paddingLeft: 10, paddingRight: 10, flexDirection: 'row', height: 50 }}>
                        <View style={{ alignSelf: 'center', backgroundColor: 'black', height: 36, width: 36, borderRadius: 18 }} />
                        <View style={{ paddingLeft: 16, justifyContent: 'center', width: '20%' }}>
                            <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Prem</Text>
                        </View>
                        <View style={{ height: 28, width: 1.2, alignSelf: 'center', backgroundColor: '#979797' }} />

                        <View style={{ fontSize: 12, paddingLeft: 10, width: '70%', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 14, color: '#2a2a2a', lineHeight: 18 }}>{item != undefined && item != null && item.item != undefined && item.item != null &&
                                item.item.Location != undefined && item.item.Location != null ? item.item.Location : "BR Ambedkar Road, Ghansoli , Mumbai , 400701"
                            }</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10, alignSelf: 'center', justifyContent: 'center', width: '100%', height: 80, backgroundColor: 'rgba(216,216,216,0.26)', borderRadius: 4, }}>
                        <Text numberOfLines={3} style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>
                            {item != undefined && item != null && item.item != undefined && item.item != null &&
                                item.item.Name != undefined && item.item.Name != null ? item.item.Name : "Hey @NaviMumTrafficDept. Been stuck in traffic for 45 mins with zero movement. No traffic management. Pls. help"}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 40, }}>
                        <TouchableOpacity onPress={() => BridgeModule.navigateToLocation()}>
                            <Text style={{ color: '#0065ff', marginTop: 8, fontSize: 14, fontWeight: '500' }}>CLICK TO NAVIGATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        )
    }

    _renderListView() {
        return (
            <FlatList
                style={{ marginTop: 10 }}
                extraData={this.state}
                data={trafficData != null && trafficData != 'no-data' ? trafficData : dummyArray}
                renderItem={(item) => this._renderListViewItems(item)}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={() => this._renderFooter()}
            />
        )
    }

    _renderListViewItems(item) {
        console.log("TCL: TrafficPoliceHome -> _renderListViewItems -> item", item)
        // const {trafficDetails}= this.state
        // if(trafficDetails!=null){
        return (
            <Card style={{ backgroundColor: '#ffffff', paddingLeft: 16, paddingRight: 16, marginTop: 16, height: 120, width: '92%', alignSelf: 'center', borderRadius: 8 }}>
                <View>
                    <View style={{ height: '33%', justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 16, justifyContent: 'center', width: '100%' }}>
                        <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}> {item.item != undefined && item.item.name != undefined ? item.item.name : "BR Ambedkar Road, Ghansoli, Mumbai, 400701"}</Text>
                    </View>

                    <View style={{ alignSelf: 'center', height: 1, width: '80%', backgroundColor: '#979797', opacity: 0.1 }} />
                    <View style={{ height: '33%', alignItems: 'center', flexDirection: 'row', paddingLeft: 16, justifyContent: 'space-between', width: '100%' }}>
                        <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Dist. {item.item != undefined && item.item.length != undefined ? item.item.length + " km" : '2km'}  </Text>
                        <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Congestion time: 45 mins</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: '33%', width: '100%' }}>
                        <TouchableOpacity onPress={() => BridgeModule.navigateToLocation()}>
                            <Text style={{ color: '#0065ff', fontSize: 14, fontWeight: '500' }}>CLICK TO NAVIGATE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Card>
        )
    }
    // else{
    //     return (
    //         <Card style={{ backgroundColor: '#ffffff', paddingLeft: 16, paddingRight: 16, marginTop: 16, height: 120, width: '92%', alignSelf: 'center', borderRadius: 8 }}>
    //             <View>
    //                 <View style={{ height: '33%', justifyContent: 'center',alignItems:'flex-start', paddingLeft: 16, justifyContent: 'center', width: '100%' }}>
    //                     <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>BR Ambedkar Road, Ghansoli, Mumbai, 400701</Text>
    //                 </View>

    //                 <View style={{ alignSelf: 'center', height: 1, width: '80%', backgroundColor: '#979797', opacity: 0.1 }} />
    //                 <View style={{ height: '33%',alignItems:'center',flexDirection:'row', paddingLeft: 16, justifyContent: 'space-between', width: '100%' }}>
    //                     <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Dist. 2km</Text>
    //                     <Text style={{ color: '#2a2a2a', fontSize: 15, lineHeight: 18 }}>Congestion time: 45 mins</Text>
    //                 </View>
    //                 <View style={{ justifyContent: 'center', alignItems: 'center', height: '33%',width:'100%' }}>
    //                     <TouchableOpacity onPress={()=>BridgeModule.navigateToLocation()}>
    //                         <Text style={{ color: '#0065ff', fontSize: 14, fontWeight: '500' }}>CLICK TO NAVIGATE</Text>
    //                     </TouchableOpacity>
    //                 </View>
    //             </View>
    //         </Card>
    //     )
    // }
    // }

    _renderFooter() {
        return (
            <View style={{ height: 60, width: '100%' }} />
        )
    }


    _renderMapView() {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <WebView
                    originWhitelist={["*"]}
                    source={{
                        html: `<html>
      <head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="http://js.api.here.com/v3/3.0/mapsjs-core.js"
      type="text/javascript" charset="utf-8"></script>
      <script src="http://js.api.here.com/v3/3.0/mapsjs-service.js"
      type="text/javascript" charset="utf-8"></script>
      </head>
      <body>
      <div style="width: 640px; height: 480px" id="mapContainer"></div>
      <script>
        // Initialize the platform object:
        var platform = new H.service.Platform({
        'app_id': '{nxgJHAV9Agbypr4Uv760}',
        'app_code': '{mWBflFbZs6RX0hTjvUo1Bw}'
        });
    
        // Obtain the default map types from the platform object
        var maptypes = platform.createDefaultLayers();
    
        // Instantiate (and display) a map object:
        var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.normal.map,
        {
          zoom: 10,
          center: { lng: 13.4, lat: 52.51 }
        });
      </script>
      </body>
    </html>`
                    }}
                />
            </View>
        );
    }

    render() {
        const { selectedTab } = this.state
        return (
            <Container>
                <ScreenHeader
                    headerColor="#FFFFFF"
                    androidStatusBarColor="#FFFFFF"
                    title={selectedTab === 0 ? 'Traffic Control' : selectedTab === 1 ? 'Traffic Details (रहदारी) ' : 'User Complaints'}
                    subTitle=""
                    left={selectedTab === 1 ? -40 : -50}
                    onLeftIconPress={() => this.props.navigation.goBack()}
                />

                <Content contentContainerStyle={{ flex: 1 }}>

                    <View style={{ backgroundColor: '#f3f4f4', flex: 1 }}>
                        {selectedTab === 0 ?
                            this._renderListView()
                            : selectedTab === 1 ?
                                this._renderListView()
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
                                BridgeModule.navigateToExample()
                            }
                            }
                            style={{ height: '100%', width: '32%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: selectedTab === 0 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>Map View</Text>

                        </Button>

                        <View style={{ height: 42, width: 1.2, alignSelf: 'center', backgroundColor: '#979797' }} />

                        <Button
                            block
                            onPress={() => this.setState({ selectedTab: 1 })}
                            style={{ height: '100%', width: '32%', backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: selectedTab === 1 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>List View</Text>
                        </Button>

                        <View style={{ height: 42, width: 1.2, alignSelf: 'center', backgroundColor: '#979797' }} />

                        <Button
                            block
                            onPress={() => this.setState({ selectedTab: 2 })}
                            style={{ height: '100%', width: '36%', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: selectedTab === 2 ? '#2f4efa' : '#2a2a2a', minWidth: '20%', fontSize: 16, }}>User Complaints</Text>

                        </Button>



                    </Card>

                </Content>
            </Container>
        )
    }
}


