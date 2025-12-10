"use client";

import { useState } from "react";
import { useUserAuth } from "@/app/contexts/AuthContext";
import FooterLink from "@/app/components/footer";
import Heading from "@/app/components/heading";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [loginError, setLoginError] = useState("");

  async function loginUser() {
    try {
      setLoginError("");
      const login = await gitHubSignIn();
      console.log("Login successful:", login.user);
    } catch (error) {
      console.error("Login error:", error);
      setLoginError(error.message || "Failed to sign in with GitHub");
    }
  }

  async function logoutUser() {
    try {
      setLoginError("");
      await firebaseSignOut();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout error:", error);
      setLoginError(error.message || "Failed to sign out");
    }
  }

  return (
    <>
      <header>
        <Heading title="Access Your Shopping List" />
      </header>
      <main className="mx-auto max-w-fit items-center">
        {loginError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-4">
            {loginError}
          </div>
        )}
        {!user ? (
          <button
            type="button"
            onClick={loginUser}
            className="rounded-full m-4 p-4 text-2xl font-bold bg-slate-500 hover:bg-slate-700 active:bg-slate-900 text-white">
            Login
          </button>
        ) : (
          <>
            <p className="text-xl font-bold m-5">
              Welcome, {user.displayName} ({user.email})
            </p>
            <Link
              href="./week-10/shopping-list"
              className="text-2xl font-bold rounded-full m-4 p-4 border-2">
              Go to Shopping List
            </Link>
            <button
              type="button"
              onClick={logoutUser}
              className="rounded-full m-4 p-4 text-2xl font-bold bg-slate-500 hover:bg-slate-700 active:bg-slate-900 text-white ">
              Logout
            </button>
          </>
        )}
      </main>
      <footer>
        <FooterLink />
      </footer>
    </>
  );
}
