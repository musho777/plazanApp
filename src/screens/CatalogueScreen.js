import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Navbar } from "../components/Navbar";
import { SearchInput } from "../components/SearchInput";
import { useNavigation } from "@react-navigation/native";
import CategoryBgTan from "../icons/CategoryBgTan";

export const CatalogueScreen = (props) => {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["#f7f7f7", "#fff"]} style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Каталог</Text>
          <SearchInput style={{ marginBottom: 20 }} title="Что вы ищите?" />
          <View style={styles.scrollTopContainer}>
            <TouchableOpacity
              style={{ width: "48.5%" }}
              onPress={() => navigation.navigate("Category")}
            >
              <LinearGradient
                colors={["#EDDFCB", "#DBC3A0"]}
                style={styles.bigItem}
              >
                <Text style={[styles.itemTitle, { marginBottom: 7 }]}>
                  Средства по уходу за телом
                </Text>
                <Text style={styles.itemDescr}>Краткое описание категории</Text>
                <LinearGradient
                  colors={["#DBC3A0", "#EDDFCB"]}
                  locations={[1, 0.99]}
                  style={styles.itemBgTan}
                ></LinearGradient>
                <Image
                  source={require("../img/category1-big.png")}
                  style={styles.categoryImg1}
                />
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.categoryTopRight}>
              <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                <LinearGradient
                  colors={["#F7ECE8", "#E3C3B6"]}
                  style={styles.smallItem}
                >
                  <Text style={styles.itemTitle}>Уход за кожей лица</Text>
                  <LinearGradient
                    colors={["#E3C3B6", "#F7ECE8"]}
                    locations={[1, 0.99]}
                    style={styles.itemBgPink}
                  ></LinearGradient>
                  <Image
                    source={require("../img/category2-big.png")}
                    style={styles.categoryImg2}
                  />
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Category")}>
                <LinearGradient
                  colors={["#D0EBD5", "#98CBA1"]}
                  style={[styles.smallItem, { marginBottom: 0 }]}
                >
                  <Text style={styles.itemTitle}>
                    Сыворотки Активные компоненты
                  </Text>
                  <LinearGradient
                    colors={["#9AC6AD", "#C2ECD4"]}
                    locations={[0, 0.01]}
                    style={styles.itemBgGreen}
                  ></LinearGradient>
                  <Image
                    source={require("../img/category3-big.png")}
                    style={styles.categoryImg3}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Category")}>
            <LinearGradient
              colors={["#E6B8D6", "#F1DCEA"]}
              style={styles.itemBottom}
            >
              <Text
                style={[
                  styles.itemTitle,
                  { marginBottom: 5, textAlign: "left" },
                ]}
              >
                Средства по уходу за телом
              </Text>
              <Text style={[styles.itemDescr, { textAlign: "left" }]}>
                Краткое описание{"\n"}категории
              </Text>
              <LinearGradient
                colors={["#F1DCEA", "#E3C3B6"]}
                locations={[0.99, 1]}
                style={styles.itemBgPurple}
              ></LinearGradient>
              <Image
                source={require("../img/category4-big.png")}
                style={styles.categoryImg4}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Navbar
        navigation={navigation}
        active="Catalogue"
        activeText="Catalogue"
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 120,
  },
  title: {
    marginBottom: 21,
    fontFamily: "MontserratBold",
    fontSize: 20,
    lineHeight: 20,
    textAlign: "center",
    color: "#373737",
  },
  scrollTopContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bigItem: {
    flexGrow: 1,
    width: "100%",
    paddingHorizontal: 23,
    paddingTop: 287,
    paddingBottom: 48,
    borderRadius: 25,
    alignItems: "center",
  },
  categoryTopRight: {
    width: "49%",
  },
  smallItem: {
    marginBottom: 11,
    paddingTop: 150,
    paddingBottom: 17,
    width: "100%",
    paddingHorizontal: 33,
    flexGrow: 1,
    borderRadius: 25,
    alignItems: "center",
  },
  categoryImg1: {
    position: "absolute",
    top: 75,
    width: 50,
    height: 188,
    //transform: [{ translateX: 25 }],
  },
  categoryImg2: {
    position: "absolute",
    top: 28,
    left: "50%",
    transform: [{ translateX: 4 }],
    width: 57,
    height: 118,
  },
  categoryImg3: {
    position: "absolute",
    top: 15,
    left: "50%",
    width: 34,
    height: 139,
    transform: [{ translateX: 13 }],
  },
  itemTitle: {
    fontFamily: "MontserratBold",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFFFFF",
  },
  itemDescr: {
    fontFamily: "MontserratRegular",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "center",
    color: "#FFFFFF",
  },
  itemBottom: {
    paddingTop: 36,
    paddingRight: 30,
    paddingBottom: 36,
    paddingLeft: 130,
    borderRadius: 25,
  },
  categoryImg4: {
    position: "absolute",
    top: 8,
    left: 54,
    width: 35,
    height: 114,
  },

  itemBgTan: {
    position: "absolute",
    top: 115,
    left: "50%",
    width: 115,
    height: 115,
    borderRadius: 100,
    transform: [{ translateX: -35 }],
  },
  itemBgPink: {
    position: "absolute",
    top: 50,
    left: "50%",
    width: 80,
    height: 80,
    borderRadius: 100,
    transform: [{ translateX: -10 }],
  },
  itemBgGreen: {
    position: "absolute",
    top: 45,
    left: "50%",
    width: 80,
    height: 80,
    borderRadius: 100,
    transform: [{ translateX: -10 }],
  },
  itemBgPurple: {
    position: "absolute",
    top: 28,
    left: 30,
    width: 80,
    height: 80,
    borderRadius: 100,
  },
});
