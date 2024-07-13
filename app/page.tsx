"use client";

import Login from "@/components/custom/login";
import AssetDetails from "@/app/asset-details/index"
import Navbar from "@/components/custom/navbar";
import AuthProvider from "@/context/auth-provider";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";

export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <AuthProvider>
        <DisplayPage />
      </AuthProvider>
    </div>
  );
}

function DisplayPage() {
  const { accounts } = useContext(AuthContext);

  return (
    accounts === null ? <Login /> : <AssetDetailsPage />
  )
}

function AssetDetailsPage() {
  return (
    <>
      <Navbar />
      <AssetDetails />
    </>
  )
}
