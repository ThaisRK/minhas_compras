import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
} from "react-native";

const Form = ({ onTyping, produto, adicionarProduto }) => {
  return (
    <View style={styles.novoProduto}>
      <TextInput
        placeholder="Informe o produto..."
        placeholderTextColor="#aaa"
        style={styles.textInput}
        onChangeText={(texto) => onTyping(texto)}
        value={produto}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => adicionarProduto(produto)}
      >
        <Text style={styles.textButton}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 10,
    marginRight: 8,
  },
  novoProduto: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  button: {
    width: 100,
    backgroundColor: "#00f",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
  },
  textButton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 6,
  },
});

export default Form;
