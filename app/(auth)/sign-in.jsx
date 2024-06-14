import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { signIn } from '../../lib/appwrite'

const SignIn = () => {
    const { setUser, setIsLoggedIn } = useGlobalContext();

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const submit = async () => {
        const { email, password } = form;
        if (!email || !password) {
            return Alert.alert('Error', 'Please fill in all fields')
        }

        setIsSubmitting(true);

        try {
            const result = await signIn(email, password);
            setUser(result);
            setIsLoggedIn(true);

            Alert.alert('Success', 'Sign in successful')
            router.replace('/home')
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setIsSubmitting(false);
        }
    }

    const [isSubmitting, setIsSubmitting] = useState(false)
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full min-h-[85vh] my-6 justify-center px-4">
                    <Image source={images.logo} className="w-[115px] h-[35px]" resizeMode='contain' />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Log In to Aora</Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(text) => setForm({ ...form, email: text })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(text) => setForm({ ...form, password: text })}
                        otherStyles='mt-7'
                    />

                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles={'mt-7'}
                        isLoading={isSubmitting}
                    />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg font-pregular text-gray-100">
                            Don't have an account?
                        </Text>
                        <Link
                            href="/sign-up"
                            className='text-lg font-psemibold text-secondary'>
                            Sign up
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn