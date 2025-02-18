import React, {useRef, useImperativeHandle, forwardRef} from 'react'
import {Animated, Image as NativeImage, View} from 'react-native'
import Svg, {Image, G, Path} from 'react-native-svg'

interface Segment {
  id: number
  title: string
  image: any
}

export interface RouletteProps {
  segments: Segment[]
  onFinished: (segment: Segment) => void
  strokeColor?: string
  size?: number
  upDuration?: number
  downDuration?: number
  outlineWidth?: number
}

export const Roulette = forwardRef<{spin: () => void}, RouletteProps>(
  ({segments, onFinished, strokeColor = 'black', size = 300, upDuration = 300, downDuration = 500, outlineWidth = 5}: RouletteProps, ref) => {
    const svgRef = useRef<Svg>(null)
    const rotationAnim = useRef(new Animated.Value(0)).current

    const timerDelay = segments.length
    const upTime = segments.length * upDuration
    const downTime = segments.length * downDuration

    let timerHandle: number | NodeJS.Timeout = 0
    let spinStart = 0
    let angleCurrent = 0
    let angleDelta = 0
    let maxSpeed = Math.PI / segments.length

    const spin = () => {
      if (timerHandle === 0) {
        angleCurrent = Math.random() * Math.PI * 2
        spinStart = new Date().getTime()
        maxSpeed = Math.PI / segments.length
        timerHandle = setInterval(onTimerTick, timerDelay)
      }
    }

    const onTimerTick = () => {
      const duration = new Date().getTime() - spinStart
      let progress = 0
      let finished = false

      if (duration < upTime) {
        progress = duration / upTime
        angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2)
      } else {
        progress = duration / downTime
        angleDelta = maxSpeed * Math.sin((progress * Math.PI) / 2 + Math.PI / 2)
        if (progress >= 1) finished = true
      }

      angleCurrent += angleDelta
      while (angleCurrent >= Math.PI * 2) angleCurrent -= Math.PI * 2

      if (finished) {
        clearInterval(timerHandle)
        timerHandle = 0
        const rotationAdjustment = (angleCurrent + Math.PI / 2) % (Math.PI * 2)
        const segmentIndex = Math.floor((rotationAdjustment / (Math.PI * 2)) * segments.length)
        const winningSegmentIndex = (segments.length - segmentIndex - 1) % segments.length
        const winningSegment = segments[winningSegmentIndex]
        onFinished(winningSegment)
      }

      draw()
    }

    const draw = () => {
      Animated.timing(rotationAnim, {
        toValue: angleCurrent,
        duration: 0,
        useNativeDriver: true,
      }).start()
    }

    useImperativeHandle(ref, () => ({spin}))

    return (
      <View style={{alignItems: 'center', position: 'relative'}}>
        <Animated.View
          style={{
            transform: [
              {
                rotate: rotationAnim.interpolate({
                  inputRange: [0, Math.PI * 2],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
            borderRadius: size / 2,
          }}
        >
          <Svg ref={svgRef} width={size} height={size} viewBox={`-${outlineWidth / 2} -${outlineWidth / 2} ${size + outlineWidth} ${size + outlineWidth}`}>
            <G>
              {segments.map((_, index) => {
                const startAngle = (2 * Math.PI * index) / segments.length
                const endAngle = (2 * Math.PI * (index + 1)) / segments.length
                const arcPath = `M ${size / 2} ${size / 2} L ${size / 2 + (size / 2) * Math.cos(startAngle)} ${size / 2 + (size / 2) * Math.sin(startAngle)} A ${size / 2} ${
                  size / 2
                } 0 0 1 ${size / 2 + (size / 2) * Math.cos(endAngle)} ${size / 2 + (size / 2) * Math.sin(endAngle)} Z`

                return <Path key={index} d={arcPath} fill="white" stroke={strokeColor} strokeWidth={0} />
              })}

              {segments.map((item, index) => {
                const startAngle = (2 * Math.PI * index) / segments.length
                const endAngle = (2 * Math.PI * (index + 1)) / segments.length
                const segmentAngle = startAngle + (endAngle - startAngle) / 2
                const radius = size / 1.85

                const x = size / 2 + (radius / 2) * Math.cos(segmentAngle)
                const y = size / 2 + (radius / 2) * Math.sin(segmentAngle)

                const imageWidth = radius * Math.sin((endAngle - startAngle) / 2) * 2.3
                const imageHeight = radius

                const rotationAngle = segmentAngle * (180 / Math.PI) + 90

                return (
                  <Image
                    key={index}
                    x={x - imageWidth / 2}
                    y={y - imageHeight / 2}
                    width={imageWidth}
                    height={imageHeight}
                    href={item.image}
                    transform={`rotate(${rotationAngle},${x},${y})`}
                  />
                )
              })}
            </G>
          </Svg>
        </Animated.View>

        <View style={{flex: 1, position: 'absolute', top: -15, left: -15, right: -15, bottom: -15, alignItems: 'center', justifyContent: 'center'}}>
          <NativeImage style={{transform: [{scale: 0.95}]}} source={require('../../assets/images/arrows.png')} />
        </View>
      </View>
    )
  },
)
