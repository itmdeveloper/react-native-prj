import React from "react";
import { TouchableOpacity, Text } from "react-native";

const MyButton = props => {
    return(
        <TouchableOpacity style={{backgroundColor: '#3498db', padding: 16, margin: 10, borderRadius: 8}} >
            <Text style={{fontSize: 24}}>{props.children || props.title}</Text>
        </TouchableOpacity>
    )
};

export default MyButton;