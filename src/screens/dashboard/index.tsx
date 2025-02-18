import React, {useRef, useState} from 'react'
import {Text, View} from 'react-native'

import {Roulette} from '../../components/roulette'
import {Spin} from '../../components/spin'
import {Background} from '../../components/spin/components/background'

export default function Dashboard() {
  const [result, setResult] = useState<{id: number; title: string; image: string} | null>(null)

  const rouletteRef = useRef<{spin: () => void}>(null)

  const segments = [
    {id: 1, title: 'Pepperoni', image: require('../../assets/images/pizza-slice/slice_1.png')},
    {id: 2, title: 'Quatro Queijos', image: require('../../assets/images/pizza-slice/slice_2.png')},
    {id: 3, title: 'Margarita', image: require('../../assets/images/pizza-slice/slice_3.png')},
    {id: 4, title: 'Cogumelos', image: require('../../assets/images/pizza-slice/slice_4.png')},
    {id: 5, title: 'Atum com Cebola', image: require('../../assets/images/pizza-slice/slice_5.png')},
    {id: 6, title: 'Frango com Catupiry', image: require('../../assets/images/pizza-slice/slice_6.png')},
    {id: 7, title: 'Presunto e Queijo', image: require('../../assets/images/pizza-slice/slice_7.png')},
    {id: 8, title: 'Calabresa com Cebola', image: require('../../assets/images/pizza-slice/slice_8.png')},
  ]

  const onSpin = () => {
    rouletteRef.current?.spin()
    setResult(null)
  }

  const onFinished = async (segment: any) => {
    setResult(segment)
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#EAE6DF'}}>
      <View />

      <Roulette ref={rouletteRef} segments={segments} onFinished={onFinished} />

      <View style={{marginTop: 50}}>
        <Text style={{fontSize: 24, fontFamily: 'Poppins_500Medium', color: 'black'}}>Spin to Unlock Pizza Slice</Text>
        <Text style={{fontSize: 12, fontFamily: 'Poppins_600SemiBold', color: '#9DA7B3', textAlign: 'center'}}>You have 0 Spins Remaining</Text>
      </View>

      <Background>
        <Spin onPress={onSpin} title="Spin" />
      </Background>
    </View>
  )
}
