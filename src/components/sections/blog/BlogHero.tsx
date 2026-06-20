import { ArrowRight, BookOpen, Zap } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="ka-section-light relative overflow-hidden px-5 py-12 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center gap-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-elevated/40 px-4 py-1.5 backdrop-blur-md">
            <BookOpen className="size-4 text-accent" />
            <span className="text-sm font-medium text-primary">RESOURCES & INSIGHTS</span>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 text-balance font-display text-4xl font-extrabold leading-tight tracking-tight text-primary sm:text-5xl lg:text-6xl">
          Master Your Preparation with Expert Insights
        </h1>

        {/* Subheading */}
        <p className="mb-8 max-w-2xl text-balance text-lg leading-relaxed text-secondary sm:text-xl">
          Discover proven study strategies, success stories, and preparation tips from Kota Academy's
          expert faculty. Learn how top rankers conquered IIT-JEE and NEET.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#blog-posts"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand px-6 py-3.5 text-base font-semibold text-brand-ink shadow-[0_10px_30px_-10px_rgb(198_246_36/0.45)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_16px_40px_-10px_rgb(198_246_36/0.6)] sm:w-fit"
          >
            Explore Articles
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#newsletter"
            className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-border-subtle bg-elevated/40 px-6 py-3.5 text-base font-semibold text-primary transition-[transform,border-color,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-border-default hover:bg-elevated sm:w-fit"
          >
            <Zap className="size-4" />
            Subscribe for Updates
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border-subtle pt-8 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl font-extrabold text-accent sm:text-3xl">150+</span>
            <span className="text-sm text-muted-fg">Articles Published</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl font-extrabold text-accent sm:text-3xl">50K+</span>
            <span className="text-sm text-muted-fg">Monthly Readers</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl font-extrabold text-accent sm:text-3xl">98%</span>
            <span className="text-sm text-muted-fg">Helpful Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
