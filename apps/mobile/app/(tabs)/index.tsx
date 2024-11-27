import Logo from '@/components/template/Logo';
import { bgBlack, centerGrow } from '@/style';
import { ImageBackground } from 'react-native';
import 'react-native-get-random-values';

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
