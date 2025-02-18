import React, {useRef, useState} from 'react'
import {Text, View} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated'

import {Pin} from '@/components/pin'
import {Conditional} from '@/components/conditional'
import {Spin as SpinButton} from '@/components/spin'
import {Roulette, Segment} from '@/components/roulette'
import {Background as SpinBackground} from '@/components/spin/components/background'

import {segments} from './data'

import tw from '@/lib/tailwind'

export default function Dashboard() {
  const [spins, setSpins] = useState(1)
  const [spinning, setSpinning] = useState(false)

  const rouletteRef = useRef<{spin: () => void}>(null)

  const navigation = useNavigation()

  const onSpin = () => {
    setSpinning(true)
    setSpins(spins - 1)
    rouletteRef.current?.spin()
  }

  const onFinished = async (segment: Segment) => {
    navigation.navigate('WinningSlice', {segment})
  }

  return (
    <View style={tw`flex-1 items-center justify-between bg-background`}>
      <View style={tw`mt-8`} />

      <Roulette ref={rouletteRef} segments={segments} onFinished={onFinished} />

      <Conditional render={spinning}>
        <Pin />
      </Conditional>

      <View>
        <Text style={tw`text-2xl font-medium text-black`}>Spin to Unlock Pizza Slice</Text>
        <Conditional render={spins === 0}>
          <Text style={tw`text-xs font-semibold text-primary text-center`}>You have 0 Spins Remaining</Text>
        </Conditional>
      </View>

      <Animated.View style={tw`w-full`} entering={FadeIn.duration(500)} exiting={FadeOut.duration(500)} key={spinning ? 'spinning' : 'not-spinning'}>
        <Conditional render={!spinning && spins > 0}>
          <SpinBackground>
            <SpinButton onPress={onSpin} title="Spin" />
          </SpinBackground>
          <View style={tw`h-[120px] bg-transparent`} />
        </Conditional>
      </Animated.View>
    </View>
  )
}
