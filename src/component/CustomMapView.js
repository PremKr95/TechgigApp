import PropTypes from 'prop-types';
import { requireNativeComponent, ViewPropTypes } from 'react-native';
// var viewProps = {
//   name: 'RCTNativeView',
//   propTypes: {
//     marker: PropTypes.string,
//     ...ViewPropTypes,
//   }
// }

var viewProps = {
    name: 'RCTNativeView',
    propTypes: {
      url: PropTypes.string,
      ...ViewPropTypes,
    }
  }

module.exports = requireNativeComponent('RCTNativeView', viewProps);

