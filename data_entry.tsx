import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const DataEntry = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Section</Text>
        <Text style={styles.headerText}>Subject ID</Text>
        <Text style={styles.headerText}>Code</Text>
        <Text style={styles.headerText}>Title</Text>
        <Text style={styles.headerText}>Schedule</Text>
        <Text style={styles.headerText}>Limit</Text>
        <Text style={styles.headerText}>Teacher</Text>
        <Text style={styles.headerText}>Action</Text>
      </View>

      {/* Table Content */}
      <ScrollView>
        {/* Placeholder for rows, replace with dynamic data */}
        <View style={styles.row}>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>-</Text>
          <Text style={styles.text}>-</Text>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>✖</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  headerText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    flex: 1,
    fontSize: 12,
    textAlign: 'center',
  },
  deleteButton: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    borderRadius: 5,
    paddingVertical: 5,
    marginLeft: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DataEntry;
