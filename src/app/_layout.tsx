import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack >
    <Stack.Screen
    name="index"
    options={{
      headerShown: false,
    } }
    />

    <Stack.Screen
    name="splash_screen"
    options={{
      headerShown: false,
    } }
    />

    <Stack.Screen
    name="home_page"
    options={{
      headerShown: false,
    } }
    />

    <Stack.Screen
    name="about_us"
    options={{
      title: 'about_us'
    } }
    />

   <Stack.Screen
    name="overview"
    options={{
      title: 'overview'
    } }
    />

    <Stack.Screen
    name="customer_booking"
    options={{
      title: 'customer_booking'
    } }
    />

    <Stack.Screen
    name="individual_activities"
    options={{
      title: 'individual_activities'
    } }
    />

    <Stack.Screen
    name="group_activities"
    options={{
      title: 'group_activities'
    } }
    />

    <Stack.Screen
    name="gallery"
    options={{
      title: 'gallery'
    } }
    />

    <Stack.Screen
    name="view"
    options={{
      title: 'view'
    } }
    />

    <Stack.Screen
    name="quotation"
    options={{
      title: 'quotation'
    } }
    />

    <Stack.Screen
    name="bookings"
    options={{
      title: 'bookings'
    } }
    />

    <Stack.Screen
    name="accomodation"
    options={{
      title: 'accomodation'
    } }
    />

    <Stack.Screen
    name="contact"
    options={{
      title: 'contact'
    } }
    />
  </Stack>
  );
}
