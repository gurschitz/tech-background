import React from "react";
import { Slide, Text, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function Backend() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Backend</Heading>

        <AppearInOrder>
          <div style={{ paddingLeft: 20 }}>
            <Text textAlign="start">
              <strong>Smartmenu (Digital Menu)</strong>
            </Text>
            <Text textAlign="start">
              <i>Ruby on Rails</i>: RESTful API with Grape, Testing with RSpec,
              ActiveRecord, PostgreSQL, Redis
            </Text>
          </div>
          <div style={{ paddingLeft: 20 }}>
            <Text textAlign="start">
              <strong>NTRY (Ticketing Platform)</strong>
            </Text>
            <Text textAlign="start">
              <i>Ruby on Rails</i>: JavaScript SDK for Vendors (Widget), PDF
              Generation with <i>prawn</i>, Automated Emails, Integration with
              payment providers (Sofort, Wirecard, Paypal)
            </Text>
          </div>
          <div style={{ paddingLeft: 20 }}>
            <Text textAlign="start">
              <strong>Chatbird (Online Event Community)</strong>
            </Text>
            <Text textAlign="start">
              <i>Ruby on Rails</i>: GraphQL API, FB Messenger Chatbot,
              FastSpring Integration (payment provider)
            </Text>
            <Text textAlign="start">
              <i>Firebase</i>: Authentication, Functions with express.js
            </Text>
          </div>

          <div style={{ paddingLeft: 20 }}>
            <Text textAlign="start">
              <strong>other projects</strong>: Goodbag, ForTunes, Piobot
              (Pioneers Festival 2017)
            </Text>
          </div>
        </AppearInOrder>
      </div>
    </Slide>
  );
}

export default Backend;
