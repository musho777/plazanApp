import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import { MainButton } from "../components/MainButton";
import { UserPrivateForm } from "../components/UserPrivateForm";
import ReturnIcon from "../icons/ReturnIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export const UserPrivateFormScreen = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
          <View style={styles.mainContainer}>
            <View>
              <Text style={styles.title}>Личные данные</Text>
              <Text style={styles.descr}>Номер телефона</Text>
              <Text style={styles.tel}>+7 (909) 912 49 59</Text>
              <UserPrivateForm />
              <ReturnIcon
                style={{ top: -3 }}
                onPress={() => navigation.goBack()}
              />
            </View>
            <MainButton title="Сохранить" onPress={() => navigation.goBack()} />
          </View>
        </LinearGradient>
      </ScrollView>
      <Navbar active="Profile" activeText="Profile" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 120,
    paddingHorizontal: 20,
    width: "100%",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 47,
    fontFamily: "MontserratBold",
    fontSize: 18,
    lineHeight: 24,
    color: "#373737",
    textAlign: "center",
  },
  descr: {
    marginBottom: 8,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
    color: "#71727A",
  },
  tel: {
    marginBottom: 26,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 24,
    color: "#373737",
    textAlign: "center",
  },
});
