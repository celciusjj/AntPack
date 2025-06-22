import { showFavoriteIcon } from '@/utils/showFavoriteIcon';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/Button';
import { useCharacterDetail } from '../hooks/useCharacterDetail';
import { useCharacterContext } from '../provider/CharacterProvider';

export const CharacterDetailScreen = () => {
  const {
    character: { name, image, gender, species, status, isFavorite, createdAt },
  } = useCharacterContext();
  const { animatedImageStyle } = useCharacterDetail();
  const { goBack } = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Animated.Image source={{ uri: image }} style={[styles.image, animatedImageStyle]} />
        <Text style={styles.title}>
          {name} {showFavoriteIcon(isFavorite)}
        </Text>
        <Text style={styles.text}>
          {gender} | {species}
        </Text>
        <Text style={styles.text}>
          Estado: <Text style={styles.statusValue}>{status}</Text>
        </Text>
        <Text style={styles.text}>
          Fecha: <Text style={styles.statusValue}>{createdAt}</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <Button handlePress={goBack}>Volver</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
  },
  text: {
    fontSize: 16,
    color: '#555',
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
  buttonContainer: {
    marginTop: 16,
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
});
