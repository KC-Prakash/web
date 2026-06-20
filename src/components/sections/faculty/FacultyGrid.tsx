'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const facultyMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    subject: 'Physics',
    expertise: 'Mechanics & Thermodynamics',
    qualification: 'PhD, IIT Delhi',
    experience: '20 years',
    achievements: 'Former IIT Faculty, 500+ selections',
    bio: 'Specializing in conceptual clarity and problem-solving techniques. Known for innovative teaching methods.',
  },
  {
    name: 'Prof. Meera Singh',
    subject: 'Chemistry',
    expertise: 'Organic & Physical Chemistry',
    qualification: 'M.Tech, IIT Bombay',
    experience: '18 years',
    achievements: 'National Science Awardee, 450+ selections',
    bio: 'Expert in molecular-level understanding and reaction mechanisms. Passionate about student mentoring.',
  },
  {
    name: 'Dr. Amit Patel',
    subject: 'Mathematics',
    expertise: 'Calculus & Coordinate Geometry',
    qualification: 'PhD, IIT Kanpur',
    experience: '22 years',
    achievements: '600+ AIR selections, Former JEE Examiner',
    bio: 'Pioneered the concept-based approach. Master strategist for competitive examinations.',
  },
  {
    name: 'Dr. Priya Verma',
    subject: 'Biology',
    expertise: 'Botany & Zoology',
    qualification: 'PhD, Delhi University',
    experience: '16 years',
    achievements: '400+ NEET selections, Medical Council Advisor',
    bio: 'Specialized in making complex biological concepts simple and relatable.',
  },
  {
    name: 'Prof. Vikas Sharma',
    subject: 'Physics',
    expertise: 'Optics & Modern Physics',
    qualification: 'M.Tech, IIT Madras',
    experience: '17 years',
    achievements: 'International Physics Olympiad Mentor, 480+ selections',
    bio: 'Expert in experimental physics and conceptual problem-solving.',
  },
  {
    name: 'Dr. Sunita Gupta',
    subject: 'Chemistry',
    expertise: 'Inorganic Chemistry',
    qualification: 'PhD, Delhi University',
    experience: '19 years',
    achievements: 'Chemistry Excellence Award, 520+ selections',
    bio: 'Specialist in periodic trends and chemical bonding concepts.',
  },
  {
    name: 'Prof. Arjun Singh',
    subject: 'Mathematics',
    expertise: 'Algebra & Trigonometry',
    qualification: 'M.Tech, IIT Kharagpur',
    experience: '14 years',
    achievements: 'National Mathematics Educator, 420+ selections',
    bio: 'Known for shortcut techniques and conceptual depth.',
  },
  {
    name: 'Dr. Kavya Reddy',
    subject: 'Biology',
    expertise: 'Ecology & Genetics',
    qualification: 'PhD, IIT Bombay',
    experience: '15 years',
    achievements: 'NEET Expert, 350+ selections',
    bio: 'Passionate about making biology engaging and memorable.',
  },
  {
    name: 'Prof. Rohit Kumar',
    subject: 'Physics',
    expertise: 'Electromagnetism & Waves',
    qualification: 'M.Tech, IIT Delhi',
    experience: '16 years',
    achievements: 'JEE Physics Specialist, 470+ selections',
    bio: 'Master of difficult concepts, known for clarity and precision.',
  },
];

const subjects = ['All', 'Physics', 'Chemistry', 'Mathematics', 'Biology'];

export default function FacultyGrid() {
  const [selectedSubject, setSelectedSubject] = useState('All');

  const filteredFaculty = facultyMembers.filter(
    (member) => selectedSubject === 'All' || member.subject === selectedSubject
  );

  return (
    <section className="bg-section-light px-4 py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-on-light-primary md:text-4xl lg:text-5xl">
            Our Distinguished Faculty
          </h2>
          <p className="mt-4 text-on-light-secondary">
            Experienced educators dedicated to your success
          </p>
        </motion.div>

        {/* Subject Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {subjects.map((subject) => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                selectedSubject === subject
                  ? 'bg-brand text-brand-ink'
                  : 'border border-border-default bg-section-light-card text-on-light-primary hover:border-brand'
              }`}
            >
              {subject}
            </button>
          ))}
        </motion.div>

        {/* Faculty Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-center text-sm text-on-light-secondary"
        >
          Showing {filteredFaculty.length} faculty member{filteredFaculty.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Faculty Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredFaculty.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-lg border border-border-default bg-section-light-card p-6 shadow-sm transition-all hover:shadow-md overflow-hidden"
            >
              {/* Subject Badge */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-on-light-primary">{member.name}</h3>
                  <p className="text-xs text-on-light-secondary">{member.expertise}</p>
                </div>
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-ink">
                  {member.subject}
                </span>
              </div>

              {/* Bio */}
              <p className="mb-4 text-sm text-on-light-secondary line-clamp-2">{member.bio}</p>

              {/* Details */}
              <div className="space-y-2 border-t border-border-subtle py-4">
                <div className="flex justify-between">
                  <span className="text-xs text-on-light-secondary">Qualification</span>
                  <span className="text-right text-xs font-semibold text-on-light-primary">
                    {member.qualification}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-on-light-secondary">Experience</span>
                  <span className="font-semibold text-secondary-brand">{member.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-on-light-secondary">Achievement</span>
                  <span className="text-right text-xs font-semibold text-on-light-primary">
                    {member.achievements.split(',')[0]}
                  </span>
                </div>
              </div>

              {/* Full Details on Hover */}
              <div className="mt-4 rounded-lg bg-brand bg-opacity-5 p-3">
                <p className="text-xs text-brand-ink font-semibold">{member.achievements}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredFaculty.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-12 text-center"
          >
            <p className="text-on-light-secondary">No faculty members found for this subject.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-lg bg-secondary-brand px-8 py-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white md:text-3xl">
            Learn from the Best
          </h3>
          <p className="mt-4 text-white opacity-90">
            Experience world-class education with our expert faculty members
          </p>
          <button className="mt-6 rounded-lg bg-white px-8 py-3 font-semibold text-secondary-brand hover:bg-opacity-90 transition-all">
            Schedule a Demo Class
          </button>
        </motion.div>
      </div>
    </section>
  );
}
