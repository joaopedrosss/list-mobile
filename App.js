import React,{useState} from 'react';
import { Keyboard, StyleSheet, Text, View } from 'react-native';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native-web';
import Task from './components/Task';

export default function App() {

  const [tarefa, setTarefa] = useState();
  const [tarefaItems, setItems] = useState([]);

  const handleColocar = () => {
    Keyboard.dismiss();
    setItems([...tarefaItems,tarefa])
    setTarefa(null);
    //setTarefa(undefined);
  }

  const deleteTarefa = (index) =>{
    let tarefaCopia = [...tarefaItems];
    tarefaCopia.splice(index,1);
    setItems(tarefaCopia);

  }

  return (
    //The comands
    <View style={styles.container}>

      {/*ver tarefas */}
      <View style={styles.blocoTarefa}>
        <Text style={styles.titulo}>Tarefas de Hoje</Text>

        <View style={styles.items}>
          {
            tarefaItems.map((item,index)=>{
              return(
                <TouchableOpacity key={index} onPress = {() => deleteTarefa(index)}>
                  <Task text={item}></Task>
                </TouchableOpacity>
              )
              //return <Task key={index} text={item}></Task>
            })
          }

        </View>
      </View>

    {/*por as tarefas */}
    <KeyboardAvoidingView
        style={styles.colocarTarefa}>
          <TextInput style={styles.input} placeholder={"escreva uma tarefa"} value={tarefa} onChangeText={Text => setTarefa(Text)}/>

        <TouchableOpacity onPress={() => handleColocar()}>
          <View style={styles.addTarefa}>
            <text style = {styles.addTexto}>+</text>
          </View>
        </TouchableOpacity> 
      </KeyboardAvoidingView>

    </View>
  );
}

//The styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  blocoTarefa: {
    paddingTop:80,
    paddingHorizontal:20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    },
  items: {
    marginTop: 30,
  },
  colocarTarefa: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#C0C0C0",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderWidth:1,
    width: 250,
  },
  addTarefa: {
    backgroundColor: "#fff",
    width: 60, 
    height: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 28,
    borderWidth:1,
    borderColor: "#C0C0C0",
  },/*
  addTexto: {
  },*/
});
