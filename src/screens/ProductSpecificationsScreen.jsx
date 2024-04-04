import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function ProductSpecificationsScreen({ product }) {
  const windowWidth = useWindowDimensions().width;
  const isPortrait = windowWidth < useWindowDimensions().height;

  return (
    <View style={[styles.containerPortrait, !isPortrait && styles.container]}>
      <View style={!isPortrait && styles.containerDescriptionPortrait}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price}</Text>
        <View style={styles.specificationsContainer}>
          {Object.entries(product.technicalSpecifications).map(([key, value]) => (
            <View key={key} style={styles.specificationItem}>
              <Text style={styles.specificationTitle}>{key}:</Text>
              <Text>{value}</Text>
            </View>
          ))}
        </View>
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
    marginBottom: 10,
  },
  specificationsContainer: {
    marginTop: 10,
  },
  specificationItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  specificationTitle: {
    fontWeight: 'bold',
    marginRight: 5,
  },
});
