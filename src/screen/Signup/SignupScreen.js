import React from "react";
import Header from "../../components/Header";
import Signup from "../../components/Signup";

function SignupScreen() {
  return (
    <div className=" h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Header
          heading="Wellcome to Linkz App, Doesn't have an account?"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <Signup />
      </div>
    </div>
  );
}

export default SignupScreen;
