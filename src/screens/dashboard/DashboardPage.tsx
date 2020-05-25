import React, {ReactElement} from 'react';
import {
  Container,
  Header,
  DeckSwiper,
  Body,
  Title,
  Grid,
  Col,
  Row,
  CardItem,
  Text,
  H1,
  Card,
} from 'native-base';
import colors from '../../styles/colors';
import CountryList from '../CountryList/CountryList';
import {getGlobalData, DataI, ObjectI} from './services/get-global-data';
import {styles} from './components/CasesCard/CasesCard.style';
import {addCommas} from '../../utils/addCommas';

export default function DashboardPage(): ReactElement {
  const [deckData, setDeckData] = React.useState<DataI>();

  const fetchData = React.useCallback(() => {
    getGlobalData('https://covid19.mathdro.id/api')
      .then((data: DataI) => setDeckData(data))
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container style={{backgroundColor: colors.lightGray}}>
      <Header
        style={{marginTop: 20, backgroundColor: colors.lightGray}}
        translucent
        androidStatusBarColor="transparent"
        iosBarStyle="dark-content">
        <Body>
          <Title
            style={{
              color: colors.text,
              fontWeight: 'bold',
              fontSize: 20,
              alignSelf: 'center',
            }}>
            Global Cases
          </Title>
        </Body>
      </Header>
      <Grid>
        {!deckData ? null : (
          <Col style={{backgroundColor: colors.lightGray}}>
            <DeckSwiper
              dataSource={deckData.array}
              renderItem={(item: ObjectI) => {
                return (
                  <Card key={item.id} style={styles.casesCardContainer}>
                    <CardItem>
                      <Text
                        style={{
                          color: colors.text,
                          width: '100%',
                          fontSize: 20,
                          marginBottom: 10,
                          textAlign: 'center',
                        }}>
                        {item.name}
                      </Text>
                    </CardItem>
                    <CardItem cardBody>
                      <H1
                        style={{
                          color:
                            item.name === 'Recovered'
                              ? colors.green
                              : colors.red,
                        }}>
                        {addCommas(item.value)}
                      </H1>
                    </CardItem>
                  </Card>
                );
              }}
            />
          </Col>
        )}
        <Row style={{height: '70%'}}>
          <CountryList />
        </Row>
      </Grid>
    </Container>
  );
}
