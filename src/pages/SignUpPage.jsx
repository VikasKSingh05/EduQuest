import React from "react";
import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(/image/banner4.gif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* While Clerk is loading */}
      <ClerkLoading>
        <div className="text-white font-bold text-lg animate-pulse">
          Loading sign up form...
        </div>
      </ClerkLoading>

      {/* When Clerk is ready */}
      <ClerkLoaded>
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
      </ClerkLoaded>
    </div>
  );
};

export default SignInPage;
