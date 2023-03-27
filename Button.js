import React from "react";
import { TouchableHighlight, StyleSheet ,Text} from 'react-native';

const Button = (props)=>{
    return (
        <TouchableHighlight
        style={styles.button}
        onPress={props.onPress}>

            <Text style={styles.buttonText}>Számít</Text>
        </TouchableHighlight>
    )

}
export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor:'gray',
    },
    buttonText:{
        backgroundColor:'red',
    }
})