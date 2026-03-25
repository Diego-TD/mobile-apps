import { Image } from "expo-image";
import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewToken,
} from "react-native";
import { CustomModal } from "./CustomModal";

interface ImageModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  images: string[];
  initialIndex?: number;
}

export const ImageModal = ({
  visible,
  onClose,
  title,
  images,
  initialIndex = 0,
}: ImageModalProps) => {
  const { width } = useWindowDimensions();
  // modal has 20px padding on each side + 16px content padding on each side
  const imageWidth = Math.min(width - 40, 400) - 32;

  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0 && viewableItems[0].index != null) {
        setActiveIndex(viewableItems[0].index);
      }
    },
    []
  );

  const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
      title={title}
      animationType="fade"
    >
      <FlatList
        data={images}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={[styles.image, { width: imageWidth }]}
            contentFit="contain"
          />
        )}
        initialScrollIndex={initialIndex}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig.current}
        getItemLayout={(_, index) => ({
          length: imageWidth,
          offset: imageWidth * index,
          index,
        })}
      />

      {/* Dot indicators */}
      {images.length > 1 && (
        <View style={styles.dotsContainer}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, i === activeIndex && styles.dotActive]}
            />
          ))}
        </View>
      )}

      {/* Counter */}
      <Text style={styles.counter}>
        {activeIndex + 1} / {images.length}
      </Text>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 220,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
  },
  dotActive: {
    backgroundColor: "#4A4A4A",
  },
  counter: {
    textAlign: "center",
    marginTop: 6,
    fontSize: 13,
    color: "#888",
  },
});
