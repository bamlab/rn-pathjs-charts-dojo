import React, { Component } from 'react';
import { Circle, Text as SvgText } from 'react-native-svg';
import { StockLine } from 'react-native-pathjs-charts';

import DataSets from './data.contant'

export default class Graph extends Component {
  options = {
    showPoints: (graphIndex: number, pointIndex: number) =>
      graphIndex === 1,
    renderPoint: (graphIndex, pointIndex) => {
      const color = DataSets[1][pointIndex].y > DataSets[0][pointIndex].y ? 'green' : 'red';
      return [
        <SvgText
          key="valueLegend"
          fontFamily="Arial"
          fontSize={14}
          fontWeight="normal"
          fill="black"
          textAnchor="middle"
          x={0}
          y={-40}
        >
          {DataSets[graphIndex][pointIndex].y}
        </SvgText>,
        <Circle key="light" fill={color} cx={0} cy={0} r={5} fillOpacity={0.5}/>,
        <Circle key="full" fill={color} cx={0} cy={0} r={3} fillOpacity={1}/>,
      ]},
    strokeWidth: 3,
    showAreas: (curve: number, index: number) => index === 1,
    strokeDasharray: (curve: number, index: number) => (index === 0 ? [5] : []),
    strokeOpacity: (curve: number, index: number) => (index === 0 ? 0.3 : 1),
    width: 250,
    height: 250,
    color: '#FFFFFF',
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
      labelFunction: (timestamp: number | string) => timestamp,
      gridColor: '#FFFFFF',
      showAxis: false,
      showLines: false,
      showLabels: true,
      showTicks: false,
      zeroAxis: false,
      orient: 'bottom',
      tickCount: 5,
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#FFFFFF'
      }
    },
    axisY: {
      labelFunction: (consumption: number) => '',
      opacity: 0.1,
      gridColor: '#FFFFFF',
      showAxis: true,
      showLines: true,
      showLabels: true,
      showTicks: false,
      zeroAxis: false,
      orient: 'right',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#FFFFFF'
      }
    }
  };

  render() {
    return (
      <StockLine data={DataSets} options={this.options} xKey="x" yKey="y" />
    );
  }
}


