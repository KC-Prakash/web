'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const studentResults = [
  {
    name: 'Aditya Sharma',
    rank: 'AIR 1',
    exam: 'IIT-JEE Advanced',
    score: '352/360',
    marks: '98%',
    branch: 'Computer Science',
    college: 'IIT Bombay',
    year: '2024',
    batch: '2-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Priya Verma',
    rank: 'AIR 3',
    exam: 'IIT-JEE Advanced',
    score: '348/360',
    marks: '96.7%',
    branch: 'Electrical Engineering',
    college: 'IIT Delhi',
    year: '2024',
    batch: '2-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Rahul Patel',
    rank: 'AIR 7',
    exam: 'IIT-JEE Advanced',
    score: '338/360',
    marks: '93.8%',
    branch: 'Mechanical Engineering',
    college: 'IIT Kanpur',
    year: '2024',
    batch: '1-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Neha Singh',
    rank: 'AIR 1',
    exam: 'NEET',
    score: '720/720',
    marks: '100%',
    branch: 'Medicine',
    college: 'AIIMS Delhi',
    year: '2024',
    batch: '2-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Arjun Kumar',
    rank: 'AIR 12',
    exam: 'IIT-JEE Advanced',
    score: '325/360',
    marks: '90.2%',
    branch: 'Civil Engineering',
    college: 'IIT Madras',
    year: '2024',
    batch: '2-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Divya Gupta',
    rank: 'AIR 2',
    exam: 'NEET',
    score: '716/720',
    marks: '99.4%',
    branch: 'Medicine',
    college: 'AIIMS Mumbai',
    year: '2024',
    batch: '2-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Nikhil Reddy',
    rank: 'AIR 18',
    exam: 'IIT-JEE Advanced',
    score: '315/360',
    marks: '87.5%',
    branch: 'Aerospace Engineering',
    college: 'IIT Bombay',
    year: '2024',
    batch: '1-Year',
    status: 'Top Ranker',
  },
  {
    name: 'Zara Ahmad',
    rank: 'AIR 5',
    exam: 'NEET',
    score: '718/720',
    marks: '99.7%',
    branch: 'Medicine',
    college: 'CMC Vellore',
    year: '2024',
    batch: '2-Year',
    status: 'Top Ranker',
  },
];

const exams = ['All', 'IIT-JEE', 'NEET'];
const years = ['All', '2024', '2023', '2022'];

export default function ResultsShowcase() {
  const [selectedExam, setSelectedExam] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const filteredResults = studentResults.filter((student) => {
    const examMatch = selectedExam === 'All' || student.exam.includes(selectedExam);
    const yearMatch = selectedYear === 'All' || student.year === selectedYear;
    return examMatch && yearMatch;
  });

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
            Our Top Achievers
          </h2>
          <p className="mt-4 text-on-light-secondary">
            Celebrating the exceptional performance of our students across IIT-JEE and NEET exams
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-center"
        >
          {/* Exam Filter */}
          <div className="flex flex-wrap gap-2">
            {exams.map((exam) => (
              <button
                key={exam}
                onClick={() => setSelectedExam(exam)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                  selectedExam === exam
                    ? 'bg-brand text-brand-ink'
                    : 'border border-border-default bg-section-light-card text-on-light-primary hover:border-brand'
                }`}
              >
                {exam}
              </button>
            ))}
          </div>

          {/* Year Filter */}
          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                  selectedYear === year
                    ? 'bg-secondary-brand text-white'
                    : 'border border-border-default bg-section-light-card text-on-light-primary hover:border-secondary-brand'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-center text-sm text-on-light-secondary"
        >
          Showing {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Results Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-3"
        >
          {filteredResults.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-border-default bg-section-light-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Rank Badge */}
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-on-light-primary">{student.name}</h3>
                  <p className="text-xs text-on-light-secondary">{student.batch}</p>
                </div>
                <div className="rounded-full bg-brand px-3 py-1 text-center text-xs font-bold text-brand-ink">
                  {student.rank}
                </div>
              </div>

              {/* Details Grid */}
              <div className="space-y-3 border-t border-border-subtle pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-light-secondary">Exam</span>
                  <span className="font-semibold text-on-light-primary">{student.exam}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-light-secondary">Score</span>
                  <span className="font-semibold text-brand">{student.score}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-light-secondary">College</span>
                  <span className="text-right text-sm font-semibold text-on-light-primary">
                    {student.college}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-on-light-secondary">Branch</span>
                  <span className="text-right text-sm text-on-light-secondary">{student.branch}</span>
                </div>
              </div>

              {/* Year Tag */}
              <div className="mt-4 flex gap-2">
                <span className="inline-block rounded-full bg-secondary-brand bg-opacity-10 px-3 py-1 text-xs font-semibold text-secondary-brand">
                  {student.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results Message */}
        {filteredResults.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-12 text-center"
          >
            <p className="text-on-light-secondary">No results found for the selected filters.</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-lg bg-brand px-8 py-12 text-center"
        >
          <h3 className="text-2xl font-bold text-brand-ink md:text-3xl">
            Ready to Join Our Success Stories?
          </h3>
          <p className="mt-4 text-brand-ink opacity-90">
            Get started with Kota Academy and unlock your potential to achieve excellence
          </p>
          <button className="mt-6 rounded-lg bg-brand-ink px-8 py-3 font-semibold text-brand hover:bg-opacity-90 transition-all">
            Enroll Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
