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
    enableRightIcon: true,
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
          <Title style={{ color:'#0078ff', fontSize: 16,alignSelf:'flex-end',fontWeight: "500" }}>
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
              onPress={() => {
                console.log("enableRightIcon")
                if (this.props.onRightIconPress) {
                  console.log("enableRightIco2")
                  this.props.onRightIconPress()
                } else {
                  console.log("enableRightIco3")
                  this.makeCall("18004197717")
                }
              }}
            >
              {this.props.isRightIconText == true ? (
                <Text
                  style={{
                    color: "white",
                    fontWeight: "500",
                    fontSize: 13
                  }}
                >
                  {this.props.rightIconText}
                </Text>
              ) : null}
              {this.props.isRightIconText == false ? (
                <Icon
                  name={this.props.rightIconName}
                  type="MaterialCommunityIcons"
                />
              ) : null}
            </Button>
          </Right>
        )}
      </Header>
    )
  }
}