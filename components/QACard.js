import React, { Component } from 'react';
import {View, Text, StyleSheet, Platform, Animated} from 'react-native'
import { blue } from '../utils/colors'
import TextButton from './TextButton'
import { qaSheet } from '../styles/qa';

class QACard extends Component {

    constructor(props){
        super(props);
        this.state = {
            flipToShow: 'Answer'
        };
    }

    componentWillReceiveProps(nextProps) {
        const { card } = this.props;
        if (card.question !== nextProps.card.question) {
            this.reset();
        }
    }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value;
        });

        this.animatedOpacityFrontValue = new Animated.Value(1);
        this.textOpacityFrontValue = 1;
        this.animatedOpacityFrontValue.addListener(({value}) => {
            this.textOpacityFrontValue = value;
        });

        this.animatedOpacityBackValue = new Animated.Value(0);
        this.textOpacityBackValue = 0;
        this.animatedOpacityBackValue.addListener(({value}) => {
            this.textOpacityBackValue = value;
        });

        this.frontInterpolate = this.animatedValue.interpolate({
            inputRange: [
                0, 180
            ],
            outputRange: ['0deg', '180deg']
        });

        this.backInterpolate = this.animatedValue.interpolate({
            inputRange: [
                0, 180
            ],
            outputRange: ['180deg', '360deg']
        });
    }

    reset() {
        if (this.value >= 90) {
            Animated.parallel([
                Animated.timing(this.animatedValue, {
                    toValue: 0,
                    duration: 0
                }),
                Animated.timing(this.animatedOpacityFrontValue, {
                    toValue: 1,
                    duration: 0,
                }),
                Animated.timing(this.animatedOpacityBackValue, {
                    toValue: 0,
                    duration: 0,
                })
            ]).start();
            this.setState({flipToShow: 'Answer'});
        }
    }

    flipCard = () => {
        if (this.value >= 90) {
            Animated.parallel([
                Animated.spring(this.animatedValue, {
                    toValue: 0,
                    friction: 8,
                    tension: 10
                }),
                Animated.timing(this.animatedOpacityFrontValue, {
                    toValue: 1,
                    duration: 100,
                }),
                Animated.timing(this.animatedOpacityBackValue, {
                    toValue: 0,
                    duration: 0,
                })
            ]).start();
            this.setState({flipToShow: 'Answer'});
        } else {
            Animated.parallel([
                Animated.spring(this.animatedValue, {
                    toValue: 180,
                    friction: 8,
                    tension: 10
                }),
                Animated.timing(this.animatedOpacityBackValue, {
                    toValue: 1,
                    duration: 100,
                }),
                Animated.timing(this.animatedOpacityFrontValue, {
                    toValue: 0,
                    duration: 0,
                })
            ]).start();
            this.setState({flipToShow: 'Question'});
        }
    };

    render() {
        const { card } = this.props;
        const { flipToShow } = this.state;

        const frontAnimatedStyle = {
            transform: [
                {
                    rotateY: this.frontInterpolate
                }
            ],
            opacity: this.animatedOpacityFrontValue
        };

        const backAnimatedStyle = {
            transform: [
                {
                    rotateY: this.backInterpolate
                }
            ],
            opacity: this.animatedOpacityBackValue
        };

        return (
            <View style={[qaSheet.container]}>
                <View>
                    <Animated.View style={[qaSheet.flipCard, frontAnimatedStyle]}>
                        <Text style={qaSheet.content}>{card.question}</Text>
                    </Animated.View>
                    <Animated.View style={[backAnimatedStyle, qaSheet.flipCard, qaSheet.flipCardBack]}>
                        <Text style={qaSheet.content}>{card.answer}</Text>
                    </Animated.View>
                </View>
                <TextButton style={{color: blue}} onPress={() => this.flipCard()}>{flipToShow}</TextButton>
            </View>
        )
    }
}

export default QACard;
