import { ProvedorEventos } from '@/data/contexts/ContextoEventos';
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
      </Stack>
    </ProvedorEventos>
  );
}
