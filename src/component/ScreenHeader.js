import React, { Component } from "react"
import { Linking, Alert, Platform, Text } from "react-native"

import {
  Button,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Body,
  Subtitle
} from "native-base"
import PropTypes from "prop-types"
export default class ScreenHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    rightIconName: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    rightIconText: PropTypes.string,
    isRightIconText: PropTypes.bool,
    androidStatusBarColor: PropTypes.string,
    headerColor: PropTypes.string,
    onLeftIconPress: PropTypes.func,
    onRightIconPress: PropTypes.func,
    callEventName: PropTypes.string,
    left: PropTypes.string
  }

  static defaultProps = {
    title: "title",
    subTitle: "",
    enableLeftIcon: true,
    enableRightIcon: false,
    rightIconName: "phone",
    headerColor: "#323298",
    androidStatusBarColor: "#323298",
    onLeftIconPress: () => {
      console.log("Left icon press")
    },
    callEventName: undefined,
    left: undefined,
  }

  

  render() {
    return (
      <Header
        style={{ backgroundColor: this.props.headerColor }}
        androidStatusBarColor={this.props.androidStatusBarColor}
      >
        {this.props.enableLeftIcon && (
          <Left>
            <Button transparent onPress={() => this.props.onLeftIconPress()}>
              <Icon style={{color:'#0078ff'}} name="arrow-left" type="MaterialCommunityIcons" />
            </Button>
          </Left>
        )}
        <Body>
          <Title style={{ color:'#0078ff',left:this.props.left, fontSize: 16,alignSelf:'center',fontWeight: "500" }}>
            {this.props.title}
          </Title>
          {/* <Subtitle style={{ fontSize: 12, fontWeight: "400" }}>
            {this.props.subTitle}
          </Subtitle> */}
        </Body>

        {this.props.enableRightIcon && (
          <Right>
            <Button
              transparent
              onPress={()=> this.props.navigation.navigate('InfoPage')}>
                <Icon
                  name={'information'}
                  style={{color:'black' , fontSize:30}}
                  type="MaterialCommunityIcons"
                />
            </Button>
          </Right>
        )}
      </Header>
    )
  }
}