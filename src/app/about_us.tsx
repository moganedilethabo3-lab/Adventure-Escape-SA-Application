import { router } from "expo-router";
import { Text, View, StyleSheet,Image,ScrollView,  Pressable}   from "react-native";

export default function Index() {

  
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.contentContainer}>

      <View style={styles.pageAlign}>
      
        <Text style={styles.introHeading}> Adventure Escape South Africa</Text>
        <Image
        source={require('@/assets/images/app_images/who.jpg')}
        style={styles.image}
        resizeMode="contain"
        />
     

      <Text style={styles.subHeading}>
        Our Mission
      </Text>
      <Text style={styles.paragraph}>
        Adventure Escape SA's mission is to give famailies and individuals the opportunity whilst on vacation to 
        choose from a variety of exciting outdoor activities to book from at affordable prices.
      </Text>

       <Text style={styles.subHeading}>
        Our Vision
      </Text>
      <Text style={styles.paragraph}>
        At Adventure Escape SA we vision to become a leading South African outdoor activity booking company that inspires both
        local and tourists to explore the country's hidden gems!
      </Text>

      <Text style={styles.bodyHeading}>
        Adventure Escape SA's founder
      </Text>

  
      <Image
        source={require('@/assets/images/app_images/founder.jpg')}
        style={styles.image}
        resizeMode="contain"
        />

       
      <Text style={styles.subHeading}>
          Liam Daniels
        </Text>

        <Text style={styles.paragraph}>
         Born in 1956, Cape Town South Africa.
         Liam grew up in a a family that loved to travel across the country. But finding a place to book for 
         supervised outdoor activities was always a hasle. And that's when Adventure Escape SA was born.
         
        </Text>
        
        
       

         <Text style={styles.bodyHeading}>
       Meet the Team
        </Text>
        <Text style={styles.paragraph}>
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
      

      
     
      <Pressable onPress={()=> {router.push("/overview")}}
        style={styles.button}>
        <Text style={styles.buttonText}>
          OverView 
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
    padding:16,
    alignItems:"center",
    paddingTop: 20,
    paddingBottom: 30,
    flexGrow: 1,
  },
  
  pageAlign:{
   width:"100%",
   maxWidth:600,
    
  },
  introHeading:{
    fontSize:30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    color:"#354933" 
  },
  bodyHeading:{
    fontSize:27,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    color:"#354933" 
  },

  heading:{
    fontSize:26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 12,
    color:"#354933"
  },
  paragraph:{
fontSize:20,
lineHeight:24,
textAlign:"center",
color:"#58433b",
marginBottom:15,
  },
  image:{
   width:"100%",
   height:200,
   marginBottom:15,
  },

 
  subHeading:{
    fontSize: 22,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom: 10,
    marginTop:10,
    color: "#370617",
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
  teamRow:{
    width:"100%",
    flexDirection: "row",
    alignItems: 'flex-start',
    gap: 5,
    marginBottom: 20,
  },
  teamImage:{
    flex: 1,
    height: 250,
    borderRadius: 10,
    width: 250
  },

});