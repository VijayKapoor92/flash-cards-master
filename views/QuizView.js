import React, {Fragment, PureComponent} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { setLocalNotification, clearLocalNotification } from '../utils/notifications';
import QACard from '../components/QACard';
import { quizSheet } from '../styles/quiz';

class QuizView extends PureComponent {

    constructor(props){
        super(props);
        this.state = {
            currentQuestionIndex: 0,
            correctAnswersCount: 0
        }
    };

    componentDidMount() {
        clearLocalNotification()
            .then(setLocalNotification);
    };

    correctBtnPressed() {
        this.setState((state) => {
            return {
                currentQuestionIndex: state.currentQuestionIndex + 1,
                correctAnswersCount: state.correctAnswersCount + 1
            }
        });
    };

    inCorrectBtnPressed() {
        this.setState((state) => {
            return {
                ...state,
                currentQuestionIndex: state.currentQuestionIndex + 1
            }
        });
    };

    restartQuiz() {
        this.setState({
            currentQuestionIndex: 0,
            correctAnswersCount: 0
        });
    };

    renderEndView = () => {
        const { correctAnswersCount } = this.state;
        const { deck, goBack } = this.props;
        const { questions } = deck;

        return (
            <View style={quizSheet.container}>
                <View style={quizSheet.scoreContainer}>
                    <Text style={quizSheet.scoreLbl}>
                        Your Score
                    </Text>
                    <Text style={quizSheet.score}>
                        {`${(correctAnswersCount / questions.length) * 100} %`}
                    </Text>
                </View>
                <View style={quizSheet.btnContainer}>
                    <TouchableOpacity
                        style={[quizSheet.btn, quizSheet.goBackToDeckBtn]}
                        onPress={() => goBack()}
                    >
                        <Text style={[quizSheet.btnText, quizSheet.goBackToDeckBtnText]}>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[quizSheet.btn, quizSheet.restartQuizBtn]}
                        onPress={() => this.restartQuiz()}
                    >
                        <Text style={[quizSheet.btnText, quizSheet.restartQuizBtnText]}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    renderView = () => {
        const { currentQuestionIndex } = this.state;
        const { deck } = this.props;
        const { questions } = deck;
        const card = questions[currentQuestionIndex];

        return (
            <View style={quizSheet.container}>
                <Text style={quizSheet.pagination}>
                    {`${currentQuestionIndex + 1} / ${questions.length}`}
                </Text>
                <View style={quizSheet.qacard}>
                    <QACard card={card}/>
                </View>
                <View style={quizSheet.btnContainer}>
                    <TouchableOpacity
                        style={[quizSheet.btn, quizSheet.greenBtn]}
                        onPress={() => this.correctBtnPressed()}
                    >
                        <Text style={[quizSheet.btnText]}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[quizSheet.btn, quizSheet.redBtn]}
                        onPress={() => this.inCorrectBtnPressed()}
                    >
                        <Text style={[quizSheet.btnText]}>
                            Incorrect
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    verify = () => {
        const { currentQuestionIndex } = this.state;
        const { deck } = this.props;
        const { questions } = deck;

        return currentQuestionIndex > 0 && currentQuestionIndex === questions.length;
    };

    render() {
        return (
            <Fragment>
                {this.verify() && (
                    this.renderEndView()
                )}
                {!this.verify() && (
                    this.renderView()
                )}
            </Fragment>
        )
    }
}

const mapStateToProps = (decks, {navigation}) => {
    const {deckTitle} = navigation.state.params;
    return {
        deck: decks[deckTitle] || {}
    }
};

const mapDispatchToProps = (dispatch, {navigation}) => {
    const { deckTitle } = navigation.state.params;
    return {
        goBack: () => navigation.goBack()
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizView);
