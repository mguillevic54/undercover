import { Colors } from '@styles/Colors';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Card, Text } from 'react-native-paper';
import placeholder from '../../../../assets/image_placeholder.png';

type CustomCardProps = {
  title?: string;
  image?: string;
  description?: string;
  onPress: () => void;
  style?: ViewStyle;
};

export default function CustomCard({ title, image, onPress, style }: CustomCardProps) {
  return (
    <Card style={[style, styles.card]} onPress={onPress}>
      <Card.Cover
        accessibilityLabel={title}
        resizeMode={image ? 'contain' : 'stretch'}
        source={image ? { uri: image } : placeholder}
        style={image ? styles.cardImageFull : styles.cardImageWithText}
      />
      {!image && (
        <Card.Content>
          <Text style={styles.cardLegend} variant="bodySmall" ellipsizeMode="tail" numberOfLines={3}>
            {title}
          </Text>
        </Card.Content>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 115,
    height: 175,
    backgroundColor: Colors.white
  },
  cardImageFull: {
    width: '100%',
    height: '100%'
  },
  cardImageWithText: {
    width: '100%',
    height: '65%'
  },
  cardLegend: {
    textAlign: 'center'
  }
});
