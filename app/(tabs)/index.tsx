import { FlatList, StyleSheet, View, Text, ActivityIndicator, Image } from 'react-native';
import usePokeApi from '@/hooks/usePokeApi';

export default function HomeScreen() {
  const { list, loading, error } = usePokeApi();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#ff69b4" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error fetching data: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <FlatList
        data={list}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff0f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
    marginVertical: 16,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#ffe4e1',
    borderRadius: 10,
    borderColor: '#ffb6c1',
    borderWidth: 1,
  },
  itemText: {
    fontSize: 18,
    color: '#ff69b4',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff0f5',
  },
  errorText: {
    color: '#ff69b4',
  },
});
