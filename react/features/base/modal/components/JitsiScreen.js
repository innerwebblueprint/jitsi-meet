// @flow

import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleType } from '../../styles';

import JitsiKeyboardAvoidingView from './JitsiKeyboardAvoidingView';
import styles from './styles';


type Props = {

    /**
     * Additional style to be appended to the KeyboardAvoidingView content container.
     */
    contentContainerStyle?: StyleType,

    /**
     * The children component(s) of the Modal, to be rendered.
     */
    children: React$Node,

    /**
     * Disabled forced keyboard dismiss?
     */
    disableForcedKeyboardDismiss?: boolean,

    /**
     * Optional function that renders a footer component, if needed.
     */
    footerComponent?: Function,

    /**
     * Is a text input rendered at the bottom of the screen?
     */
    hasBottomTextInput?: boolean,

    /**
     * Is the screen rendering a tab navigator?
     */
    hasTabNavigator?: boolean,

    /**
     * Insets for the SafeAreaView.
     */
    safeAreaInsets?: Array,

    /**
     * Enable scroll for JitsiScreen.
     */
    scrollEnabled?: boolean,

    /**
     * Additional style to be appended to the KeyboardAvoidingView containing the content of the modal.
     */
    style?: StyleType
}

const JitsiScreen = ({
    contentContainerStyle,
    children,
    footerComponent,
    hasTabNavigator = false,
    hasBottomTextInput = false,
    disableForcedKeyboardDismiss = false,
    safeAreaInsets = [ 'left', 'right' ],
    scrollEnabled = false,
    style
}: Props) => {
    const renderContent = () => (
        <JitsiKeyboardAvoidingView
            contentContainerStyle = { contentContainerStyle }
            disableForcedKeyboardDismiss = { disableForcedKeyboardDismiss }
            hasBottomTextInput = { hasBottomTextInput }
            hasTabNavigator = { hasTabNavigator }
            style = { style }>
            <SafeAreaView
                edges = { safeAreaInsets }
                style = { styles.safeArea }>
                { children }
            </SafeAreaView>
            { footerComponent && footerComponent() }
        </JitsiKeyboardAvoidingView>
    );

    if (scrollEnabled) {
        return (
            <ScrollView
                bounces = { false }
                style = { styles.jitsiScreenContainer }>
                { renderContent() }
            </ScrollView>
        );
    }

    return (
        <View style = { styles.jitsiScreenContainer }>
            { renderContent() }
        </View>
    );
};


export default JitsiScreen;
