import KotaAcademyNavbar from "@/components/sections/nav/Navbar";
import KotaAcademyFooter from "@/components/sections/footer/Footer";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactForm from "@/components/sections/contact/ContactForm";
import ContactInfo from "@/components/sections/contact/ContactInfo";

export const metadata = {
  title: "Contact Us — Kota Academy",
  description:
    "Get in touch with Kota Academy. Call, email, or visit us at our Greater Noida branches for IIT-JEE, NEET & Foundation coaching.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-base text-primary">
      <KotaAcademyNavbar />
      <ContactHero />
      <div className="ka-section-light">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-6 md:py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <KotaAcademyFooter />
    </main>
  );
}
