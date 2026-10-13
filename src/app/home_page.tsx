
import { Text, View, StyleSheet, Image, Pressable,useWindowDimensions,ScrollView} from "react-native";
import { router } from "expo-router";
import React from "react";
import {moderateScale, verticalScale,} from "react-native-size-matters"
export default function Index() {
  
  const{height} =useWindowDimensions();

  const imageHeight = Math.min(
    220,
    Math.max(120, height * 0.22)
  );
  return (
    <ScrollView style={styles.container}>
        <Image
            source={require('@/assets/images/app_images/company logo.png')}
            style={styles.logo}
            resizeMode="contain"
         />

        <Text style={styles.heading}>
            Escape To South Africa
        </Text>
        
         <View style={styles.imageRow}>
        <Pressable onPress={()=>{router.push("/gallery")}}>
            <Text style={styles.screenText}> Gallery</Text>
        </Pressable>
       
       <Pressable onPress={()=>{router.push("/customer_booking")}}>
            <Text style={styles.screenText}> Bookings</Text>
        </Pressable>
      </View>


      <View style={styles.imageRow}>
        <Pressable onPress={()=>{router.push("/about_us")}}>
            <Text style={styles.screenText}> About Us </Text>
        </Pressable>
       
       <Pressable onPress={()=>{router.push("/overview")}}>
            <Text style={styles.screenText}> Escape OverView </Text>
        </Pressable>
      </View>

       <View style={styles.imageRow}>
        <Pressable onPress={()=>{router.push("/contact")}}>
            <Text style={styles.screenText}> Escape Contacts</Text>
        </Pressable>
       
       <Pressable onPress={()=>{router.push("/quotation")}}>
            <Text style={styles.screenText}> Escape Quotation </Text>
        </Pressable>
      </View>

      
       <View style={styles.imageRow}>
        <Pressable onPress={()=>{router.push("/activities")}}>
            <Text style={styles.screenText}> Escape Packages</Text>
        </Pressable>
       
       <Pressable onPress={()=>{router.push("/equipment_purchase")}}>
            <Text style={styles.screenText}> Safety Package Equipment </Text>
        </Pressable>
      </View>

       <Image
            source={require('@/assets/images/app_images/journey_begins.jpg')}
            style={styles.footer}
            resizeMode="contain"
         />
         
    

    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
   backgroundColor:"#d8e2dc",
  },
   contentContainer:{
    alignItems:"center",
   flexGrow: 1,
    paddingHorizontal: moderateScale(16),
    paddingTop: verticalScale(12),
    paddingBottom: verticalScale(24),
  
  },
   logo: {
    width: "100%",
    height: 150,
  },

  heading:{
    fontSize:moderateScale(17),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:verticalScale(15),
    color:"#354933"
  },
  imageRow:{
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 15,
    flexDirection: "row"
  },
  screenText:{
    fontSize: moderateScale(25),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: verticalScale(15),
    color:"#58433B"
  },
  footer:{
    width:"100%",
    height:400,
  }
});
