import { sendEmail } from "@/utils/mail.utils";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const email = body.email;

  if (email.includes("@") === false) {
    return NextResponse.json({ message: "Email not valid" });
  }

  const sender = {
    name: "Serena Blake",
    address: process.env.MAIL_USERNAME!,
  };

  const recepients = [
    {
      name: "User",
      address: "serenablake@yopmail.com",
    },
  ];

  try {
    await sendEmail({
      sender,
      recepients,
      subject: "Contact Form Submission",
      html: `<table><tr><td>Name:</td><td>${body.name}</td></tr><tr><td>Email:</td><td>${body.email}</td></tr><tr><td>Phone:</td><td>${body.phone}</td></tr><tr><td>Message:</td><td>${body.message}</td></tr></table>`,
      message: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
    });
    return NextResponse.json({ message: "Mail sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Mail not sent" });
  }
}
