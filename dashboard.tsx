import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <View style={styles.logoContainer}>
         <Image
             source={require('../assets/images/USTP LOGO.png')} // Path to your local image
             style={{ width: 50, height: 50 }}
             />
        </View>
        <ScrollView>
          <TouchableOpacity style={styles.navItem1}>
            <FontAwesome name="bars" size={24} color="#FFFFFF" style={styles.navIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem2}>
            <FontAwesome name="home" size={24} color="#FFFFFF" style={styles.navIcon} />
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem3}>
            <FontAwesome name="calendar" size={24} color="#FFFFFF" style={styles.navIcon} />
            <Text style={styles.navText}>Faculty Schedule & Teaching Load</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem4}>
            <FontAwesome name="file" size={24} color="#FFFFFF" style={styles.navIcon} />
            <Text style={styles.navText}>Online Class Application Form</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem5}>
            <FontAwesome name="certificate" size={24} color="#FFFFFF" style={styles.navIcon} />
            <Text style={styles.navText}>Certification of Accomplishment of Quasi-Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem6}>
            <FontAwesome name="file" size={24} color="#FFFFFF" style={styles.navIcon} />
            <Text style={styles.navText}>Teacher Load Program</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Faculty,</Text>
          <FontAwesome name="user" size={15} color="black"/>
          <View style={styles.headerRight}>
            <Text style={styles.headerName}>Faculty</Text>
            <FontAwesome name="bell" size={15} color="black" />
          </View>
        </View>
        <View style={styles.grid}>
          <View style={[styles.gridItem1, styles.blue]}>
            <FontAwesome name="calendar" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Faculty Schedule & Teaching Load</Text>
          </View>
          <View style={[styles.gridItem2, styles.red]}>
            <FontAwesome name="file" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Online Class Application Form</Text>
          </View>
          <View style={[styles.gridItem3, styles.yellow]}>
            <FontAwesome name="certificate" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Certification of Accomplishment of Quasi-Task</Text>
          </View>
          <View style={[styles.gridItem4, styles.green]}>
            <FontAwesome name="file" size={48} color="black" style={styles.gridIcon} />
            <Text style={styles.gridText}>Teacher Load Program</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 120,
    backgroundColor: '#201B51',
    padding: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 8,
  },
  logoText: {
    fontSize: 6,
    fontWeight: 'bold',
  },
  navItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   navItem2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   navItem3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   navItem4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   navItem5: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
   navItem6: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  navIcon: {
    marginRight: 8,
  },
  navText: {
    fontSize: 10,
    color : '#ffffff',
    textAlign : 'left',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginRight: 10, 
  },
  headerName: {
    marginRight: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem1: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
   gridItem2: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
   gridItem3: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
   gridItem4: {
    width: '48%',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  gridIcon: {
    marginBottom: 8,
  },
  gridText: {
    textAlign: 'center',
    color : 'black',
  },
  blue: {
    backgroundColor: '#79A1F0',
  },
  red: {
    backgroundColor: '#F07979',
  },
  yellow: {
    backgroundColor: '#F0EC79',
  },
  green: {
    backgroundColor: '#89F079',
  },
});

export default App;