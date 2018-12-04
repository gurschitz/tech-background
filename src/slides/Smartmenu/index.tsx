import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function Smartmenu() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Smartmenu</Heading>
        <Heading size={4}>Technical Co-Founder</Heading>
        <Layout>
          <Image src="/images/smartmenu.png" width="auto" height={300} />
          <Fill>
            <AppearInOrder>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - Management Tool with <strong>AngularJS (1.x)</strong>
                </Text>
                <Text textAlign="start" textSize="20">
                  JavaScript & CSS, Consuming RESTful JSON APIs, Authentication
                  with JWT
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - Backend <strong>Ruby on Rails</strong>
                </Text>
                <Text textAlign="start" textSize="20">
                  RESTful API with Grape, Unit Tests with RSpec, Database:
                  PostgreSQL & Redis
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - unreleased App prototype built with
                  <strong>React Native</strong>
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">- project ultimately failed</Text>
                <Text textAlign="start" textSize="20">
                  team fell apart, no pm-fit, no time
                </Text>
              </div>
            </AppearInOrder>
          </Fill>
        </Layout>
      </div>
    </Slide>
  );
}

export default Smartmenu;
