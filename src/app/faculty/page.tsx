import FacultyHero from '@/components/sections/faculty/FacultyHero';
import FacultyGrid from '@/components/sections/faculty/FacultyGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Faculty | Kota Academy',
  description: 'Meet the expert faculty members of Kota Academy. Award-winning educators with decades of experience in IIT-JEE and NEET preparation.',
};

export default function FacultyPage() {
  return (
    <>
      <FacultyHero />
      <FacultyGrid />
    </>
  );
}
