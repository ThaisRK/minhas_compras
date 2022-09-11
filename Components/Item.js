import { Text, StyleSheet, Pressable } from "react-native";
const Item = ({ id, nome, onDeleteProduto }) => {
  return (
    <Pressable onPress={() => onDeleteProduto(id)}>
      <Text style={styles.lista}>
        {id} - {nome}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  lista: {
    fontSize: 14,
    lineHeight: 24,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#00f",
    borderRadius: 4,
    padding: 4,
    marginTop: 2,
  },
});
export default Item;
