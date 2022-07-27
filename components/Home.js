import React,{useEffect,useState} from "react";

import { View,Text,StyleSheet,ScrollView,RefreshControl,Button,FlatList } from "react-native";
import axios from 'axios';

const Home=({navigation})=>{
    const [datas,setDatas]=useState([])
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [fetched,setIsFetched]=useState(false)

    const handleRefresh=( async()=>{
        setIsRefreshing(true)
        await axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((res)=>{
          setDatas(res.data)
        })
        .catch((err)=>{
          alert(err.message)
        })
        setIsFetched(true)
        setIsRefreshing(false)
      })
        
      const Item=(ele)=>(
        <View style={styles.list}> 
          <Text style={styles.textS}>Title: {ele.title} </Text>
          <Text>ID: {ele.id} </Text>
          <Text>UserId:{ele.userId} </Text>
        </View>
      );
      
      const renderItem=({item})=>(
        <Item  {...item} />
      )

  return(

    <ScrollView style={styles.container}  refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} /> } > 
        <Button title="About"  onPress={()=>{
            navigation.navigate('About')
            }}  />  
            
      <Text style={styles.header}>To Do Tasks </Text>
      <Button  title="Add Task" color={'#f194ff'} onPress={()=>{
        navigation.navigate('TaskForm')
      }} />
      {
        !fetched ? <Text style={styles.textStyle} >Pull To Fetch</Text > :<>
        <FlatList 
        data={datas}
        renderItem={renderItem}
        keyExtractor={ele=>ele.id}
        />
        </>
      }
    
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:5
  },
  textStyle:{
    textAlign:"center",
    marginTop:100,
    fontSize:40,
    color:'green',
    fontStyle:'italic'
  },
  header:{
    backgroundColor:'red',
    fontSize:35,
    color:'black',
    padding:30,
    borderRadius:10,
    marginHorizontal:10,
    marginVertical:10  
  },
  list:{
    padding:15,
    backgroundColor:'gray',
    borderRadius:20,
    margin:10
  },
  textS:{
    fontSize:20
  }
});

export default Home