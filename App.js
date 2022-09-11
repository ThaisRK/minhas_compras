import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import { useState, useEffect } from "react";
import Item from "./Components/Item";
import Form from "./Components/Form";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const mercado = require("./assets/mercado.jpg");
  const [produto, setProduto] = useState("");
  const [lista, setLista] = useState([]);

  const salvar = async (produtos) => {
    try {
      const jsonValue = JSON.stringify(produtos);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      // error writing value
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      const prods = jsonValue != null ? JSON.parse(jsonValue) : [];
      setLista(prods);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const adicionarProduto = async () => {
    const novo = {
      id: new Date().getTime().toString(),
      nome: produto ? produto : "Arroz",
    };
    // faz uma nova atribuição à lista, com os elementos
    // já existentes (...lista) e o novo
    setLista([...lista, novo]);
    // limpa o conteúdo de produto (por consequência, o campo)
    setProduto("");
    salvar([...lista, novo]);
  };

  const removerProduto = (id) => {
    console.log(`Removido: ${id}`);
    setLista(lista.filter((prod) => prod.id != id));
  };

  const itemLista = ({ item }) => {
    return (
      <Item id={item.id} nome={item.nome} onDeleteProduto={removerProduto} />
    );
  };

  const digitando = (texto) => {
    setProduto(texto);
  };

  return (
    <View style={styles.container}>
      <Image source={mercado} style={styles.figura} />
      <Text style={styles.titulo}>Listagem dos Produtos</Text>
      <Form
        onTyping={digitando}
        produto={produto}
        adicionarProduto={adicionarProduto}
      />
      <FlatList
        data={lista}
        renderItem={itemLista}
        keyExtractor={(prod) => prod.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
  figura: {
    width: 300,
    height: 150,
    margin: 15,
    alignSelf: "center",
    resizeMode: "stretch",
  },
  titulo: {
    fontSize: 22,
  },
});
