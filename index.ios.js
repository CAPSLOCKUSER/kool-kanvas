'use strict';

import React, {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

import Main from './src/components/Main';
import WebSite from './src/components/WebSite';

const lfc = React.createClass({

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Yolo World',
          component: WebSite
        }}
      />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
  }
});



AppRegistry.registerComponent('lfc', () => lfc);
