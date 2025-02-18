import {View} from 'react-native'

interface BackgroundProps {
  children: React.ReactNode
  color?: string
}

export const Background = ({children, color = '#F8C25B'}: BackgroundProps) => {
  return (
    <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <View style={{position: 'absolute', top: -20, left: 0, width: '100%', height: 80, backgroundColor: color, transform: [{skewY: '-5deg'}]}} />
      <View style={{width: '100%', backgroundColor: color, paddingBottom: 60, alignItems: 'center'}}>{children}</View>
    </View>
  )
}
