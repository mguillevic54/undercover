import { PropsWithChildren } from 'react';
import { ScrollView } from 'react-native';
import MediaList from './MediaList/MediaList';
import MediaListFiltersContainer from './MediaListFilter/MediaListFilter';

/**
 * Media list container
 */
function MediaListContainer({ children }: PropsWithChildren) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}>
      {children}
    </ScrollView>
  );
}

MediaListContainer.MediaList = MediaList;
MediaListContainer.MediaListFilters = MediaListFiltersContainer;

export default MediaListContainer;
