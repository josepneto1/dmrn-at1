import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import ListContainer from "../container/ListContainer";


export default function ProductListScreen() {
  const url = 'https://dmrn-at1-default-rtdb.europe-west1.firebasedatabase.app/products.json'
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const convertedProducts = converter(data);
        setProducts(convertedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setIsLoading(false));
  }, []);

  function converter(data) {
    const ids = Object.keys(data);
    const objs = Object.values(data);
    return objs.map((obj, i) => {
      return { id: ids[i], ...obj };
    });
  }

  return (
    <>
      {isLoading ? (
          <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
          </View>
      ) : (
        <>
          <View style={styles.container}>
            <ListContainer products={products}/>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
