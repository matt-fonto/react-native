import { TouchableOpacity, Text } from "react-native";
import React from "react";
import clsx from "clsx";

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
};

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={clsx(
        "bg-secondary rounded-md py-4 px-8 mt-8 justify-center items-center",
        { "opacity-50": isLoading },
        containerStyles
      )}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text className={clsx("text-primary font-psemibold text-lg", textStyles)}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
