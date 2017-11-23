// @flow

import React, { Component } from 'react';
import { Text, View } from 'react-native';

import { Page } from 'RNPathjsChartsDojo/src/components';

import styles from './Home.style';

import DataView from './DataView';

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  props: PropsType;

  render() {
    return (
      <Page noMargin noNavBar>
        <View style={styles.container}>
          <DataView />
        </View>
      </Page>
    );
  }
}

type PropsType = {
  navigation: any,
};
