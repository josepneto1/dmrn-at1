import { StyleSheet, Text, View } from 'react-native';

export default function ProductCommentsScreen({ product }) {
    const { comments } = product;

    return (
        <View style={styles.container}>
            {comments.map((comment, index) => (
                <View style={styles.commentContainer} key={index}>
                    <Text style={styles.commentUser}>{comment.user}:</Text>
                    <Text style={styles.commentDate}>{comment.date}</Text>
                    <Text>{comment.comment}</Text>
                    <Text>Nota: <Text style={styles.commentRating}>{comment.rating}</Text>/5</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    commentContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#adb5bd',
    },
    commentUser: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    commentDate: {
        color: '#8b9298',
        marginBottom: 5,
    },
    commentRating: {
        fontSize: 16,
        color: '#007bff',
    },
});
