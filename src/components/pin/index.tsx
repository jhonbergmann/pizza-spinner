import React, {useEffect, useRef} from 'react'
import {Animated, Image} from 'react-native'

export const Pin = () => {
  const translateY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -20,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start()
  }, [])

  return (
    <Animated.View style={{transform: [{translateY}]}}>
      <Image source={require('@/assets/images/pin.png')} />
    </Animated.View>
  )
}
