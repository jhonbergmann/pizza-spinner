import {Segment} from '@/components/roulette'

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Dashboard: undefined
      WinningSlice: {
        segment: Segment
      }
    }
  }
}
