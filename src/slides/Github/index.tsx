import React from "react";
import { Slide, Layout, Image, Heading } from "spectacle";

function GoodbagLandingPage() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Open Source</Heading>
        <Heading size={4}>GitHub: gurschitz</Heading>
        <Layout>
          <Image src="/images/github.png" width="auto" height={400} />
        </Layout>
      </div>
    </Slide>
  );
}

export default GoodbagLandingPage;
