import { CharacterProvider } from "@/modules/home/provider/CharacterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CharacterProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTitle: "Lista de personajes",
              animation: "fade",
            }}
          />

          <Stack.Screen
            options={{
              animation: "fade",
              headerTitle: "Detalle del personaje",
            }}
            name="[id]"
          />
        </Stack>
      </CharacterProvider>
    </QueryClientProvider>
  );
}
