import React from "react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/clerk-react";

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
          Loading sign in form...
        </div>
      </ClerkLoading>

      {/* When Clerk is ready */}
      <ClerkLoaded>
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </ClerkLoaded>
    </div>
  );
};

export default SignInPage;
