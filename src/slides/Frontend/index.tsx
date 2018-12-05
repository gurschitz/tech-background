import React from "react";
import { Slide, Layout, Fill, Text, Image, Heading } from "spectacle";
import AppearInOrder from "../../components/AppearInOrder";

function Frontend() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Frontend</Heading>

        <AppearInOrder>
          <div>
            <Text textAlign="start">
              <strong>Smartmenu</strong>
            </Text>
            <Text textAlign="start">
              <i>AngularJS (1.x)</i>: first work experience with JavaScript,
              CSS, HTML
            </Text>
            <Text textAlign="start">
              <i>Android</i>: digital menu app, used at Restaurant Viereck
            </Text>
            <Text textAlign="start">
              <i>React Native</i>: unreleased prototype
            </Text>
          </div>

          <div className="mt3">
            <Text textAlign="start">
              <strong>Goodbag (Smart shopping bag / loyalty program)</strong>
            </Text>
            <Text textAlign="start">
              <i>Android App</i> for Vendors, <i>AngularJS (1.x)</i> Management
              Tool
            </Text>
            <Text textAlign="start">
              <i>React</i> Landing page: React Router, Redux, Webpack, SASS,
              I18n
            </Text>
          </div>
        </AppearInOrder>
      </div>
    </Slide>
  );
}

export default Frontend;
