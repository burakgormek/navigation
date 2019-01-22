import React from 'react';
import {StyleSheet, ScrollView, Text, View, Platform, TouchableHighlight} from 'react-native';
import {NavigationContext} from 'navigation-react';

export default ({colors, color}) => (
  <NavigationContext.Consumer>
    {({stateNavigator}) => (
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {Platform.OS !== 'ios' && <TouchableHighlight
          underlayColor="#fff"
          onPress={() => {
            stateNavigator.navigateBack(1);
          }}>
          <Text style={styles.back}>X</Text>
        </TouchableHighlight>}
        <View style={styles.color}>
          <View style={{backgroundColor: color, flex: 1}} />
        </View>
        <Text style={styles.text}>{color}</Text>
        <View style={styles.colors}>
          {[1,2,3].map(i => colors[(colors.indexOf(color) + i) % 15])
            .map(subcolor => (
              <TouchableHighlight
                key={subcolor}
                style={[styles.subcolor, {backgroundColor: subcolor}]}
                underlayColor={subcolor}
                onPress={() => {
                  stateNavigator.navigate('detail', {
                    color: subcolor, sharedElements: [subcolor]
                  });
                }}>
                  <View />
              </TouchableHighlight>
            )
          )}
        </View>
      </ScrollView>
    )}
  </NavigationContext.Consumer>
);
  
const styles = StyleSheet.create({
  back: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 10,
  },
  color: {
    height: 300,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  text:{
    fontSize: 80,
    color: '#000',
    textAlign:'center',
    fontWeight: 'bold',
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  subcolor: {
    width: 100,
    height: 50,
    marginLeft: 4,
    marginRight: 4,
    marginBottom: 10,
  },
});