import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    const companyName = formData.get("companyName") as string
    const mcNumber = formData.get("mcNumber") as string
    const dotNumber = formData.get("dotNumber") as string
    const contactName = formData.get("contactName") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const insuranceProvider = formData.get("insuranceProvider") as string

    const files = ["w9", "insurance", "authority", "agreement"]

    const attachments: any[] = []
    const filePreviews: any = {}

    for (const key of files) {
      const file = formData.get(key) as File | null
      if (!file) continue

      const buffer = Buffer.from(await file.arrayBuffer())
      const base64 = buffer.toString("base64")

      attachments.push({
        filename: file.name,
        content: base64,
      })

      filePreviews[key] = `data:${file.type};base64,${base64}`
    }

    const emailContent = `
NEW CARRIER REGISTRATION - GARRISON LOGISTICS

Company: ${companyName}
MC: ${mcNumber}
DOT: ${dotNumber}
Contact: ${contactName}
Phone: ${phone}
Email: ${email}
Insurance: ${insuranceProvider}
    `.trim()

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${"re_ieyBT5Wn_7rjgE99HyMvVwxmLdkuaigdN"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Garrison Logistics <onboarding@resend.dev>",
        to: ["itxvilen5@gmail.com"],
        subject: `Carrier Registration - ${companyName}`,
        text: emailContent,
        attachments,
      }),
    })

    const result = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: result },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      files: filePreviews,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}