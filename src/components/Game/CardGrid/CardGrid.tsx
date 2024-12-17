import GameCard from '@components/common/GameCard/GameCard';
import { TTeamMate } from '@customTypes/Team';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { GameStatusEnum } from 'src/utils/enum/GameStatusEnum';

type TCardGridProps = {
  teamMembers: TTeamMate[];
  gameStatus: string;
};

/**
 * Card grid
 */
export default function CardGrid({ teamMembers, gameStatus }: TCardGridProps) {
  function handleCardPress(id: number) {}

  return (
    <FlatList
      data={teamMembers}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <GameCard teamMate={item} onPress={handleCardPress} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8
  }
});
