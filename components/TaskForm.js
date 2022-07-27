import React,{useState} from "react";
import { View,Text, ScrollView ,StyleSheet,TextInput,Button } from "react-native";

const TaskForm=()=>{
const[task,setTask]=useState('')
const[allTask,setAllTask]=useState([])

const handleTask=()=>{
    setAllTask([...allTask,task])
    setTask('')
}

    return (
       <ScrollView style={styles.container} >
            <TextInput style={styles.textIn}  value={task} onChangeText={setTask} placeholder=' Enter Task' />
            <Button title="Add" onPress={handleTask} />
            {
                allTask.map((ele,i)=>{
                    return <Text key={i} style={styles.fonts} >{ele} </Text>
                })
            }
       </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        textAlign:'center',
        margin:10
    },
    textIn:{
        padding:10,
        borderWidth:1,
        margin:10,
        borderRadius:20
    },
    fonts:{
        fontSize:30,
        textAlign:"center",
        marginTop:20,
        backgroundColor:'grey',
        padding:10,
        borderRadius:40
    }
})

export default TaskForm