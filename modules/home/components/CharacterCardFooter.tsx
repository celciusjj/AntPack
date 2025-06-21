import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Character } from "../models";
import { useCharacterContext } from "../provider/CharacterProvider";

export const CharacterCardFooter = ({
  character,
}: {
  character: Character;
}) => {
  const { setCharacter } = useCharacterContext();
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setCharacter(character);
    router.push({
      pathname: "/[id]",
      params: { id: character.id.toString() },
    });
  };

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <View style={styles.label}>
      <Text style={styles.text}>{character.name}</Text>

      <View style={styles.buttonsRow}>
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={toggleFavorite}
        >
          <Text style={styles.favoriteText}>{isFavorite ? "💔" : "❤️"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Ver más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 1,
  },
  button: {
    backgroundColor: "#61dafb",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  favoriteButton: {
    backgroundColor: "black",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  favoriteText: {
    fontSize: 16,
  },
});
