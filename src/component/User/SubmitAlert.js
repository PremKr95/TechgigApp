import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions, StyleSheet, Modal, View, Image, Text, TextInput } from 'react-native'
let { height, width } = Dimensions.get('window');
import { Icon,Card,Button } from 'native-base'
import { MaterialDialog } from 'react-native-material-dialog'
export default class SubmitAlert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        };
    }

    ShowGalery() {
        this.setState({
            modalVisible: true
        })
    }
    handleSwipeDown = (index) => {
        this.setState({ modalVisible: false })
        this.props.navigation.navigate('UserHome')
    }

    render() {
        return (
            <MaterialDialog
                visible={this.state.modalVisible}
                onCancel={() => {
                    this.setState({ modalVisible: false })
                }}
            >
                <View style={{ width: width-80,height:200 }}>


                    <Text style={{ fontSize:18,lineHeight:27, marginTop: 10, alignSelf: 'center', width: '100%', lineHeight: 21, fontSize: 14, color: '#2a2a2a', fontFamily: 'Roboto-medium' }}>
                        Your Complaint is registered with us. Nearest Police will take the action immediately.Thanks for your support. 
                        </Text>                   

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
                        }}>
                        <Button
                            block
                            onPress={()=>this.handleSwipeDown()}
                            style={{ height: '100%', width: '100%', backgroundColor: '#2f4efa', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#ffffff', minWidth: '20%', fontSize: 16, }}>OK</Text>
                        </Button>
                    </Card>
                </View>
            </MaterialDialog>
        );
    }
}
const styles = StyleSheet.create({

    contentContainer: {
        marginTop: 0,
        paddingVertical: 0,
        backgroundColor: 'black',
    },
    welcome: {
        flex: 1,
        backgroundColor: 'black',
        margin: 0
    }
});

