import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return(
        <View style = {styles.item}>
            <View style = {styles.itemsLeft}>

                <View style={styles.square}>
                </View>

                <Text style= { styles.itemText }>
                    { props.text }
                </Text>
            </View>
            <View style= {styles.circle}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item:{
        backgroundColor: '#f8f5f1',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemsLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#4EA5D9',
        opacity: 0.9,
        borderRadius: 5,
        marginRight: 15
    },
    itemText:{
        maxWidth: '80%'
    },
    circle:{
        width: 12,
        height: 12,
        borderColor: '#4EA5D9',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;