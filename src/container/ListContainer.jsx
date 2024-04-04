import { FlatList, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';

export default function ListContainer({ products }) {

    function renderItem({ item }) {
        return <Card
        item={item} />;
    }

    if (products.length > 0) {
        return <FlatList
            style={styles.container}
            data={products}
            renderItem={renderItem}
            keyExtractor={(item) => item._id}
        />
    } else {
        return (<Text>Nenhum produto cadastrado!</Text>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})