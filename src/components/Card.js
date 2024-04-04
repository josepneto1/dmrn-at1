import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Routes from '../routes';


export default function Card({ item }) {

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(Routes.ProductDetailScreen, { product: item });
  };
  
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});
