import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Animated, {AnimatedLayout} from 'react-native-reanimated';

// Styles
import {styles} from './styles';

// Data for render items
import {characters} from '../../utils/constants';

const Characters = (item, index) => {
  return (
    <Animated.View key={index} style={styles.box}>
      <Animated.View style={styles.boxOutside} />
    </Animated.View>
  );
};

const ContainerScreen = () => {
  const [amongUs, setAmongUs] = useState(characters ? characters : []);
  return (
    <AnimatedLayout style={styles.container}>
      {amongUs.map((item, index) => (
        <Characters item={item} index={index} />
      ))}
    </AnimatedLayout>
  );
};

export default ContainerScreen;
