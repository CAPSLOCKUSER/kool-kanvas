import React, {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import WebSite from './WebSite';
import Game from './Game';

import renderCanvas from '../gameCode.js';

import Dimensions from 'Dimensions';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Main = React.createClass({
  onPlayGame() {
    this.props.navigator.push({
      title: 'Kool Game',
      component: Game,
      passProps: {
        render: renderCanvas,
        height: deviceHeight,
        width: deviceWidth,
        message: 'Kanvas!'
      },
    });
  },
  onViewWeb() {
    this.props.navigator.push({
      title: 'Swaggity',
      component: WebSite
    });
  },
  _handleBackButtonPress() {
    this.props.navigator.pop();
  },
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerArea}>
          <Text style={styles.header}>
            Welcome to React Native!
          </Text>
        </View>

        <View style={
          [styles.mainArea, {
            width: deviceWidth - 20,
            height: deviceWidth - 20,
          }]}>
          <TouchableHighlight style={styles.button} onPress={this.onViewWeb}>
            <Text style={styles.btnText}>Web</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.onPlayGame}>
            <Text style={styles.btnText}>Game</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.bottomArea}>
          <Text style={styles.bottomText}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>

      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  headerArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mainArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomArea: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '200',
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    textAlign: 'center',
    color: '#ffffff',
    paddingHorizontal: 12,
    paddingVertical: 3,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 2,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 25,
  }
});

export default Main;