import { describe, it, expect } from "vitest";
import { POST } from "@/app/api/contact/route";

describe("Contact API Integration Route Handler", () => {
  it("should return 400 when required fields name or phone are missing", async () => {
    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        projectType: "فيلا سكنية",
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBeDefined();
  });

  it("should successfully process valid consultation submission", async () => {
    const mockRequest = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: "المهندس أحمد عثمان",
        phone: "01001234567",
        projectType: "فيلا سكنية",
        location: "التجمع الخامس والقاهرة الجديدة",
        plotArea: "750 م²",
        notes: "أرغب في تصميم فيلا بدروم وأرضي وأول وروف مع حمام سباحة",
      }),
    });

    const response = await POST(mockRequest);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.message).toBeDefined();
  });
});
