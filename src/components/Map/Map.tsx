import * as React from 'react';
import MapView from 'react-native-maps';
import {getData} from '../../services/get-data';
import {getCountryNameByLatlng} from './services/map-api';
// import {mapStyle} from './styles/Map.dark';
import {styles} from './Map.style';
import Pointer from '../Pointer/Pointer';
import {MarkerState, CountryI} from './utils/MapInterfaces';

class Map extends React.Component<{}, MarkerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      countries: [],
      tracksViewChanges: true,
      currentLatLong: {latitude: 0, longitude: 0},
      currentCountry: {
        id: 0,
        name: '',
        prov: '',
        flag: '',
        latLong: {
          latitude: 0,
          longitude: 0,
        },
        cases: 0,
        recovered: 0,
        deaths: 0,
        tests: 0,
      },
    };
  }
  componentDidMount() {
    getData('/countries')
      .then((response: Array<CountryI>) => {
        console.log(response);
        this.setState({countries: response});
        setTimeout(this.disableViewChangesTracker, 500);
      })
      .catch((err) => console.log(err));
  }

  disableViewChangesTracker = () => {
    return this.setState({tracksViewChanges: !this.state.tracksViewChanges});
  };

  handlePressedRegion(event: any) {
    const {
      coordinate: {latitude, longitude},
    } = event;
    const latLongObject = {
      coordinate: {
        latitude: latitude,
        longitude: longitude,
      },
    };

    this.setState({currentLatLong: {latitude, longitude}});

    getCountryNameByLatlng(latLongObject)
      .then((response: any) => {
        const {data} = response;
        /** Filters country bt ISO2, e.g: CA, BR, US */
        const selectedCountry = this.state.countries.filter(
          (country) => country.countryInfo.iso2 === data.prov,
        );
        const {
          country,
          countryInfo,
          cases,
          recovered,
          deaths,
          tests,
          // testsPerOneMillion,
        } = selectedCountry[0];

        this.setState({
          currentCountry: {
            id: countryInfo._id,
            name: country,
            prov: data.prov,
            flag: countryInfo.flag,
            latLong: {
              latitude: countryInfo.lat,
              longitude: countryInfo.long,
            },
            cases: cases,
            recovered: recovered,
            deaths,
            tests,
          },
        });
        console.log(this.state.currentCountry);
      })
      .catch((error) => console.log(error));
  }

  render() {
    const {countries, tracksViewChanges} = this.state;
    return (
      <MapView
        // customMapStyle={mapStyle}
        cacheEnabled={true}
        loadingEnabled={true}
        style={styles.mapView}
        onMarkerPress={(e) => this.handlePressedRegion(e.nativeEvent)}>
        {!countries
          ? null
          : countries.map((country: CountryI) => {
              const {
                countryInfo: {_id},
              } = country;

              if (_id !== null) {
                return (
                  <Pointer
                    key={_id}
                    tracksViewChanges={tracksViewChanges}
                    handleTracksViewChanges={() =>
                      this.disableViewChangesTracker
                    }
                    countryData={country}
                  />
                );
              }
            })}
      </MapView>
    );
  }
}

export default Map;
