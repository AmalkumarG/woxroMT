import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [inputValues, setInputValues] = useState({
    director:'',
    movie:''
  })
  const [diector,setDirector]=useState('')
  const [movie,setMovie]=useState('')
  const [data,setData]=useState([])
  const addValues=()=>{
    setData(oldArray => [...oldArray,{director:diector,movie:movie}] );
  
    setDirector('')
    setMovie('')
  }

  const removeval=(item)=>{
    
    let a=data.filter(val=>val.director!=item.diector)
    setData(a)

  console.log(data);
 
  }
  return (
    <SafeAreaView style={styles.container}>
      
      <StatusBar style="auto" />

      <View >
        <TextInput  placeholder='Director Name' value={diector} style={styles.input} onChangeText={(value)=>setInputValues(setDirector(value))} />
        <TextInput  placeholder='Movie Name' value={movie} style={styles.input} onChangeText={(value)=>setInputValues(setMovie(value))}/>
        <Button title='Add' color={'green'} style={{width:40}} onPress={()=>addValues()}/>
      </View>
      <View>
        <FlatList 
          data={data}
          ListEmptyComponent={()=>{
            return(
              <View>
                <Text>add data</Text>
              </View>
            )
          }}
          renderItem={({item})=>{
            
            
            return(
              <View style={{marginTop:10}}>
                <Text style={styles.input}>{item.director}</Text>
                <Text style={styles.input}>{item.movie}</Text>
                <Button title='remove' color={'red'} style={{marginTop:5}} onPress={(item)=>removeval(item)}/>
              </View>
            )
          }}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   alignItems:'center',
   paddingTop:50
    
  },
  inputs:{
    flexDirection:'row'


  },
  input:{
    width:200,
    borderWidth:2,
    padding:5,marginTop:5

  }

});
