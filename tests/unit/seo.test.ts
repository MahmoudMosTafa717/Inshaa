import { describe, it, expect } from "vitest";
import { constructMetadata, siteConfig } from "@/lib/seo";

describe("SEO Metadata Helper", () => {
  it("should generate default metadata with canonical URL and Arabic locale", () => {
    const meta = constructMetadata();

    expect(meta.title).toBeDefined();
    expect(meta.description).toBe(siteConfig.description);
    expect(meta.alternates?.canonical).toBe(siteConfig.url);
    expect(meta.openGraph?.locale).toBe("ar_EG");
  });

  it("should append canonical path correctly", () => {
    const meta = constructMetadata({
      title: "التصميم الإنشائي",
      canonicalUrl: "/services/structural-engineering",
    });

    expect(meta.alternates?.canonical).toBe(`${siteConfig.url}/services/structural-engineering`);
  });
});
