import { describe, it, expect } from "vitest";
import { servicesData } from "@/lib/data/services";
import { projectsData } from "@/lib/data/projects";

describe("Services & Projects Dataset Integrity", () => {
  it("should ensure all 6 core services have valid slugs, geo passages, and deliverables", () => {
    expect(servicesData.length).toBe(6);
    servicesData.forEach((service) => {
      expect(service.slug).toBeTruthy();
      expect(service.title).toBeTruthy();
      expect(service.geoPassage).toBeTruthy();
      expect(service.deliverables.length).toBeGreaterThanOrEqual(3);
      expect(service.stages.length).toBeGreaterThanOrEqual(3);
      expect(service.egyptianCodeCompliance.length).toBeGreaterThan(10);
    });
  });

  it("should ensure all projects have valid CAD specs, coordinates/location, and BIM layers", () => {
    expect(projectsData.length).toBeGreaterThanOrEqual(4);
    projectsData.forEach((project) => {
      expect(project.slug).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.cadSpecs.concreteVolume).toBeTruthy();
      expect(project.cadSpecs.steelTonnage).toBeTruthy();
      expect(project.bimLayers.structural).toBeTruthy();
      expect(project.bimLayers.render).toBeTruthy();
      expect(project.gallery.length).toBeGreaterThanOrEqual(2);
    });
  });
});
