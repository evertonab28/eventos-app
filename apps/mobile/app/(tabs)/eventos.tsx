import { bgRed500, centerGrow, textWhite, textXl } from '@/style';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={[centerGrow]}>
      <Text style={[textXl, bgRed500, textWhite]}>Eventos</Text>
    </View>
  );
}
