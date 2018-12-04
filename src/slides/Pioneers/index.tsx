import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import Enter from "../../components/Enter";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function Pioneers() {
  const value = useKeyPressCount({
    from: 1,
    to: 3,
    decrementKey: 38,
    incrementKey: 40
  });

  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Freelancing</Heading>
        <Heading size={4}>Pioneers Festival 2017</Heading>
        <Layout>
          <Image src="/images/piobot.png" width="auto" height={300} />
          <Fill>
            <AppearInOrder>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - <strong>Ruby on Rails</strong> backend
                  </Text>
                  <Text textAlign="start" textSize="20">
                    Chatbot on the Facebook Messenger Platform
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - <strong>React</strong> webviews
                  </Text>
                  <Text textAlign="start" textSize="20">
                    Webpacker, react-rails
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">- predecessor of Chatbird</Text>
                </div>
              </AppearInOrder.Element>
            </AppearInOrder>
          </Fill>
        </Layout>
      </div>
    </Slide>
  );
}

export default Pioneers;
