import React from "react";

import { View ,Text ,Button,StyleSheet} from "react-native";

const About=({navigation})=>{
    return(
        <View>
            <Button title="Home" onPress={()=>{
            navigation.navigate('Home')
            }}  />
            <Text style={styles.heading}> This Is the About Page</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    heading:{
        fontSize:30,
        marginTop:30,
        fontStyle:"italic",
        color:'black'
    }
})

export default About