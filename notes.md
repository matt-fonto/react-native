# React Native

Like React, but it uses native components instead of wenb components as the building blocks

- While we don't have Tailwind in React Native, we have NativeWind

```jsx
import React from "React";
import { Text, View } from "react-native";

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello, world</Text>
    </View>
  );
};
```

## Core UI Components

```js
    // Basic UI Building Blocks
    <View> // Container for layout
    <Text>
    <Image>
    <ScrollView> // Scrollable content. It can hold multiple components and views, providinga scrolling container for them
    <FlatList> // Optimized for rendering long, scrollable lists, similar to the map function in React
    <SectionList> // Grouped lists with headers

    // Touch interactions
    <Button>
    <Pressable>
    <TouchableHighlight> // highlights when pressed
    <TouchableOpacity> // reduces opacity when pressed
    <TouchableWithoutFeedback>

    // Input
    <TextInput>
    <Switch>
    <Picker> // depreacted, use third-party libs - dropdown/select functionality

    // Media
    <ImageBackground>
    <Modal>
```

### FlatList vs Map Function for Lists

- FlatList: Larger listes with smooth scrolling
- Map function: Smaller lists

## Props

```jsx
import React from "React";
import { Text, View } from "react-native";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
  },
});

type GreetingProps = {
  name: string,
};

const Greeting = ({ name }: GreetingProps) => {
  return (
    <View style={styles.center}>
      <Text>Hello {name}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View styles={{styles.center, {top: 50}}}>
      <Greeting name="Hamlet" />
      <Greeting name="Gabi" />
      <Greeting name="Matt" />
    </View>
  );
};
```

## Expo

- Similar to create-react-app or Vite, but for React Native.
- Simplifies setup and development
- Expo Router is quite similar to how Next.js structures the routes, with folder-based routing
- Expo is also on the path to add server components to its structure

Links:

- https://docs.expo.dev/router/installation/#quick-start
- https://docs.expo.dev/workflow/ios-simulator/

### First Steps

```zsh
npx create-expo-app@latest
# @latest => already adds the Expo router and all the settings that come with it, so we don't need to do it manually
# npx create-expo-app ./ => creates in the current directory

npx expo start
npx expo start -c # clears out the cache
# press 'i' -> ios simulation
# shift + i  -> select ios simulator

cmd + d => opens dev mode
```

### Expo commands

- Once you run `npx expo start`, you can type of the CLI
  - s: switch to dev build
  - a: andriod
  - i: ios
  - w: web
  - j: debugger
  - r: reload app
  - m: toggle menu
  - o: open project code in editor
