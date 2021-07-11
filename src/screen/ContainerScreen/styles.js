import {StyleSheet} from 'react-native';
import {rs} from '../../utils/dimensions';
import theme from '../../utils/theme';
import {randomProperty} from '../../utils/helpers';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: rs(180),
    width: rs(240),
    margin: rs(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: rs(2)},
    shadowOpacity: 0.5,
    shadowRadius: rs(2),
    elevation: 2,
    backgroundColor: theme.colors.lightGray,
    borderRadius: rs(12),
    padding: rs(10),
  },
  boxOutside: {
    height: rs(80),
    width: rs(100),
    margin: rs(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: rs(2)},
    shadowOpacity: 0.5,
    shadowRadius: rs(2),
    elevation: 2,
    backgroundColor: randomProperty(theme.randomColors),
    borderRadius: rs(12),
    padding: rs(10),
    left: rs(-40),
    top: rs(65),
  },
});
