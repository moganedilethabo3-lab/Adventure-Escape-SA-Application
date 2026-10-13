import { Text, View, StyleSheet, ScrollView,Image, Pressable} from "react-native";
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
        
          <Text style={styles.introHeading} >Safety Package Equipment  </Text>
      
     
     
      <View style={styles.equipmentRow}>
        <Text style={styles.accomodationHeading}> Hiking Gear</Text>
      <Image
          source={require('@/assets/images/app_images/hike.jpg')}
         style={styles.equipmentImage}
          resizeMode="contain"/>

          <View style={styles.equipment}>
          <Text style={styles.equipmentText}>  Company provides all individuals the following safety gear: </Text>
          <Text style={styles.equipmentText}> Protective  Helmet </Text>
          <Text style={styles.equipmentText}> Suitable hiking shoes </Text>
          <Text style={styles.equipmentText}> Gloves </Text>
           <Text style={styles.equipmentText}> Ropes </Text>
          <Text style={styles.equipmentText}> First-aid kit </Text>
          </View>
        </View>
      
      
     
       <View style={styles.equipmentRow}>
         <Text style={styles.accomodationHeading}> Kayaking</Text>
       <Image
          source={require('@/assets/images/app_images/kayak gear.jpg')}
         style={styles.equipmentImage}
          resizeMode="contain"/>

          <View style={styles.equipment}>
          <Text style={styles.equipmentText}> Company provides all individuals the following safety gear: </Text>
          <Text style={styles.equipmentText}> Protective Water-sports Helmet </Text>
          <Text style={styles.equipmentText}> Spary Skirt </Text>
          <Text style={styles.equipmentText}> Paddle </Text>
          <Text style={styles.equipmentText}> Resue equipment </Text>
           <Text style={styles.equipmentText}> Suitable kayaking attire/ clothing </Text>
        </View>
        </View>
      
      
      
       <View style={styles.equipmentRow}>
         <Text style={styles.accomodationHeading}> Ziplining</Text>
       <Image
          source={require('@/assets/images/app_images/zip Tools.jpg')}
         style={styles.equipmentImage}
          resizeMode="contain"/>
         
         <View style={styles.equipment}>
         <Text style={styles.equipmentText}> Company Provides all individuals the following  safety gear: </Text>
          <Text style={styles.equipmentText}> Protective Helmet </Text>
          <Text style={styles.equipmentText}> Braking system on the zip line</Text>
          <Text style={styles.equipmentText}> Safty Harness </Text>
          </View>
       </View>

      
    
       <View style={styles.equipmentRow}>
         <Text style={styles.accomodationHeading}> Rock Scrambling</Text>
       <Image
          source={require('@/assets/images/app_images/climb rock.jpg')}
         style={styles.equipmentImage}
          resizeMode="contain"/>
          
          <View style={styles.equipment}>
          <Text style={styles.equipmentText}>  Company provides all individuals the following safety gear: </Text>
          <Text style={styles.equipmentText}> Protective  Helmet </Text>
          <Text style={styles.equipmentText}> Suitable hiking shoes </Text>
          <Text style={styles.equipmentText}> Gloves </Text>
           <Text style={styles.equipmentText}> Ropes </Text>
          <Text style={styles.equipmentText}> First-aid kit </Text>
          </View>
          </View>

     
      <View style={styles.equipmentRow}>
        <Text style={styles.accomodationHeading}> Mountatin climbing </Text>
       <Image
          source={require('@/assets/images/app_images/mountain climbing gear.jpg')}
         style={styles.equipmentImage}
          resizeMode="contain"/>
            

          <View style={styles.equipment}>
          <Text style={styles.equipmentText}> Company provides all individuals the following safety gear: </Text>
          <Text style={styles.equipmentText}> Protective Climbing  Helmet </Text>
          <Text style={styles.equipmentText}> Suitable moutain climbing clothing </Text>
          <Text style={styles.equipmentText}> Climbing rope </Text>
          <Text style={styles.equipmentText}> First-aid kit </Text>
          <Text style={styles.equipmentText}> Anchors</Text>
           </View>
          </View>

      
     
      </View>

      
          <Pressable onPress={()=> {router.push("/home_page")}}
          style={styles.button}>
          <Text style={styles.buttonText}>
          Home
          </Text>
                     
           </Pressable>
                    
          
     
    <Pressable onPress={()=> {router.push("/accomodation")}}
    style={styles.button}>
    <Text style={styles.buttonText}>
    Accomodation
    </Text>
                                                     
      </Pressable>
      
    
      

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
  pageAlign:{
    width: "100%",
    maxWidth: 600,
    alignSelf:"center",
    alignItems: "stretch",
    gap:15,
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
   accomodationHeading:{
        flex:1,
        flexShrink:1,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "#31241f",
        lineHeight: 32,
        marginBottom: 10,
      },
  introHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#354933",
    lineHeight: 32,
  },
  introImage:{ 
    width: "100%",
    height: 150,
    alignItems:"center",
    justifyContent:"center",
  },
  equipment:{
  
 flexDirection:"column",
 alignItems:"center",
 gap: 5,
 width:"100%",

 
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
  equipmentRow:{
    width:"100%",
    flexDirection: "column",
    alignItems:"center",
    justifyContent:"center",
    gap: 12,
    marginBottom: 10,
  },
  equipmentImage:{
    width: "100%",
    height: 200,
   flexShrink:0,
   borderRadius: 12,
  },
    equipmentText:{
    flex:1,
    flexShrink: 1,
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    marginBottom: 0,
    color: "#58433B",
    justifyContent:"center",
  },
 
   
});