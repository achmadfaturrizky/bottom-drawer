import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BottomDrawer from './swiper';

// this example assumes you're using a header and a tab bar
const TAB_BAR_HEIGHT = 40;
const HEADER_HEIGHT = 60;

export default class App extends React.Component {
  renderContent = () => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Get directions to your location</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.firstButton}>
            <Text style={styles.textButton}>Button 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.firstButton}>
            <Text style={styles.textButton}>Button 2</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Bottom Sheets</Text>
        <BottomDrawer
          containerHeight={100}
          startUp={false}
          offset={TAB_BAR_HEIGHT}
          onExpanded={() => {
            console.log('expanded');
          }}
          onCollapsed={() => {
            console.log('collapsed');
          }}>
          {this.renderContent()}
        </BottomDrawer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  text: {
    paddingHorizontal: 5,
  },
  firstButton: {
    backgroundColor: '#13A699',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  textButton: {
    color: '#fff',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});
