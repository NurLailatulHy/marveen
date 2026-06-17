import { resend } from "@/lib/resend";
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error: dbError } = await supabase.from("contact").insert({
      name: body.name,
      email: body.email,
      message: body.message,
    });

    if (dbError) {
      console.error(dbError);

      return Response.json(
        {
          success: false,
          error: "Failed to save contact",
        },
        {
          status: 500,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Marveen Portfolio <marveen@resend.dev>",
      to: ["nurlailatulhidayah45@gmail.com"],
      subject: `New Contact From ${body.name}`,
      html: `
          <h2>New Contact</h2>

          <p><strong>Name:</strong> ${body.name}</p>

          <p><strong>Email:</strong> ${body.email}</p>

          <p><strong>Message:</strong></p>

          <p>${body.message}</p>
        `,
    });

    if (error) {
      return NextResponse.json(
        {
          success: false,
          error,
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      },
    );
  }
}
