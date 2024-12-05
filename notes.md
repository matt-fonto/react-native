# React Native

Like React, but it uses native components instead of wenb components as the building blocks

- While we don't have Tailwind in React Native, we have NativeWind
- React Functional Component Snippet: `rnfe`

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

### Code Example

```jsx
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  Button,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Switch,
  Modal,
  ImageBackground,
  StyleSheet,
  Keyboard,
  Alert,
} from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 20, backgroundColor: "#333", marginBottom: 10 },
  header: { fontSize: 18, fontWeight: "bold" },
  text: { marginVertical: 10 },
  image: { width: 100, height: 100, marginBottom: 10 },
  listItem: { padding: 10, backgroundColor: "#444", marginVertical: 5 },
  sectionHeader: { fontWeight: "bold", backgroundColor: "#ddd", padding: 5 },
  pressable: { padding: 10, borderRadius: 5, alignItems: "center" },
  touchable: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  overlayText: { color: "white", fontWeight: "bold" },
});

const DATA = ["Apple", "Banana", "Cherry"];
const SECTIONS = [
  {
    title: "Fruits",
    data: ["Apple", "Banana", "Cherry"],
  },
  {
    title: "Veggies",
    data: ["Carrot", "Broccoli", "Spinach"],
  },
];

const App: React.FC = () => {
  const [text, setText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text>Basic Components</Text>
      </View>

      <Text style={styles.text}>This is a component!</Text>

      <Image
        source={{ uri: "https://placekitten.com/200/200" }}
        style={styles.image}
      />

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        keyExtractor={(_, index) => index.toString()}
      />

      <SectionList
        sections={SECTIONS}
        renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(_, index) => index.toString()}
      />

      <Button
        title="Click me!"
        onPress={() => Alert.alert("Button pressed!")}
      />

      <Pressable
        style={({ pressed }) => [
          styles.pressable,
          {
            backgroundColor: pressed ? "#ddd" : "#ccc",
          },
        ]}
        onPress={() => Alert.alert("Pressable pressed!")}
      >
        <Text>Pressable Button</Text>
      </Pressable>

      <TouchableHighlight
        style={styles.touchable}
        underlayColor="#ddd"
        onPress={() => Alert.alert("Touchable highlight pressed!")}
      >
        <Text>Touchable highlight</Text>
      </TouchableHighlight>

      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Alert.alert("Touchable opacity pressed!")}
      >
        <Text>Touchable opacity</Text>
      </TouchableOpacity>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={setText}
            placeholder="Enter text"
          />
        </View>
      </TouchableWithoutFeedback>

      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "purple" : "gray"}
      />

      <Button
        title="Show Modal"
        onPress={() => setModalVisible(true)}
        color="blue"
      >
        <Modal visible={modalVisible} transparent>
          <View style={styles.modal}>
            <Text>This is a modal!</Text>
            <Button
              title="Close modal"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </Modal>
      </Button>

      <ImageBackground
        source={{ uri: "https://placekitten.com/400/400" }}
        style={styles.imageBackground}
      >
        <Text style={styles.overlayText}>Image background</Text>
      </ImageBackground>
    </ScrollView>
  );
};
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
- Expo Router is quite similar to how Next.js structures the routes, with file-based routing
- Expo is also on the path to add server components to its structure

Links:

- https://docs.expo.dev/router/installation/#quick-start
- https://docs.expo.dev/workflow/ios-simulator/
- https://github.com/adrianhajdin/aora/tree/main/app

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

### Expo Router

#### Stack

- Stack and Stack.Screen components are part of the navigation system. They are tailored for mobile navigation in React Native
- <Stack>: Represents a stack navigator, which is a navigation pattern where screens are push onto or popped off a stack. This is the most common navigation patterns in mobile apps.

  - "Container" for managing screens
  - Screens inside the stack are nativated sequentially, with a "back" actions popping the most recent screen off the stack

- <Stack.Screen>: Represents the individual screen in the stack. It has:
  - name: identifies it
  - options: configuring the appearance or behavior of that screen
