import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

export default function ProductVendorScreen({ product }) {
  const { vendorData } = product
  const windowWidth = useWindowDimensions().width;
  const isPortrait = windowWidth < useWindowDimensions().height;

  return (
    <View style={[styles.containerPortrait, !isPortrait && styles.container]}>
      <View style={!isPortrait && styles.containerDescriptionPortrait}>
        <Text style={styles.title}>{vendorData.name}</Text>
        <Text style="">{vendorData.name}</Text>
        <Text style="">{vendorData.email}</Text>
        <Text style="">{vendorData.phone}</Text>
        <Text style="">Nota: {vendorData.rating}/5</Text>
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
  },
});
