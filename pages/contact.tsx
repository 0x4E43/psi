import AboutUs from "@/components/aboutUs";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import Image from "next/image";
import HeroImage from "../public/assets/hero.jpg";
import ContactUs from "@/components/contactUs";

export default function Contact() {
  return (
    <>
      <NavBar />
      <ContactUs/>
      <br />
      <Footer />
    </>
  );
}
