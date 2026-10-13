import { Text, View, StyleSheet, Image, Pressable,ScrollView} from "react-native";
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

                <Text style={styles.introHeading}>
                  Adventure Escape SA Family Album
                   </Text>
            
                  <View style={styles.locationRow}>
                
                  
                  <Image
                   source={require('@/assets/images/app_images/gallery.jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />
                  
                  
                
                  
                  <Image
                   source={require('@/assets/images/app_images/gallery(1).jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />
                  
                   
                  </View>

                  <View style={styles.locationRow}>
                    <Image
                   source={require('@/assets/images/app_images/gallery(13).jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />

                    <Image
                   source={require('@/assets/images/app_images/gallery(3).jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />


                  </View>

          <View style={styles.locationRow}>

                
                  
                  <Image
                   source={require('@/assets/images/app_images/gallery(4).jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />
              
                
                
                  
                   <Image
                   source={require('@/assets/images/app_images/gallery(5).jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />
                  
                   
                  </View>

        <View style={styles.locationRow}>
                
                  
                  <Image
                   source={require('@/assets/images/app_images/gallery(6).jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />
                  
                   
                
                  
                  <Image
                   source={require('@/assets/images/app_images/gallery(7).jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />

              
                  </View>

                   <View style={styles.locationRow}>
                   <Image
                   source={require('@/assets/images/app_images/gallery(8).jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"/>

                    <Image
                   source={require('@/assets/images/app_images/gallery(9).jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />

                  
                   </View>
              
          <View style={styles.locationRow}>
 
                 
                  <Image
                   source={require('@/assets/images/app_images/gallery(10).jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />

                   <Image
                   source={require('@/assets/images/app_images/gallery(11).jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />
        
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
       introHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#58433b",
    lineHeight: 32,
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
   locationRow:{
    width:"100%",
    flexDirection: "row",
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  locationImage:{
    flex: 1,
    height: 250,
    borderRadius: 10,
    width: 250
  }

    });