import React, { Component } from 'react'
import {Text, View, Modal,ActivityIndicator,StyleSheet} from 'react-native'
import PropTypes from "prop-types";
export  class Loader extends Component {
    constructor(props) {
      super(props)
      this.state = {
  
      }
    }
  
    static propTypes = {
      message: PropTypes.string,
      loading: PropTypes.bool,
      transparent: PropTypes.bool,
      animationType: PropTypes.string,
      bgStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
      loaderStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    }
  
    static defaultProps = {
      loading: false,
      transparent: true,
      animationType: 'none',
      message: 'Loading...'
    };

    componentWillReceiveProps(nextProps) {
      this.setState({
        message: nextProps.message
      });
    }
  
    render() {
      const bgStyle = (this.props.bgStyle) ? this.props.bgStyle : styles.modalBackground
      const loaderStyle = (this.props.loaderStyle) ? this.props.loaderStyle : styles.activityIndicatorWrapper
      return (
        <Modal
          transparent={this.props.transparent}
          animationType={this.props.animationType}
          visible={this.props.loading}
          onRequestClose={() => { console.log('close modal') }}
        >
          <View style={bgStyle}>
            <View style={loaderStyle}>
              <ActivityIndicator
                animating={this.props.loading} />
              <Text style = {{textAlign:'center'}}>{this.props.message}</Text>
            </View>
          </View>
        </Modal>
      )
    }
  }
  
const styles = StyleSheet.create({
   
    modalBackground: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-around',
      backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
      backgroundColor: '#FFFFFF',
      paddingVertical:40,
      paddingHorizontal:30,
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    }
  })