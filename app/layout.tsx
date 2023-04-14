"use client";

import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import { useEffect, useState } from "react";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import {
  RainbowKitProvider,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  googleWallet,
  facebookWallet,
  githubWallet,
  discordWallet,
  twitchWallet,
  twitterWallet,
  enhanceWalletWithAAConnector,
} from "@zerodevapp/wagmi/rainbowkit";

import {
  metaMaskWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";

const projectId = "ce94585f-21a6-49ed-adf0-f5cb078f9700";

const { chains, provider, webSocketProvider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const connectors = connectorsForWallets([
  {
    groupName: "Social",
    wallets: [
      googleWallet({ options: { projectId: projectId } }),
      facebookWallet({ options: { projectId: projectId } }),
      githubWallet({ options: { projectId: projectId } }),
      discordWallet({ options: { projectId: projectId } }),
      twitchWallet({ options: { projectId: projectId } }),
      twitterWallet({ options: { projectId: projectId } }),
    ],
  },
  {
    groupName: "Web 3 AA wallets",
    wallets: [
      enhanceWalletWithAAConnector(metaMaskWallet({ chains }), {
        projectId: projectId,
      }),
    ],
  },
]);
const client = createClient({
  autoConnect: false,
  connectors,
  provider,
  webSocketProvider,
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html>
      <body>
        {isMounted ? (
          <WagmiConfig client={client}>
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
          </WagmiConfig>
        ) : null}
      </body>
    </html>
  );
};
export default RootLayout;
