import { Text, View, StyleSheet,ScrollView, Image, Pressable} from "react-native";
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
              <View style={styles.pageAlign}> 
            
            <Text style={styles.introHeading}> Western Cape</Text>
            <Text style={styles.accomodationName}> Tabel Mountain Hostel</Text>
            <View style={styles.accomodationRow}>
              <Image
             source={require('@/assets/images/app_images/cpt.jpg')}
             style={styles.accomodationImage}
             resizeMode="contain"
            />
            <View style={styles.accomodationInfo}>
            
            <Text style={styles.accomodationText}> Located at the heart of Cape Town, with an amazing sightseeing view of the
               mountain's glory is an affordable accomodation is made available for both locals and tourists on top of the mountain.  </Text>
            </View>
            </View>

            <Text style={styles.introHeading}> Gauteng</Text>
            <Text style={styles.accomodationName}> Groenkloof Nature Reserve</Text>
            <View style={styles.accomodationRow}>
              <Image
             source={require('@/assets/images/app_images/pta.jpg')}
             style={styles.accomodationImage}
             resizeMode="contain"
            />
            <View style={styles.accomodationInfo}>

            <Text style={styles.accomodationText}> Inside the Nature Reserve accomodation is made available for individuals participating in the Escape SA packages </Text>
            </View>
            </View>

            <Text style={styles.introHeading}> KwaZulu Natal</Text>
             <Text style={styles.accomodationName}> Bluff Eco Park</Text>
            <View style={styles.accomodationRow}>
              <Image
             source={require('@/assets/images/app_images/kzn camp.jpg')}
             style={styles.accomodationImage}
             resizeMode="contain"
            />
              <View style={styles.accomodationInfo}>
           
            <Text style={styles.accomodationText}> For affordable accomodation in Durban with a "budget-concious" option,
              we have "Bluff Eco Park", located closely near our Escape Package sites in the city. </Text>
            </View>
            </View>

            <Text style={styles.introHeading}> Mpumalanga</Text>
            <Text style={styles.accomodationName}> Summit Lodge </Text>
            
            <View style={styles.accomodationRow}>
              <Image
             source={require('@/assets/images/app_images/kruger.jpg')}
             style={styles.accomodationImage}
             resizeMode="contain"
            />
              <View style={styles.accomodationInfo}>
            
            <Text style={styles.accomodationText}> Located in Graskop near many of the province's outdoor activity and  recreational areas, 
              affordable accomodation inside the Summit Lodge can be booked. </Text>
            </View>
            </View>

                  <Pressable onPress={()=> {router.push("/bookings")}}
                  style={styles.button}>
                  <Text style={styles.buttonText}>
                  Book Today!
                  </Text>
                                                         
                  </Pressable>
           
              <Pressable onPress={()=> {router.push("/home_page")}}
               style={styles.button}>
               <Text style={styles.buttonText}>
               Home
               </Text>
                           
              </Pressable>
                          
              
        
        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:"#9fb6a2",
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
    gap:10,
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
   screenText:{
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 25,
    color:"#58433B"
  },
  introHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#31241f",
    lineHeight: 32,
  },
    button:{
     width: "100%",
     maxHeight:600,
    backgroundColor: "#31241f",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
  },
  buttonText:{
    color: "#ffffff",
    fontSize:17,
    fontWeight:"bold",
  },
  accomodationRow:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 10,
    borderRadius: 12,
    gap: 10,
    marginBottom: 10,
  },
  accomodationImage:{
    width: "50%",
    maxWidth:220,
    height: 200,
   flexShrink:0,
   borderRadius: 12,
   alignItems:"center"
  },
    accomodationText:{
    flex:1,
    flexShrink: 1,
    fontSize: 18,
    lineHeight: 20,
    textAlign: "left",
    marginBottom: 0,
    color: "#58433B",
    justifyContent:"center",
  },
  accomodationInfo:{
    flex:1,
    minWidth:0,
    justifyContent:"center",
    alignItems:"center",
    gap:10,
  },
  accomodationName:{
    fontSize: 20,
    fontWeight:"bold",
    lineHeight: 26,
    textAlign: "center",
    marginBottom: 0,
    color: "#001d30",
  }
});