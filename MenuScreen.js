
'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} = ReactNative;

import Button from 'react-native-button'

var MenuScreen = React.createClass({

    buttonClicked : function(){
        this.props.navigator.push(this.props.routes[1]);
    },

    render : function(){

        var brainURL = {uri:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhSlMYUNk64HQo0MUvJaGfFzzpiM-bFzp2P7ChAC2EVISl5EUK4w'};

        return (
            <View style={{
                flex:1,
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor:'white'}}>

                <Text style={{fontSize:20, color:'black', margin:30} }>
                    Memory training
                </Text>
                <Image source={brainURL} resizeMode='contain' style={{width:180, height:180}}/>

                <Button containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'gray', margin:30}}
                    style={{fontSize: 20, color: 'white'}} onPress={() => this.buttonClicked()}>
                        Number training
               </Button>
            </View>
        );
    }
});

module.exports = MenuScreen;
