import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, role, address, zipcode, employees, service, message } = body;

  if (!name || !email || !company || !role || !address || !zipcode || !employees || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Residua Contact Form <contact@residua.earth>",
    to: "sales@residua.earth",
    replyTo: email,
    subject: `New inquiry from ${name} at ${company}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Address: ${address}, ${zipcode}`,
      `Employees: ${employees}`,
      `Service of interest: ${service || "Not specified"}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
