"use client";

// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";
// import my components
import FooterLink from "../components/footer";
import Heading from "../components/heading";
import Link from "next/link";

export default function Page() {
  //  Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  async function loginUser() {
    // Sign in to Firebase with GitHub authentication
    const login = await gitHubSignIn();
  }

  async function logoutUser() {
    // Sign out of Firebase
    const logout = await firebaseSignOut();
  }

  return (
    <>
      <header>
        <Heading title="Access Your Shopping List" />
      </header>
      <main className="mx-auto max-w-fit items-center">
        {/* <AuthContextProvider> moved to RootLayout in layout.js rather than as provided in Part 4
        since layout.js can't have two export default functions, added to existing RootLayout so accessible by all children now  */}

        {/* If the user is not logged in, display a login button */}
        {!user ? (
          <button
            type="button"
            onClick={loginUser}
            className="rounded-full m-4 p-4 text-2xl font-bold bg-slate-500 hover:bg-slate-700 active:bg-slate-900 text-white">
            Login
          </button>
        ) : (
          <>
            {/* Display welcome message with some user info */}
            <p className="text-xl font-bold m-5">
              Welcome, {user.displayName} ({user.email})
            </p>
            {/* link to the shopping list page */}
            <Link
              href="./week-9/shopping-list"
              className="text-2xl font-bold rounded-full m-4 p-4 border-2">
              Go to Shopping List
            </Link>
            {/* logout button */}
            <button
              type="button"
              onClick={logoutUser}
              className="rounded-full m-4 p-4 text-2xl font-bold bg-slate-500 hover:bg-slate-700 active:bg-slate-900 text-white ">
              Logout
            </button>
          </>
        )}
        {/* </AuthContextProvider> */}
      </main>
      <footer>
        <FooterLink />
      </footer>
    </>
  );
}
