import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'

const Home = () => {
    return (
        <SafeAreaView className="bg-primary">
            <FlatList
                data={[{ $id: 1 }, { $id: 2 }, { $id: 3 }]}
                keyExtractor={(item) => item.$id}
                renderItem={({ item }) => <Text className='text-3xl text-white'>
                    {item.$id}
                </Text>}
                ListHeaderComponent={() => (
                    <View className='my-6 px-4 space-y-6'>
                        <View className='items-start mb-6 flex-row justify-between'>
                            <View>
                                <Text className='text-sm text-gray-100 font-pmedium'>
                                    Welcome Back
                                </Text>
                                <Text className='text-2xl font-psemibold text-white'>
                                    TheBiggerBear
                                </Text>
                            </View>
                            <View className="mt-1.5">
                                <Image
                                    source={images.logoSmall}
                                    className="w-9 h-10"
                                    resizeMode='contain'
                                />
                            </View>
                        </View>


                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default Home