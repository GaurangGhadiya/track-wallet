import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import Button from "../components/reusable/Button";

const { width, height } = Dimensions.get("window");

// Onboarding Data
const slides = [
  {
    id: "1",
    title: "Gain total control of your money",
    description: "Become your own money manager and make every cent count",
    image: require("../assets/images/onboarding1.png"),
  },
  {
    id: "2",
    title: "Know where your money goes",
    description: "Track your transactions easily, with categories and financial reports",
    image: require("../assets/images/onboarding2.png"),
  },
  {
    id: "3",
    title: "Planning ahead",
    description: "Setup your budget for each category so you stay in control",
    image: require("../assets/images/onboarding3.png"),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < slides.length - 1) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        flatListRef.current.scrollToIndex({ index: 0, animated: true });
        setCurrentIndex(0);
      }
    }, 3000); // Auto swipe every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Track scroll to update dots
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: false,
  });

  const updateIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  // Render each onboarding item
  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Onboarding Slider */}
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={onScroll}
        onMomentumScrollEnd={updateIndex}
      />

      {/* Dots Indicator */}
      <View style={styles.dotsContainer}>
        {slides.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [(index - 1) * width, index * width, (index + 1) * width],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[styles.dot, { opacity }]}
            />
          );
        })}
      </View>


      {/* Buttons */}
      <View style={styles.buttonContainer}>
      <View style={{ flex: 1,width : "90%"}}>
      <Button title="Login" onPress={() => navigation.navigate("Login")} variant="dark"/>
    </View>
   
     
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    width,
    alignItems: "center",
    marginTop : '50%',
    // justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginTop: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 100, // Ensures it's above buttons
    width: "100%",
    zIndex: 1, // Ensures visibility
  },
  dot: {
    width: 12, // Increased size
    height: 12,
    borderRadius: 6,
    backgroundColor: "#7F3DFF", // Ensures visibility
    marginHorizontal: 5,
  },
  
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
    flex : 1,
  },

});

export default OnboardingScreen;
