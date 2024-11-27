import { bgRed500, centerGrow, textWhite, textXl } from '@/style';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={[centerGrow]}>
      <Text style={[textXl, bgRed500, textWhite]}>React Native rules!</Text>
    </View>
  );
}
