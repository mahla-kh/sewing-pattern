import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
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
  } = useForm({
    defaultValues: {
      email: "test@example.com",
    },
    resolver: zodResolver(schema),
  });

  const { login, isLoading } = useLogin();
  console.log("isLoading:", isLoading);

  function submitHandler(data) {
    console.log("data :", data);
    const email = data.email;
    const password = data.password;
    login({ email, password });
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col mx-auto w-[80%] sm:w-[50%] items-center justify-center space-y-4 bg-white p-6 rounded-2xl shadow-lg"
    >
      <div>
        <span>Sewing Project</span>
      </div>
      <input
        type="email"
        {...register("email", {
          required: "ایمیل الزامی است",
        })}
        disabled={isLoading}
        autoComplete="usename"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="ایمیل خود را وارد کنید"
      />

      <span className="text-red-500 flex">
        {errors.email && errors.email.message}
      </span>

      <input
        type="password"
        {...register("password", {
          required: "پسورد را وارد کنید",

          minLength: { value: 8, message: "رمز عبور باید ۸ کاراکتر باشد" },
        })}
        disabled={isLoading}
        autoComplete="current-password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="********"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <button
        onClick={() => console.log("clicked")}
        disabled={isLoading}
        type="submit"
        className="w-full flex align-center justify-around bg-sky-300 text-white p-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-sky-800"
      >
        {!isLoading ? "ورود" : <SpinnerMini />}
      </button>
    </form>
  );
}

export default LogInForm;
