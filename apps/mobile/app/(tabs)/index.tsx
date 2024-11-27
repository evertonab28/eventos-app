import Logo from '@/components/template/Logo';
import { flex1, bgBlack, centerGrow } from '@/style';
import { ImageBackground, SafeAreaView, Text, View } from 'react-native';

export default function Index() {
  return (
    <ImageBackground
      source={require('@/assets/images/background.png')}
      resizeMode="cover"
      style={[centerGrow, bgBlack]}>
      <Logo />
    </ImageBackground>
  );
}
