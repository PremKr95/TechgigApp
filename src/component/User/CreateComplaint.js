import React, { Component } from "react"
import { WebView, Dimensions, Linking, TextInput, Platform, View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native"
// import { Loader } from "../../components/app/Loader"
import ScreenHeader from "../ScreenHeader"

import firebase from "react-native-firebase"

import { Container, Content, Card, Button, Icon, Input } from "native-base"
const _width = Dimensions.get('window').width
import SubmitAlert from './SubmitAlert'
let a = []
export default class UserHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
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

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        firebase.database().ref('userss').on('value', (data) => {
            console.log("Prem")
            console.log(data.toJSON());
            a = data.toJSON().a
        })
    }

    componentDidMount() {
    }


    static navigationOptions = {
        header: null
    }

    // openPolicyFeatureModal = (title, description, item) => {
    //     var temp = this.policyFeaturesModalObj;
    //     if (temp === undefined) {
    //         console.log("Temp undefined")
    //     } else {
    //         temp.ShowGalery(title, description, false, item)
    //     }
    // }


    InsertFirebase() {
        let ob = {
            "Name": this.state.msg,
            "Age": "24"
        }

        a.push(ob)

        setTimeout(() => {
            firebase.database().ref('userss').set(
                {
                    a
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



    render() {
        const { latestNews } = this.state
        return (
            <Container>
                <ScreenHeader
                    headerColor="#FFFFFF"
                    androidStatusBarColor="#FFFFFF"
                    title={'News Feed'}
                    subTitle=""
                    onLeftIconPress={() => this.props.navigation.goBack()}
                    isRightIconText={false}
                // rightIconName={'Notification'}
                />

                <SubmitAlert
                    ref={policyFeaturesModalObj => { this.policyFeaturesModalObj = policyFeaturesModalObj }}
                    {...this.props}
                />
                <Content contentContainerStyle={{ flex: 1, backgroundColor: '#f3f4f4' }}>

                    {/* <SubmitAlert
                        ref={policyFeaturesModalObj => { this.policyFeaturesModalObj = policyFeaturesModalObj }}
                        {...this.props}
                    /> */}
                    <Text style={{ margin: 16, fontSize: 28, fontWeight: '500', color: '#2a2a2a' }}>Lodge A Complaint With Us</Text>
                    <View style={{ margin: 20, height: 100, width: _width - 40 }}>
                        <TextInput
                            {...this.props}
                            editable={true}
                            maxLength={40}
                            multiline={true}
                            style={{ backgroundColor: 'red', height: 100 }}
                        />
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
                            onPress={() =>
                                this.InsertFirebase()}
                            style={{ height: '100%', width: '100%', backgroundColor: '#2f4efa', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', minWidth: '20%', fontSize: 16, }}>Submit</Text>
                        </Button>
                    </Card>

                </Content>
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


