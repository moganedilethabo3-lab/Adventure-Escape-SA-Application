import { Text, View, StyleSheet, ScrollView,Image, Pressable} from "react-native";
import { router } from "expo-router";
export default function Index() {
  return (
    <ScrollView style={styles.container}
         contentContainerStyle={styles.contentContainer}>

          <Image
           source={require('@/assets/images/app_images/company logo.png')}
           style={styles.logo}
            resizeMode="contain"
         />
                
        <Text style={styles.heading}>
         Escape To South Africa
        </Text>

        <Text style={styles.introHeading}>
          Individual Escape SA Packages
        </Text>
        
        <View style={styles.pageAlign}>

        <Text style={styles.LocationHeading}> Western Cape</Text>
        <Text style={styles.subLocation}>Cape Town </Text>
          
          <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/ziplining.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Ziplining Adventure </Text>
            
          </View>
          <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/boats.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Kayaking Experience </Text>
            
          </View>

           <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/mountain climbing.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Rock Climbing Session </Text>
            
          </View>

           <Text style={styles.LocationHeading}> Gauteng </Text>
        <Text style={styles.subLocation}>Johannesburg</Text>
          
          <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/zip SA.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Ziplining Adventure </Text>
            
          </View>

          <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/Rock Climbing.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Rock Climbing Session </Text>
            
          </View>

           <Text style={styles.LocationHeading}> Mpumalanga</Text>
        <Text style={styles.subLocation}>Drakensburg </Text>
          
          <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/rock.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Rock Climbing Session</Text>
            
          </View>

           <Text style={styles.LocationHeading}> KwaZulu Natal</Text>
        <Text style={styles.subLocation}>Durban </Text>
          
          <View style={styles.packageRow}>
            <Image
             source={require('@/assets/images/app_images/kayak.jpg')}
             style={styles.packageImage}
              resizeMode="contain"
            />

            <Text style={styles.packageText}> Kayaking Experience </Text>
            
          </View>
            
          </View>

            
          

        
        
        <View style={styles.buttonOrder}>
            <View style={styles.buttonAlign}>
            <Pressable onPress={()=> {router.push("/home_page")}}
            style={styles.button}>
            <Text style={styles.buttonText}>
             Home
            </Text>
               
            </Pressable>
              
            </View>

            <View style={styles.buttonAlign}>
            <Pressable onPress={()=> {router.push("/equipment_purchase")}}
            style={styles.button}>
            <Text style={styles.buttonText}>
            Equipment
            </Text>
                               
            </Pressable>
                              
            </View>
            
            <View style={styles.buttonAlign}>
            <Pressable onPress={()=> {router.push("/bookings")}}
             style={styles.button}>
             <Text style={styles.buttonText}>
             Bookings
            </Text>
                               
            </Pressable>
                              
            </View>
          </View>


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
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 25,
    flexGrow: 1,
  },
    pageAlign:{
     width: "100%",
     maxWidth: 600,
    alignSelf:"center",
    alignItems: "stretch",
    gap: 10 ,
   
  },
  LocationHeading:{
        flex:1,
        flexShrink:1,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#370617",
        lineHeight: 32,
      },
      subLocation:{
        flex:1,
        flexShrink:1,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#31241f",
        lineHeight: 32,
      },
      screenText:{
       fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 12,
       lineHeight: 25,
       color:"#58433B"
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
  introHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#58433b",
    lineHeight: 32,
    marginBottom: 25,
  },
   packageRow:{
    width:"100%",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center",
    gap: 12,
    marginBottom: 5,
  },
  packageImage:{
    width: 175,
    height: 220,
   flexShrink:0,
   borderRadius: 12,
  },
    packageText:{
    flex:1,
    flexShrink: 1,
    fontSize: 18,
    lineHeight: 25,
    textAlign: "left",
    marginBottom: 0,
    color: "#58433B",
    justifyContent:"center",
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
  buttonOrder:{
 flexDirection:"column",
 alignItems:"center",
 gap: 30,
 width:"100%",
 paddingHorizontal:20,

  },
});