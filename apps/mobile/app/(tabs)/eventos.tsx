import { bgBlack, flex1, gapY4, p4, py8 } from '@/style';
import { Pressable, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import EventoCard from '@/components/evento/EventoCard';
import useEventos from '@/data/hooks/useEventos';
import SemEventos from '@/components/evento/SemEventos';

export default function TelaEventos() {
  const { eventos } = useEventos();
  const router = useRouter();

  return (
    <SafeAreaView style={[flex1, bgBlack, p4]}>
      {eventos.length === 0 && <SemEventos />}
      <ScrollView contentContainerStyle={[gapY4, py8]}>
        {eventos.map((evento) => (
          <Pressable
            key={evento.id}
            onPress={() => router.push(`/eventos/${evento.id}`)}>
            <EventoCard evento={evento} />
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
