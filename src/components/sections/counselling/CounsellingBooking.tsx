'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

const exams = ['IIT-JEE', 'NEET', 'Both'];
const counsellorTypes = ['Academic Counsellor', 'Career Counsellor', 'Personal Mentor'];

export default function CounsellingBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentGrade: '',
    exam: '',
    targetExam: '',
    counsellorType: '',
    date: '',
    timeSlot: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Phone must be 10 digits';
    if (!formData.currentGrade) newErrors.currentGrade = 'Current grade is required';
    if (!formData.exam) newErrors.exam = 'Target exam is required';
    if (!formData.counsellorType) newErrors.counsellorType = 'Counsellor type is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      currentGrade: '',
      exam: '',
      targetExam: '',
      counsellorType: '',
      date: '',
      timeSlot: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  // Get tomorrow's date as minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  // Get date 30 days from now as maximum date
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);
  const maxDateStr = maxDate.toISOString().split('T')[0];

  return (
    <section className="w-full bg-dark-section py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Success Message */}
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-8 p-4 md:p-6 bg-green-50 border border-green-200 rounded-lg flex gap-4"
          >
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Booking Confirmed!</h3>
              <p className="text-green-800 text-sm">
                Your counselling session has been booked successfully. Check your email for confirmation and session details.
              </p>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left side - Info cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background/50 border border-background/20 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">Free</div>
              <p className="text-foreground/80 text-sm">
                No hidden charges, completely complimentary session
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background/50 border border-background/20 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">30 mins</div>
              <p className="text-foreground/80 text-sm">
                Focused one-on-one session with personalized advice
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background/50 border border-background/20 rounded-lg p-6"
            >
              <div className="text-3xl font-bold text-lime-400 mb-2">Expert</div>
              <p className="text-foreground/80 text-sm">
                Guidance from experienced academic and career counsellors
              </p>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-background/50 border border-background/20 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Schedule Your Session</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & Grade */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Grade *</label>
                  <select
                    name="currentGrade"
                    value={formData.currentGrade}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.currentGrade
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  >
                    <option value="">Select your current grade</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                    <option value="12-pass">12th Pass</option>
                    <option value="drop">Drop Year</option>
                  </select>
                  {errors.currentGrade && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.currentGrade}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Target Exam & Counsellor Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Target Exam *</label>
                  <select
                    name="exam"
                    value={formData.exam}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.exam
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  >
                    <option value="">Select exam</option>
                    {exams.map((exam) => (
                      <option key={exam} value={exam}>
                        {exam}
                      </option>
                    ))}
                  </select>
                  {errors.exam && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.exam}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Counsellor Type *</label>
                  <select
                    name="counsellorType"
                    value={formData.counsellorType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.counsellorType
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  >
                    <option value="">Select counsellor type</option>
                    {counsellorTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.counsellorType && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.counsellorType}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={minDate}
                    max={maxDateStr}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.date
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  />
                  {errors.date && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Time *</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-dark-section border outline-none transition ${
                      errors.timeSlot
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-background/20 focus:border-lime-400'
                    }`}
                  >
                    <option value="">Select time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.timeSlot && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.timeSlot}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your preparation, challenges, or any specific concerns..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-dark-section border border-background/20 focus:border-lime-400 outline-none transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-lime-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-lime-500 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Booking Your Session...
                  </>
                ) : (
                  'Confirm Your Booking'
                )}
              </button>

              <p className="text-xs text-foreground/50 text-center">
                We&apos;ll send you a confirmation with session details via email and WhatsApp
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
