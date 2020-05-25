import React, {ReactElement} from 'react';
import {FlatList, View} from 'react-native';
import {CountryI} from '../../components/Map/utils/MapInterfaces';
import {getData} from '../../services/get-data';
import {CountryItem} from '../../components/index';
import {styles} from './CountryList.style';
import {Title} from 'native-base';
import colors from '../../styles/colors';

export default function CountryList(): ReactElement {
  const [countries, setCountries] = React.useState<CountryI[]>([]);

  React.useEffect(() => {
    getData('/countries')
      .then((response: Array<CountryI>) => {
        // console.log('RESPONSE HERE ');
        setCountries(response);
      })
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  const _renderItem = (item: CountryI, index: number): ReactElement => (
    <CountryItem item={item} key={index} />
  );

  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>
      <Title
        style={{
          color: colors.text,
          fontSize: 15,
          marginTop: 10,
        }}>
        Today cases
      </Title>
      <FlatList
        style={styles.listContainer}
        data={countries.sort((a, b) => a.todayCases < b.todayCases)}
        renderItem={({item, index}) => _renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
