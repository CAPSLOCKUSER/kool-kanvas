'use strict';

import React, {
  View,
  WebView
} from 'react-native';

const Game = React.createClass({
  propTypes: {
    context: React.PropTypes.object,
    render: React.PropTypes.func.isRequired
  },
  render() {
    const contextString = JSON.stringify(this.props.context);
    const renderString = this.props.render.toString();
    const style = {
      width: this.props.width,
      height: this.props.height,
    };
    const html = `
      <style>
        * {margin:0;padding:0;}
        canvas {position:absolute;transform:translateZ(0);}
      </style>
      <canvas></canvas>
      <script>
        var canvas = document.querySelector('canvas');
        (${renderString}).call(${contextString} || {}, canvas);
      </script>`;

    return (
      <View>
        <WebView
          automaticallyAdjustContentInsets={false}
          contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
          opaque={false}
          html={html}
          underlayColor={'transparent'}
          scrollEnabled={false}
          style={style}
        />
      </View>
    );
  }
});

export default Game;