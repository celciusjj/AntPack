import { colors } from '@/utils/colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  handlePress: () => void;
  children: React.ReactNode;
}

export const Button = ({ handlePress, children, style, ...rest }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handlePress} {...rest}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
