import React, {ReactElement} from 'react';
import {Marker} from 'react-native-maps';
import {View, Text} from 'react-native';
import {styles} from './Pointer.style';
import {Card} from '../Card/Card';
/** TYPES */
interface Props {
  country: String;
  countryData: {
    country: String;
    cases: Number;
    deaths: Number;
    tests: Number;
    recovered: Number;
    countryInfo: {
      _id: Number;
      flag: String;
      iso2: String;
      iso3: String;
    };
  };
  coordinate: {
    latitude: Number | number;
    longitude: Number | number;
  };
  tracksViewChanges: Boolean;
  handleTracksViewChanges: Function;
}

export default function Pointer({
  coordinate,
  tracksViewChanges,
  countryData,
  handleTracksViewChanges,
}: Props): ReactElement {
  /** Formats cases number */
  const [visible, setVisible] = React.useState(false);
  const {cases, recovered} = countryData;

  let casesString = `${cases}`;
  if (cases > 1000) {
    casesString = `${casesString.slice(0, -3)}k+`;
  }

  return (
    <Marker
      onPress={() => setVisible(!visible)}
      coordinate={coordinate}
      tracksViewChanges={tracksViewChanges}>
      {!visible ? null : (
        <Card
          currentCountry={countryData}
          handleTracksViewChanges={handleTracksViewChanges}
        />
      )}
      <View
        style={
          recovered > cases
            ? [styles.pointerContainer, styles.tooMuchRecovered]
            : [styles.pointerContainer, styles.tooMuchCases]
        }>
        <Text style={styles.pointerText}>{casesString}</Text>
      </View>
    </Marker>
  );
}
