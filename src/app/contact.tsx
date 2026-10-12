import { Text, View, StyleSheet, Image, Pressable} from "react-native";
import { router } from "expo-router";
import { Linking } from "react-native";
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
     <View style={styles.pageAlign}>

      <Text style={styles.introHeading}> Escape Contacts</Text>
       <Text style={styles.subHeading}> Adventure Escape SA departmental locations</Text>

       <View style={styles.locationRow}>
       
        <View>
         <Image
         source={require('@/assets/images/app_images/cape town-building.jpg')}
         style={styles.locationImage}
         resizeMode="contain"
          />
         <Text style={styles.locationText} onPress={()=>Linking.openURL("https://maps.app.goo.gl/hqtyrGEU2vNQc5RZA")}> Cape Town</Text>
         </View>
       
         <View>
        <Image
         source={require('@/assets/images/app_images/pretoria-building.jpg')}
         style={styles.locationImage}
        resizeMode="contain"
        />
         <Text style={styles.locationText} onPress={()=>Linking.openURL("https://maps.app.goo.gl/SGoavGf3P41Vz9MR8")}> Pretoria </Text>
         </View>
         </View>

       
        <Text style={styles.subHeading}>
          Company Contact Details
        </Text>

        <View style={styles.contactAlign}>
          <Text style={styles.text1}> Email Address</Text>
          <Text style={styles.text2}> adventureescapesa@gmail.com</Text>
        </View>

        <View style={styles.contactAlign}>
          <Text style={styles.text1}> Cell Numbers</Text>
          <Text style={styles.text2}> 072 528 2469</Text>
        </View>

    
        <View style={styles.contactAlign}>
          <Text style={styles.text1}> Website for Enquiries</Text>
          <Text style={styles.text2}> Adventure Escape SA.co.za</Text>
        </View>

        <View style={styles.contactAlign}>
          <Text style={styles.text1}> Social Media UserName</Text>
          <Text style={styles.text2}> Adventure Escape SA</Text>
        </View>

        </View>
      
      <View style={styles.buttonAlign}>
      <Pressable onPress={()=> {router.push("/home_page")}}
      style={styles.button}>
       <Text style={styles.buttonText}>
      Home
      </Text>
                                         
      </Pressable>
                                        
      </View> 


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
  introHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#354933",
    lineHeight: 32,
  },
  subHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#001d3d",
    lineHeight: 32,
    marginTop:10,
  },
   logo: {
    width: "100%",
    height: 150,
  },
  pageAlign:{
    width: "100%",
    maxWidth: 750,
    alignSelf:"center",
    alignItems: "stretch",
    gap:10,
  },
  bodyAlign:{
    width:"100%",
    flexDirection:"column",
    alignItems:"center",
    marginBottom:15,
  },
  heading:{
    fontSize:50,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom:15,
    color:"#354933"
  },
  locationRow:{
    width:"100%",
    flexDirection: "row",
    alignItems: 'center',
    gap: 5,
    marginBottom: 24,
    marginTop:10,
  },
  locationImage:{
    flex: 1,
    height: 250,
    borderRadius: 15,
    width: 250
  },
  locationText:{
    flex:1,
    flexShrink:1,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#354933",
    lineHeight: 32,
  },
  contactAlign:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
    gap:20,
  },
  text1:{
    fontSize:20,
    color:"#58433B",
    
  },
  text2:{
    fontSize:20,
    color:"#58433B"
  },
    button:{
    marginTop:105,
    borderRadius: 15,
    paddingHorizontal: 85,
    paddingVertical: 8,
    backgroundColor: "#31241f",
  },
  buttonAlign:{
    justifyContent:"center",
    alignItems: "center",
     width:"100%",
    height:20,
    
  },
  buttonText:{
    color: "#ffffff",
  },
});