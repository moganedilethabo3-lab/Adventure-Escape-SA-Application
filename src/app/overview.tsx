import { Text, View, StyleSheet, ScrollView, Image,Pressable} from "react-native";
import { router } from "expo-router";
export default function Index() {
  return (
    <ScrollView style={styles.container}
     contentContainerStyle={styles.contentContainer}>
     <View style={styles.pageAlign}>
      <Image
          source={require('@/assets/images/app_images/company logo.png')}
          style={styles.logo}
          resizeMode="contain"
          />
      
        <Text style={styles.heading}>
         Escape To South Africa
        </Text>
        
        <View style={styles.introRow}>   
          <Text style={styles.subHeading}>
            Why you should Escape with Us!</Text>    
        <Image
          source={require('@/assets/images/app_images/escape.jpg')}
          style={styles.introImage}
          resizeMode="contain"
          />
        </View>

        <Text style={styles.introHeading}>
          Popular Escape SA Locations
        </Text>

        <View style={styles.locationRow}>

        <View>
        <Image
          source={require('@/assets/images/app_images/cape town.jpg')}
          style={styles.locationImage}
          resizeMode="contain"
        />
        <Text style={styles.locationText}> Cape Town</Text>
        </View>

        <View>
        <Image
          source={require('@/assets/images/app_images/pretoria.jpg')}
          style={styles.locationImage}
          resizeMode="contain"
        />
        <Text style={styles.locationText}> Johannesburg </Text>
        </View>

        <View>
          <Image
          source={require('@/assets/images/app_images/durban.jpg')}
          style={styles.locationImage}
          resizeMode="contain"
        />
        <Text style={styles.locationText}>Durban  </Text>
        </View>
        </View>

        <Text style={styles.introHeading}>
          Adventure Escape SA services
        </Text>

        <Text style={styles.screenText}>
          At Adventure Escape SA we offer both our local and international tourist customers 
          a range of affordabale outdoor activities that allow them to explore the diverse and nautritious South Africa.
        </Text>
        <Text style={styles.screenText}>
          Adventure Escape SA not only offers you a variety of packages to choose but these packages come at a Discount 
          for both individuals and those that come in groups.
        </Text>

       <View style={styles.buttonOrder}>
       <View style={styles.buttonAlign}>
             <Pressable onPress={()=> {router.push("/activities")}}
               style={styles.button}>
               <Text style={styles.buttonText}>
                 Activities
               </Text>
              
             </Pressable>
             
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
 
  subHeading:{
    fontSize: 35,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom: 20,
    color: "#370617",
  },
  pageAlign:{
     width: "100%",
     maxWidth: 600,
    alignSelf:"center",
    alignItems: "stretch",
    gap: 10 ,
  },
  introHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#58433b",
    lineHeight: 32,
  },
 
  introRow:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    gap: 5,
    marginBottom: 10,
  },
   introImage:{
    width:185,
    height:175,
    borderRadius: 20,
    flexShrink:0,
  },
  locationRow:{
    width:"100%",
    flexDirection: "row",
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 24,
  },
  locationImage:{
    flex: 1,
    height: 250,
    borderRadius: 10,
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
  
  button:{
    marginTop:45,
    borderRadius: 15,
    paddingHorizontal: 85,
    paddingVertical: 8,
    backgroundColor: "#31241f",
  },
  buttonOrder:{
 flexDirection:"column",
 alignItems:"center",
 gap: 30,
 width:"100%",
 paddingHorizontal:20,

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