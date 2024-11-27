import { flex1, bgBlack } from '@/style';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      resizeMode="cover"
      style={[flex1, bgBlack]}></ImageBackground>
  );
}
