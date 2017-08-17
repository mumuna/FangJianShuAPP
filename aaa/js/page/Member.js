'use strict';
import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import px2dp from '../utils/px2dp';
import theme from '../config/theme';


export default class Member extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>成员</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
});