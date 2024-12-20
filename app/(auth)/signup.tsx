import { View, Text, Image, ScrollView, Dimensions, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
import { handleError } from "@/utils/handleError";
import { createUser } from "@/lib/appwrite/users.collection";

const SignUp = () => {
  const [form, setForm] = useState<CreateUser>({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.username || !form.password) {
      Alert.alert("Error", "Fill in all the fields");
    }

    setIsSubmitting(true);

    try {
      const { username, email, password } = form;
      const result = await createUser({ username, email, password });

      Alert.alert("Success", "User created successfully");

      // set the result to global state
      router.replace("/(tabs)/home");
    } catch (error: unknown) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView>
        <View className="w-full flex justify-center px-4 min-h-[85vh]">
          <Image source={images.logo} className="w-[115px] h-[34px]" />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            placeholder="What's your username?"
            extraClassName="mt-7"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            placeholder="Your best email"
            extraClassName="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            extraClassName="mt-7"
          />

          <CustomButton
            title="Sign up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have already an account?
            </Text>

            <Link
              href="/(auth)/login"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
