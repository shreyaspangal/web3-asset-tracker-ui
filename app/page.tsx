"use client";

import Login from "@/components/custom/login";
import AssetDetails from "@/app/asset-details/index"
import Navbar from "@/components/custom/navbar";
import AuthProvider from "@/context/auth-provider";
import { useContext } from "react";
import { AuthContext } from "@/context/auth-context";
import { Toaster } from "@/components/ui/toaster"
import { Skeleton } from "@/components/ui/skeleton"


export default function Home() {
  return (
    <div className="bg-[var(--background)]">
      <AuthProvider>
        <DisplayPage />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

function DisplayPage() {
  const { accounts } = useContext(AuthContext);

  if (accounts === undefined) {
    return <Skeleton className="w-full h-screen bg-[var(--muted)]" />
  }

  if (accounts === null) {
    return <Login />
  }

  return (
    <AssetDetailsPage />
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
