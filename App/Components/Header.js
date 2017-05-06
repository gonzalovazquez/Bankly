import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  avatarContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  balance: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    color: '#333',
    fontSize: 15,
    marginTop: 5,
  },
  balanceText: {
    color: '#000',
    fontSize: 38,
    fontWeight: '700',
  },
});

const Header = () => (
  <View style={styles.header}>
    <View style={styles.avatarContainer}>
      <Image
        source={require('../assets/Avatar.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.userName}>Marie's Money</Text>
    </View>
    <View style={styles.balance}>
      <Text style={styles.balanceText}>$40.00</Text>
    </View>
  </View>
);

export default Header;
