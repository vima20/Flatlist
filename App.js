// Search.js
import React, { useState } from 'react';
import { TextInput } from 'react-native';

const Search = ({ executeSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    executeSearch(searchText);
  };

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      onChangeText={text => setSearchText(text)}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
      placeholder="Search by lastname..."
    />
  );
};


// Data.js
export const data = [
  { id: 1, lastname: 'Doe', firstname: 'John' },
  { id: 2, lastname: 'Smith', firstname: 'Alice' },
  { id: 3, lastname: 'Johnson', firstname: 'Bob' },
  { id: 4, lastname: 'Williams', firstname: 'Emily' },
  { id: 5, lastname: 'Brown', firstname: 'Michael' },
  { id: 6, lastname: 'Davis', firstname: 'Sophia' },
  { id: 7, lastname: 'Miller', firstname: 'Olivia' },
  { id: 8, lastname: 'Wilson', firstname: 'James' },
  { id: 9, lastname: 'Moore', firstname: 'Emma' },
  { id: 10, lastname: 'Taylor', firstname: 'William' },
  { id: 11, lastname: 'Anderson', firstname: 'Isabella' },
  { id: 12, lastname: 'Thomas', firstname: 'Ethan' },
  { id: 13, lastname: 'Jackson', firstname: 'Ava' },
  { id: 14, lastname: 'White', firstname: 'Mia' },
  { id: 15, lastname: 'Harris', firstname: 'Alexander' },
];

// App.js
import  { useEffect } from 'react';
import { FlatList, SafeAreaView, Text, StyleSheet } from 'react-native';
//import { data } from './Data';

const App = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data);
  }, []);

  const executeSearch = (phrase) => {
    setSearchPhrase(phrase);
    const filteredItems = data.filter(item => item.lastname.toLowerCase().startsWith(phrase.toLowerCase()));
    setFilteredData(filteredItems);
  };

  const renderItem = ({ item }) => (
    <Text style={styles.item}>{item.lastname}, {item.firstname}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 16,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
