import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

type sendEmailTo = {
  sender: Mail.Address;
  recepients: Mail.Address[];
  subject: string;
  message: string;
  html: string;
};

export const sendEmail = async (dto: sendEmailTo) => {
  const { sender, recepients, subject, html, message } = dto;
  return await transport.sendMail({
    from: sender,
    to: recepients,
    subject,
    html: html,
    text: message,
  });
};
