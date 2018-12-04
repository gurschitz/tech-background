import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import Enter from "../../components/Enter";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function GoodbagLandingPage() {
  const value = useKeyPressCount({
    from: 1,
    to: 1,
    decrementKey: 38,
    incrementKey: 40
  });

  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>usereact.io</Heading>
        <Heading size={4}>React Course in Amstetten</Heading>
        <Layout>
          <Image src="/images/use-react-logo.svg" width="auto" height={400} />
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
