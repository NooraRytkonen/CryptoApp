import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Linking, Image } from 'react-native';
import Button from './components/Button';

export default function News(){

    const [data, setData] = React.useState([]);
  
    // fetching news from API
    const fetchData = async () => {
      const resp = await fetch("https://newsapi.org/v2/everything?q=crypto&apiKey=ab4eab0600184f5ba67b7e60b412a80a");
      const json = await resp.json();
      setData(json.articles);
    };
    useEffect(() => {
        fetchData();
      }, []);


      // returns flatlist of news
    return (
        <View style={styles.containerMain}>
          <FlatList
            data={data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
              <View style={styles.container}>
                <Text style={styles.title}>
                  {item.title}.
                </Text>
                <Text style={styles.text}>
                  Published: {item.publishedAt}
                </Text>
                <Text style={styles.text}>
                  Source: {item.source.name}
                </Text>
                <Text />
                <Image style={styles.image} source={{ uri: item.urlToImage }} />
                <Button onPress={() => Linking.openURL(item.url)}>
                  View {item.name}
                </Button>
              </View>
            }
           />
        </View>
      );
    }

    const styles = StyleSheet.create({
        containerMain: {
          flex: 1,
          backgroundColor: 'white',
        },
        title: {
          color: '#121212',
          fontSize: 18,
          fontWeight: '900'
        },
        container: {
          borderWidth: 2,
          borderRadius: 20,
          margin: 15,
          justifyContent: 'space-between',
          borderColor: '#121212',
          padding: 20,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.1,
        },
        text: {
          color: '#121212',
          fontSize: 16,
          fontWeight: '200'
        },
        image: {
          height: 200,
          flex: 1,
          width: null,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: 'white',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.1,
          margin: 10
        }
      });

