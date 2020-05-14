import React, {ReactElement} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './Card.style';

interface CardProps {
  currentCountry: {
    active: Number;
    cases: Number;
    casesPerOneMillion: Number;
    continent: 'Africa';
    country: 'Zimbabwe';
    countryInfo: {
      _id: Number;
      flag: 'https://disease.sh/assets/img/flags/zw.png';
      iso2: 'ZW';
      iso3: 'ZWE';
      lat: Number;
      long: Number;
    };
    critical: Number;
    deaths: Number;
    deathsPerOneMillion: Number;
    recovered: Number;
    tests: Number;
    testsPerOneMillion: Number;
    todayCases: Number;
    todayDeaths: Number;
    updated: Number;
  };
  handleTracksViewChanges: Function;
}

export function Card({
  currentCountry,
  handleTracksViewChanges,
}: CardProps): ReactElement {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Image
          style={styles.flagImg}
          source={{
            uri: currentCountry.countryInfo.flag,
          }}
          onLoad={() => handleTracksViewChanges}
        />
        <Text style={styles.cardTitle}>{currentCountry.country}</Text>
      </View>

      <Text style={styles.cardNumber}>Casos: {currentCountry.cases}</Text>
      <Text style={styles.cardNumber}>
        Recuperados: {currentCountry.recovered}
      </Text>
      <Text style={styles.cardNumber}>Mortes: {currentCountry.deaths}</Text>
      <Text style={styles.cardNumber}>Testes: {currentCountry.tests}</Text>
    </View>
  );
}
