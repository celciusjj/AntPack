import { showFavoriteIcon } from '@/utils/showFavoriteIcon';
import { useNavigation } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacterContext } from '../provider/CharacterProvider';

export const CharacterDetailScreen = () => {
  const {
    character: { name, image, gender, species, status, isFavorite },
  } = useCharacterContext();

  console.log(isFavorite);

  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />

        <Text style={styles.name}>
          {name} {showFavoriteIcon(isFavorite)}
        </Text>

        <Text style={styles.label}>
          {gender} | {species}
        </Text>

        <Text style={styles.status}>
          Estado: <Text style={styles.statusValue}>{status}</Text>
        </Text>

        <TouchableOpacity onPress={goBack} style={styles.button}>
          <Text style={styles.buttonText}>Volver</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // blanco
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222', // texto oscuro
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  statusValue: {
    fontWeight: 'bold',
    color: '#000',
  },
  locationBlock: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  locationTitle: {
    color: '#4CAF50',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 16,
  },
  locationText: {
    color: '#333',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
