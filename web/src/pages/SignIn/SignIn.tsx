import { Link } from "react-router-dom";
import LoginButton from "components/shared/LoginButton";

const SignIn = () => (
  <div className="flex h-screen w-full items-center text-center">
    <div className="m-auto w-80 pb-32 pt-1 text-left">
      <div className="text-3xl font-bold">Sign In</div>
      <div className="mb-10 mt-10 h-px w-32 bg-gray-700" />
      <LoginButton type="signin" />
      <div className="mb-10 mt-12 h-px w-32 bg-gray-700" />
      <div>
        Dont't have an account?{" "}
        <Link
          to="/signup"
          className="text-lime-300 underline transition-colors hover:text-lime-400"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
);

export default SignIn;
