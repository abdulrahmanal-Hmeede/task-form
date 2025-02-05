import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2,{ message: " مطلوب، أدخل اسم من ثلاث محارف فما فوق." })
  email: z.string().email({message: "أدخل ايميل صحيح"}),
  pass: z.string().min(8, { message: "يجب أن تكون كلمة المرور 8 محارف" }),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({resolver : zodResolver(schema)});

  return <>
  
  
  </>;
};

export default Form;
