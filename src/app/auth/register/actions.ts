import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import z from "zod";

const RegisterSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(8),
});

export const register = async (data: FormData) => {
  const validation = RegisterSchema.safeParse({
    email: data.get("email"),
    name: data.get("name"),
    password: data.get("password"),
  });

  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }

  const { email, name, password } = validation.data;

  const { data: auth } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  });

  const { error } = await supabase
    .from("users")
    .insert({ id: auth.user?.id, name });

  if (error) {
    throw error;
  }

  redirect("/dashboard");
};
