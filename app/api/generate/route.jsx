import { NextResponse } from "next/server";

export async function GET() {
  try {
    const aiResponse = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [{ role: "user", content: `Give me a motivational quote. ${Math.random()}` }],
        max_tokens: 50,
        temperature: 0.7,
      }),
      cache: "no-store",
    });

    const data = await aiResponse.json();

    if (!aiResponse.ok) {
      return NextResponse.json({ error: data.error?.message || "Unknown API error" }, { status: 500 });
    }

    return NextResponse.json({ result: data.choices?.[0]?.message?.content?.trim() || "No response from AI" });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Server error occurred" }, { status: 500 });
  }
}
