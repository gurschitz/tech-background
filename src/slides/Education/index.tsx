import React from "react";
import { Slide, Text, Heading, Layout, Fill, Image } from "spectacle";
import useKeyPressCount from "../../hooks/useKeyPressCount";
import AppearInOrder from "../../components/AppearInOrder";

function Education() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Education Background</Heading>
        <AppearInOrder>
          <AppearInOrder.Element>
            <div className="mt2">
              <Layout>
                <Image src="/images/tu_logo.png" height={80} />
                <Fill>
                  <div style={{ paddingLeft: 20 }}>
                    <Text textAlign="start">
                      <strong>
                        Media Informatics and Visual Computing (BSc)
                      </strong>{" "}
                    </Text>
                    <Text textAlign="start">
                      Thesis: Interactive Visual Exploration and Analysis of
                      Smartmenu Data
                    </Text>
                  </div>
                </Fill>
              </Layout>
            </div>
          </AppearInOrder.Element>
          <AppearInOrder.Element>
            <div className="mt2">
              <Layout>
                <Image src="/images/wu_logo.svg" height={80} />
                <Fill>
                  <div style={{ paddingLeft: 20 }}>
                    <Text textAlign="start">
                      <strong>Business Informatics (BSc)</strong>
                    </Text>
                    <Text textAlign="start">
                      Thesis: A Comparision of the Web Frameworks Phoenix and
                      Ruby on Rails for Chatbot Creation
                    </Text>
                  </div>
                </Fill>
              </Layout>
            </div>
          </AppearInOrder.Element>
          <AppearInOrder.Element>
            <div className="mt2">
              <Layout>
                <Image src="/images/bc_logo.png" height={80} />
                <Fill>
                  <div style={{ paddingLeft: 20 }}>
                    <Text textAlign="start">
                      <strong>Exchange Semester</strong>
                    </Text>
                    <Text textAlign="start">
                      Spring Semester 2014, Boston College
                    </Text>
                  </div>
                </Fill>
              </Layout>
            </div>
          </AppearInOrder.Element>
        </AppearInOrder>
      </div>
    </Slide>
  );
}

export default Education;
