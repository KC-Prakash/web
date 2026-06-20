import KotaAcademyNavbar from "@/components/sections/nav/Navbar";
import KotaAcademyFooter from "@/components/sections/footer/Footer";
import BlogHero from "@/components/sections/blog/BlogHero";
import BlogListing from "@/components/sections/blog/BlogListing";

export const metadata = {
  title: "Blog | Kota Academy - JEE & NEET Coaching Insights",
  description:
    "Read expert insights, study tips, and success stories from Kota Academy. Discover preparation strategies for IIT-JEE and NEET.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-base text-primary">
      <KotaAcademyNavbar />
      <BlogHero />
      <BlogListing />
      <KotaAcademyFooter />
    </main>
  );
}
