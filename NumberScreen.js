'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  ListView,
  View,
} = ReactNative;

import Button from 'react-native-button'

var NumberScreen = React.createClass({

    buttonClicked : function(){
        this.props.navigator.pop();
    },

    render : function(){
        return (
            <ListView
                dataSource={{'a','b','c','d'}}
                renderRow={(rowData) => <Text>{rowData}</Text>}
            />
        );
    }
});

module.exports = NumberScreen;
