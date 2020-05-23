import React, {ReactElement} from 'react';
import {Marker} from 'react-native-maps';
import {View, Text} from 'react-native';
import {styles} from './Pointer.style';
import {Card} from '../Card/Card';
import {Props} from './utils/interfaces';

export default function Pointer({
  tracksViewChanges,
  countryData,
  handleTracksViewChanges,
}: Props): ReactElement {
  /** Formats cases number */
  const [visible, setVisible] = React.useState(false);
  const {
    country,
    cases,
    recovered,
    countryInfo: {lat, long},
  } = countryData;

  let casesString = `${cases}`;
  if (cases > 1000) {
    casesString = `${casesString.slice(0, -3)}k+`;
  }

  return (
    <Marker
      onPress={() => setVisible(!visible)}
      identifier={country}
      coordinate={{latitude: lat, longitude: long}}
      opacity={0.9}
      tracksViewChanges={tracksViewChanges}>
      {!visible ? null : (
        <Card
          currentCountry={countryData}
          handleTracksViewChanges={handleTracksViewChanges}
        />
      )}
      <View
        style={
          recovered >= cases
            ? [styles.pointerContainer, styles.tooMuchRecovered]
            : [styles.pointerContainer, styles.tooMuchCases]
        }>
        <Text style={styles.pointerText}>{casesString}</Text>
      </View>
    </Marker>
  );
}
