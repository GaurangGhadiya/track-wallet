import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

const SocialCard = ({ logo, name, description, onPress }) => {
    return (
         <Pressable onPress={onPress} style={styles.card}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Pressable>
    );
  };
  

  export default SocialCard;

  
  const styles = StyleSheet.create({
    card: {
    //   flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff', // White background for the card
      borderRadius: 8, // Rounded corners
      padding: 16,
      marginVertical: 8,
      shadowColor: '#000', // Shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3, // Shadow for Android
      width: '48%', // Full width
    },
    logo: {
      width: 100, // Logo width
      height: 100, // Logo height
    //   marginRight: 16,
      textAlign : "center"
    },
    textContainer: {
        marginTop : 10
    //   flex: 1, // Take up remaining space
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333', // Dark text color
    },
    description: {
      fontSize: 14,
      color: '#666', // Gray text color
      marginTop: 4,
    },
  });
  