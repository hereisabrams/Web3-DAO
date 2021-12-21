import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xBf43a365fF811c656DacdB8fe058A406C39Fb58A",
);

(async () => {
  try{
    await bundleDrop.createBatch([
      {
        name: "Noobs Badge",
        description: "This NFT will give you access to Noobs RevolutionDAO!",
        image: readFileSync("scripts/assets/lol.jpg"),
      },
    ]);

  }catch(err){
    console.error("failed to create the new NFT", error);
  }
})()