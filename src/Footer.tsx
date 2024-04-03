import React from "react";

export function Footer({ signOut, mnemonic }) {
  return (
    <article>
      <footer>
        <div className="grid">
          <button onClick={signOut}>Sign out</button>
          <button
            className="secondary"
            onClick={(event) => {
              const target = event.target as HTMLButtonElement;
              navigator.clipboard.writeText(mnemonic);
              target.disabled = true;
              setInterval(() => (target.disabled = false), 2000);
            }}
          >
            Copy your secret 12 words to memory
          </button>
        </div>
      </footer>
    </article>
  );
}
