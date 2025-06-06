import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Kango Studio <contato@kangostudio.com.br>",
      to: ["seu@email.com"],
      subject: `Novo contato de ${name}`,
      html: `
        <h2>Novo contato recebido</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar e-mail" }, { status: 500 });
  }
}