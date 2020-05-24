export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}
export interface CountryI {
  updated: number;
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

export interface MarkerState {
  countries: Array<CountryI>;
  tracksViewChanges: boolean;
  currentLatLong: {latitude: number; longitude: number};
  currentCountry: {
    id: number;
    name: string;
    prov: string;
    flag: string;
    latLong: {
      latitude: number;
      longitude: number;
    };
    cases: number;
    recovered: number;
    deaths: number;
    tests: number;
  };
}
