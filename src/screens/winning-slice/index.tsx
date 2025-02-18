import {Image, Text, View} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import Animated, {SlideInUp, FadeInDown} from 'react-native-reanimated'

import {Segment} from '@/components/roulette'
import {OutlineButton, SolidButton} from '@/components/button'

import tw from '@/lib/tailwind'

type RouteParams = {
  segment: Segment
}

export default function WinningSlice() {
  const navigation = useNavigation()
  const route = useRoute()

  const {segment} = route.params as RouteParams

  return (
    <View style={tw`flex-1 items-center justify-between bg-background`}>
      <Animated.View style={tw`w-full`} entering={SlideInUp.duration(1200)}>
        <View style={tw`items-center`}>
          <Image source={require('@/assets/images/wooden-plate.png')} />
          <View style={tw`flex-1 items-center absolute top-[25%]`}>
            <Image source={segment.image} style={{transform: [{rotate: '180deg'}], width: 180, height: 180}} />
          </View>
        </View>
      </Animated.View>

      <Animated.View style={tw`w-full`} entering={FadeInDown.duration(1500)}>
        <View style={tw`gap-2`}>
          <Text style={tw`text-2xl text-center font-medium text-black`}>
            {`You Got a\n`} <Text style={tw`text-secondary`}>{`${segment.title}`}</Text> Slice
          </Text>
          <Text style={tw`text-sm font-medium text-center`}>Click Below to Claim Slice</Text>
        </View>
      </Animated.View>

      <View style={tw`flex-col gap-4 w-[90%] mb-10`}>
        <OutlineButton title="Not Now" onPress={() => navigation.goBack()} />
        <SolidButton title="Claim Free Slice" onPress={() => {}} />
      </View>
    </View>
  )
}
