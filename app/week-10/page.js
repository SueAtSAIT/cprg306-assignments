"use client";

import { useUserAuth } from "@/app/contexts/AuthContext";
import FooterLink from "@/app/components/footer";
import Heading from "@/app/components/heading";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function loginUser() {
    const login = await gitHubSignIn();
  }

  async function logoutUser() {
    const logout = await firebaseSignOut();
  }

  return (
    <>
      <header>
        <Heading title="Access Your Shopping List" />
      </header>
      <main className="mx-auto max-w-fit items-center">
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
