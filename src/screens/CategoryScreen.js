import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Navbar } from "../components/Navbar";
import ReturnIcon from "../icons/ReturnIcon";
import { FilterContainer } from "../components/FilterContainer";
import { PromoList } from "../components/PromoList";
import SearchSmallIcon from "../icons/SearchSmallIcon";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export const CategoryScreen = (props) => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["#f7f7f7", "#fff"]}
      location={[0, 0.1]}
      style={styles.container}
    >
      <ScrollView style={styles.mainContainer}>
        <View style={{ paddingBottom: 120 }}>
          <View style={styles.topContainer}>
            <ReturnIcon
              style={{ position: "relative", top: -1 }}
              onPress={() => navigation.goBack()}
            />
            <Text style={styles.title}>Уход за кожей лица</Text>
            <SearchSmallIcon
              onPress={() => navigation.navigate("SearchScreen")}
            />
          </View>
          <FilterContainer
            style={{ marginBottom: 23, backgroundColor: "fff" }}
          />
          <Text style={styles.amountText}>Найдено товаров: 56</Text>
          <PromoList />
        </View>
      </ScrollView>
      <Navbar active="Catalogue" activeText="Catalogue" />
    </LinearGradient>
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
    width: "100%",
    paddingHorizontal: 20,
  },
  topContainer: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  amountText: {
    marginBottom: 20,
    fontFamily: "MontserratRegular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "rgba(55, 55, 55, 0.5)",
  },
});
