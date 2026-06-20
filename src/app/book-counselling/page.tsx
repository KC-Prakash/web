import CounsellingHero from '@/components/sections/counselling/CounsellingHero';
import CounsellingBooking from '@/components/sections/counselling/CounsellingBooking';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Free Counselling | Kota Academy',
  description: 'Schedule your free counselling session with our expert advisors. Personalized guidance for IIT-JEE and NEET preparation.',
};

export default function BookCounsellingPage() {
  return (
    <>
      <CounsellingHero />
      <CounsellingBooking />
    </>
  );
}
