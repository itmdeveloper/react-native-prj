import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
    return (
        <View style={style.container}>
            <Text style={style.title}>My First App</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justfyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    title: {
        fontSize: 30,
    },
});

export default App;