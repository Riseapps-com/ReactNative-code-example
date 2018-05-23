import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import {getCountryImgByName} from "../../../../util/getCountryImageByName";

class CalendarAndResultsList extends Component {
    render() {
        const data = this.props.data;
        return (
            <FlatList data={data}
                      renderItem={({item}) => this.getRenderItemComponent(item)}
                      keyExtractor={(item, index) => index.toString()}
                      ItemSeparatorComponent={() => this.getItemSeparatorComponent()}
                      style={styles.list}/>
        );
    }

    getRenderItemComponent = (item) => {
        const countryImage = getCountryImgByName(item.country);
        const winnerImage = require('../../../../assets/img/phone/win_gold.png');
        const {onCountryPress, onWinnerPress} = this.props;

        return (
            <View style={styles.renderItemContainer}>
                <View style={styles.raceContainer}>
                    <View style={styles.container}>
                        <Text numberOfLines={1}
                              style={styles.raceText}>
                            {item.race}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1}
                                  onPress={() => onCountryPress(item.country)}
                                  style={styles.countryContainer}>
                    <Image source={countryImage}
                           style={styles.countryImage}/>
                    <View style={styles.container}>
                        <Text numberOfLines={1}
                              style={styles.countryText}>
                            {item.country}
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.dateTextContainer}>
                    <View style={styles.container}>
                        <Text numberOfLines={1}
                              style={styles.dateText}>
                            {item.date}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity activeOpacity={1}
                                  onPress={() => onWinnerPress(item.winner)}
                                  style={styles.winnerContainer}>
                    <Image source={winnerImage}
                           style={styles.winnerImage}/>
                    <View style={styles.container}>
                        <Text numberOfLines={1}
                              style={styles.winnerText}>
                            {item.winner}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    getItemSeparatorComponent = () => {
        return (
            <View style={styles.itemSeparatorContainer}>
                <View style={styles.itemSeparator1stLine}/>
                <View style={styles.itemSeparator2ndLine}/>
            </View>
        );
    };
}

CalendarAndResultsList.propTypes = {
    data: PropTypes.array,
    onCountryPress: PropTypes.func,
    onWinnerPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    list: {
        backgroundColor: '#0e0e0e'
    },
    renderItemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    raceContainer: {
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    raceText: {
        color: '#d9a102',
        fontSize: 14
    },
    countryContainer: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginStart: 8
    },
    countryImage: {
        width: 24,
        height: 24
    },
    countryText: {
        fontSize: 14,
        color: '#aaaaaa',
        marginStart: 8
    },
    dateTextContainer: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 8
    },
    dateText: {
        fontSize: 14,
        color: '#aaaaaa'
    },
    winnerImage: {
        width: 24,
        height: 24
    },
    winnerContainer: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginStart: 8,
        flexDirection: 'row'
    },
    winnerText: {
        fontSize: 14,
        color: '#aaaaaa',
        marginStart: 8
    },
    itemSeparatorContainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 8
    },
    itemSeparator1stLine: {
        height: 1,
        backgroundColor: '#040404'
    },
    itemSeparator2ndLine: {
        height: 1,
        backgroundColor: '#3b3b3d'
    }
});

export default CalendarAndResultsList;
