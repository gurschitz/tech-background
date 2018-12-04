import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function TabletOrderingSystem() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Tablet Ordering System</Heading>
        <Text>Restaurant Viereck</Text>
        <Layout>
          <Image src="/images/viereckfolie.jpg" width="auto" height={300} />
          <Fill>
            <AppearInOrder>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - Development of <strong>Android App</strong>
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - First experience with <strong>Ruby on Rails</strong>
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - predecessor of project <strong>Smartmenu</strong>
                </Text>
              </div>
            </AppearInOrder>
          </Fill>
        </Layout>
      </div>
    </Slide>
  );
}

export default TabletOrderingSystem;
