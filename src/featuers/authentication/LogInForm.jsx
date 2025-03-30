import React from "react";
import { useForm } from "react-hook-form";

// type FormFields = {
//     email:string;
//     password:string;
// }
function LogInForm() {
  // const form = useForm<FormFields>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    console.log("data :", data);
    // console.log(data);
  }

  // function handler() {
  //   // e.preventDefault();
  //   console.log("submited");
  // }
  return (
    <form
      // onSubmit={handler}
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col mx-auto w-[50%] items-center justify-center space-y-4 bg-white p-6 rounded-2xl shadow-lg"
    >
      <div>
        <span>Sewing Project</span>
      </div>
      <input
        type="email"
        {...register("email", {
          required: "ایمیل الزامی است",
        })}
        autoComplete="usename"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="ایمیل خود را وارد کنید"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <input
        type="password"
        {...register("password", {
          required: true,

          minLength: { value: 8, message: "رمز عبور باید ۸ کاراکتر باشد" },
          // maxLength: { value: 8, message: "رمز عبور باید ۸ کاراکتر باشد" },
        })}
        autoComplete="current-password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="********"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button
        onClick={() => console.log("clicked")}
        // disabled={false}
        type="submit"
        className="w-full bg-sky-300 text-white p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-sky-800"
      >
        ورود
      </button>
    </form>
  );
}

export default LogInForm;
