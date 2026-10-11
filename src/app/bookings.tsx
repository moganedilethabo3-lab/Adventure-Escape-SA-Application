import { Text, View, StyleSheet, Pressable, Image, ScrollView} from "react-native";
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

        <View style={styles.buttonAlign}>
       <Pressable onPress={()=> {router.push("/accomodation")}}
      style={styles.button}>
       <Text style={styles.buttonText}>
       Accomodation
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
    maxWidth: 750,
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