import React, { Component } from 'react'
import {TextInput,View ,StyleSheet,Alert,TouchableOpacity,ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button, Input,Text } from 'react-native-elements'

export default class App extends React.Component {

  render(){
    return(
      
      <View style={styles.container}>
        <ImageBackground source={require('./img/bg.jpeg')} style={styles.imageback}> 
                  <Text style={{fontWeight:"bold",fontSize:20,color:'white',marginLeft:10}}>
                    <Ionicons
                      name='chevron-back-sharp'
                      type='evilicon'
                       color='white'
                       size={20}
                        />
                   Back</Text>        
                  

                <View style={{marginTop:280,marginLeft:40}}>
              <Text style={styles.h1Style}> Make Your Purchase as</Text>
              <Input containerStyle={{width:250}}/>     

            <View style={{flexDirection:"row"}}>
             <TouchableOpacity style={styles.btn}> 
                  <Text style={{textAlign:"center",fontSize:18,paddingTop:8}}>Women</Text>
                </TouchableOpacity>

                 <TouchableOpacity style={styles.btn2}> 
                  <Text style={{textAlign:"center",fontSize:18,paddingTop:8,color:'white'}}>men</Text>
                </TouchableOpacity> 
              </View>

              </View>
        </ImageBackground>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({

  container:{
    flex: 1,
    flexDirection: "column",
  },
 
  imageback: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  },
  h1Style:{
    fontSize:40,
    color:'white',
    fontWeight:"bold"
  },

  btn:{
    backgroundColor:'white',
    width:120,
    borderRadius:30,
    fontSize:20,
    height:40
    

  },
  btn2:{
   
    width:120,
    height:40,
    borderRadius:80
  }
})