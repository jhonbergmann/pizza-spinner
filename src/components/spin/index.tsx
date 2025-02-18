import {TouchableOpacity, Text} from 'react-native'

import tw from '@/lib/tailwind'

interface SpinProps {
  onPress: () => void
  title: string
}

export const Spin = ({onPress, title}: SpinProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={tw`items-center justify-center bg-[#FB3D48] w-25 h-25 rounded-full`}>
      <Text style={tw`text-white font-medium text-5 text-center`}>{title}</Text>
    </TouchableOpacity>
  )
}
