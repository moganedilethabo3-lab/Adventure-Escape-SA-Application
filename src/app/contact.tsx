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
     <View style={styles.pageAlign}>

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
  pageAlign:{
    width: "100%",
    maxWidth: 750,
    alignSelf:"center",
    alignItems: "stretch",
    gap:10,
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
});