import React, { useState, useEffect } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../services/api";

import Logo from "../assets/login/Logo.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [techs, setTechs] = useState("");

  // useEffect(() => {
  //   async function fetchTechs() {
  //     navigation.navigate("List");
  //     await AsyncStorage.getItem("email").then((user) => {
  //       if (user) {
  //         navigation.navigate("List");
  //       }
  //     });
  //   }
  //   fetchTechs();
  // }, []);

  async function handleSubmit() {
    // const response = await api.post("/Login", {
    //   email,
    //   password,
    // });

    // const { _id } = response.data;
    // console.log(_id);
    // await AsyncStorage.setItem("email", _id);
    // await AsyncStorage.setItem("password", password);
    await AsyncStorage.setItem("techs", techs);

    navigation.navigate("List");
  }

  return (
    <KeyboardAvoidingView
      enabled={Platform.OS === "ios"}
      behavior="padding"
      style={styles.container}
    >
      <Image style={styles.imageLogo} source={Logo} />

      <View style={styles.form}>
        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail aqui"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>SENHA</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="none"
          secureTextEntry={true}
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>TECNOLOGIAS</Text>
        <TextInput
          style={styles.input}
          placeholder="Tecnologias de interesse"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    alignSelf: "stretch",
    paddingHorizontal: 30,
    marginTop: 30,
  },

  imageLogo: {
    width: 150,
    height: 150,
  },

  label: {
    fontWeight: "bold",
    color: "#444",
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 20,
    fontSize: 16,
    color: "#444",
    height: 44,
    marginBottom: 20,
    borderRadius: 20,
  },

  button: {
    height: 42,
    backgroundColor: "#f0aa32",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
