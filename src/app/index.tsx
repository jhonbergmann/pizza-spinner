import {StatusBar} from 'expo-status-bar'
import {useFonts} from 'expo-font'

import Routes from '../routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular: require('@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
    Poppins_500Medium: require('@expo-google-fonts/poppins/Poppins_500Medium.ttf'),
    Poppins_600SemiBold: require('@expo-google-fonts/poppins/Poppins_600SemiBold.ttf'),
    Poppins_700Bold: require('@expo-google-fonts/poppins/Poppins_700Bold.ttf'),
  })

  if (!fontsLoaded) return null

  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  )
}
