import {Text, TouchableOpacity} from 'react-native'

import tw from '@/lib/tailwind'
interface ButtonProps {
  onPress: () => void
  title: string
}

const buttonStyles = 'py-2 px-4 h-[58px] items-center justify-center rounded-full w-full'
const buttonTextStyles = 'font-bold text-lg'

const OutlineButton = ({title, onPress}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={tw`${buttonStyles} bg-transparent border border-[#21BD64]`}>
    <Text style={tw`${buttonTextStyles} text-[#21BD64]`}>{title}</Text>
  </TouchableOpacity>
)

const SolidButton = ({title, onPress}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={tw`${buttonStyles} bg-[#FB3D48}`}>
    <Text style={tw`${buttonTextStyles} text-white`}>{title}</Text>
  </TouchableOpacity>
)

export {OutlineButton, SolidButton}
