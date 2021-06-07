describe("Temporary Landing Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("SEO", () => {
    it("has an og:title", () => {
      cy.get('meta[property="og:title"]').should("have.attr", "content");
    });

    it("has an og:description", () => {
      cy.get('meta[property="og:description"]').should("have.attr", "content");
    });

    it("has an og:image", () => {
      cy.get('meta[property="og:image"]').should("have.attr", "content");
    });

    it("has twitter card set as summary large image", () => {
      cy.get('meta[name="twitter:card"]').should(
        "have.attr",
        "content",
        "summary_large_image"
      );
    });

    it("has the correct og:site_name", () => {
      cy.get('meta[property="og:site_name"]').should(
        "have.attr",
        "content",
        "Zuyu"
      );
    });
  });

  describe("Animated logo", () => {
    it("fills in after two seconds to rgba(255, 255, 255, 0.9)", () => {
      cy.wait(2100);
      cy.get("#animated_logo").should(
        "have.css",
        "fill",
        "rgba(255, 255, 255, 0.9)"
      );
    });
  });
});
