import EventoCard from '@/components/evento/EventoCard';
import useEventos from '@/data/hooks/useEventos';
import { SafeAreaView, ScrollView, Text } from 'react-native';

export default function Eventos() {
  const { eventos } = useEventos();

  return (
    <SafeAreaView>
      <ScrollView>
        {eventos.map((evento) => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
