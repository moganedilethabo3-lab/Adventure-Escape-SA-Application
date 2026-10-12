import { Text, View, StyleSheet, ScrollView, Image, Pressable, TextInput} from "react-native";
import { router } from "expo-router";
import {Picker} from "@react-native-picker/picker"
import {Alert} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react"

export default function Index() {
  const [customerName, setcustomerName] = useState("");
    const [numberPeople,setnumberPople]= useState("");
    const [catergorySelected, setcatergorySelected] = useState("");
    const[customerAddress,setcustomerAddress]= useState("");
    const[customerNumber,setcustomerNumber]= useState("");
    const[packagePrice,setpackagePrice]= useState("");
  
    const saveBooking = async() =>{
    
        if (!customerName || !numberPeople || !catergorySelected|| !customerAddress || !customerNumber || !packagePrice ){
        Alert.alert(
        "Missing Booking Information",
        "Please complete all field before saving your bookings."
                
        );

         return;
    }
    try{
    const newQuotation ={
    id:Date.now().toString(),
    customerName: customerName,
    customerAddress: customerAddress,
    customerNumber: customerNumber,
    catergorySelected: catergorySelected,
    packagePrice: packagePrice,
    numberPeople: numberPeople,
     
     };
      const existingQuotation =
      await AsyncStorage.getItem("quotation");
      const quotation =existingQuotation
      ? JSON.parse(existingQuotation): [];
      quotation.push(newQuotation);
      await AsyncStorage.setItem(
  
      "bookings",
        JSON.stringify(quotation)
      );
        
      Alert.alert("Success", "Booking saved successfully onto system!" );
       
      router.replace("/quotation");


    }
    catch (error){
    console.error("Error saving booking:",error);
      Alert.alert("Error","The booking could not be saved");
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

             

              <View style={styles.introRow}>
              <Text style={styles.introHeading}> Average Package Fee Calculation</Text>
              <Image
               source={require('@/assets/images/app_images/money.jpg')}
               style={styles.introImage}
               resizeMode="contain"
               />
               </View>

         <Text style={styles.subHeading}>Package Fee Calculator </Text>
        
         <View style={styles.formContainer}>

           <Text style={styles.label}>
             Name of Customer
            </Text>
            <TextInput style={styles.input} 
             value={customerName}
             onChangeText={setcustomerName} 
            placeholder="Enter your Name"/>

            <Text style={styles.label}>
             Name of Customer
            </Text>
            <TextInput style={styles.input} 
             value={customerAddress}
             onChangeText={setcustomerAddress} 
            placeholder="Enter your Email Adress"/>

            <Text style={styles.label}>
             Name of Customer
            </Text>
            <TextInput style={styles.input} 
             value={customerNumber}
             onChangeText={setcustomerNumber} 
            placeholder="Enter your Phone Number"/>

             <Text style={styles.label}>
             Number of Bookings
            </Text>
            <TextInput style={styles.input} 
             value={numberPeople}
             onChangeText={setnumberPople} 
            placeholder="Enter number of bookings"/>
               
              <View>
               <Text style={styles.label}>
               Selected Package 
               </Text>
              <Picker style={styles.dropDown}
               selectedValue={catergorySelected}
              onValueChange={(itemValue, itemIndex) =>
              setcatergorySelected(itemValue)
               }>
               <Picker.Item label="Zipling Adventure" value="Ziplining Adventure" />
                   <Picker.Item label="Kayaking Experience" value="Kayaking Experience" />
                   <Picker.Item label="Rock Climbing Session" value="Rock Climbing Session" />
                   <Picker.Item label="Ultimate Adventure Day" value="Ultimate Adventure Day"/>
                   <Picker.Item label="Family Explore Package" value="Family Explore Package"/>
                   <Picker.Item label="Mountain Adventure Package" value="Mountain Adventure Package"/>
                   <Picker.Item label="Corporate Team Challeneg" value="Corportae Team Challenge"/>
                </Picker>

                <Text style={styles.label}>
               Package Price
               </Text>
              <Picker style={styles.dropDown}
               selectedValue={packagePrice}
              onValueChange={(itemValue, itemIndex) =>
              setpackagePrice(itemValue)
               }>
                <Picker.Item label="R750" value="Individual Booking" />
                <Picker.Item label="R1500" value="Group Booking" />
               </Picker>
              
            </View>
            </View>

            <Text style={styles.subHeading}> Customer Quotation</Text>

            <View style={styles.buttonOrder}>
            <View style={styles.buttonAlign}>
            
             <Pressable style={styles.button}
             onPress={saveBooking} >
                    
              <Text style={styles.text} >
              Calculate
               </Text>
                    
              </Pressable>
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
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
    color: "#354933",
    lineHeight: 32,
  },
  subHeading:{
    flex:1,
    flexShrink:1,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#31241f",
    lineHeight: 32,
  },
  bosyText:{
    flex:1,
    flexShrink:1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#58433b",
    lineHeight: 32,
  },
 
  introRow:{
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center",
    gap: 12,
    marginBottom: 20,
  },
   introImage:{
    width:"100%",
    maxWidth:295,
    height:175,
    borderRadius: 12,
    flexShrink:0,
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
  dropDown:{
    backgroundColor:"#d8e2dc",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    height:55,
  },
  formContainer:{
    position:"relative",
    backgroundColor:"white",
    borderWidth:1,
    borderColor:"black",
    borderRadius:8,
    padding:16,
    margin: 16,
  },
  label:{
   fontSize: 16,
    fontWeight:"bold",
    marginTop:12,
    marginBottom: 6,
  },
  input :{
   borderWidth: 1,
    borderColor:"black",
    borderRadius: 8,
    padding: 12,
    fontSize: 20,
    backgroundColor:"#d8e2dc",
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
  text:{
    color:"white",
    fontWeight:"bold",
  },
});