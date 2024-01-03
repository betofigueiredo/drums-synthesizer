import { Link } from "react-router-dom";
import LoginButton from "components/shared/LoginButton";

const SignUp = () => (
  <div className="flex h-screen w-full items-center text-center">
    <div className="m-auto w-80 pb-32 pt-1 text-left">
      <div className="text-3xl font-bold">Create your account</div>
      <div className="mb-10 mt-10 h-px w-32 bg-gray-700" />
      <div className="mb-6">
        Get started now and create your <strong>free account</strong> today!
      </div>
      <LoginButton type="signup" />
      <div className="mb-10 mt-12 h-px w-32 bg-gray-700" />
      <div>
        Already have an account?{" "}
        <Link
          to="/signin"
          className="text-lime-300 underline transition-colors hover:text-lime-400"
        >
          Log In
        </Link>
      </div>
    </div>
  </div>
);

export default SignUp;
