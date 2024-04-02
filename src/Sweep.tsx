//Note this is the CLASS Wallet, not an instance of the class
import { Wallet } from "@aittlab/ravencoin-jswallet";
import React, { SyntheticEvent } from "react";
import { QRCameraContainer } from "./QRCameraContainer";

export function Sweep({ wallet }: { wallet: Wallet }) {
  const [privateKey, setPrivateKey] = React.useState("");
  const onSubmit = function (event: SyntheticEvent) {
    event.preventDefault();
  };
  const sweep = async () => {
    try {
      const onlineMode = true;
      const asdf = await wallet.sweep(privateKey, onlineMode);
      if (asdf.errorDescription) {
        alert(asdf.errorDescription);
        return;
      }

      const text = JSON.stringify(asdf.outputs, null, 4);
      alert("SUCCESS " + text);
      document.getElementById("mempool")?.focus();
    } catch (e) {
      console.log("SWEEP error", e);
      alert("Something went wrong " + JSON.stringify(e, null, 4));
    }
  };
  return (
    <article>
      <h5>Sweep (experimental)</h5>
      <p>Transfer the entire balance of a private key to your wallet</p>
      <QRCameraContainer onChange={setPrivateKey} />
      <form onSubmit={onSubmit}>
        <label style={{ marginTop: "calc(var(--spacing) * 2)" }}>
          Private Key (not address)
          <input
            type="text"
            name="privateKey"
            value={privateKey}
            onChange={(event) => {
              const value = event.target.value;
              setPrivateKey(value);
            }}
          ></input>
        </label>

        <button onClick={sweep} disabled={!privateKey}>
          Sweep
        </button>
      </form>
    </article>
  );
}
