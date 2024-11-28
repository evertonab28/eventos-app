import { ProvedorEventos } from '@/data/contexts/ContextoEventos';
import { colors } from '@/style/colors';
import { Stack } from 'expo-router';
import 'react-native-get-random-values';

export default function RootLayout() {
  return (
    <ProvedorEventos>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(stack)/eventos/[id]"
          options={{
            title: 'Detalhes do evento',
            headerBackTitle: 'Voltar',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.zinc[900],
            },
          }}
        />
      </Stack>
    </ProvedorEventos>
  );
}
