import React from "react";
import { Slide, Layout, Image, Heading, Text } from "spectacle";

function GoodbagLandingPage() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>Open Source</Heading>
        <Text>GitHub: gurschitz</Text>
        <Text textSize="15">
          <a href="https://github.com/gurschitz">{`https://github.com/gurschitz`}</a>
        </Text>
        <div>
          <Image src="/images/github.png" width="auto" height={400} />
        </div>
      </div>
    </Slide>
  );
}

export default GoodbagLandingPage;
