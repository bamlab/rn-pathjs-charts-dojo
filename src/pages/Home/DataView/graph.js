import React, { Component } from 'react';
import { StockLine } from 'react-native-pathjs-charts';

import DataSets from './data.contant'

export default class Graph extends Component {
  options = {
    width: 250,
    height: 250,
    color: '#2980B9',
    margin: {
      top: 10,
      left: 35,
      bottom: 30,
      right: 10
    },
    animate: {
      type: 'delayed',
      duration: 200
    },
    axisX: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'bottom',
      tickValues: [],
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    },
    axisY: {
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'left',
      tickValues: [],
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }
  };

  render() {
    return (
      <StockLine data={DataSets} options={this.options} xKey="x" yKey="y" />
    );
  }
}


