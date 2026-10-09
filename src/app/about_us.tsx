import { router } from "expo-router";
import { Text, View, StyleSheet,Image,ScrollView,  Pressable}   from "react-native";

export default function Index() {

  
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.contentContainer}>

      <View style={styles.pageAlign}>
      <View style={styles.introRow}>
        <Text style={styles.introHeading}> Adventure Escape South Africa</Text>
        <Image
        source={require('@/assets/images/app_images/who.jpg')}
        style={styles.introImage}
        resizeMode="contain"
        />
      </View>

      <Text style={styles.subHeading}>
        Our Mission
      </Text>
      <Text style={styles.screenText}>
        Adventure Escape SA's mission is to give famailies and individuals the opportunity whilst on vacation to 
        choose from a variety of exciting outdoor activities to book from at affordable prices.
      </Text>

       <Text style={styles.subHeading}>
        Our Vision
      </Text>
      <Text style={styles.screenText}>
        At Adventure Escape SA we vision to become a leading South African outdoor activity booking company that inspires both
        local and tourists to explore the country's hidden gems!
      </Text>

      <Text style={styles.bodyHeading}>
        Adventure Escape SA's founder
      </Text>

      <View style={styles.founderRow}>
      <Image
        source={require('@/assets/images/app_images/founder.jpg')}
        style={styles.founderImage}
        resizeMode="contain"
        />

        <View style={styles.align}>
      <Text style={styles.founderText}>
          Liam Daniels
        </Text>
        <Text style={styles.founderText}>
         Born in 1956, Cape Town South Africa.
         Liam grew up in a a family that loved to travel across the country. But finding a place to book for 
         supervised outdoor activities was always a hasle. And that's when Adventure Escape SA was born.
         
        </Text>
        </View>
        
        </View>

         <Text style={styles.bodyHeading}>
       Meet the Team
        </Text>
        <Text style={styles.screenText}>
        The Escape SA team is a team of highly trained and proffessional individuals each trained to not only
        guide you throughout the activities but to ensure your SAFETY.
      </Text>
      
      <View style={styles.teamRow}>
      <Image
        source={require('@/assets/images/app_images/team.jpg')}
        style={styles.teamImage}
        resizeMode="contain"
        />

        <Image
        source={require('@/assets/images/app_images/SA team.jpg')}
        style={styles.teamImage}
        resizeMode="contain"
        /> 
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
  
  align:{
    flexDirection: "column",
    textAlign:"center",
    width: "90%",
    lineHeight: 20,
    
  },
  bodyHeading:{
   width:"auto",
    fontSize:30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 12,
    color:"#354933" 
  },

  heading:{
    width:"auto",
    fontSize:30,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
    marginTop: 12,
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
    fontSize: 25,
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
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#354933",
    lineHeight: 32,
  },
 
  introRow:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    gap: 12,
    marginBottom: 20,
  },
   introImage:{
    width:120,
    height:145,
    borderRadius: 12,
    flexShrink:0,
  },
  teamRow:{
    width:"100%",
    flexDirection: "row",
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 24,
  },
  teamImage:{
    flex: 1,
    height: 250,
    borderRadius: 10,
    width: 250
  },
  

  founderRow:{
    width:"100%",
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-start",
    gap: 12,
    marginBottom: 5,
  },
  founderImage:{
    width: 175,
    height: 220,
   flexShrink:0,
   borderRadius: 12,
  },
    founderText:{
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
    marginTop:10,
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