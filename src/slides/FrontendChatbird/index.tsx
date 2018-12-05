import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function FrontendChatbird() {
  return (
    <Slide align="flex-start flex-start">
      <div>
        <Heading size={3}>Frontend @ Chatbird</Heading>
      </div>
      <div className="mt2">
        <Layout>
          <div>
            <Image src="/images/chatbird.png" width="auto" height={300} />
          </div>
          <Fill>
            <AppearInOrder>
              <div className="ml2 mt2">
                <Text textAlign="start">React (ejected CRA), Webpack</Text>
              </div>
              <div className="ml2 mt2">
                <Text textAlign="start">TypeScript / ES6</Text>
              </div>
              <div className="ml2 mt2">
                <Text textAlign="start">
                  GraphQL / React Apollo, Apollo CLI (Type generation from
                  GraphQL fragments)
                </Text>
              </div>
              <div className="ml2 mt2">
                <Text textAlign="start">
                  Testing with Jest + react-testing-library
                </Text>
              </div>
              <div className="ml2 mt2">
                <Text textAlign="start">
                  styled-components, Design System with Storybook
                </Text>
              </div>
              <div className="ml2 mt2">
                <Text textAlign="start">
                  Advanced Component Patterns: Render Props, Compound
                  Components, Context, HOCs
                </Text>
              </div>
              <div className="ml2 mt2">
                <Text textAlign="start">
                  Experimenting with Hooks, Suspense
                </Text>
              </div>
            </AppearInOrder>
          </Fill>
        </Layout>
      </div>
    </Slide>
  );
}

export default FrontendChatbird;
