import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text, ViewPropTypes } from 'react-native';

import WideButton from './wideButton';

import { SELECTED } from '../../styles';

const styles = StyleSheet.create({
  offStyle: {
    borderColor: 'transparent',
    marginVertical: 0,
    borderRadius: 0,
  },
  onStyle: {
    backgroundColor: SELECTED,
    borderWidth: 0,
    marginBottom: 0,
    marginVertical: 0,
    borderRadius: 0,
  },
  normalTextStyle: {
    textAlign: 'center',
  },
});

const languages = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Svenska',
    code: 'sv',
  },
  {
    name: 'Lätt svenska',
    code: 'svSimple',
  },
  {
    name: 'Barnens audioguide',
    code: 'svKids',
  },
  {
    name: 'Davvisámegiella',
    code: 'seSme',
  },
  {
    name: 'Julevsámegiella',
    code: 'seSmj',
  },
  {
    name: 'Åarjelsaemien gïele',
    code: 'seSma',
  },
  {
    name: 'Deutsch',
    code: 'de',
  },
  {
    name: 'Español',
    code: 'es',
  },
  {
    name: 'Русский',
    code: 'ru',
  },
  {
    name: 'Français',
    code: 'fr',
  },
  {
    name: 'Suomi',
    code: 'fi',
  },
  {
    name: 'Italiano',
    code: 'it',
  },
  {
    name: 'العربية',
    code: 'ar',
  },
  {
    name: '简体中文',
    code: 'zh',
  },
];

const LanguageSwitcherButtons = props => {
  return (
    <View>
      {languages.map(language => {
        return (
          <WideButton
            key={language.code}
            style={[
              props.locale === language.code ? styles.onStyle : styles.offStyle,
              props.style,
              { alignItems: 'center', justifyContent: 'center' },
            ]}
            textStyle={[styles.normalTextStyle, props.textStyle]}
            text={language.name}
            pressable={props.locale !== language.code}
            onPress={() => {
              props.onPress(language.code);
            }}
          />
        );
      })}
    </View>
  );
};

LanguageSwitcherButtons.propTypes = {
  locale: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([ViewPropTypes.style, PropTypes.object]),
  textStyle: PropTypes.oneOfType([Text.propTypes.style, PropTypes.object]),
  onPress: PropTypes.func.isRequired,
};

export default LanguageSwitcherButtons;
