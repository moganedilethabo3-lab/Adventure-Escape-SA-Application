
import { Text, View, StyleSheet, Image, Pressable} from "react-native";
import { router } from "expo-router";
export default function Index() {
  return (
    <View style={styles.container}>
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
       
       <Pressable onPress={()=>{router.push("/bookings")}}>
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
         
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d8e2dc",
  },
   logo: {
    width: "100%",
    height: 150,
  },
  heading:{
    fontSize:50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:15,
    color:"#354933"
  },
  imageRow:{
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 15,
    flexDirection: "row"
  },
  screenText:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 35,
    color:"#58433B"
  },
  footer:{
    width:"100%",
    height:400,
  }
});
