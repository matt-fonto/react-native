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
