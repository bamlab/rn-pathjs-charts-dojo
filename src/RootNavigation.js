// @flow

import { StackNavigator } from 'react-navigation';

import * as Pages from 'RNPathjsChartsDojo/src/pages';

export default StackNavigator({
  home: {
    screen: Pages.Home,
  },
}, {
  initialRouteName: 'home',
});
