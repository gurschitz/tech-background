import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import Enter from "../../components/Enter";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function Ntry() {
  const value = useKeyPressCount({
    from: 1,
    to: 2,
    decrementKey: 38,
    incrementKey: 40
  });

  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Freelancing</Heading>
        <Heading size={4}>NTRY</Heading>
        <Layout>
          <Image src="/images/ntry-widget.png" width="auto" height={300} />
          <Fill>
            <AppearInOrder>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - <strong>Ruby on Rails</strong> backend for Ticketing
                    Platform
                  </Text>
                  <Text textAlign="start" textSize="20">
                    JavaScript Widget for Vendors, PDF Generation with prawn,
                    Background Jobs with Sidekiq, sending automated Mails
                  </Text>
                </div>
              </AppearInOrder.Element>
              <AppearInOrder.Element>
                <div style={{ paddingLeft: 20 }}>
                  <Text textAlign="start">
                    - <strong>Ruby on Rails</strong> payment gateway
                  </Text>
                  <Text textAlign="start" textSize="20">
                    Handling monetary values and calculations using money-rails
                    gem, Integration of Payment providers (Sofort, Wirecard,
                    Paypal)
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

export default Ntry;
