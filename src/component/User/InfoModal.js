import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Dimensions, StyleSheet, Modal, View, Image, Text, TextInput, FlatList } from 'react-native'
let { height, width } = Dimensions.get('window');
import { Picker, Button} from 'native-base'
import { MaterialDialog } from "react-native-material-dialog";
var dummyArray = ['1', '2', '3', '4', '5']
import { Table, Row, Rows } from 'react-native-table-component';

export default class InfoModal extends Component {

    constructor(props) {
        super(props)
        mThis = this;
        this.state = {
            modalVisible: false,
            _item: {},
            tableHead: ['Offences', 'PENALTY/ SENTENCE', 'SECTION'],
            documentTableData: [
                ['Driving without carrying a Valid Driving License.', 'INR 5000** and/ or imprisonment for up to 3 months	', '3 r/w 181 Motor Vehicle Act'],
                ['Permitting your vehicle to be driven by an individual who does not hold a Valid Driving License.', 'INR 5000** and/ or imprisonment for up to 3 months', 'c5 r/w 180 Motor Vehicle Act'],
                ['Not carrying the required documents as specified in Motor Vehicle Act while driving.', 'INR 500**	', '130(3) r/w 177 Motor Vehicle Act'],
                ['Driving without a Valid Auto Insurance', 'INR 2000 ** and/ or imprisonment for up to 3 months	', '130 r/w 177 Motor Vehicle Act'], 
            ],
            drivingTableData: [
                ['Driving by Minor (an indiviudal aged below 18 years)', 'Rs. 500/-', '4 r/w 181 MVA'],
                ['Driving without Helmet', 'Rs. 100/-', '129 r/w177 MVA	'],
                ['Driving without fastening the seat belts', 'Rs. 100/-', '138(3) CMVR'],
                ['Driving in the center and not to left side', 'Rs. 100/-', '2 RRR r/w 177 MVA'],   
            ],
            roadTableData: [
                ['Violation of Yellow Line', 'Rs. 100/-', '119/177 MVA	'],
                ['Violation of Mandatory Signs	', 'Rs. 100/-', '119/177 MVA'],
                
            ],
            numberTableData: [
                ['Use of Offensive Number Plate for vehicle used in driving	', 'Rs.100/-', 'CMVR 105 (2) (ii) 177 MVA	'],            
            ],
            towingTableData: [
                ['Two Wheeler	', 'Rs.100/-	', 'RRR 177 MVA'],
                ['Car , Jeep, Taxi, Auto Rickshaw	', 'Rs.200/-	', 'RRR 177 MVA'],
                ['Truck, Tanker, Trailor', 'Rs.600/-	', 'RRR 177 MVA'],
                
            ],
            vehicleLightTableData: [
                ['Improper use of headlights/tail light for vehicle used in driving	', 'Rs. 100/-	', 'CMVR 105 (2) (ii) 177 MVA	'],            
            ],
            trafficTableData: [
                ['Disobeying Traffic Police Officer in uniform', 'Rs. 100/-', '119 MVA 22(a) RRR 177 MVA'],
                
            ],
            speedTableData: [
                ['Exceeding the prescribed Speed Limits	', 'Up to Rs.1000/-', '112-183 MVA'],
                ['Overtaking perilously', 'Rs.100/-', '6 (a) RRR r/w 177 MVA'],
                ['Overtaking from Wrong Side', 'Rs. 100/-', 'RRR 6/1/177 MVA'],                
            ],
            otherTableData: [
                ['Disobeying Lawful Directions', 'Rs. 500/-', '132/179 MVA'],
                ['Using Mobile Phone while Driving', 'Up to 1000/-', '184 MVA'],
                ['Leaving vehicle in unsafe position', 'Rs. 100/-', 'Rs. 100/-'],
                ['Playing music while Driving', 'Rs. 100/-', '102/177 MVA'],
                ['Driving when mentally or physically unfit', 'Court Challan', '186 MVA'],
            ]

        };
    }


    ShowGalery(item) {
        this.setState({
            modalVisible: true, _item: item
        })
    }

    handleSwipeDown = (num, index) => {
        if (num === 1) {
            this.props.selectedItem(index)
        }
        this.setState({ modalVisible: false })
    }

    _renderItem(item) {
        console.log("TCL: InfoModal -> _renderItem -> item", item)
        return (
            <View style={{ flexDirection: 'row' }}>
                <View>

                </View>
            </View>
        )
    }

    render() {
        const { _item , documentTableData,towingTableData,trafficTableData,drivingTableData,numberTableData,
                        otherTableData,speedTableData,vehicleLightTableData,roadTableData

        } = this.state
        return (
            <MaterialDialog
                visible={this.state.modalVisible}
                onCancel={() => {
                    this.setState({ modalVisible: false })
                }}
            >
                <View style={{ width: width - 80, minWidth: "40%" }}>
                    {/* <Text style={{ minWidth: '80%', textAlign: 'center', marginTop: 10, alignSelf: 'center', fontSize: 16, fontWeight: '500', color: '#2a2a2a', }}>_item.FeatureShortName}</Text> */}
                    {/* <Text style={{ marginTop: 10, alignSelf: 'center', width: '100%', lineHeight: 21, fontSize: 14, color: '#2a2a2a', fontFamily: 'Roboto-medium' }}> _item.FeatureShortText}</Text> */}

                    {/* <FlatList
                        style={{ marginTop: 10 }}
                        extraData={this.state}
                        data={dummyArray}
                        renderItem={(item) => this._renderItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                    // ListFooterComponent={() => this._renderFooter()}
                    /> */}

                    {/* <View style={styles.container}> */}
                    <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                        <Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
                        <Rows data={_item===1 ? documentTableData : 
                                    _item === 2 ? drivingTableData :
                                    _item === 3 ? roadTableData : 
                                    _item === 4 ? numberTableData :
                                    _item === 5 ? towingTableData :
                                    _item === 6 ? vehicleLightTableData :
                                    _item === 7 ? trafficTableData :
                                    _item === 8 ? speedTableData :
                                    otherTableData
                    } 
                        textStyle={styles.text} />
                        
                    </Table>
                    {/* </View> */}
                </View>
            </MaterialDialog >
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
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});