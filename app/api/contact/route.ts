import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, projectType, location, plotArea, notes } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "الاسم ورقم الهاتف مطلوبان لتأكيد حجز الاستشارة" },
        { status: 400 }
      );
    }

    // Process inquiry logging
    console.log("New Engineering Consultation Request:", {
      name,
      phone,
      projectType,
      location,
      plotArea,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "تم استلام طلب الاستشارة وسيتواصل معك مهندس استشاري لتأكيد الموعد.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة الطلب، يرجى المحاولة مرة أخرى" },
      { status: 500 }
    );
  }
}
