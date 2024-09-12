import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {



  // Kommentar
  return (
      <View style={{ flex: 1, flexDirection: "column", backgroundColor: "gray", justifyContent: "center", alignItems: "center" }}>
        <Text style={{ backgroundColor: "#00ccff", flex: 1 }}>Hej yyyyyyyy</Text>
        <Text style={{ backgroundColor: "red", flex: 2 }}>Hej yyyyyyyy</Text>
        <Text style={{ backgroundColor: "yellow", height: 200 }}>Hej yyyyyyyy</Text>

        <View style={{ flexDirection: "row", backgroundColor: "cyan" }}>
          <Text>Banan</Text>
          <Text>Apelsin</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
