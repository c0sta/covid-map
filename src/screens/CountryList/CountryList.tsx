import React, {ReactElement} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {CountryI} from '../../components/Map/utils/MapInterfaces';
import {getData} from '../../services/get-data';
import {CountryItem} from '../../components/index';

export default function CountryList(): ReactElement {
  const [countries, setCountries] = React.useState<CountryI[]>([]);

  React.useEffect(() => {
    getData('/countries')
      .then((response: Array<CountryI>) => {
        console.log('RESPONSE HERE ');
        setCountries(response);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  const _renderItem = (item: CountryI, index: number): ReactElement => (
    <CountryItem item={item} key={index} />
  );

  return (
    <SafeAreaView style={{backgroundColor: '#38414e', padding: 10}}>
      <FlatList
        data={countries}
        renderItem={({item, index}) => _renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
