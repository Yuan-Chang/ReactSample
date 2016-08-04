/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  BackAndroid,
  Text,
  Image,
  View,
  Platform,
  Navigator,
  TouchableHighlight,
  ToolbarAndroid,
  TouchableNativeFeedback
} from 'react-native';

import Button from 'react-native-button'

var MenuScreen = require('./MenuScreen');
var NumberScreen = require('./NumberScreen');

const routes = [{title:'first page', index:0},{title:'second page', index: 1}];

var _navigator;
//This is for handling hardware back button
BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

var RouteMapper = function(route,navigatorOpts){

    _navigator = navigatorOpts;

    if (route.index == 0) {
        return (
            <MenuScreen navigator={navigatorOpts} routes={routes} />
        );
    }
    else
    {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    actions={[]}
                    navIcon={require('image!android_back_white')}
                    onIconClicked={navigatorOpts.pop}
                    titleColor="white"
                    style={styles.toolbar}
                    title={routes[1].title} />

            <NumberScreen navigator={navigatorOpts} routes={routes}  ></NumberScreen>

            </View>
        );
    }
};

class nativeTest extends Component {

      render() {

        return (
            <Navigator
                initialRoute = {routes[0]}
                initialRouteStack = {routes}
                configureScene={() => Navigator.SceneConfigs.FadeAndroid}
                renderScene={RouteMapper}
            />

        );
  }


}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#a9a9a9',
    height: 56,
  },
});

AppRegistry.registerComponent('nativeTest', () => nativeTest);
