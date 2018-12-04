import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function GoodbagLandingPage() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Chatbird</Heading>
        <Text>Co-Founder & CTO</Text>
        <Text textSize="15">
          <a href="https://chatbird.io">{`https://chatbird.io`}</a>
        </Text>
        <Layout>
          <div>
            <Image src="/images/chatbird-logo.png" width="auto" height={120} />
          </div>
          <Fill>
            <AppearInOrder>
              <div style={{ paddingLeft: 60 }}>
                <Text textAlign="start">
                  - started in August 2017 as a{" "}
                  <strong>SaaS for Event Chatbots</strong>
                </Text>
              </div>
              <div style={{ paddingLeft: 60 }}>
                <Text textAlign="start" textSize="20">
                  - over <strong>30 conferences and events</strong> served with
                  MVP
                </Text>
                <Text textAlign="start" textSize="15">
                  including Pioneers, React Amsterdam, Central European Startup
                  Awards
                </Text>
              </div>
              <div style={{ paddingLeft: 60 }}>
                <Text textAlign="start">
                  - pivot to <strong>Web App</strong> in 2018, "Slack for
                  Events"
                </Text>
              </div>
              <div style={{ paddingLeft: 60 }}>
                <Text textAlign="start">
                  - 2 founders, bootstrapped, trying to find product-market-fit
                </Text>
              </div>
            </AppearInOrder>
          </Fill>
        </Layout>
      </div>
    </Slide>
  );
}

export default GoodbagLandingPage;
