import {TouchableOpacity, Text} from 'react-native'

interface SpinProps {
  onPress: () => void
  title: string
}

export const Spin = ({onPress, title}: SpinProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={{alignItems: 'center', justifyContent: 'center', backgroundColor: '#FB3D48', width: 100, height: 100, borderRadius: 50}}>
      <Text style={{color: 'white', fontSize: 20, textAlign: 'center', fontFamily: 'Poppins_500Medium'}}>{title}</Text>
    </TouchableOpacity>
  )
}
