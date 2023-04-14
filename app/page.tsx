"use client";
import { Inter } from "next/font/google";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex md:w-4/5 mx-auto  min-h-screen flex-col items-center justify-center place-content-center md:p-24 p-6">
        <h1 className="md:text-5xl my-4  text-center leading-relaxed font-bold">
          Are you building a DApp that wants to onboard Web2 users? <br />
          Connect Wallets with Social Accounts!
        </h1>
        <ConnectButton />
      </div>
    </main>
  );
}
