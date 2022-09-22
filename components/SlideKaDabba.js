import { View, Text,ScrollView,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const SlideKaDabba = () => {
  return (
   <TouchableOpacity className='mr-2 mb-2'>
    <Image 
    source={require('../images/MiaDidi.png')}
    className=' h-20 w-20 rounded'
    />
   </TouchableOpacity> 
      
    
  )
}

export default SlideKaDabba