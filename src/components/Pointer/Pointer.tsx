import React, {ReactElement} from 'react';
import {Popover} from 'antd-mobile';
import {Marker} from 'react-native-maps';
import {Text} from 'react-native';
import {CountryI} from '../Map/Map';

interface MarkerProps {
  latLng: {latitude: number; longitude: number};
  country: CountryI;
}

export default function Pointer({latLng, country}: MarkerProps): ReactElement {
  const Item = Popover.Item;
  return (
    <Popover
      overlay={[
        <Item>
          <Text>aaaa</Text>
        </Item>,
      ]}>
      <Marker coordinate={latLng}>
        <Text>{country.cases}</Text>
      </Marker>
    </Popover>
  );
}
