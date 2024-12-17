import CustomCard from '@components/common/CustomCard/CustomCard';
import { TOverview } from '@customTypes/response/overview/Overview';
import { TScreenPlayOverview } from '@customTypes/response/overview/ScreenPlayOverview';
import { useNavigation } from '@react-navigation/native';
import { MovieListScreenNavigationProp } from '@screens/MovieListScreen/MovieListScreen';
import { MediaTypeEnum } from 'src/utils/enum/MediaTypeEnum';

type TMediaItemProps = {
  media: TOverview;
};

/**
 * Component to dysplay media in media list
 */
export default function MediaItem({ media }: TMediaItemProps) {
  const navigation = useNavigation<MovieListScreenNavigationProp>();

  const handleMediaSelection = () => {
    switch (media.mediaType) {
      case MediaTypeEnum.BOOK:
        break;
      case MediaTypeEnum.MOVIE:
        const movie = media as TScreenPlayOverview;
        navigation.navigate('Movie View', { id: movie.tmdbId });
        break;
      case MediaTypeEnum.TV_SHOW:
        break;

      default:
        break;
    }
  };

  return <CustomCard title={media.name} image={media.imageUrl} onPress={handleMediaSelection} />;
}
