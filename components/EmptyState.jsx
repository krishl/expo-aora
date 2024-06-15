import { View, Text, Image } from 'react-native'
import { router } from 'expo-router'

import { images } from '../constants'

import CustomButton from './CustomButton'

const EmptyState = ({ title, subtitle }) => {
    return (
        <View className="px-4 items-center justify-center">
            <Image source={images.empty} className="w-[270px] h-[215px]" resizeMode='contain' />

            <Text className='text-xl text-white mt-2 font-psemibold text-center'>
                {title}
            </Text>
            <Text className='text-sm text-gray-100 font-pmedium'>
                {subtitle}
            </Text>

            <CustomButton
                title="Create Video"
                handlePress={() => router.push('/create')}
                containerStyles={'w-full my-5'}
            />
        </View>
    )
}

export default EmptyState