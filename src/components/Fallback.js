import React from 'react';
import {StyleSheet, View, Text, Image } from 'react-native';

const Fallback = () => {
    return (
        <View>
            <Image source={require('../assets/ayam4.png')} style={{width: 350, height: 350,alignItems: 'center'}}
             />
            <Text 
               style={{
                textAlign: 'center',
                fontSize: 50,
                color: 'grey',
                fontWeight: 'bold',
                marginTop: 5,
                fontFamily: 'serif',
                }}>
                MADRIDISTA
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({});

export default Fallback;
