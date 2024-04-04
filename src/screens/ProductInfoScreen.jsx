import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function ProductInfoScreen({ product }) {
  const windowWidth = useWindowDimensions().width;
  const isPortrait = windowWidth < useWindowDimensions().height;

  return (
    <View style={[styles.containerPortrait, !isPortrait && styles.container]}>
      <View style={styles.containerImg}>
        <Image style={styles.cardImage} source={{uri: product.image}} />
      </View>
      <View style={!isPortrait && styles.containerDescriptionPortrait}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPortrait: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerDescriptionPortrait: {
    maxWidth: '80%',
    paddingHorizontal: 20,
  },
  cardImage: {
    width: 200,
    height: 250,
    marginBottom: 8,
    borderRadius: 8,
  },
  containerImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
