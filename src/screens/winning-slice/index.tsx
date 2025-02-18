import {useNavigation, useRoute} from '@react-navigation/native'

import {Segment} from '@/components/roulette'

type RouteParams = {
  segment: Segment
}

export default function WinningSlice() {
  const navigation = useNavigation()
  const route = useRoute()

  const {segment} = route.params as RouteParams

  return <></>
}
