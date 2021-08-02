import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";
import Head from "next/head";

function Host() {
  return (
    <div>
      <Head>
        {/* Optional: */}
        <script src="https://static1.plasmic.app/preamble.js" />
      </Head>
      <PlasmicCanvasHost />
    </div>
  );
}

export default Host;
