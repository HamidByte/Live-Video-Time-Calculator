import * as ROUTES from '@/router/routes.js'

export const convertersList = [
  {
    title: 'Units',
    description: 'Convert length, weight, temperature, and more.',
    name: 'units',
    href: '/units',
    isDisabled: true,
  },
  {
    title: 'Dates',
    description: 'Age calculator, days between dates, week numbers, and more.',
    name: 'dates',
    href: '/dates',
    isDisabled: true,
  },
  {
    title: 'Time',
    description: 'Convert time zones, durations, timestamps, and more.',
    name: ROUTES.TIME.name,
    href: ROUTES.TIME.path,
    isDisabled: false,
  },
  {
    title: 'Currency',
    description: 'Live exchange rates, historical conversions, crypto to fiat.',
    name: 'currency',
    href: '/currency',
    isDisabled: true,
  },
  {
    title: 'Math',
    description: 'Fractions to decimals, Roman numerals, percentages.',
    name: 'math',
    href: '/math',
    isDisabled: true,
  },
  {
    title: 'Text',
    description: 'Uppercase/lowercase, ASCII to text, character count.',
    name: 'text',
    href: '/text',
    isDisabled: true,
  },
  {
    title: 'Digital Storage',
    description: 'Convert between KB, MB, GB, TB, and more.',
    name: 'digital-storage',
    href: '/digital-storage',
    isDisabled: true,
  },
  {
    title: 'Finance',
    description: 'Loan interest, tax calculator, inflation adjustment.',
    name: 'finance',
    href: '/finance',
    isDisabled: true,
  },
  {
    title: 'Science',
    description: 'Atomic mass, wavelength to frequency, radiation units.',
    name: 'science',
    href: '/science',
    isDisabled: true,
  },
  {
    title: 'Engineering',
    description: 'Torque, power, viscosity, thermal conductivity.',
    name: 'engineering',
    href: '/engineering',
    isDisabled: true,
  },
  {
    title: 'Health & Fitness',
    description: 'BMI calculator, calorie burn, steps to distance.',
    name: 'health-fitness',
    href: '/health-fitness',
    isDisabled: true,
  },
  {
    title: 'Geography',
    description: 'GPS coordinates, latitude/longitude distance, country codes.',
    name: 'geography',
    href: '/geography',
    isDisabled: true,
  },
  {
    title: 'Miscellaneous',
    description:
      'Aspect ratio calculator, Shoe size conversion, cooking measurements, dice roll probability',
    name: ROUTES.MISC.name,
    href: ROUTES.MISC.path,
    isDisabled: false,
  },
]
