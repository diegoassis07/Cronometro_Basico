import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {

  const [ count, setCount ] = useState (0)
  const [ botao, setBotao ] = useState ("Iniciar")
  const [ intervalo, setIntervalo ] = useState (null)

  const iniciar = () => {
    if (!intervalo){
      const contador = setInterval(() => {
        setCount(contador => contador + 1)
      }, 100)
      setBotao("Pausar")
      setIntervalo(contador)
    }else{
      clearInterval(intervalo)
      setBotao("continuar")
      setIntervalo(null)
    }
  };

  const parar = () => {
    setCount(0)
    clearInterval(intervalo)
    setBotao("Iniciar")
    setIntervalo(null)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cronometro</Text>
      <Text style={styles.textCont}>{count}</Text>

      <View style={styles.containerBtn}>
      <TouchableOpacity style={styles.btnIniciar} onPress={iniciar}>
        <Text style={styles.textIniciar}>{botao}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnParar} onPress={parar}>
        <Text style={styles.textParar}>Parar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:390,
    height:899,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    top:-120,
    fontFamily:'Roboto',
    fontSize:35,
    fontWeight:'700'
  },
  textCont: {
    top:-30,
    fontFamily:'Roboto',
    fontSize:34,
    fontWeight:'600',
  },
  containerBtn:{
    top:50,
    flexDirection:'row',
    gap:40
  },
  btnIniciar: {
    width:120,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    borderWidth:1,
    borderColor:'#8A8A8A',
    backgroundColor:'#000'
  },
  textIniciar: {
    fontFamily:'Roboto',
    fontSize:14,
    fontWeight:'500'
  },
  btnParar: {
    width:120,
    height:55,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    borderWidth:1,
    borderColor:'#8A8A8A',
    backgroundColor:'red'
  },
  textParar: {
    fontFamily:'Roboto',
    fontSize:14,
    fontWeight:'500',
  },
});
