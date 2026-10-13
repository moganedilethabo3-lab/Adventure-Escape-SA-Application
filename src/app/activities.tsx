import { router } from "expo-router";
import { Text, View, StyleSheet, Pressable, Image} from "react-native";

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
    <Pressable onPress={()=>{router.push("/individual_activities")}}>
      <Text style={styles.subHeading}> Individual Activity Packagaes</Text>
    </Pressable>

    <Pressable onPress={()=>{router.push("/group_activities")}}>
      <Text style={styles.subHeading}> Group Activity Packagaes</Text>
    </Pressable>

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
    backgroundColor:"#9fb6a2",
  },
  screenText:{
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 12,
    lineHeight: 25,
    color:"#58433B"
  },
  pageAlign:{
     width: "100%",
     maxWidth: 600,
    alignSelf:"center",
    alignItems: "stretch",
    gap: 10 ,
   
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
  button:{
     width: "100%",
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
  subHeading:{
    fontSize: 25,
    fontWeight: "bold",
    textAlign:"center",
    marginBottom: 20,
    color: "#370617",
  },

});