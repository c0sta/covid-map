import React, {ReactElement} from 'react';
import {View, Text, Image} from 'react-native';
import {CountryI} from '../Map/utils/MapInterfaces';
import {styles} from './CountryItem.style';

interface CountryItemI {
  item: CountryI;
}

export function CountryItem({item}: CountryItemI): ReactElement {
  return (
    <View style={styles.countryContainer}>
      <View>
        <Image
          style={styles.countryFlag}
          source={{
            uri: item.countryInfo.flag,
          }}
        />
        <Text style={styles.countryName}>{item.country}</Text>
      </View>
      <Text style={styles.countryName}>{item.deaths}</Text>
      <Text style={styles.countryName}>{item.testsPerOneMillion}</Text>
    </View>
  );
}
