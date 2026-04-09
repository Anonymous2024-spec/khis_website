import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Footer from "../../components/Footer";

const renderFooter = () =>
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>,
  );

describe("Footer", () => {
  it("renders the institute name", () => {
    renderFooter();
    expect(
      screen.getByText("Kitgum Institute of Health Sciences"),
    ).toBeInTheDocument();
  });

  it("renders the tagline", () => {
    renderFooter();
    expect(screen.getByText("Dedicated to Excellence")).toBeInTheDocument();
  });

  it("renders the phone number", () => {
    renderFooter();
    expect(screen.getByText("+256 777 683228")).toBeInTheDocument();
  });

  it("renders the address", () => {
    renderFooter();
    expect(screen.getByText("P.O Box 334, Kitgum, Uganda")).toBeInTheDocument();
  });

  it("renders all quick links", () => {
    renderFooter();
    expect(screen.getByText("Quick Links")).toBeInTheDocument();
    expect(screen.getByText("Our Courses")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders all course names", () => {
    renderFooter();
    expect(
      screen.getByText("Diploma in Medical Laboratory Techniques"),
    ).toBeInTheDocument();
    expect(screen.getByText("Diploma in Pharmacy")).toBeInTheDocument();
    expect(
      screen.getByText("Certificate in Medical Laboratory Techniques"),
    ).toBeInTheDocument();
    expect(screen.getByText("Certificate in Pharmacy")).toBeInTheDocument();
  });

  it("renders the copyright year", () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
