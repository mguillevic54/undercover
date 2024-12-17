import { Colors } from '@styles/Colors';
import { GestureResponderEvent, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import cardBackground from '../../../../assets/images/card-background.jpg';
import { useState } from 'react';
import { TTeamMate } from '@customTypes/Team';

type TGameCardProps = {
  teamMate: TTeamMate;
  onPress: (id: number) => void;
};

/**
 * Game Card
 */
export default function GameCard({ teamMate, onPress }: TGameCardProps) {
  const [isDiscovered, setIsDiscovered] = useState(false);

  function handlePress(_event: GestureResponderEvent) {
    setIsDiscovered(true);
    onPress(teamMate.id);
  }

  if (!isDiscovered) {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Card style={styles.card}>
          <Card.Cover source={cardBackground} style={styles.cardBackground} />
        </Card>
      </TouchableOpacity>
    );
  }

  return (
    <Card style={[styles.card, styles.cardDiscovered]}>
      <Card.Cover style={styles.cardCover} source={require(teamMate.imagePath)} />
      <Card.Title title={teamMate.name} />
      <Card.Content>
        <View style={styles.viewNumber}>
          <Text variant="bodyMedium">{teamMate.number}</Text>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center'
  },
  card: {
    margin: 16,
    borderRadius: 8,
    overflow: 'hidden' // Assure que l'image respecte les bords arrondis de la carte
  },
  cardDiscovered: {
    backgroundColor: Colors.white
  },
  cardCover: {
    width: '50%',
    height: '50%',
    justifyContent: 'center'
  },
  viewNumber: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    color: Colors.white,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
