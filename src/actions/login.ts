"use server";

import axios from "axios";
import z from "zod";

interface PropsLoginAction {
  email: string;
  password: string;
  captchaToken: string;
}

interface PropsSubmitHandler {
  status: number;
  data: any;
}

const formSchema = z.object({
  email: z
    .string()
    .max(40, {
      message: "E-mail deve ser menor que 20 caracteres.",
    })
    .email({
      message: "O campo deve ser preenchido com um E-mail válido.",
    }),
  password: z
    .string()
    .min(6, {
      message: "O password deve ser maior 6 caracteres.",
    })
    .max(18, {
      message: "O password deve ser menor que 18 caracteres.",
    }),
  captchaToken: z.string().min(1, {
    message: "Captcha obrigatório.",
  }),
});

export async function loginAction({
  email,
  password,
  captchaToken,
}: PropsLoginAction): Promise<any> {
  const API = process.env.NEXT_PUBLIC_API_AUTH_URL;

  try {
    const response = await axios.post(
      `${API}/auth/login`,
      {
        email,
        password,
        captchaToken,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    if (!response.data || !response.data.status) return;

    return response.data;
  } catch {
    return;
  }
}

export async function submitHandler(
  form: FormData,
): Promise<PropsSubmitHandler> {
  const data = {
    email: form.get("email"),
    password: form.get("password"),
    captchaToken: form.get("captchaToken"),
  };

  const result = formSchema.safeParse(data);

  if (!result.success) {
    const formatted = result.error.format();
    const newErros: { [key: string]: string } = {};

    if (formatted.email?._errors.length) {
      newErros.email = formatted.email._errors[0];
    }

    if (formatted.password?._errors.length) {
      newErros.password = formatted.password._errors[0];
    }

    if (formatted.captchaToken?._errors.length) {
      newErros.captchaToken = formatted.captchaToken._errors[0];
    }
    return {
      status: 0,
      data: newErros,
    };
  }

  const login = await loginAction(result.data);
  if (!login)
    return {
      status: 0,
      data: undefined,
    };
  return {
    status: login.status,
    data: login.data,
  };
}
