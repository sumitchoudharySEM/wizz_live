"use client";

import React, { useState, FormEvent } from "react";
import Link from "next/link";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const userData = { username, email, password };
    // console.log(userData);

    // Clear the form after submission
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    // setTermsAccepted(false);
    // setErrorMessage("");
  };

  return (
    <div className="my-auto mx-auto flex flex-col justify-center px-6 pt-8 md:justify-start lg:w-[28rem]">
      <p className="text-center text-3xl font-bold md:text-left md:leading-tight">
        Log In to your account
      </p>
      <p className="mt-[10px] text-center font-normal md:text-left">
        Are you new here?
        <Link href="/signup" className="transition-colors duration-300 hover:underline hover:text-green-600 ml-2 whitespace-nowrap font-semibold text-[#2FCC71]">
          Sign Up here
        </Link>
      </p>
      <button className="-2 mt-8 flex items-center gap-[10px] justify-center rounded-md border px-4 py-1 outline-none ring-gray-400 ring-offset-2 transition hover:border-transparent hover:bg-[#2fcc70ee] hover:text-[#ffffff] focus:ring-2">
        <svg
          width="17"
          height="17"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_190_6510)">
            <path
              d="M21.1696 9.08734L12.196 9.08691C11.7997 9.08691 11.4785 9.40806 11.4785 9.80432V12.671C11.4785 13.0672 11.7997 13.3884 12.1959 13.3884H17.2493C16.696 14.8244 15.6632 16.0271 14.3455 16.7913L16.5002 20.5213C19.9567 18.5223 22.0002 15.0148 22.0002 11.0884C22.0002 10.5293 21.959 10.1297 21.8766 9.67967C21.814 9.33777 21.5171 9.08734 21.1696 9.08734Z"
              fill="#167EE6"
            />
            <path
              d="M10.9999 17.6954C8.52689 17.6954 6.36797 16.3442 5.20846 14.3447L1.47852 16.4946C3.37666 19.7844 6.9325 21.9997 10.9999 21.9997C12.9953 21.9997 14.878 21.4625 16.4999 20.5263V20.5211L14.3452 16.791C13.3595 17.3627 12.219 17.6954 10.9999 17.6954Z"
              fill="#12B347"
            />
            <path
              d="M16.5 20.5262V20.5211L14.3452 16.791C13.3596 17.3626 12.2192 17.6954 11 17.6954V21.9997C12.9953 21.9997 14.8782 21.4625 16.5 20.5262Z"
              fill="#0F993E"
            />
            <path
              d="M4.30435 10.9998C4.30435 9.78079 4.63702 8.64036 5.20854 7.65478L1.4786 5.50488C0.537195 7.12167 0 8.99932 0 10.9998C0 13.0002 0.537195 14.8779 1.4786 16.4947L5.20854 14.3448C4.63702 13.3592 4.30435 12.2188 4.30435 10.9998Z"
              fill="#FFD500"
            />
            <path
              d="M10.9999 4.30435C12.6126 4.30435 14.0939 4.87738 15.2509 5.83056C15.5363 6.06568 15.9512 6.04871 16.2127 5.78725L18.2438 3.75611C18.5405 3.45946 18.5193 2.97387 18.2024 2.69895C16.2639 1.0172 13.7416 0 10.9999 0C6.9325 0 3.37666 2.21534 1.47852 5.50511L5.20846 7.65501C6.36797 5.65555 8.52689 4.30435 10.9999 4.30435Z"
              fill="#FF4B26"
            />
            <path
              d="M15.251 5.83056C15.5364 6.06568 15.9513 6.04871 16.2128 5.78725L18.2439 3.75611C18.5405 3.45946 18.5194 2.97387 18.2025 2.69895C16.264 1.01716 13.7417 0 11 0V4.30435C12.6126 4.30435 14.094 4.87738 15.251 5.83056Z"
              fill="#D93F21"
            />
          </g>
          <defs>
            <clipPath id="clip0_190_6510">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Login with Google
      </button>
      <div className="relative mt-8 flex h-px place-items-center bg-gray-200">
        <div className="absolute left-1/2 h-6 -translate-x-1/2 bg-white px-4 text-center text-sm text-gray-500">
          Or use email instead
        </div>
      </div>
      <form
        className="flex flex-col items-stretch pt-3 md:pt-[20px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col pt-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-normal text-[#344054]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-[6px] focus:ring-green-500 focus:border-green-500 block w-full p-[10px]"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col pt-4">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-normal text-[#344054]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="bg-[#ffffff] border border-gray-300 text-gray-900 text-sm rounded-[6px] focus:ring-green-500 focus:border-green-500 block w-full p-[10px]"
            placeholder="•••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="mt-[30px] rounded-lg bg-[#2FCC71] px-4 py-2 text-center text-base font-semibold text-white shadow-md outline-none ring-green-500 ring-offset-2 transition hover:bg-green-600 focus:ring-2"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default page;
