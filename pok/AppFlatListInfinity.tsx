import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';

export default function App() {
  const baseUrl = 'https://api.github.com';
  const perPage = 10;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    console.log('Carregou!');
    loadDataFromApi();
  }, []);

  async function loadDataFromApi() {
    console.log('loadDataFromApi!');

    if (loading) {
      return;
    }

    console.log('setLoading!');

    setLoading(true);

    const response = await axios.get(
      `${baseUrl}/search/repositories?q=react&per_page=${perPage}&page=${page}`,
    );

    console.log('Data', response.data.items);

    setData([...data, ...response.data.items]);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={{marginTop: 35}}
        contentContainerStyle={{marginHorizontal: 20}}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <ListItem data={item} />}
        onEndReached={loadDataFromApi}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FooteList load={loading} />}
      />
    </View>
  );
}

function ListItem({data}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listText}>{data.full_name}</Text>
    </View>
  );
}

function FooteList({load}) {
  if (!load) {
    return null;
  }

  return (
    <View style={styles.loading}>
      <ActivityIndicator size={25} color="#121212" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    backgroundColor: '#121212',
    padding: 25,
    marginTop: 20,
    borderRadius: 10,
  },
  listText: {
    fontSize: 16,
    color: '#FFF',
  },
  loading: {
    padding: 10,
  },
});
