import { FlatList,
         StyleSheet, 
         Text, 
         TextInput, 
         TouchableOpacity, 
         View, 
} from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Fallback from "../components/Fallback";




const ToDoScreen = () => {


//Init local state 
const [toDo, setToDo] = useState("")
const [toDoList, setToDosList] = useState([])
const [editToDo, setEditToDo] = useState(null)  


//Handle add todo

const handleAddToDo = () => {
        
        //structure dari single To Do 
        //{
        // id, 
        //title, 
        //}
  if(toDo === "") {
    return; //return awal
  }   

  setToDosList([...toDoList, {
          id : Date.now().toString(),
          title : toDo,
          
  }])     
}
//Handle Delete ToDo
const handleDeleteToDo = (id) => {
   const updatedToDoList =toDoList.filter((todo) => todo.id !== id) 
   
   setToDosList(updatedToDoList)
        
}

//Handle Edit ToDo
const handleEditToDo = (todo) => {
   setEditToDo(todo)
   setToDo(todo.title)     
}

//Handle Update ToDo
const handleUpdateToDo = () => {
        
        const updatedToDo =toDoList.map((item) => {
          if(item.id === editToDo.id) {
                  return {...item, title : toDo}
          } 
          
          return item;

        })
        setToDosList(updatedToDo)
        setEditToDo(null)
        setToDo("")
}
  

   
//Render todo 
const renderToDo = ({item, index}) => {
        return (
    <View 
            style= {{
            backgroundColor : '#0984e3', 
            padding : 20, 
            borderRadius : 9,
            marginBottom : 5,
            flexDirection : 'row',
            elevation : 4,
            }}>
            
     
        
    <Text 
            style={{
            color : 'white',
            fontSize : 20,
            fontWeight : 'bold',
            fontFamily : 'modern',
            flex : 1,
            }}> 
            {item.title}
    </Text>
        <Icon name='edit' size={25} color="white" onPress = {() => handleEditToDo(item)} /> 
        <Icon name='delete' size={25} color="white" onPress = {() => handleDeleteToDo(item.id)}/> 
    </View>
        )
        
    }
    return (
    <View style={{
            marginHorizontal : 20
            }}> 
    
    <TextInput  
            style={{
            color : 'white',    
            borderWidth : 0.8,
            borderColor : 'aqua',
            borderRadius : 9,
            paddingVertical : 9,
            paddingHorizontal : 16,
           
            }}
            placeholder="Add your task here.."
            value={toDo}
            onChangeText={(userText) => setToDo(userText)}

    /> 
{editToDo ?   <TouchableOpacity 
            style= {{
            backgroundColor : 'darkblue',
            borderRadius : 20,
            paddingVertical : 8,
            fontWeight : 'bold',
            fontsize : 20,
            marginVertical : 24,
            alignItems : 'center'
        }}
        onPress={() => handleUpdateToDo()}
        >

    <Text 
            style={{
            color : '#dfe6e9',
            fontWeight : 'bold',
            textAlign : 'center',
            }}>
            Save
    </Text>
    </TouchableOpacity> : <TouchableOpacity 
            style= {{
            backgroundColor : 'darkblue',
            borderRadius : 20,
            paddingVertical : 8,
            fontWeight : 'bold',
            fontsize : 20,
            marginVertical : 24,
            alignItems : 'center'
        }}
        onPress={() => handleAddToDo()}
        >

    <Text 
            style={{
            color : '#dfe6e9',
            fontWeight : 'bold',
            textAlign : 'center',
            }}>
            Add
    </Text>
    </TouchableOpacity>
}

    {/* Render todo list */}

    <FlatList data={toDoList} renderItem={renderToDo} />
    {
        toDoList.length <= 0 && <Fallback/>
    }
    </View>
    );
};

export default ToDoScreen;

const styles = StyleSheet.create({})