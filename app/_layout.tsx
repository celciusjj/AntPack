import { CharacterProvider } from '@/modules/home/provider/CharacterProvider';
import { colors } from '@/utils/colors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';

const screenOptions = {
  animation: 'fade' as const,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.secondary,
  headerTitleStyle: {
    fontWeight: 'bold' as const,
  },
};

export default function RootLayout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              ...screenOptions,
              headerTitle: 'Lista de personajes',
            }}
          />
          <Stack.Screen
            name="[id]"
            options={{
              ...screenOptions,
              headerTitle: 'Detalle del personaje',
            }}
          />
        </Stack>
      </CharacterProvider>
    </QueryClientProvider>
  );
}
