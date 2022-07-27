import React,{useEffect,useState,useCallback} from "react";

import { View,Text,StyleSheet,ScrollView,RefreshControl,SafeAreaView ,Button} from "react-native";
import axios from 'axios';
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native';
import Navbar from "./components/Navbar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from "./components/About";
import TaskForm from "./components/TaskForm";

const App=()=>{
  const [data,setData]=useState([])
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [fetched,setIsFetched]=useState(false)

  const Stack = createNativeStackNavigator();


  const handleRefresh=( async()=>{
    setIsRefreshing(true)
    await axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      alert(err.message)
    })
    setIsFetched(true)
    setIsRefreshing(false)
  })

  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="TaskForm" component={TaskForm} />
  </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles=StyleSheet.create({
 
})


export default App