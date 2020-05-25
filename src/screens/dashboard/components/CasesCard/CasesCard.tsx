import React, {ReactElement} from 'react';
import {CardItem, Card, Text, H1} from 'native-base';
import {styles} from './CasesCard.style';
import {ObjectI} from '../../services/get-global-data';

export default function CasesCard(country: ObjectI): ReactElement {
  return (
    <Card style={styles.casesCardContainer}>
      <CardItem>
        <Text>Confirmed</Text>
      </CardItem>
      <CardItem cardBody>
        <H1>{country.name}</H1>
      </CardItem>
      <CardItem>
        <Text>{country.value}</Text>
      </CardItem>
    </Card>
  );
}
