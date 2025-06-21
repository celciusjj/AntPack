import { AnimatedCarousel } from "@/modules/common/components/AnimatedCarrousel";
import { SkeletonCard } from "@/modules/common/components/SkeletonCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { CharacterCard } from "../components/CharacterCard";
import { useCharacterList } from "../hooks/useCharacterList";

export const CharacterListScreen = () => {
  const { data, isLoading } = useCharacterList();
  return (
    <SafeAreaView>
      <AnimatedCarousel
        renderCard={({ item, index, scrollX }) =>
          isLoading ? (
            <SkeletonCard key={index} />
          ) : (
            <CharacterCard character={item} index={index} scrollX={scrollX} />
          )
        }
        data={data}
      />
    </SafeAreaView>
  );
};
