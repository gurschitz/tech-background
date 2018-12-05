import React from "react";
import { Slide, Image, Heading } from "spectacle";

function GoodbagLandingPage() {
  return (
    <Slide align="flex-start flex-start">
      <div style={{ height: "100%" }}>
        <Heading size={3}>
          GitHub: <a href="https://github.com/gurschitz">gurschitz</a>
        </Heading>
        <div>
          <Image src="/images/github.png" width="auto" height={500} />
        </div>
      </div>
    </Slide>
  );
}

export default GoodbagLandingPage;
