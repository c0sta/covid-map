import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {Text, Image} from 'react-native';
import {getData} from '../../services/get-data';
// Dark mode map styles
import {mapStyle} from './Map.dark';
import {styles} from './Map.style';
export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}
export interface CountryI {
  country: string;
  continent: string;
  cases: number;
  deaths: number;
  recovered: number;
  tests: number;
  countryInfo: CountryInfo;
  todayCases: number;
  todayDeaths: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMilion: number;
  testsPerOneMillion: number;
}

interface MarkerState {
  countries: Array<CountryI>;
  tracksViewChanges: boolean;
}
class Map extends React.Component<{}, MarkerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      countries: [],
      tracksViewChanges: true,
    };
  }
  componentDidMount() {
    getData('/countries')
      .then((response) => {
        this.setState({countries: response});
        setTimeout(this.disableViewChangesTracker, 2000);
      })
      .catch((err) => console.log(err));
  }

  disableViewChangesTracker = () => {
    return this.setState({tracksViewChanges: false});
  };

  render() {
    const {countries, tracksViewChanges} = this.state;
    return (
      <MapView
        customMapStyle={mapStyle}
        cacheEnabled={true}
        loadingEnabled={true}
        style={styles.mapView}>
        {countries.map((item: CountryI) => {
          const {
            countryInfo: {_id, lat, long},
            cases,
          } = item;

          const latLng = {
            latitude: lat,
            longitude: long,
          };
          return (
            <Marker
              key={_id || Math.random()}
              style={styles.markerContainer}
              coordinate={latLng}
              tracksViewChanges={tracksViewChanges}>
              {/* <Image
                style={styles.flagImg}
                source={{
                  uri: flag,
                }}
                onLoad={() => this.disableViewChangesTracker}
              /> */}
              <Text style={styles.markerTitle}>{cases}</Text>
            </Marker>
          );
        })}
      </MapView>
    );
  }
}

export default Map;
