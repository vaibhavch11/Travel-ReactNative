import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const SlideKaDabba = () => {
  return (
   <TouchableOpacity className='h-48 mr-2 mb-2 flex-none'>
    <Image 
    source={require('../images/MiaDidi.png')}
    className=' h-48 w-80 rounded'
    />
   </TouchableOpacity> 
      
    
  )
}

export default SlideKaDabba