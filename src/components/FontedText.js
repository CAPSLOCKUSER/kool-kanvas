import React, {
  StyleSheet,
  Text,
  Platform,
} from 'react-native';

const FontedText = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    style: React.PropTypes.object,
  },
  render() {
    const {style, ...props} = this.props;
    return (
      <Text style={[Platform.OS === 'android' && styles.android, style]} {...props}>
        { this.props.children }
      </Text>
    );
  },
});

const styles = StyleSheet.create({
  android: {
    fontFamily: 'sans-serif-thin',
  },
});

export default FontedText;
