import { Text, View, StyleSheet, Pressable, Image, ScrollView,TextInput} from "react-native";
import {Picker} from "@react-native-picker/picker"
import {router} from "expo-router"
import {Alert} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react"


export default function Index() {
  
 const [packageName, setpackageName] = useState("");
  const [bookingNumber,setbookingNumber]= useState("");
  const [selectedCatergory, setSelectedCatergory] = useState("");
  const[escapeLocation,setescapeLocation]= useState("");

  const saveBooking = async() =>{

    if (!packageName || !bookingNumber || !selectedCatergory|| !escapeLocation){
    Alert.alert(
    "Missing Booking Information",
    "Please complete all field before saving your bookings."
            
    );

        return;
    }
    try{
    const newBooking ={
    id:Date.now().toString(),
    selectedCatergory:selectedCatergory,
    packageName: packageName,
    escapeLocation:escapeLocation,
    bookingNumber:bookingNumber,
     
     };
      const existingBooking =
      await AsyncStorage.getItem("bookings");
      const booking =existingBooking
      ? JSON.parse(existingBooking): [];
      booking.push(newBooking);
      await AsyncStorage.setItem(
  
      "bookings",
        JSON.stringify(booking)
      );
        
      Alert.alert("Success", "Booking saved successfully onto system!" );
       
      router.replace("/view");


    }
    catch (error){
    console.error("Error saving booking:",error);
      Alert.alert("Booking Error","The booking could not be saved, Please try again");
    }
  };

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
         <View style={styles.formContainer}>
      
       <View>
          <Text style={styles.label}>
           Booking Catergory
            </Text>
          <Picker style={styles.dropDown}
           selectedValue={selectedCatergory}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedCatergory(itemValue)
            }>
              <Picker.Item label="Select booking catergory" value="" />
           <Picker.Item label="Individual Booking" value="Individual Booking" />
            <Picker.Item label="Group Booking" value="Group Booking" />
          </Picker>

            <Text style={styles.label}>
           Escape Package
            </Text>
          <Picker style={styles.dropDown}
           selectedValue={packageName}
            onValueChange={(itemValue, itemIndex) =>
            setpackageName(itemValue)
            }>

              <Picker.Item label="Select Escape package" value="" />
           <Picker.Item label="Zipling Adventure" value="Ziplining Adventure" />
            <Picker.Item label="Kayaking Experience" value="Kayaking Experience" />
            <Picker.Item label="Rock Climbing Session" value="Rock Climbing Session" />
            <Picker.Item label="Ultimate Adventure Day" value="Ultimate Adventure Day"/>
            <Picker.Item label="Family Explore Package" value="Family Explore Package"/>
            <Picker.Item label="Mountain Adventure Package" value="Mountain Adventure Package"/>
            <Picker.Item label="Corporate Team Challeneg" value="Corportae Team Challenge"/>
          </Picker>

            <Text style={styles.label}>
           Escape SA Location
            </Text>
          <Picker style={styles.dropDown}
           selectedValue={escapeLocation}
            onValueChange={(itemValue, itemIndex) =>
            setescapeLocation(itemValue)
            }>

              <Picker.Item label="Select Escape Location" value="" />
           <Picker.Item label="Cape Town" value="Cape Town" />
            <Picker.Item label="Pretoria" value="Pretoria" />
            <Picker.Item label="Johannesburg" value="Johannesburg" />
            <Picker.Item label="Durban" value="Durban" />
            <Picker.Item label="Drakensburg" value="Drakensburg" />
          </Picker>
            
          
            <Text style={styles.label}>
                Number of People
            </Text>
            <TextInput style={styles.input} 
             value={bookingNumber}
            onChangeText={setbookingNumber} 
            placeholder="Enter the amount of people"/>

        </View> 
        </View>

      

        

     

      <Pressable style={styles.button}
      onPress={saveBooking} >
        
          <Text style={styles.text} >
          Save Booking
           </Text>
        
      </Pressable>
     
       <Pressable onPress={()=> {router.push("/home_page")}}
      style={styles.button}>
       <Text style={styles.text}>
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
  text:{
    color:"white",
    fontWeight:"bold",
    fontSize:15,
  },

  dropDown:{
    backgroundColor:"#d8e2dc",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    height:50,
  },
  formContainer:{
    position:"relative",
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"black",
    borderRadius:8,
    padding:10,
    margin: 16,
    marginHorizontal:0,
    marginVertical:5,
  },
  label:{
   fontSize: 14,
    fontWeight:"bold",
    marginTop:10,
    marginBottom: 6,
  },
  input :{
   borderWidth: 1,
    borderColor:"black",
    borderRadius: 8,
    padding: 10,
    fontSize: 17,
    backgroundColor:"#d8e2dc",
  },

});