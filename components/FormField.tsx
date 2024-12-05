import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
} from "react-native";
import React, { useState } from "react";
import clsx from "clsx";

import { icons } from "@/constants";

type FormFieldProps = {
  title: string;
  value: string;
  placeholder?: string;
  handleChangeText: (text: string) => void;
  extraClassName?: string;
  keyboardType?: KeyboardTypeOptions;
};

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  extraClassName,
  keyboardType,
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={clsx("space-y-2", extraClassName)}>
      <Text className="text-base text-gray-100 font-pmedium mb-2">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 rounded-md border-2 border-black-200 focus:border-secondary flex-row items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          keyboardType={keyboardType}
        />

        {title.toLowerCase() === "password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
