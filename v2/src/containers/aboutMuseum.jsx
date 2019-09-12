import React, {Component} from 'react';

// Placeholder for the translate function
var I18n = {};
I18n.t = function(t) {
  return t;
};

// Placeholder for BOTTOMPLAYERHEIGHT
const BOTTOMPLAYERHEIGHT = 0;

import {View, StyleSheet, ScrollView, Text} from 'react-native';

import Markdown from 'react-native-simple-markdown';

import {
  globalStyles,
  NAV_BAR_TEXT,
  NAV_BAR_BACKGROUND,
  ACTION,
} from '../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
  },
});

const aboutText = locale => {
  switch (locale) {
    //TODO Disabling Arabic translation until RTL is figured out
    //case 'ar':
    //  return require('../data/pages/aboutTheMuseum-ar.md').default;
    case 'de':
      return require('../data/pages/aboutTheMuseum-de.md').default;
    case 'en':
      return require('../data/pages/aboutTheMuseum-en.md').default;
    case 'es':
      return require('../data/pages/aboutTheMuseum-es.md').default;
    case 'fi':
      return require('../data/pages/aboutTheMuseum-fi.md').default;
    case 'fr':
      return require('../data/pages/aboutTheMuseum-fr.md').default;
    case 'it':
      return require('../data/pages/aboutTheMuseum-it.md').default;
    case 'ru':
      return require('../data/pages/aboutTheMuseum-ru.md').default;
    case 'svKids':
    case 'svSimple':
    case 'seSme':
    case 'seSmj':
    case 'seSma':
    case 'sv':
      return require('../data/pages/aboutTheMuseum-sv.md').default;
    case 'zh':
      return require('../data/pages/aboutTheMuseum-zh.md').default;
    default:
      return require('../data/pages/aboutTheMuseum-en.md').default;
  }
};

const hoursText = locale => {
  switch (locale) {
    case 'en':
      return require('../data/pages/openingHoursAdmission-en.md').default;
    case 'svKids':
    case 'svSimple':
    case 'seSme':
    case 'seSmj':
    case 'seSma':
    case 'sv':
      return require('../data/pages/openingHoursAdmission-sv.md').default;
    default:
      return require('../data/pages/openingHoursAdmission-en.md').default;
  }
};

class AboutMuseum extends Component {
  static options(passProps) {
    return {
      topBar: {
        background: {
          color: NAV_BAR_BACKGROUND,
        },
        backButton: {
          showTitle: false,
          color: ACTION,
        },
        title: {
          text: 'The Nordic Museum',
          fontSize: 17,
          fontFamily: 'Helvetica',
          color: NAV_BAR_TEXT,
        },
      },
    };
  }

  render() {
    const markdownStyles = {
      heading1: {
        marginTop: 25,
        ...StyleSheet.flatten(globalStyles.h1),
        // writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        // textAlign: I18nManager.isRTL ? 'right' : 'left',
      },
      paragraph: {
        marginTop: 5,
        ...StyleSheet.flatten(globalStyles.body),
        // writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        // textAlign: I18nManager.isRTL ? 'right' : 'left',
      },
    };

    // PLACEHODLER
    var locale = 'en';

    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={{
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10,
              paddingBottom: BOTTOMPLAYERHEIGHT + 10,
            }}
            automaticallyAdjustContentInsets={false}>
            <Markdown
              styles={markdownStyles}
              rules={{
                paragraph: {
                  react: (node, output, state) => (
                    <Text key={state.key} style={markdownStyles.paragraph}>
                      {output(node.content, state)}
                    </Text>
                  ),
                },
              }}>
              {aboutText(locale)}
            </Markdown>
            <Markdown
              styles={markdownStyles}
              rules={{
                paragraph: {
                  react: (node, output, state) => (
                    <Text key={state.key} style={markdownStyles.paragraph}>
                      {output(node.content, state)}
                    </Text>
                  ),
                },
              }}>
              {hoursText(locale)}
            </Markdown>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default AboutMuseum;