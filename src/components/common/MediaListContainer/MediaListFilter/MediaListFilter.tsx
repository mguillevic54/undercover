import CustomButton from '@components/common/CustomButton/CustomButton';
import Loader from '@components/common/Loader/Loader';
import { TGenreDTO } from '@customTypes/response/referenceData/GenreDTO';
import Nullable from '@customTypes/utils/Nullable';
import { useGenresByBookTypeQuery, useGenresQuery } from '@hooks/queries/referenceData/useRefDataQueries';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '@styles/theme';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-paper';
import { BookTypeEnum } from 'src/utils/enum/BookTypeEnum';
import { MediaTypeEnum } from 'src/utils/enum/MediaTypeEnum';
import MediaListFilterModal from './MediaListFilterModal/MediaListFilterModal';

type TMediaListFilterProps = {
  name?: Nullable<string>;
  onFilterSelection: () => void;
};

/**
 * Media list filter
 */
function MediaListFilter({ name, onFilterSelection }: TMediaListFilterProps) {
  if (!name) {
    return (
      <TouchableOpacity style={styles.buttonLoader}>
        <Loader />
      </TouchableOpacity>
    );
  }

  return (
    <CustomButton
      mode="outlined"
      onPress={onFilterSelection}
      icon={() => (
        <View style={styles.mediaListFilterIcon}>
          <Icon size={28} source="chevron-down" />
        </View>
      )}
      style={styles.mediaListFilter}
      contentStyle={styles.mediaListFilterContent}
      labelStyle={styles.mediaListFilterLabel}
    >
      {name}
    </CustomButton>
  );
}

type TMediaListProps = {
  mediaType: string;
  genreId?: Nullable<number>;
  onGenreSelection: (genreId: number) => void;
  onBookTypeSelection?: (type: string) => void;
  bookType?: Nullable<string>;
  isGenreFilterVisible?: boolean;
  isBookTypeFilterVisible?: boolean;
};

/**
 * Media list filters section
 */
export default function MediaListFiltersContainer({
  mediaType,
  genreId,
  onGenreSelection,
  onBookTypeSelection,
  bookType,
  isBookTypeFilterVisible = false,
  isGenreFilterVisible = true
}: TMediaListProps) {
  const { t } = useTranslation();
  const [activeGenre, setActiveGenre] = useState<Nullable<TGenreDTO>>();
  const [activeMediaType, setActiveMediaType] = useState<Nullable<string>>();
  const [activeBookType, setActiveBookType] = useState<Nullable<string>>();
  const [isGenresModalVisible, setIsGenresModalVisible] = useState(false);
  const [isMediaTypesModalVisible, setIsMediaTypesModalVisible] = useState(false);
  const [isBookTypesModalVisible, setIsBookTypesModalVisible] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const mediaTypes = Object.keys(MediaTypeEnum);
  const bookTypes = Object.keys(BookTypeEnum);
  const { data: genres } = bookType ? useGenresByBookTypeQuery(bookType) : useGenresQuery(mediaType);

  useEffect(() => {
    if (genres) {
      setActiveGenre(genres.find((item) => item.id === genreId) ?? genres[0]);
    }
  }, [genres, genreId]);

  useEffect(() => {
    if (mediaTypes) {
      setActiveMediaType(mediaTypes.find((item) => item === mediaType) ?? mediaTypes[0]);
    }
  }, [mediaTypes]);

  useEffect(() => {
    if (bookTypes) {
      setActiveBookType(bookTypes.find((item) => item === bookType) ?? bookTypes[0]);
    }
  }, [bookTypes, bookType]);

  /**
   * Navigate to media type list screen
   * @param mediaType the navigation destination
   */
  const handleMediaTypeSelection = (mediaType: string) => {
    switch (mediaType) {
      case MediaTypeEnum.MOVIE:
        navigation.navigate('Movies');
        break;
      case MediaTypeEnum.TV_SHOW:
        navigation.navigate('TV Shows');
        break;
      case MediaTypeEnum.BOOK:
        navigation.navigate('Books');
        break;
      default:
        navigation.navigate('Home');
        break;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <MediaListFilter
          name={activeMediaType && t(`filters.mediaTypes.${activeMediaType}`)}
          onFilterSelection={() => setIsMediaTypesModalVisible(true)}
        />
        {isBookTypeFilterVisible && (
          <MediaListFilter
            name={activeBookType && t(`filters.bookTypes.${activeBookType}`)}
            onFilterSelection={() => setIsBookTypesModalVisible(true)}
          />
        )}
        {isGenreFilterVisible && (
          <MediaListFilter
            name={activeGenre && t(`filters.genres.${activeGenre.id}`)}
            onFilterSelection={() => setIsGenresModalVisible(true)}
          />
        )}
      </View>

      <MediaListFilterModal<string>
        list={mediaTypes}
        isModalVisible={isMediaTypesModalVisible}
        hideModal={() => setIsMediaTypesModalVisible(false)}
        activeFilter={activeMediaType}
        onFilterSelection={handleMediaTypeSelection}
        filterType={'mediaTypes'}
      />
      <MediaListFilterModal<TGenreDTO>
        list={genres}
        isModalVisible={isGenresModalVisible}
        hideModal={() => setIsGenresModalVisible(false)}
        activeFilter={activeGenre?.id}
        onFilterSelection={onGenreSelection}
      />
      {onBookTypeSelection && (
        <MediaListFilterModal<string>
          list={bookTypes}
          isModalVisible={isBookTypesModalVisible}
          hideModal={() => setIsBookTypesModalVisible(false)}
          activeFilter={activeBookType}
          onFilterSelection={onBookTypeSelection}
          filterType={'bookTypes'}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  mediaListFilter: {
    marginLeft: 10,
    marginTop: 10
  },
  mediaListFilterContent: {
    flexDirection: 'row-reverse'
  },
  mediaListFilterLabel: {
    marginVertical: 3,
    marginLeft: 15,
    marginRight: 15
  },
  mediaListFilterIcon: {
    marginRight: -10,
    marginTop: 2
  },
  buttonLoader: {
    marginLeft: 10,
    marginTop: 10,
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    borderStyle: 'solid',
    borderColor: theme.colors.outline
  }
});
