import React from "react"
import { YMaps, Map, Placemark } from "react-yandex-maps";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

const Content = tw.div`pb-16 lg:pb-24`;

const App = () => (
  <Content>
    <YMaps>
      <Map
        width="100%"
        height="400px"
        defaultState={{ center: [55.749711, 37.605037], zoom: 14 }}
      >
        <Placemark
          geometry={[55.749711, 37.605037]}
          options={{ iconColor: "#e53e3e" }}
        />
      </Map>
    </YMaps>
  </Content>
);

export default App;
