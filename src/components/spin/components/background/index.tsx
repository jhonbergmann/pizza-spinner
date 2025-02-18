import {View} from 'react-native'

import tw from '@/lib/tailwind'

interface BackgroundProps {
  children: React.ReactNode
  color?: string
}

export const Background = ({children, color = '#F8C25B'}: BackgroundProps) => {
  return (
    <View style={tw`w-full items-center justify-center`}>
      <View style={[tw`absolute top-[-20px] left-0 w-full h-20`, {backgroundColor: color, transform: [{skewY: '-5deg'}]}]} />
      <View style={tw`w-full bg-[${color}] pb-15 items-center`}>{children}</View>
    </View>
  )
}
