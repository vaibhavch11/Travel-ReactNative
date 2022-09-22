import React from 'react'
import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native'


function PlaceCards(data) {
    console.log("data here 1" ,data );
    console.log("data 2 line" ,data['prop']['Link'],typeof data['prop']['Link'] );
  return (

<TouchableOpacity className='ml-2 mb-2 flex-row'>
<Image 
    source={require("C:/Users/91805/Desktop/React-Native/Travel-ReactNative/images/MiaDidi.jpg")}
    className=' h-40 w-40 rounded'
/>   
</TouchableOpacity> 
  )
}

export default PlaceCards