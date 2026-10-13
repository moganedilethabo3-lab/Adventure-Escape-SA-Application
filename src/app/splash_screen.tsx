import React, { useEffect, useRef } from 'react';
import { View,Text, Image, StyleSheet, Animated, Easing,
//Easing => used to control how animations move    
} from 'react-native';
import { router } from 'expo-router';


export default function SplashScreen() {
 //The following code is used to implemet a splash screen in the app

 //The logo will have a fade-in effect from invisible-> fully visible
  const fadeAnim = useRef(new Animated.Value(0)).current;  

  // An action that happens while the screen loads
  useEffect(() => {

    // Logo fading into the screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();

    // The splash screen will take 3 seconds before replaced by the Home Page
    const timer = setTimeout(() => {
      router.replace('/home_page');
    }, 3000);
 // This code is used to cancel the timer if any disturbances occur when the splash screen loads
    return () => clearTimeout(timer);

  }, []);
  
  //The following is the code that governs how the splash screen will look like
  return (
    <View style={styles.container}>

      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
          },
        ]}
      >
        
    
        <Image
          source={require('@/assets/images/app_images/company logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.appName}>
            Adventure Escape SA
        </Text>

        <Text style={styles.subtitle}>
          Welcome to Adventure Escape SA
        </Text>

        <Text style={styles.loading}>
          Loading...
        </Text>

      </Animated.View>

    </View>
  );
}

//The following code at the bottom is used to control and define the appareance of elements in the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9fb6a2",
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:16,
  },

  content: {
    alignItems: 'center',
    width:"100%"
  },

  logo: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },

  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign:"center"
  },

  subtitle: {
    fontSize: 15,
    color: '#ffffff',
    marginTop: 8,
    textAlign:"center"
  },

  loading: {
    fontSize: 20,
    color: '#000000',
    marginTop: 25,
    fontWeight:"600",
  },
});
