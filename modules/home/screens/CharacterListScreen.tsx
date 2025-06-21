import { AnimatedCarousel } from '@/modules/common/components/AnimatedCarrousel';
import { SkeletonCard } from '@/modules/common/components/SkeletonCard';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CharacterCard } from '../components/CharacterCard';
import { useCharacterList } from '../hooks/useCharacterList';
import { Character } from '../models';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = SCREEN_WIDTH / 2;

export const CharacterListScreen = () => {
  const { data, isLoading } = useCharacterList();
  const skeletons = Array.from({ length: 6 }).map(() => ({}) as Character);
  return (
    <SafeAreaView>
      <AnimatedCarousel
        data={isLoading ? skeletons : data}
        itemWidth={ITEM_WIDTH}
        renderCard={({ item, index, scrollX }) =>
          isLoading ? (
            <SkeletonCard key={index} />
          ) : (
            <CharacterCard
              itemWidth={ITEM_WIDTH}
              character={item}
              index={index}
              scrollX={scrollX}
            />
          )
        }
      />
    </SafeAreaView>
  );
};
