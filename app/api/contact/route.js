import { NextResponse } from "next/server";

import { saveContactSubmission } from "@/lib/contact-storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = clean(body.name);
    const email = clean(body.email);
    const phone = clean(body.phone);
    const interest = clean(body.interest);
    const message = clean(body.message);
    const companyWebsite = clean(body.companyWebsite);

    if (companyWebsite) {
      return NextResponse.json({
        ok: true,
        message: "Thank you. Your message has been received.",
      });
    }

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { ok: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 20) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please provide a little more detail in your message.",
        },
        { status: 400 }
      );
    }

    await saveContactSubmission({
      name,
      email,
      phone,
      interest,
      message,
      source: "website-contact-form",
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thank you. Your inquiry has been received and stored. BlackHawk Ventures can now review it locally.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: "The contact form could not be submitted right now.",
        detail: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
