import React, { Component } from 'react'
import { View ,Text} from 'react-native'
// import HEREMap from 'react-here-maps'
import {HERE_MAP_ID,
    HERE_MAP_CODE} from './common'

import BridgeModule from '../../Bridging'

export default class TrafficPolice extends Component {

    componentDidMount(){

        // this.fetchTrafficDetails()
        // BridgeModule.navigateToExample()
    }

    fetchTrafficDetails(){
        let url = "https://traffic.api.here.com/traffic/6.2/flow.json?bbox=19.131486,73.004211;19.12539,73.01364&app_code=mWBflFbZs6RX0hTjvUo1Bw&app_id=nxgJHAV9Agbypr4Uv760"
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
          console.log(JSON.stringify(responseJson)) 
          BridgeModule.navigateToExample()
        }).catch(error=>{console.log(error)})     
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                    <Text onPress={()=>BridgeModule.navigateToExample()} >
                        hello 
                    </Text>
                </View>
                // {/* <HEREMap
                //     appId="{your app_id}"
                //     appCode="{your app_code}"
                //     center={{ lat: 0, lng: 0 }}
                //     zoom={14}
                // /> */}
            // </View>


        )
    }

}