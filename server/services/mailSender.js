import otpGenerator from "otp-generator";
import nodemailer from "nodemailer";
import fs from "fs";
import inlineCss from "inline-css";

export const mailSender = async (email, otp, otp_type) => {
  const htmlContent = fs.readFileSync("otp_template.html", "utf-8");
  htmlContent = htmlContent.replace("tradevault_otp", otp);
  htmlContent = htmlContent.replace("tradevault_otp2", otp_type);

  const options = {
    url: " ",
  };

  htmlContent = await inlineCss(htmlContent, options);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const result = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Your OTP for Trading App",
      html: htmlContent,
    });
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export const generateOTP = () => {
  const otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets: false,
  });
  return otp;
};
