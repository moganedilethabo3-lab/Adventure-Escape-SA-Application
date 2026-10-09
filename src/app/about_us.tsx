import { Text, View, StyleSheet,Image,ScrollView, useWindowDimensions}   from "react-native";

export default function Index() {

  
  return (
    <ScrollView style={styles.container}
    contentContainerStyle={styles.contentContainer}>

      <View style={styles.imageRow}>
        <Text style={styles.heading}> Adventure Escape South Africa</Text>
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
        Adventure Escape SA's mission is to 
      </Text>

       <Text style={styles.subHeading}>
        Our Vision
      </Text>
      <Text style={styles.screenText}>
        At Adventure Escape SA we vision to 
      </Text>

      <Text style={styles.heading}>
        Adventure Escape SA's founder
      </Text>

      <View style={styles.imageRow}>
      <Image
        source={require('@/assets/images/app_images/founder.jpg')}
        style={styles.founder}
        resizeMode="contain"
        />
      <Text style={styles.founderText}>
          The man on the left is Liam Daniels, the Founder of Adventure Escape SA
        </Text>
        </View>

         <Text style={styles.subHeading}>
       Meet the Team
        </Text>
        <Text style={[styles.screenText, styles.screenText]}>
        Adventure Escape SA's mission is to 
      </Text>
      
      <View style={styles.imageRow}>
      <Image
        source={require('@/assets/images/app_images/team.jpg')}
        style={styles.footer}
        resizeMode="contain"
        />

        <Image
        source={require('@/assets/images/app_images/SA team.jpg')}
        style={styles.footer}
        resizeMode="contain"
        /> 
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
  },
  imageRow:{
    width: "100%",
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 11,
    flexDirection: "row",
    marginBottom:20,
  },
  footer:{
    width:"48%",
    height:200,
  },

  heading:{
    flex:1,
    fontSize:30,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom:0,
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
  introImage:{
    width:140,
    height:140,
    flexShrink:0,
  },
  founderText:{
    flex:1,
    fontSize: 18,
    textAlign: "left",
    marginBottom: 0,
  },
  subHeading:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom: 20,
    color: "#370617",
  },
  founder:{
    width: 140,
    height: 180,
   flexShrink:0,
  },

});