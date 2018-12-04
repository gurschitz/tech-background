import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import Enter from "../../components/Enter";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function Fortunes() {
  const value = useKeyPressCount({
    from: 1,
    to: 2,
    decrementKey: 38,
    incrementKey: 40
  });

  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Freelancing</Heading>
        <Text>ForTunes</Text>
        <Text textSize="15">
          <a href="https://fortunes.io">{`https://fortunes.io`}</a>
        </Text>
        <Layout>
          <div>
            <Image src="/images/fortunes.png" width="auto" height={350} />
          </div>
          <Fill>
            <AppearInOrder>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - <strong>Ruby</strong> microservice for scraping Spotify
                    Data (experimental demo)
                  </Text>
                  <Text textAlign="start" textSize="20">
                    Using Chrome DevTools Protocol to inject JS Code into
                    Spotify Linux client to query data from internal Spotify
                    APIs
                  </Text>
                </div>
              </AppearInOrder.Element>
            </AppearInOrder>
          </Fill>
        </Layout>
      </div>
    </Slide>
  );
}

export default Fortunes;
