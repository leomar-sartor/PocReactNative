import * as React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Pedido, PedidoList} from './Componentes/FlatList/dados/PedidoList';
import {PedidoHeader} from './Componentes/FlatList/PedidoHeader';
import {PedidoItem} from './Componentes/FlatList/PedidoItem';
import {SeparatorItem} from './Componentes/FlatList/SeparatorItem';

export default function App() {
  function renderItem({item}: ListRenderItemInfo<Pedido>) {
    return <PedidoItem {...item} />;
  }

  const showAlert = () => {
    alert('Fim da Lista!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView>
        {PedidoList.map(pedido => (
          <PedidoItem key={pedido.codigo} {...pedido} />
        ))}
      </ScrollView> */}
      {/* <PedidoHeader /> */}
      <FlatList
        ItemSeparatorComponent={SeparatorItem}
        ListHeaderComponent={PedidoHeader}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => String(item.codigo)}
        data={PedidoList}
        //horizontal
        // renderItem={({item}) => <PedidoItem {...item} />}
        renderItem={renderItem}
        onEndReached={showAlert} //chamar a função showAlert
        onEndReachedThreshold={0.1} //10 % - Para saber quando isso acontece (distância da borda inferior da lista deve estar o conteúdo final visível.)
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
});
