import { Text, View, StyleSheet, Image, Pressable, ScrollView} from "react-native";
import React, {useCallback, useState} from "react";
import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from "expo-router"

type Booking={
  id: string;
  selectedCatergory: string;
  packageName: string;
  escapeLocation:string;
  bookingNumber: string;
}


export default function Index() {

  const[booking, setBooking] =useState<Booking[]>([]);

  const loadBooking =async ()=>{
    try{
      const savedBooking= await AsyncStorage.getItem("bookings");
      if (savedBooking){
        const parsedBooking =JSON.parse(savedBooking);
        setBooking(parsedBooking);
      }
      else{
        setBooking([]);
      }
    }
    catch(error){
      console.error("There has been an error loading Booking/;",error);
      
    }
   
  };

  useFocusEffect(
   useCallback(()=>{
   loadBooking();
   },[])
  );

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
    
  {booking.length===0?(
          <Text style={styles.noDishes}>
            No Booked Adventure on the system yet.
          </Text>
        ):(
          booking.map((card)=>(
            <View 
            key={card.id}
            style={styles.dishCard}>
              <Text style={styles.dishName}>
                Booking Information
                </Text>
                
              
              <Text style={styles.label}>
                Booking Catergory
              </Text>
              <Text style={styles.cardText}>
                {card.selectedCatergory ||"Not Provided"}
              </Text>

              <Text style={styles.label}>
                Escape Package
                </Text>
              <Text style={styles.cardText}>
               {card.packageName ||"Not Provided"}
              </Text>
              
              <Text style={styles.label}>
                Escape Location
                </Text>
              <Text style={styles.cardText}>
               {card.escapeLocation ||"Not Provided"}
              </Text>
              

              <Text style={styles.label}>
                Number of People
                </Text>
              <Text style={styles.cardText}>
               {card.bookingNumber|| "Not Provided"}
              </Text>
              

            
              
            </View>
          ))

        )}
         
                 <Pressable onPress={()=> {router.push("/quotation")}}
                style={styles.button}>
                  <Text style={styles.buttonText}>
                 Check Quotation
                 </Text>
                                                 
                </Pressable>
                                                
               

         
               <Pressable onPress={()=> {router.push("/home_page")}}
              style={styles.button}>
               <Text style={styles.buttonText}>
               Home
              </Text>
                                           
              </Pressable>
                                          
              

    </  ScrollView>

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
  noDishes:{
    textAlign:"center",
    fontSize: 18,
    marginTop: 30
  },
   label:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:8,
  },
  cardText:{
    fontSize: 16,
    marginTop: 5,
  },
  
  dishCard:{
    backgroundColor:"#9fb6a2",
    borderWidth: 1,
    borderColor:"black",
    borderRadius: 15,
    width:"90%",
    maxWidth: 650,
    minHeight:280,
    padding: 20,
    marginBottom: 20,
    alignSelf:"center",
  },
  bookingText:{
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
  },
 
  dishName:{
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
  },


  
}
)

