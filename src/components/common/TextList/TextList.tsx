import { TIdAndName } from '@customTypes/referenceData/IdAndName';
import { TCelebrityOverview } from '@customTypes/response/overview/CelebrityOverview';
import Nullable from '@customTypes/utils/Nullable';
import { useTranslation } from 'react-i18next';
import { FlatList, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { VariantProp } from 'react-native-paper/lib/typescript/components/Typography/types';

type TextItemProps<T> = {
  item: T;
  textVariant: VariantProp<never>;
};

/**
 * Item in text list
 */
function TextListItem<T extends TIdAndName | TCelebrityOverview>({ item, textVariant }: TextItemProps<T>) {
  return <Text variant={textVariant}>{item.name}</Text>;
}

/**
 * Item separator in text list
 */
function TextItemSeparator({ textVariant }: { textVariant: VariantProp<never> }) {
  return <Text variant={textVariant}>, </Text>;
}

/**
 * Text list
 */
export type TextListProps<T> = {
  data: T[];
  title?: Nullable<string>;
  textVariant: VariantProp<never>;
  style?: ViewStyle;
  onViewMore?: () => void;
};

export default function TextList<T extends TIdAndName | TCelebrityOverview>({
  data,
  title,
  textVariant,
  style,
  onViewMore
}: TextListProps<T>) {
  const { t } = useTranslation();
  return (
    <View style={style}>
      <View style={styles.flatListContainer}>
        {title && (
          <Text style={styles.titleList} variant={textVariant}>
            {`${title}: `}
          </Text>
        )}
        <FlatList
          horizontal
          style={styles.flatlist}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          data={data.length <= 3 ? data : data.slice(0, 3)}
          renderItem={(props) => <TextListItem item={props.item} textVariant={textVariant} />}
          ItemSeparatorComponent={() => <TextItemSeparator textVariant={textVariant} />}
          keyExtractor={(_item, index) => String(index)}
        />
        {data.length > 3 && (
          <Text style={styles.dot} variant={textVariant}>
            ...
          </Text>
        )}
      </View>

      {data.length > 3 && (
        <TouchableOpacity onPress={onViewMore}>
          <Text variant={textVariant}>{t('actions.viewMore')}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    flexDirection: 'row'
  },
  titleList: {
    fontWeight: 'bold'
  },
  flatlist: {
    flexGrow: 0
  },
  dot: {
    flexGrow: 1
  }
});
