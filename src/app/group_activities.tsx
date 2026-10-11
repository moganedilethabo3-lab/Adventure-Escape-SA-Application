import { Text, View, StyleSheet,Image,Pressable, ScrollView} from "react-native";
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
    
            <Text style={styles.introHeading}>
              Individual Escape SA Packages
            </Text>

                   
         <View style={styles.pageAlign}>
           
          <Text style={styles.LocationHeading}> Western Cape</Text>
         <Text style={styles.subLocation}>Cape Town </Text>
                     
          <View style={styles.packageRow}>
            <Image
            source={require('@/assets/images/app_images/lunch.jpg')}
           style={styles.packageImage}
           resizeMode="contain"
                       />
             <View style={styles.align}>
             <Text style={styles.packageText}> Ultimate Adventure Day</Text>
              <Text style={styles.packageText}> Fee: R1500</Text>
             <Text style={styles.packageText}> Package includes the following:</Text>
              <Text style={styles.packageText}> Guided Hiking</Text>
              <Text style={styles.packageText}> Ziplining</Text>
              <Text style={styles.packageText}> Kayaking</Text>
              <Text style={styles.packageText}> Lunch</Text>
              <Text style={styles.packageText}> Safety Brief </Text>
              </View>         
              </View>
              <View style={styles.packageRow}>
                  <Image
                source={require('@/assets/images/app_images/rock scrambling.jpg')}
                 style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                        <View style={styles.align}>
                       <Text style={styles.packageText}>Mountain Adventure Package  </Text>
                         <Text style={styles.packageText}> Fee: R1500</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Mountain hiking</Text>
                        <Text style={styles.packageText}> Sun Set Watching </Text>
                         <Text style={styles.packageText}> Rock scrambling</Text>
                           <Text style={styles.packageText}> Wildlife guide</Text>
                       <Text style={styles.packageText}> Safety Brief on equipment</Text>
                       </View>
                       
                  </View>
           
                   <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/cape picnic.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                       <View style={styles.align}>
                       <Text style={styles.packageText}>Family Explore Package  </Text>
                         <Text style={styles.packageText}> Fee: R150o</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Nature Walk</Text>
                        <Text style={styles.packageText}> Obstacle Course</Text>
                         <Text style={styles.packageText}> Family games</Text>
                           <Text style={styles.packageText}> Guide during WildLife spotting</Text>
                       <Text style={styles.packageText}> Safety Brief </Text>
                       </View>
                       
                     </View>
           
                      <Text style={styles.LocationHeading}> Gauteng </Text>
                   <Text style={styles.subLocation}>Pretoria</Text>
                     
                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/hiking.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />

                       <View style={styles.align}>
                       <Text style={styles.packageText}>Ultimate Adventure Day  </Text>
                       <Text style={styles.packageText}> Fee: R1500</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Guided Hiking</Text>
                        <Text style={styles.packageText}> Ziplining</Text>
                         <Text style={styles.packageText}> Kayaking</Text>
                           <Text style={styles.packageText}> Lunch</Text>
                       <Text style={styles.packageText}> Safety Brief </Text>
                      </View>
                      
                      </View>

                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/picnic.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />

                       <View style={styles.align}>
                       <Text style={styles.packageText}>Family Explore Package  </Text>
                         <Text style={styles.packageText}> Fee: R150o</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Nature Walk</Text>
                        <Text style={styles.packageText}> Obstacle Course</Text>
                         <Text style={styles.packageText}> Family games</Text>
                           <Text style={styles.packageText}> Guide during WildLife spotting</Text>
                       <Text style={styles.packageText}> Safety Brief </Text>
                       </View>
                     </View>

                     <Text style={styles.subLocation}>Johannesburg </Text>
                     
                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/obstacle course.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                       < View style={styles.align}>
                       <Text style={styles.packageText}>Corporate Team Challeneg  </Text>
                         <Text style={styles.packageText}> Fee: R1500</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Team obstacle course</Text>
                        <Text style={styles.packageText}> Orienteering challeneg </Text>
                         <Text style={styles.packageText}> Raft building</Text>
                           <Text style={styles.packageText}> Team Awards</Text>
                       <Text style={styles.packageText}> Leadership bootcamp</Text>
                       </View>
                     </View>
           
                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/games.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                       <View style={styles.align}>
                       <Text style={styles.packageText}>Family Explore Package  </Text>
                         <Text style={styles.packageText}> Fee: R150o</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Nature Walk</Text>
                        <Text style={styles.packageText}> Obstacle Course</Text>
                         <Text style={styles.packageText}> Family games</Text>
                           <Text style={styles.packageText}> Guide during WildLife spotting</Text>
                       <Text style={styles.packageText}> Safety Brief </Text>
                       </View>
                       
                     </View>
           
                      <Text style={styles.LocationHeading}> Mpumalanga</Text>
                   <Text style={styles.subLocation}>Drakensburg </Text>
                     
                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/scrambling.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                       <View style={styles.align}>
                       <Text style={styles.packageText}>Mountain Adventure Package  </Text>
                         <Text style={styles.packageText}> Fee: R1500</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Mountain hiking</Text>
                        <Text style={styles.packageText}> Sun Set Watching </Text>
                         <Text style={styles.packageText}> Rock scrambling</Text>
                           <Text style={styles.packageText}> Wildlife guide</Text>
                       <Text style={styles.packageText}> Safety Brief on equipment</Text>
                       </View>
                       
                     </View>

                     <Text style={styles.subLocation}>Nelspruit </Text>
                     
                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/SA hike.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                       <View style={styles.align}>
                       <Text style={styles.packageText}>Ultimate Adventure Day  </Text>
                       <Text style={styles.packageText}> Fee: R1500</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Guided Hiking</Text>
                        <Text style={styles.packageText}> Ziplining</Text>
                         <Text style={styles.packageText}> Kayaking</Text>
                           <Text style={styles.packageText}> Lunch</Text>
                       <Text style={styles.packageText}> Safety Brief </Text>
                      </View>
                       
                     </View>
           
                      <Text style={styles.LocationHeading}> KwaZulu Natal</Text>
                   <Text style={styles.subLocation}>Durban </Text>
                     
                     <View style={styles.packageRow}>
                       <Image
                        source={require('@/assets/images/app_images/raft.jpg')}
                        style={styles.packageImage}
                         resizeMode="contain"
                       />
           
                       < View style={styles.align}>
                       <Text style={styles.packageText}>Corporate Team Challeneg  </Text>
                         <Text style={styles.packageText}> Fee: R1500</Text>
                         <Text style={styles.packageText}> Package includes the following:</Text>
                        <Text style={styles.packageText}> Team obstacle course</Text>
                        <Text style={styles.packageText}> Orienteering challeneg </Text>
                         <Text style={styles.packageText}> Raft building</Text>
                           <Text style={styles.packageText}> Team Awards</Text>
                       <Text style={styles.packageText}> Leadership bootcamp</Text>
                       </View>
                       
                     </View>
                       
                     </View>


              <View style={styles.buttonOrder}>
                <View style={styles.buttonAlign}>
                <Pressable onPress={()=> {router.push("/home_page")}}
                style={styles.button}>
                <Text style={styles.buttonText}>
                 Home
                </Text>
                   
                </Pressable>
                  
                </View>

                <View style={styles.buttonAlign}>
                <Pressable onPress={()=> {router.push("/equipment_purchase")}}
                style={styles.button}>
                <Text style={styles.buttonText}>
                 Equipment
                </Text>
                   
                </Pressable>
                  
                </View>

                <View style={styles.buttonAlign}>
                <Pressable onPress={()=> {router.push("/bookings")}}
                style={styles.button}>
                <Text style={styles.buttonText}>
                 Bookings
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
      introHeading:{
        flex:1,
        flexShrink:1,
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "#58433b",
        lineHeight: 32,
        marginBottom: 25,
      },
      pageAlign:{
       width: "100%",
        maxWidth: 600,
       alignSelf:"center",
       alignItems: "stretch",
       gap: 10 ,
    
     },
      LocationHeading:{
        flex:1,
        flexShrink:1,
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        color: "#370617",
        lineHeight: 32,
      },
      subLocation:{
        flex:1,
        flexShrink:1,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#31241f",
        lineHeight: 32,
      },
      screenText:{
       fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 12,
       lineHeight: 25,
       color:"#58433B"
      },
       packageRow:{
        width:"100%",
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"flex-start",
        gap: 12,
        marginBottom: 15,
      },
      packageImage:{
        width: 175,
        height: 220,
       flexShrink:0,
       borderRadius: 12,
      },
        packageText:{
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
      buttonOrder:{
       flexDirection:"column",
       alignItems:"center",
       gap: 30,
       width:"100%",
        paddingHorizontal:20
      },
       align:{
    flexDirection: "column",
    textAlign:"center",
    width: "90%",
    lineHeight: 20,
    
  },

    });