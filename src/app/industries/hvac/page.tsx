import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HVAC CRM & Marketing Software | TradeFlow',
  description: 'The #1 CRM and marketing platform for HVAC companies. Schedule service calls, manage maintenance contracts, and grow your HVAC business year-round.',
};

const features = [
  {
    name: 'Maintenance Agreement Management',
    description: 'Track all your service contracts in one place. Automatic renewal reminders ensure you never lose a recurring customer.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: 'Seasonal Campaign Automation',
    description: 'Launch targeted campaigns before peak seasons. Remind customers about AC tune-ups in spring and furnace checks in fall.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Emergency Dispatch',
    description: 'Handle after-hours calls with automated routing. Get the right technician to the right job, fast.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Equipment Tracking',
    description: 'Keep records of every unit you install or service. Know exactly when warranties expire and when it\'s time for replacement.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
  {
    name: 'Technician Scheduling',
    description: 'Optimize routes and reduce drive time. Smart scheduling ensures maximum productivity for your team.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: 'Financing Integration',
    description: 'Offer financing options right in your estimates. Close bigger jobs by making them affordable for homeowners.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { label: 'More maintenance renewals', value: '65%' },
  { label: 'Faster emergency response', value: '2x' },
  { label: 'Increase in revenue', value: '38%' },
  { label: 'Customer retention rate', value: '94%' },
];

const testimonial = {
  quote: "The maintenance agreement tracking alone pays for itself. We went from losing 30% of contracts to 94% retention. TradeFlow understands HVAC.",
  author: "Sarah Chen",
  role: "Operations Manager",
  company: "CoolAir HVAC"
};

export default function HVACPage() {
  return (
    <>
      <Hero
        title="Grow Your HVAC Business"
        subtitle="Year-Round"
        description="The all-in-one CRM built specifically for HVAC contractors. Manage maintenance contracts, dispatch technicians, and keep your business busy in every season."
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
            <h2 className="text-base font-semibold leading-7 text-cyan-600">Built for HVAC</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Features That Keep You Busy All Year
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From emergency calls to maintenance contracts, we&apos;ve built tools specifically for HVAC businesses.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
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

      {/* Seasonal Marketing Section */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-cyan-600">Seasonal Marketing</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Stay Busy in Every Season
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Automated campaigns help you reach customers at exactly the right time.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Spring/Summer</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  AC tune-up reminders, cooling system checkups, and summer prep campaigns automatically reach your customers when they need you most.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Fall/Winter</h3>
                </div>
                <p className="mt-4 text-gray-600">
                  Furnace inspections, heating system checks, and winterization services. Reach customers before the cold hits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-white py-24 sm:py-32">
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
              <div className="text-gray-600">{testimonial.role}, {testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Industries */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-gray-900">We also serve other trades</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/industries/roofing" className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors shadow-sm">
              Roofing
            </Link>
            <Link href="/industries/plumbing" className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors shadow-sm">
              Plumbing
            </Link>
            <Link href="/industries/contractors" className="rounded-full bg-white px-6 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition-colors shadow-sm">
              General Contractors
            </Link>
          </div>
        </div>
      </div>

      <CTA
        title="Ready to Grow Your HVAC Business?"
        description="Join hundreds of HVAC contractors who are already using TradeFlow to manage maintenance contracts and grow their business."
        primaryButtonText="Start Free Trial"
        primaryButtonHref="/contact"
        secondaryButtonText="Schedule Demo"
        secondaryButtonHref="/contact"
      />
    </>
  );
}
