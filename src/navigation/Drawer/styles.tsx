import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundTransparent: {
    backgroundColor: 'transparent',
  },
  drawerStyle: {
    width: '50%',
    backgroundColor: 'transparent',
  },
  flexOne: {
    flex: 1,
  },
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
  },
  iconMenu: {
    paddingHorizontal: 10,
  },
  drawerStyles: {
    flex: 1,
    width: '50%',
    backgroundColor: 'transparent',
  },
  drawerItem: {
    color: 'white',
    marginLeft: -16,
  },
  versionText: {
    color: 'white',
    marginLeft: 16,
    marginTop: 15,
  },
  avatar: {
    marginVertical: 35,
    marginHorizontal: 10,
  },
  appName: {
    color: 'white',
    paddingLeft: 10,
  },
});

export default styles;
