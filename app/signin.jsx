import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import sign from "../assets/photos/signin.png";
import { TextInput } from "react-native-gesture-handler";
const signin = () => {
  return (
    <View style={{ backgroundColor: "#F5F5DC", height: "100%" }}>
      <SafeAreaView>
        <View style={styles.img}>
          <Image
            source={sign} // Replace with your logo
            style={styles.logo}
          />
        </View>
        <View>
          <TextInput placeholder="email" style={styles.input} />
        </View>

        <View>
          <Link href="/signin" asChild>
            <Pressable style={styles.btn}>
              <Text style={styles.sig}>Sign In</Text>
            </Pressable>
          </Link>
        </View>
        <View>
          <Link href="/signup" style={styles.link}>
            Create new Account
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default signin;

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    marginTop: 40,
  },
  img: {
    // margtinTop: 20,
    padding: 10,
    margin: "auto",
  },

  btn: {
    backgroundColor: "#228B22",

    padding: 10,
    marginTop: 20,
    margin: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  sig: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },

  link: {
    textAlign: "center",
    color: "gray",
    fontSize: 20,
    margin: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
});
