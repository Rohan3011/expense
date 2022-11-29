import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { InputField } from "./shared/form";
import SignupImage from "../public/images/signup.jpg";

const schema = Yup.object().shape({
  name: Yup.string().required().min(2, "name should be min 2 chars"),
  email: Yup.string().email().required(),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const formFields = [
  {
    id: "signupName",
    type: "text",
    name: "name",
    label: "Name",
    required: true,
    placeholder: "Enter your full name",
  },
  {
    id: "signupEmail",
    type: "email",
    name: "email",
    label: "Email",
    required: true,
  },
  {
    id: "signupPassword",
    type: "password",
    name: "password",
    label: "Password",
    required: true,
  },
  {
    id: "signupPasswordConfirmation",
    type: "password",
    name: "passwordConfirmation",
    label: "Password Confirmation",
    required: true,
  },
];

const Signup = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div className="relative bg-white p-4 m-4 w-full max-w-xl flex flex-col justify-center items-center space-y-8 rounded">
        <SignupTitle />
        <SignupForm />
        <SignupSocialHandle />
      </div>
      <HeroSection />
    </div>
  );
};

export default Signup;

const SignupTitle = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-2">
      <h3 className="text-3xl lg:text-5xl tracking-tight font-bold text-center text-slate-800">
        Create Your Account
      </h3>
      <p className="text-center text-sm text-slate-500">
        Already have an account?
        <Link passHref href="/login">
          <span className="cursor-pointer text-blue-700 font-semibold pl-1">
            Login
          </span>
        </Link>
      </p>
    </section>
  );
};

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="w-full max-w-sm p-4 flex flex-col rounded-md">
      <form onSubmit={formik.handleSubmit}>
        {formFields.map((val) => (
          <InputField
            key={val.id}
            {...val}
            value={formik.values[val.name]}
            touched={formik.touched[val.name]}
            error={formik.errors[val.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        ))}
        <SignupAction />
      </form>
    </section>
  );
};

const SignupAction = ({ onSubmit }) => {
  return (
    <section className="w-full flex justify-center pt-3">
      <button
        type="submit"
        className="grow bg-blue-700 text-white px-10 py-2 rounded cursor-pointer hover:bg-blue-600 active:scale-95 duration-150"
      >
        Signup
      </button>
    </section>
  );
};

const SignupSocialHandle = () => {
  const link = {
    github: "https://github.com/Rohan3011/expense",
    linkedin: "https://www.linkedin.com/in/rohan-kamble/",
  };

  return (
    <div className="fixed bottom-10 left-30 divide-x-2 divide-slate-300">
      <a target={"_blank"} href={link.github} rel="noreferrer">
        <span className="cursor-pointer text-slate-500 font-semibold text-sm px-1">
          GitHub
        </span>
      </a>
      <a target={"_blank"} href={link.linkedin} rel="noreferrer">
        <span className="cursor-pointer text-slate-500 font-semibold text-sm px-1">
          Linkedin
        </span>
      </a>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="hidden relative lg:flex p-10 grow h-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900">
      <div className="inline-block absolute top-0 left-0 z-10 translate-x-32 translate-y-14">
        <h1 className=" font-bold text-7xl inline-block text-white">
          Expense Tracker App
        </h1>
      </div>
      <Image
        src={SignupImage}
        className="max-w-md object-cover rounded"
        alt="signup-image"
      />
    </div>
  );
};
