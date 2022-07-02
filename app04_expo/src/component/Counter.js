import React, { useState } from "react";
import {View, Text} from 'react-native';
import MyButton from "./MyButton";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);
    alert('counter')
    return(
        <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 30, margin: 10}}>cout:{count}</Text>
            <Text style={{fontSize: 30, margin: 10}}>{double}</Text>
            <MyButton title="+" onPress={() => {setCount(count + 1);alert('click'); setDouble(double + 1)}}/>
            <MyButton title='-' onPress={() => {setCount(count - 1);alert('aaa')}}/>
        </View>
    )
}

export default Counter