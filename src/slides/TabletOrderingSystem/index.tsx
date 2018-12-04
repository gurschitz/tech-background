import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import Enter from "../../components/Enter";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function TabletOrderingSystem() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Tablet Ordering System</Heading>
        <Heading size={4}>Restaurant Viereck</Heading>
        <Layout>
          <Image src="/images/viereckfolie.jpg" width="auto" height={300} />
          <Fill>
            <AppearInOrder>
              <AppearInOrder.Element priority={1}>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - Development of <strong>Android App</strong>
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element priority={2}>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - First experience with <strong>Ruby on Rails</strong>
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element priority={3}>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - predecessor of project <strong>Smartmenu</strong>
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

export default TabletOrderingSystem;
