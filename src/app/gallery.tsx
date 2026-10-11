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
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/cape town.jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />
                  
                   </View>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/pretoria.jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />
              
                  </View>
                
                  <View>
                   <Image
                   source={require('@/assets/images/app_images/durban.jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />
                  
                   </View>
                  </View>

          <View style={styles.locationRow}>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/cape town.jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />
                  
                   </View>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/pretoria.jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />
              
                  </View>
                
                  <View>
                   <Image
                   source={require('@/assets/images/app_images/durban.jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />
                  
                   </View>
                  </View>

        <View style={styles.locationRow}>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/cape town.jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />
                  
                   </View>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/pretoria.jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />
              
                  </View>
                
                  <View>
                   <Image
                   source={require('@/assets/images/app_images/durban.jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />
                  
                   </View>
                  </View>
              
          <View style={styles.locationRow}>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/cape town.jpg')}
                   style={styles.locationImage}
                    resizeMode="contain"
                    />
                  
                   </View>
                
                  <View>
                  <Image
                   source={require('@/assets/images/app_images/pretoria.jpg')}
                    style={styles.locationImage}
                   resizeMode="contain"
                   />
              
                  </View>
                
                  <View>
                   <Image
                   source={require('@/assets/images/app_images/durban.jpg')}
                  style={styles.locationImage}
                   resizeMode="contain"
                    />
                  
                   </View>
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
    });