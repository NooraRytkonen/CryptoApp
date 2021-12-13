import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function Coins() {

  const [coins, setCoins] = useState([]);
  
  // fetching coins from API
  const getCoins = async () => {
   const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
   const data = await res.json();
   setCoins(data);
  };
  useEffect(()=>{  
    getCoins();
}, []);

// listSeparator to separate items from each other
const listSeparator = () => {  
  return(
    <View 
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
        marginLeft: "10%"
      }}
    />
  ) }


  //item 
  const Item = ({ coin }) => (
    <View style={styles.containerItem}>
      <View style={styles.name}>
        <Image source={{ uri: coin.image }} style={styles.image} />
        <View style={styles.containerNames}>
          <Text style={styles.nameTitle}>{coin.name}</Text>
          <Text style={styles.textSymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.textPrice}>{coin.current_price}€</Text>
        <Text
          style={[
            styles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? styles.priceUp
              : styles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </Text>
      </View>
    </View>
  );

  // in return flatflist renders items and listSeparator separates them
  return (
    <View>
      <StatusBar backgroundColor="#141414" />
      <FlatList
      data={coins}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item coin={item} />
      }
    ItemSeparatorComponent={listSeparator} 
      />
    </View>
  );
}


const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#fff",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 15,
  },
  name: {
    flexDirection: "row",
  },
  nameTitle: {
    color: "#121212",
    fontWeight: "bold",
  },
  textPrice: {
    color: "#121212",
    fontWeight: "bold",
    marginRight: 5,
  },
  pricePercentage: {
    textAlign: "right",
    marginRight: 5,
  },
  priceUp: {
    color: "#4CBB17", 
    marginRight: 5,
  },
  priceDown: {
    color: "#FF5733", 
    marginRight: 5,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 5,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "white",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  textStyleModal: {
    color: "#121212",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modal: {
    color: "#121212",
    fontWeight: "bold",
    marginRight: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
