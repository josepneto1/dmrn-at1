import { StyleSheet, Text, View } from 'react-native';

export default function ProductQuestionsScreen({ product }) {
    const { questions } = product;

    return (
        <View style={styles.container}>
            {questions.map((question, index) => (
                <View style={styles.questionContainer} key={index}>
                    <Text style={styles.questionDate}>{question.date}</Text>
                    <Text style={styles.questionUser}>{question.user}:</Text>
                    <Text>{question.question}:</Text>
                    <Text>R: {question.answer}</Text>
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
    questionContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#adb5bd',
    },
    questionUser: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    questionDate: {
        color: '#8b9298',
        marginBottom: 5,
    },
    questionRating: {
        fontSize: 16,
        color: '#007bff',
    },
});
