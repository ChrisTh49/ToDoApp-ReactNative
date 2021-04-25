import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';

import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask= (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={ styles.sectionTitle }>Today's Tasks</Text>

        <View style= { styles.borderBottomTitle }></View>

        <View style= { styles.items }>
          {
            taskItems.map((item, index) => {
              return <TouchableOpacity onPress={ () => completeTask(index) }>
                <Task key={ index } text={ item } />
              </TouchableOpacity>
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={ Platform.OS === 'ios' ?  "padding" : "height" } style={ styles.writeTaskWrapper } >

        <TextInput style= { styles.input }  placeholder= {'Write a Task'} value= {task} onChangeText={ text => setTask(text) }>
        </TextInput>

        <TouchableOpacity onPress={ () => handleTask() }>
          <View style={ styles.addWrapper }>
            <Text style={ styles.addText }>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E24'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  borderBottomTitle: {
    backgroundColor: '#4EA5D9',
    width: '47%',
    height: 2,
    borderRadius: 3
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    borderColor: '#4EA5D9',
    borderWidth: 1,
    width: 250

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFFFFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4EA5D9',
    borderWidth: 1
  },
  addText: {}
});
