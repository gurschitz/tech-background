import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function GoodbagLandingPage() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>usereact.io</Heading>
        <Text>React Course in Amstetten</Text>
        <Layout>
          <div>
            <Image src="/images/use-react-logo.svg" width="auto" height={400} />
            <Text textSize="15">
              <a href="https://usereact.io">{`https://usereact.io`}</a>
            </Text>
          </div>
          <Fill>
            <AppearInOrder>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - intensive 2-day beginner-level course
                </Text>
                <Text textAlign="start" textSize="20">
                  everything from ES6 to upcoming features like Hooks & Suspense
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - Planned for February 14 - 15, 2019
                </Text>
                <Text textAlign="start" textSize="20">
                  at Werkstatt A, together with friend
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
