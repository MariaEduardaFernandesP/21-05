import { StyleSheet, Text, View, TouchableOpacity , TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
 
  const [contador,setContador] = useState(0);
  const [nome,setNome] = useState("MaGH");
  const [segundos, setSegundos] = useState(0);

  useEffect(()=>{
    function addSegundos(){
      setInterval(()=>setSegundos(segundo=>segundo+1),1000)
    }

    addSegundos();
  },[])

  function atualizaContador(){

    setContador(contador+1)
  }

  function atualizarNome(texto){

    setNome(texto)
   }



  return (
    <View style={styles.container}>
      <Text style = {{fontSize:25,marginEnd:10,fontFamily:'Helvita'}}>
        Você clicou {contador} vezes
      </Text>
      <TouchableOpacity 
      onPress={atualizaContador}
      style = {{ width:'85%', 
      backgroundColor:'#E6E6FA',
       alignItems:'center',
      height:23}}
      >
      <Text>CLICAR</Text>
      </TouchableOpacity>

      <Text style = {{fontSize:20,marginTop:10}}>{nome}</Text>
      <TextInput style={{
        width:'80%',
       backgroundColor :'#E0FFFF',
      }}
      onChangeText ={ (texto)=> atualizarNome(texto) }
      ></TextInput>

      <Text style={{
        fontSize:20, 
        marginTop:10
      }}>
        Já passaram {segundos} segundos</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
