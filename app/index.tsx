import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { Link } from "expo-router";
import { usePokemonList } from "../hooks/usePokemonList";

const HomeScreen = () => {
  const { pokemons, loading, error } = usePokemonList(20);
  const { width } = useWindowDimensions();
  const columnas = width > 600 ? 3 : width > 380 ? 2 : 1;

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Ocurrió un error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      key={columnas}
      data={pokemons}
      numColumns={columnas}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <Link href={`/pokemon/${item.name}`} asChild>
          <Pressable style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "#d32f2f", fontSize: 16 },
  list: { padding: 16 },
  row: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    margin: 4,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  name: { fontSize: 18, textTransform: "capitalize" },
});

export default HomeScreen;
