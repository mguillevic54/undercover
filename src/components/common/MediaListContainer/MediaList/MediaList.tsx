import { TOverview } from '@customTypes/response/overview/Overview';
import { FlatList, ScrollView, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';
import MediaItem from './MediaItem/MediaItem';

type TMediaListProps = {
  title: string;
  list?: readonly TOverview[];
  titleVariant?: VariantProp<never>;
  titleStyle?: TextStyle;
  viewStyle?: ViewStyle;
};

/**
 * Component displaying several medias
 */
export default function MediaList({ title, list, titleVariant, titleStyle, viewStyle }: TMediaListProps) {
  if (!list || (list && list.length === 0)) {
    return <></>;
  }

  return (
    <ScrollView style={[styles.scrollview, viewStyle]}>
      <Text style={titleStyle} variant={titleVariant || 'titleLarge'}>
        {title}
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={list}
        renderItem={({ item }) => <MediaItem media={item} />}
        ItemSeparatorComponent={() => <View style={styles.flatlistSeparator}></View>}
        contentContainerStyle={styles.flatlist}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    marginTop: 10,
    marginHorizontal: 10
  },
  flatlist: {
    minWidth: '100%',
    overflow: 'scroll',
    marginTop: 10
  },
  flatlistSeparator: {
    width: 10
  }
});
