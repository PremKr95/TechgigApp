import React, { Component } from "react"
import { WebView, Dimensions, Linking, TextInput, Platform, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
// import { Loader } from "../../components/app/Loader"
import ScreenHeader from "../ScreenHeader"

import firebase from "react-native-firebase"
import { Loader } from '../Loader'

import { Container, Content, Card, Button, Icon, Input } from "native-base"
const _width = Dimensions.get('window').width
import SubmitAlert from './SubmitAlert'
let a = []
let b = []
let c = []
let d = []
let e = []
let f = []
export default class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            msg: 'Hey',
            address: '',
            loading: false,
            radio: false
        }
    }

    componentWillMount() {
        this.getAddress()
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

        // firebase.database().ref('userss').on('value', (data) => {
        //     console.log("Prem")
        //     console.log(data.toJSON());
        //     a = data.toJSON().a
        // })

        if (global.ComplaintDepartment === 1) {
            firebase.database().ref('traffic').on('value', (data) => {
                console.log("Prem")
                if (data != null && data!=undefined && data.toJSON()!=null) {
                    console.log(data.toJSON());
                    a = data.toJSON().a
                }
            })
        }
        else if (global.ComplaintDepartment === 2) {
            if (global.caseType === 1) {
                firebase.database().ref('murder').on('value', (data) => {
                    console.log("Prem")
                    if (data != null && data.toJSON() != null) {
                        console.log(data.toJSON());
                        b = data.toJSON().b
                    }
                })
            }
            else if (global.caseType === 2) {
                firebase.database().ref('rape').on('value', (data) => {
                    console.log("Prem")
                    if (data != null && data.toJSON() != null) {
                        console.log(data.toJSON());
                        c = data.toJSON().c
                    }
                })
            } else if (global.caseType === 3) {
                firebase.database().ref('theft').on('value', (data) => {
                    console.log("Prem")
                    if (data != null && data.toJSON() != null) {
                        console.log(data.toJSON());
                        d = data.toJSON().d
                    }
                })
            } else if (global.caseType === 4) {
                firebase.database().ref('other').on('value', (data) => {
                    console.log("Prem")
                    if (data != null && data.toJSON() != null) {
                        console.log(data.toJSON());
                        e = data.toJSON().e
                    }
                })
            }
        }

        else if (global.ComplaintDepartment === 3) {
            firebase.database().ref('fire').on('value', (data) => {
                console.log("Prem")
                if (data != null && data.toJSON() != null) {
                    console.log(data.toJSON());
                    e = data.toJSON().e
                }
            })
        }
    }

    componentDidMount() {

    }


    static navigationOptions = {
        header: null
    }

    getAddress() {
        let lat = global.currentPosition != undefined && global.currentPosition != null && global.currentPosition.latitude != undefined && global.currentPosition.latitude != null ? global.currentPosition.latitude : '19.125512'
        console.log("TCL: UserHome -> getAddress -> lat", lat)
        let lng = global.currentPosition != undefined && global.currentPosition != null && global.currentPosition.longitude != undefined && global.currentPosition.longitude != null ? global.currentPosition.longitude : "73.012186"
        // let url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox="+lat+"%2C-"+lng+"%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=devportal-demo-20180625&app_code=mWBflFbZs6RX0hTjvUo1Bw&app_id=nxgJHAV9Agbypr4Uv760"
        // let url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=41.8842%2C-87.6388%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=nxgJHAV9Agbypr4Uv760&app_code=mWBflFbZs6RX0hTjvUo1Bw"
        let url = "https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=" + lat + "," + lng + ",250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=nxgJHAV9Agbypr4Uv760&app_code=mWBflFbZs6RX0hTjvUo1Bw"
        console.log("TCL: getAddress -> url", url)

        fetch(url).then((response) => response.json())
            .then((responseJson) => {
                console.log("TCL: getAddress -> responseJson", responseJson)
                // console.log("TCL: getAddress -> response", response)
                //   console.log("TCL: getAddress -> responseJson", JSON.stringify(responseJson))
                console.log("TCL: getAddress -> responseJson.Response.View[0].Result[0].Location.Address.Label", responseJson.Response.View[0].Result[0].Location.Address.Label)
                console.log(JSON.stringify(responseJson))
                this.setState({ address: responseJson.Response.View[0].Result[0].Location.Address.Label })
            }).catch(error => { console.log(error) })
    }

    InsertFirebase() {
        this.setState({ loading: true })
        console.log("TCL: UserHome -> InsertFirebase -> this.state.msg", this.state.msg)
        let ob = {
            "Name": this.state.msg,
            "Location": this.state.address,
            "medical": this.state.radio
        }
        if (global.ComplaintDepartment === 1) {
            a.push(ob)
            setTimeout(() => {
                firebase.database().ref('traffic').set(
                    {
                        a
                    }
                ).then(() => {
                    console.log('INSERTED traffic !');
                    var temp = this.policyFeaturesModalObj;
                    if (temp === undefined || temp === null) {
                        console.log("Temp undefined")
                    } else {
                        temp.ShowGalery()
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }, 5000);
        }
        else if (global.ComplaintDepartment === 2) {
            b.push(ob)
            if (global.caseType === 1) {
                setTimeout(() => {
                    firebase.database().ref('murder').set(
                        {
                            b
                        }
                    ).then(() => {
                        console.log('INSERTED murder !');
                        var temp = this.policyFeaturesModalObj;
                        if (temp === undefined || temp === null) {
                            console.log("Temp undefined")
                        } else {
                            temp.ShowGalery()
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }, 5000);
            } else if (global.caseType === 2) {
                c.push(ob)
                setTimeout(() => {
                    firebase.database().ref('rape').set(
                        {
                            c
                        }
                    ).then(() => {
                        console.log('INSERTED rape !');
                        var temp = this.policyFeaturesModalObj;
                        if (temp === undefined || temp === null) {
                            console.log("Temp undefined")
                        } else {
                            temp.ShowGalery()
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }, 5000);
            } else if (global.caseType === 3) {
                d.push(ob)
                setTimeout(() => {
                    firebase.database().ref('theft').set(
                        {
                            d
                        }
                    ).then(() => {
                        console.log('INSERTED theft !');
                        var temp = this.policyFeaturesModalObj;
                        if (temp === undefined || temp === null) {
                            console.log("Temp undefined")
                        } else {
                            temp.ShowGalery()
                        }
                    }).catch((error) => {
                        console.log(error);
                    });
                }, 5000);
            } else if (global.caseType === 4) {
                e.push(ob)
                setTimeout(() => {
                    firebase.database().ref('other').set(
                        {
                            e
                        }
                    ).then(() => {
                        console.log('INSERTED other !');
                        var temp = this.policyFeaturesModalObj;
                        if (temp === undefined || temp === null) {
                            console.log("Temp undefined")
                            this.setState({ loading: false })
                        } else {
                            this.setState({ loading: false })
                            temp.ShowGalery()
                        }
                    }).catch((error) => {
                        this.setState({ loading: false })
                        console.log(error);
                    });
                }, 5000);
            }
        }

        else if (global.ComplaintDepartment === 3) {
            f.push(ob)
            setTimeout(() => {
                firebase.database().ref('fire').set(
                    {
                        f
                    }
                ).then(() => {
                    console.log('INSERTED !');
                    var temp = this.policyFeaturesModalObj;
                    if (temp === undefined || temp === null) {
                        console.log("Temp undefined")
                    } else {
                        temp.ShowGalery()
                    }
                }).catch((error) => {
                    console.log(error);
                });
            }, 5000);
        }
    }



    render() {
        const { latestNews, radio } = this.state
        return (
            <Container>
                <ScreenHeader
                    headerColor="#FFFFFF"
                    androidStatusBarColor="#FFFFFF"
                    title={'News Feed'}
                    subTitle=""
                    onLeftIconPress={() => this.props.navigation.goBack()}
                    left={-50}
                    isRightIconText={false}
                // rightIconName={'Notification'}
                />

                <SubmitAlert
                    ref={policyFeaturesModalObj => { this.policyFeaturesModalObj = policyFeaturesModalObj }}
                    {...this.props}
                />
                <Content
                    scrollEnabled={true} // the view itself doesn't scroll up/down (only if all fields fit into the screen)
                    keyboardShouldPersistTaps="always" // make keyboard not disappear when tapping outside of input
                    enableAutoAutomaticScroll={false}
                    contentContainerStyle={{ flex: 1, backgroundColor: '#f3f4f4' }}>

                    {/* <SubmitAlert
                        ref={policyFeaturesModalObj => { this.policyFeaturesModalObj = policyFeaturesModalObj }}
                        {...this.props}
                    /> */}
                    <Loader message={'Submitting Complain'} loading={this.state.loading} />
                    <Text style={{ margin: 16, fontSize: 28, fontWeight: '500', color: '#2a2a2a' }}>Lodge A Complaint With Us</Text>
                    <Card style={{ alignSelf: 'center', backgroundColor: 'red', width: '90%', alignContent: 'center', justifyContent: 'center', margin: 20, marginVertical: 16, height: 100 }}>
                        <TextInput
                            {...this.props}
                            editable={true}
                            multiline={true}
                            style={{ backgroundColor: 'white', alignSelf: 'center', borderRadius: 4, width: '100%', height: 100, marginVertical: 16 }}
                            onChangeText={(text) => this.setState({ msg: text })}
                        />
                    </Card>
                    <View style={{ width: _width - 40 }}>
                        <Text style={{ marginBottom: 0, margin: 16, marginLeft: 20, fontSize: 16, fontWeight: '500', color: '#2a2a2a' }}>Select Location</Text>
                    </View>
                    <Card style={{ alignSelf: 'center', marginTop: 8, width: '90%', alignContent: 'center', justifyContent: 'center', margin: 20, marginVertical: 16 }}>
                        <TextInput
                            {...this.props}
                            editable={true}
                            maxLength={40}
                            multiline={true}
                            style={{ borderRadius: 4, backgroundColor: 'white', height: 40, width: '100%', alignSelf: 'center' }}
                        />
                    </Card>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 8, width: '90%', alignContent: 'center',  margin: 20, marginVertical: 16 }}>
                        <Text 
                            style={{textAlignVertical:'center', marginBottom: 0,marginTop:20, margin: 16,marginTop:0, marginLeft: 0, fontSize: 16, fontWeight: '500', color: '#2a2a2a' }}>Any Medical Support needed ?</Text>
                        <Icon 
                        onPress={() => this.setState(prevState => ({
                            radio: !prevState.radio
                        }))}
                        style={{alignSelf:'center', color: 'green', fontSize: 24 }} name={!radio ? "checksquareo" : "checksquare"} type="AntDesign" />
                    </View>

                </Content>

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
                        onPress={() =>
                            this.InsertFirebase()}
                        style={{ height: '100%', width: '100%', backgroundColor: '#2f4efa', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#ffffff', minWidth: '20%', fontSize: 16, }}>Submit</Text>
                    </Button>
                </Card>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    headingText: {
        fontFamily: "Roboto_medium",
        fontSize: 16,
        color: "#212121"
    },
    headingView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 15,
        padding: 3
    },
    cardOuterView: { width: "100%", marginTop: 10 },
    image: { width: 20, height: 20 },
    viewBottom: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    lineHorizontal: {
        width: "85%",
        backgroundColor: "#f3f3f3",
        height: 1,
        alignSelf: "center",
        marginLeft: 0
    },
    bottomView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginStart: 5
    },
    dot: {
        width: 4,
        height: 4,
        borderRadius: 2,
        alignSelf: "center",
        backgroundColor: "#4A4A4A",
        margin: 5
    },

    bottomTexts: { fontSize: 11, color: "#4A4A4A", marginLeft: 4 },

    details: {
        color: "#202020",
        fontSize: 13,
        textAlign: "justify"
    },
    heading: { fontWeight: "700", color: "#dbb003" },

    lineNcontentView: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "90%"
    },
    likeIcon: {
        fontSize: 17,
        color: "white",
        paddingLeft: 15,
        paddingRight: 15,
        padding: 6
    },
    likeText: { fontSize: 16, color: "white" },
    contentView: {
        flexDirection: "column",
        justifyContent: "space-around",
        height: 150,
        padding: 10
    },
    leftLine: {
        width: 3,
        backgroundColor: "green",
        height: "70%",
        borderRadius: 8
    },
    container: {
        height: 200,
        padding: 0,
        justifyContent: "center",
        backgroundColor: "#f7f7f7"
    },
    card: {
        borderRadius: 4,
        elevation: 2,
        height: 150,
        backgroundColor: "white"
    },
    likedView: {
        height: 28,
        position: "absolute",
        backgroundColor: "#ffbd1a",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderRadius: 14,
        right: -5,
        top: 5,
        borderBottomRightRadius: 2,
        borderTopRightRadius: 2
    }
});


