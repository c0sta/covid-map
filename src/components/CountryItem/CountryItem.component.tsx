import React, {ReactElement} from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {CountryI} from '../Map/utils/MapInterfaces';
import {styles} from './CountryItem.style';
import {addCommas} from '../../utils/addCommas';
interface CountryItemI {
  item: CountryI;
  key?: number;
}

export function CountryItem({item}: CountryItemI): ReactElement {
  return (
    <TouchableOpacity style={styles.countryContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={styles.countryFlag}
          source={{
            uri: item.countryInfo.flag,
          }}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.countryTitle}>{item.country}</Text>
          <Text style={styles.countryDescrition}>{item.continent}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Text style={styles.casesConfirmed}>{addCommas(item.todayCases)}</Text>
      </View>
    </TouchableOpacity>
  );
}
