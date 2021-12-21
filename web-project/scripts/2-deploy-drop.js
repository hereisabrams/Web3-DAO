import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xC3C24E6e95416004f2c6447855047f1d928992aF");

(async () => {
  try{
    const bundleDropModule = await app.deployBundleDropModule({
      name: "Noobs Revolution DAO Membership",
      description: "A DAO for the Noobs",
      image: readFileSync("scripts/assets/noob.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  }catch(err){
    console.log("failed to deploy bundleDrop module", err);
  }

})()