import React from "react";
import Input from "../Input";
import "./index.css";
import { useForm, Controller } from "react-hook-form";
import { registerAccountSchema } from "comps/SuperAdminLayout/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { createAccountFunc } from "comps/SuperAdminLayout/utils";

const Body = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    reValidateMode: "onBlur", // "onChnage",
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
    },
    resolver: yupResolver(registerAccountSchema),
  });

  return (
    <div className="cmp-body cmp-width cmp-pad">
      <div className="form-wrapper">
        <h1>Sign Up</h1>
        <form className="" onSubmit={handleSubmit(createAccountFunc)}>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="text"
                error={errors?.name?.message}
                placeholder="Full Name"
                name="name"
                id="name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="email"
                error={errors?.email?.message}
                placeholder="Email"
                name="email"
                id="email"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="text"
                error={errors?.phoneNumber?.message}
                placeholder="Phone Number"
                name="phoneNumber"
                id="phoneNumber"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                type="password"
                error={errors?.password?.message}
                placeholder="Password"
                name="password"
                id="password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
          />

          <button type="submit">authorize me</button>
        </form>
      </div>
      <div className="cmp-btn-wrapper">
        <button className="cmp-btn">
          <span>If you are not an administrator please click here.</span>
        </button>
      </div>
    </div>
  );
};

export default Body;
