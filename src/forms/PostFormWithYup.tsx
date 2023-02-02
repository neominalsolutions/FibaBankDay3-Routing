import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  firstName: string;
  age: number;
};

const schema = yup
  .object({
    firstName: yup.string().required("firstname alanı zorunludur"),
    age: yup
      .number()
      .positive("age değeri negatif girilmez")
      .integer("değer tamsayı seçilmelidir")
      .notRequired(),
  })
  .required();

export default function PostFormWithYup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: "ali",
      age: 18,
    },
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log("form-data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>

      <input type="number" {...register("age")} />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
