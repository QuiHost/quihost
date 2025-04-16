export const images = {
  // Hero section
  cleanerHero: '/images/cleaning-service.jpg',
  avatar1: '/images/testimonial1.jpg',
  avatar2: '/images/testimonial2.jpg',
  avatar3: '/images/testimonial3.jpg',
  
  // Features section
  securityFeatures: '/images/auto-payments.jpg',
  
  // Calendar section
  calendarSync: '/images/calendar-sync.jpg',
  
  // Testimonials
  roberto: '/images/testimonial1.jpg',
  sara: '/images/testimonial2.jpg',
  michele: '/images/testimonial3.jpg',
  
  // Mobile app section
  appStore: '/images/app-store.png',
  googlePlay: '/images/google-play.png',
} as const

export type ImageKeys = keyof typeof images 