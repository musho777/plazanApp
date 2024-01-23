import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { CatalogueItem } from "./CatalogueItem";

export const PromoList = () => {
  const DATA = [
    {
      itemId: "1",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
      sale: "30",
    },
    {
      itemId: "2",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
    {
      itemId: "3",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
    {
      itemId: "4",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
      sale: "20",
    },
    {
      itemId: "6",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
    {
      itemId: "7",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
    {
      itemId: "8",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
    {
      itemId: "9",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
    {
      itemId: "10",
      rate: "4.9",
      currentPrice: "378",
      prevPrice: "420",
      title: "Крем лифтинг для лица\nс наносистемой",
    },
  ];

  return (
    <View style={styles.list}>
      {DATA.map((item) => (
        <CatalogueItem
          style={{ marginRight: 0, width: "48.5%", backgroundColor: "#fff" }}
          title={item.title}
          rate={item.rate}
          sale={item.sale}
          currentPrice={item.currentPrice}
          prevPrice={item.prevPrice}
          key={item.itemId}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
