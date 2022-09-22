import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import SlideKaDabba from './SlideKaDabba'

const Slides = () => {
  return (
    <ScrollView 
    contentContainerStyle={
        {paddingHorizontal:15,
        paddingTop:10
        }
    }
    horizontal>

        <SlideKaDabba className='pl-4 pr-4'/>
        <SlideKaDabba className='pl-4 pr-4'/>
        <SlideKaDabba className='pl-4 pr-4'/>
        

    </ScrollView>

     
  )
}

export default Slides