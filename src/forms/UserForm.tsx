import React from "react";
import { useForm } from "react-hook-form";

type UserForm = {
  firstname: string;
  mail: string;
};

function UserForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserForm>({
    defaultValues: {
      // initial form değerleri
      firstname: "",
      mail: "",
    },
  });

  const onSubmit = (data: UserForm) => {
    console.log("formState", data);
  };

  return (
    // register ile form alanlarını eşliyoruz

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="firstname"
        {...register("firstname", {
          required: { value: true, message: "firstname boş geçilemez" },
          maxLength: { value: 5, message: "maksimum 5 karakter girilebilir" },
        })}
        aria-invalid={errors.firstname ? "true" : "false"}
      />

      <span style={{ color: "red" }}>{errors.firstname?.message}</span>

      <br></br>
      <input
        placeholder="email"
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}

      {/* hata durumunda ise butonun gönderilmesini önlemek için disabled yaptık */}
      <br></br>
      <input
        disabled={errors.firstname || errors.mail ? true : false}
        type="submit"
      />
    </form>
  );
}

export default UserForm;
