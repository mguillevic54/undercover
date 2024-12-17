import CustomButton from '@components/common/CustomButton/CustomButton';
import { TIdAndName } from '@customTypes/referenceData/IdAndName';
import Nullable from '@customTypes/utils/Nullable';
import { Colors } from '@styles/Colors';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Modal, Portal, Text } from 'react-native-paper';

type TMediaListFilterModalProps<T> = {
  list: Nullable<readonly T[]>;
  isModalVisible: boolean;
  hideModal: () => void;
  activeFilter: Nullable<string | number>;
  onFilterSelection: (filter: string | number) => void;
  filterType?: Nullable<string>;
};

/**
 * Modal used to select a filter
 */
export default function MediaListFilterModal<T extends TIdAndName | string>({
  list,
  isModalVisible,
  hideModal,
  activeFilter,
  onFilterSelection,
  filterType
}: TMediaListFilterModalProps<T>) {
  const { t } = useTranslation();

  /**
   * Select filter and close modal
   * @param filter the selected filter
   */
  const handleFilterSelection = (filter: string | number) => {
    onFilterSelection(filter);
    hideModal();
  };

  return (
    <Portal>
      <Modal visible={isModalVisible} onDismiss={hideModal} style={styles.portalStyle}>
        <View style={styles.contentStyle}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewStyle}>
            {list?.map((item) => {
              const display =
                typeof item === 'string' ? t(`filters.${filterType}.${item}`) : t(`filters.genres.${item.id}`);
              const filter = typeof item === 'string' ? item : item.id;
              return (
                <CustomButton key={filter} onPress={(_event) => handleFilterSelection(filter)}>
                  <Text variant={activeFilter === filter ? 'titleLarge' : 'titleMedium'} style={styles.textStyle}>
                    {display}
                  </Text>
                </CustomButton>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  portalStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentStyle: {
    height: '80%',
    width: '80%'
  },
  scrollViewStyle: {
    minHeight: '100%',
    justifyContent: 'center'
  },
  textStyle: {
    color: Colors.white,
    marginVertical: 10,
    textAlign: 'center'
  }
});
