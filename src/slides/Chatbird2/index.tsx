import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import Enter from "../../components/Enter";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function GoodbagLandingPage() {
  const value = useKeyPressCount({
    from: 1,
    to: 2,
    decrementKey: 38,
    incrementKey: 40
  });

  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Chatbird</Heading>
        <Heading size={4}>Co-Founder & CTO</Heading>
        <Layout>
          <Image src="/images/chatbird.png" width="auto" height={300} />
          <Fill>
            <AppearInOrder>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">
                  - <strong>Ruby on Rails</strong> Backend,{" "}
                  <strong>React</strong> Frontend
                </Text>
                <Text textAlign="start" textSize="20">
                  migrated from REST Api to{" "}
                  <strong>GraphQL and React Apollo</strong> in December 2017
                </Text>
                <Text textAlign="start" textSize="20">
                  started using <strong>TypeScript</strong> in May, by June
                  everything was migrated to TS
                </Text>
              </div>
              <div style={{ paddingLeft: 20 }}>
                <Text textAlign="start">- many other learnings:</Text>
                <Text textAlign="start" textSize="20">
                  Firebase (Authentication, Functions w/ express), FastSpring
                  integration (payment provider for SaaS)
                </Text>
                <Text textAlign="start" textSize="20">
                  styled-components, jest, react-testing-library
                </Text>
                <Text textAlign="start" textSize="20">
                  DevOps: Jenkins, Docker, Gitlab, DigitalOcean
                </Text>
                <Text textAlign="start" textSize="20">
                  ...
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
