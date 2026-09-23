import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { usePokemonDetail } from "../../hooks/usePokemonDetail";

const PokemonDetailScreen = () => {
  const { name } = useLocalSearchParams<{ name?: string }>();
  const pokemonName = typeof name === "string" ? name : Array.isArray(name) ? name[0] : "";
  const { pokemon, loading, error } = usePokemonDetail(pokemonName);
  const { width } = useWindowDimensions();
  const tamañoImagen = width > 600 ? 220 : 150;

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !pokemon) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>
          {error ? `Error: ${error}` : "No se pudo cargar el Pokémon."}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {pokemon.sprites?.front_default && (
        <Image
          source={{ uri: pokemon.sprites.front_default }}
          style={{ width: tamañoImagen, height: tamañoImagen }}
          resizeMode="contain"
        />
      )}
      <Text style={styles.title}>{pokemon.name}</Text>
      <Text style={styles.info}>
        Tipos: {pokemon.types ? pokemon.types.map((t) => t.type.name).join(", ") : ""}
      </Text>
      <Text style={styles.info}>Altura: {pokemon.height}</Text>
      <Text style={styles.info}>Peso: {pokemon.weight}</Text>

      <View style={styles.stats}>
        <Text style={styles.statsHeader}>Estadísticas:</Text>
        {pokemon.stats?.map((s) => (
          <Text key={s.stat.name} style={styles.statText}>
            {s.stat.name}: {s.base_stat}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "#d32f2f", fontSize: 16 },
  container: { flexGrow: 1, alignItems: "center", padding: 24 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginVertical: 8,
  },
  info: { fontSize: 16, marginVertical: 2 },
  stats: { marginTop: 16, alignItems: "flex-start", width: "100%" },
  statsHeader: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  statText: { fontSize: 15, marginVertical: 2, textTransform: "capitalize" },
});

export default PokemonDetailScreen;
