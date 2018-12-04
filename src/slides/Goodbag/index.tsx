import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function Goodbag() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Freelancing</Heading>
        <Text>Goodbag</Text>
        <Text textSize="15">
          <a href="https://goodbag.io">{`https://goodbag.io`}</a>
        </Text>
        <Layout>
          <div>
            <Image src="/images/goodbag.jpg" width="auto" height={300} />
          </div>
          <Fill>
            <AppearInOrder>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - Management Tool with <strong>AngularJS (1.x)</strong>
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - <strong>Android App</strong> for stores
                  </Text>
                  <Text textAlign="start" textSize="20">
                    Reading / Writing to NFC Chips
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - Backend <strong>Ruby on Rails</strong>
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

export default Goodbag;
