import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      company,
      email,
      phone,
      shipmentType,
      origin,
      destination,
      message,
    } = body

    if (
      !name ||
      !company ||
      !email ||
      !phone ||
      !shipmentType ||
      !origin ||
      !destination ||
      !message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const emailContent = `
New Quote Request Submission from Garrison Logistics Website

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Shipment Type: ${shipmentType}
Origin: ${origin}
Destination: ${destination}

Message:
${message}

---
This email was sent from the Garrison Logistics quote request form.
    `.trim()

    const RECIPIENT_EMAIL = "itxvilen5@gmail.com"
    const resendApiKey = "re_ieyBT5Wn_7rjgE99HyMvVwxmLdkuaigdN"

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      )
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Garrison Logistics <onboarding@resend.dev>",
        to: [RECIPIENT_EMAIL],
        subject: `New Quote Request - ${company}`,
        text: emailContent,
        reply_to: email,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      console.error("Resend error:", result)

      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
    })
  } catch (error) {
    console.error("Quote form error:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}