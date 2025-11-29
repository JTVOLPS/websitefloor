import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roofing CRM & Marketing Software | TradeFlow',
  description: 'The #1 CRM and marketing platform for roofing companies. Generate more leads, close more jobs, and grow your roofing business with TradeFlow.',
};

const features = [
  {
    name: 'Storm Damage Lead Capture',
    description: 'Capture leads after storms with location-targeted campaigns. Get to homeowners before your competitors do.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: 'Roof Inspection Scheduling',
    description: 'Let homeowners book inspections online 24/7. Automatic reminders reduce no-shows by 40%.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Insurance Claim Tracking',
    description: 'Track every claim from submission to approval. Never lose track of where a job stands in the process.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'Before/After Photo Gallery',
    description: 'Showcase your best work with stunning before/after galleries. Build trust and close more deals.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Estimate & Proposal Builder',
    description: 'Create professional estimates in minutes. Include material specs, financing options, and digital signatures.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Review Generation',
    description: 'Automatically request reviews after job completion. Build your 5-star reputation on Google and Facebook.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

const stats = [
  { label: 'Average increase in leads', value: '47%' },
  { label: 'Faster estimate delivery', value: '3x' },
  { label: 'Improvement in close rate', value: '32%' },
  { label: 'Time saved per week', value: '15hrs' },
];

const testimonial = {
  quote: "TradeFlow helped us go from 50 roofs a year to over 200. The storm tracking and automated follow-ups are game-changers for any roofing company.",
  author: "Mike Johnson",
  role: "Owner, Johnson Roofing Co.",
  company: "Johnson Roofing Co."
};

export default function RoofingPage() {
  return (
    <>
      <Hero
        title="Grow Your Roofing Business"
        subtitle="with Smart Automation"
        description="The all-in-one CRM built specifically for roofing contractors. Capture more storm damage leads, streamline insurance claims, and close more jobs."
        primaryCta={{ text: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ text: "See How It Works", href: "/features" }}
        showStats={false}
      />

      {/* Stats Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <dt className="text-sm leading-6 text-blue-100">{stat.label}</dt>
                <dd className="order-first text-4xl font-bold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-600">Built for Roofers</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Features That Understand Your Business
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From storm chasing to insurance paperwork, we&apos;ve built tools specifically for the challenges roofing contractors face every day.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-600 text-white">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center gap-1 text-yellow-400 mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl font-medium leading-9 text-gray-900 sm:text-3xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="mt-8">
              <div className="font-semibold text-gray-900">{testimonial.author}</div>
              <div className="text-gray-600">{testimonial.role}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Industries */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-900">We also serve other trades</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/industries/hvac" className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
              HVAC
            </Link>
            <Link href="/industries/plumbing" className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
              Plumbing
            </Link>
            <Link href="/industries/contractors" className="rounded-full bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors">
              General Contractors
            </Link>
          </div>
        </div>
      </div>

      <CTA
        title="Ready to Grow Your Roofing Business?"
        description="Join hundreds of roofing contractors who are already using TradeFlow to get more leads and close more jobs."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
