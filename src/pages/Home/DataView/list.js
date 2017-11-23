import React, { Component } from 'react';
import { StyleSheet, View, ListView, Text } from 'react-native';
import DataSets from './data.contant'

export default class List extends Component {
  state: StateType;
  constructor(props: PropsType) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(DataSets[0]),
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(dataRow: { x: number, y: number }) => (
          <View style={styles.content}>
            <Text>{dataRow.x}</Text>
            <Text style={styles.rightValue}>{dataRow.y}</Text>
          </View>
        )}
        renderHeader={() => (
          <View style={styles.content}>
            <Text style={styles.header}>X</Text>
            <Text style={styles.header}>Y</Text>
          </View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: 5,
  },
  rightValue: {
    minWidth: 100,
    textAlign: 'right',
  },
  header: {
    fontWeight: "800",
    paddingBottom: 10,
  }
});
