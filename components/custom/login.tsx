"use client";
import React, { useContext } from "react";
import { SparklesCore } from "../ui/sparkles";
import { AuthContext } from "@/context/auth-context";

export default function Login() {
    const { requestAccounts, accounts } = useContext(AuthContext);

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
                Radiant
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            {accounts === null && <button type="button" onClick={requestAccounts} className="action-btn text-[#fff] border-[1px] border-[var(--border)] rounded-[var(--button-radius)] hover:bg-[#cecece] hover:text-[var(--primary)] px-[24px] py-[8px] text-[1.12rem] font-semibold transition-all">
                Connect Wallet
            </button>}
            {!!accounts?.length && <div className="text-[#fff]">{accounts[0]}</div>}
        </div>
    );
}
