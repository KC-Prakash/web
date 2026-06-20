import ResultsHero from '@/components/sections/results/ResultsHero';
import ResultsShowcase from '@/components/sections/results/ResultsShowcase';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Student Results | Kota Academy',
  description: 'Explore the exceptional results achieved by our students. 98% selections in IIT-JEE & NEET with consistent top ranks.',
};

export default function ResultsPage() {
  return (
    <>
      <ResultsHero />
      <ResultsShowcase />
    </>
  );
}
