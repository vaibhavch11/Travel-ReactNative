import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import PlaceCards from './PlaceCards'
import data from "../Store";

function CardSections() {
  return (
    <View className="flex-row ml-2">

    <PlaceCards prop = {data[0]}/>
    <PlaceCards prop = {data[1]}/>
    </View>
    
  )
}

export default CardSections