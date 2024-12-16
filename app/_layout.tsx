import { Stack } from "expo-router";

export default function Layout() {
    return <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(accounttabs)/accountinfo"
        options={{headerShown: true, headerTitle: "Account Info", headerBackTitle: "Back"}} />
    </Stack>
}