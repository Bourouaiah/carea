import { Stack } from "expo-router";

export default function HomeStack() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="appointmentReschedule/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
