import React from 'react';
import { View,Text,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const Task = (props) => {

    return(
        <View style={styles.items}>
            <View style={styles.itemsLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemsText}>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius:10,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between", //entre os items da direita e esquerda
        marginBottom:20,
    },
    itemsLeft: {
        flexDirection:"row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        width: 24,
        height:24,
        backgroundColor:"#55BCF6",
        borderRadius: 5,
        opacity: 0.4,
        marginRight: 15,
    },
    itemsText: {
        maxWidth: '80%',
    },
    circle: {
        width: 12,
        height:12,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },


});

export default Task;

