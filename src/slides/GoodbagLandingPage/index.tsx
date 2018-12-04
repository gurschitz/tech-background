import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function GoodbagLandingPage() {
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
            <Image
              src="/images/goodbag_landing_page.png"
              width="auto"
              height={300}
            />
          </div>
          <Fill>
            <AppearInOrder>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - Landing Page built with <strong>React</strong>
                  </Text>
                  <Text textAlign="start" textSize="20">
                    Redux, React Router, Webpack, I18n
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

export default GoodbagLandingPage;
