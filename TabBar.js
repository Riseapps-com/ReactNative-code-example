import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import PropTypes from 'prop-types';
import LinearGradient from "react-native-linear-gradient";
import MarqueeText from "./MarqueeText";

const unselectedTabGradient = ['#5e5e5e', '#292929', '#0d0d0d', '#040404', '#292929'];
const selectedTabGradient = ['#343434', '#181817', '#070708', '#11110f', '#111111'];

class TabBar extends Component {
    constructor(props) {
        super(props);
        this.setInitialState();
    }

    setInitialState = () => {
        const tabs = this.props.tabs;
        const selectedTab = this.props.selectedTab;
        this.state = {};
        if (tabs && tabs.length !== 0 && selectedTab && selectedTab < tabs.length) {
            this.state = {selectedTab: tabs[this.props.selectedTab]};
        } else {
            this.state = {selectedTab: tabs[0]}
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.createTabs()}
            </View>
        );
    }

    createTabs = () => {
        const tabs = this.props.tabs;
        let tabsComponents = [];

        if (tabs !== undefined && tabs !== null && tabs.length > 1) {
            for (let tab of tabs) {
                tabsComponents.push(this.state.selectedTab.title === tab.title ? this.getSelectedTabComponent(tab) : this.getUnselectedTabComponent(tab));
            }
        }

        return tabsComponents;
    };

    getSelectedTabComponent = (tab) => {
        let selectedTabComponent = null;
        if (this.state.pressedTab === undefined) {
            selectedTabComponent = this.getDefaultSelectedTabComponent(tab);
        } else if (this.state.pressedTab.title !== this.state.selectedTab.title) {
            selectedTabComponent = this.getNotPressedTabComponentWithDirection(tab);
        } else if (this.state.pressedTab.title === this.state.selectedTab.title) {
            selectedTabComponent = this.getPressedTabComponentWithDirection(tab);
        }

        return (
            <TouchableOpacity activeOpacity={1}
                              onPressIn={() => this.handleSelectedTabPressIn(tab)}
                              onPressOut={() => this.handleSelectedTabPressOut(tab)}
                              key={tab.title}
                              style={styles.selectedTabContainer}>
                {selectedTabComponent}
            </TouchableOpacity>
        );
    };

    getUnselectedTabComponent = (tab) => {
        let unselectedTabComponent = null;
        if (this.state.pressedTab === undefined) {
            unselectedTabComponent = this.getDefaultUnselectedTabComponent(tab);
        } else if (this.state.pressedTab.title !== tab.title) {
            unselectedTabComponent = this.getDefaultUnselectedTabComponent(tab);
        } else if (this.state.pressedTab.title === tab.title) {
            unselectedTabComponent = this.getPressedTabComponentWithDirection(tab);
        }

        return (
            <TouchableOpacity activeOpacity={1}
                              onPressIn={() => this.handleUnselectedTabPressIn(tab)}
                              onPressOut={() => this.handleUnselectedTabPressOut(tab)}
                              key={tab.title}
                              style={styles.unselectedTabContainer}>
                {unselectedTabComponent}
            </TouchableOpacity>
        );
    };

    getDefaultSelectedTabComponent = (tab) => {
        return (
            <View style={styles.defaultSelectedTabContainer}>
                <View style={styles.unselectedFakeContainer}/>
                <View style={styles.defaultSelectedTabTextContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.selectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </View>
                <View style={styles.unselectedFakeContainer}/>
            </View>
        );
    };

    getDefaultUnselectedTabComponent = (tab) => {
        return (
            <View style={styles.defaultUnselectedTabContainer}>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.selectedFakeContainer}/>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.defaultUnselectedTabTextContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.unselectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </LinearGradient>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.selectedFakeContainer}/>
            </View>
        );
    };

    getPressedStartTabComponent = (tab) => {
        return (
            <View style={styles.pressedComponentContainer}>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.sideGradientContainer}/>
                <LinearGradient colors={selectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.pressedComponentGradientContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.unselectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </LinearGradient>
                <LinearGradient colors={selectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.selectedFakeContainer}/>
            </View>
        );
    };

    getPressedMiddleTabComponent = (tab) => {
        return (
            <View style={styles.pressedComponentContainer}>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.sideGradientContainer}/>
                <LinearGradient colors={selectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.pressedComponentGradientContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.unselectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </LinearGradient>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.sideGradientContainer}/>
            </View>
        );
    };

    getPressedEndTabComponent = (tab) => {
        return (
            <View style={styles.pressedComponentContainer}>
                <LinearGradient colors={selectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.selectedFakeContainer}/>
                <LinearGradient colors={selectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.pressedComponentGradientContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.unselectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </LinearGradient>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.sideGradientContainer}/>
            </View>
        );
    };

    getNotPressedStartTabComponent = (tab) => {
        return (
            <View style={styles.notPressedComponentContainer}>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.sideGradientContainer}/>
                <View style={styles.notPressedComponentTextContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.selectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </View>
                <View style={styles.unselectedFakeContainer}/>
            </View>
        );
    };

    getNotPressedEndTabComponent = (tab) => {
        return (
            <View style={styles.notPressedComponentContainer}>
                <View style={styles.unselectedFakeContainer}/>
                <View style={styles.notPressedComponentTextContainer}>
                    <MarqueeText duration={3000}
                                 marqueeOnStart
                                 loop
                                 style={styles.selectedTabText}>
                        {tab.title}
                    </MarqueeText>
                </View>
                <LinearGradient colors={unselectedTabGradient}
                                locations={[0, 0.5, 0.6, 0.7, 1.0]}
                                style={styles.sideGradientContainer}/>
            </View>
        );
    };

    getPressedTabComponentWithDirection = (tab) => {
        let tabPressedComponentWithDirection = null;
        const tabsNumber = this.props.tabs.length;
        let drawingTabPosition = null;
        this.props.tabs.forEach((item, index) => {
            if (item.title === tab.title) {
                drawingTabPosition = index;
            }
        });

        if (tabsNumber > 2 && drawingTabPosition === 0) {
            tabPressedComponentWithDirection = this.getPressedEndTabComponent(tab);
        } else if (tabsNumber > 2 && drawingTabPosition === tabsNumber - 1) {
            tabPressedComponentWithDirection = this.getPressedStartTabComponent(tab);
        } else if (tabsNumber > 2 && drawingTabPosition > 0 && drawingTabPosition < tabsNumber - 1) {
            tabPressedComponentWithDirection = this.getPressedMiddleTabComponent(tab);
        } else if (tabsNumber <= 2 && drawingTabPosition === 0) {
            tabPressedComponentWithDirection = this.getPressedEndTabComponent(tab);
        } else if (tabsNumber <= 2 && drawingTabPosition === tabsNumber - 1) {
            tabPressedComponentWithDirection = this.getPressedStartTabComponent(tab);
        }

        return tabPressedComponentWithDirection;
    };

    getNotPressedTabComponentWithDirection = (tab) => {
        let tabNotPressedComponentWithDirection = null;
        let selectedTabNumber = null;
        let pressedTabNumber = null;
        this.props.tabs.forEach((item, index) => {
            if (item.title === this.state.selectedTab.title) {
                selectedTabNumber = index;
            } else if (item.title === this.state.pressedTab.title) {
                pressedTabNumber = index;
            }
        });

        if (pressedTabNumber - selectedTabNumber === -1) {
            tabNotPressedComponentWithDirection = this.getNotPressedStartTabComponent(tab);
        } else if (pressedTabNumber - selectedTabNumber === 1) {
            tabNotPressedComponentWithDirection = this.getNotPressedEndTabComponent(tab);
        } else {
            tabNotPressedComponentWithDirection = this.getDefaultSelectedTabComponent(tab);
        }

        return tabNotPressedComponentWithDirection;
    };

    handleSelectedTabPressIn = (tab) => {
        this.setState({
            pressedTab: tab
        })
    };

    handleSelectedTabPressOut = (tab) => {
        this.setState({
            pressedTab: undefined,
            selectedTab: tab
        });
        const onTabPress = this.props.onTabPress;
        onTabPress(tab);
    };

    handleUnselectedTabPressIn = (tab) => {
        this.setState({
            pressedTab: tab
        })
    };

    handleUnselectedTabPressOut = (tab) => {
        this.setState({
            pressedTab: undefined,
            selectedTab: tab
        });
        const onTabPress = this.props.onTabPress;
        onTabPress(tab);
    };
}

TabBar.propTypes = {
    tabs: PropTypes.array,
    selectedTab: PropTypes.number,
    onTabPress: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50
    },
    selectedTabContainer: {
        flex: 1,
        borderColor: '#444444',
        borderWidth: 1
    },
    unselectedTabContainer: {
        flex: 1,
        borderColor: '#444444',
        borderWidth: 1
    },
    defaultSelectedTabContainer: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row'
    },
    defaultSelectedTabTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        flex: 1
    },
    defaultUnselectedTabContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    defaultUnselectedTabTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    selectedTabText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500',
        maxHeight: 22,
        flexDirection: 'row'
    },
    unselectedTabText: {
        color: '#aaaaaa',
        fontSize: 18,
        fontWeight: '500',
        maxHeight: 22,
        flexDirection: 'row'
    },
    pressedComponentContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    pressedComponentGradientContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    },
    selectedFakeContainer: {
        width: 8
    },
    unselectedFakeContainer: {
        width: 8,
        backgroundColor: 'black'
    },
    sideGradientContainer: {
        width: 8
    },
    notPressedComponentContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    notPressedComponentTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    }
});

export default TabBar;
