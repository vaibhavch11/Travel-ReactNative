import { View, Text, SafeAreaView, Image,TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import { UserIcon,HomeIcon,AdjustmentsVerticalIcon,MagnifyingGlassIcon } from "react-native-heroicons/outline";
const HomeScreen = () => {
    const navigation=useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({headerShown:false})
        
    })

  return (
    <SafeAreaView>
        <View>
        {/*header*/}
    <View className='flex-row pb-3 pt-3 items-center space-x-2 bg-white mt-5 rounded-sm'>
    <Image source={require('../images/logo.jpg')}
    className='h-12 w-12 bg-gray-300 p4 rounded-full'
    />
    {/*text Travel Log div*/}
    <View className='flex-1'>
        <Text className='font-bold text-lg'>
            Travel Log
        
        </Text>
        
        

    
    </View>
    {/*home logo*/}

    <View>
    <HomeIcon size={35} color='#000'/>
    </View>

    {/*Profile*/}   
    <View className="pr-5">
        
    <UserIcon size={35} color='#000' />
   
    </View>
    

    {/* header ends*/}
    </View>

    {/*search bar*/}
    <View className='flex-row items-center space-x-2 pb-3 pt-2 mx-4'>
        <View className='flex-row flex-1 h-10 pr-2 space-x-2 bg-gray-300 p-2'>
            <MagnifyingGlassIcon size={20} color='gray'/>
            <TextInput placeholder='Destination' placeholderTextColor={"gray"} style={{fontSize:16}} keyboardType='default' className='border-gray-500'></TextInput>
        </View>
        <View className='p'>

            <AdjustmentsVerticalIcon size={30} color='#000'/>
        </View>
    </View>
           {/*search bar ends */}
        
        {/*major cities*/}

       <Cards />
        
      
    </View>
    </SafeAreaView>
    )
}

export default HomeScreen