import { Metadata } from 'next';
import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'About Us | TradeFlow - CRM for Trade Businesses',
  description: 'Learn about TradeFlow and our mission to help trade businesses grow with powerful CRM and marketing automation tools.',
};

const stats = [
  { label: 'Trade businesses served', value: '2,500+' },
  { label: 'Leads generated', value: '1.2M+' },
  { label: 'Revenue influenced', value: '$500M+' },
  { label: 'Team members', value: '45+' },
];

const values = [
  {
    name: 'Built for Trades',
    description: 'We understand the unique challenges of running a trade business. Our platform is designed specifically for roofing, HVAC, plumbing, and contracting companies.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Simple & Powerful',
    description: "Technology should make your life easier, not harder. We've built an intuitive platform that's easy to learn but powerful enough to transform your business.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Customer Success',
    description: "Your success is our success. We're not just a software company - we're your partner in growth. Our team is here to help you every step of the way.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
  },
  {
    name: 'Continuous Innovation',
    description: 'The trades industry is evolving, and so are we. We continuously improve our platform based on feedback from real trade professionals.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: 'Michael Roberts',
    role: 'CEO & Co-Founder',
    bio: 'Former owner of a roofing company with 15+ years in the trades industry. Built TradeFlow to solve the problems he faced.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'CTO & Co-Founder',
    bio: '20+ years in software development. Previously led engineering teams at major tech companies.',
  },
  {
    name: 'David Chen',
    role: 'VP of Customer Success',
    bio: 'Spent 10 years helping trade businesses grow. Passionate about making technology accessible.',
  },
  {
    name: 'Jennifer Adams',
    role: 'VP of Marketing',
    bio: 'Digital marketing expert specializing in the home services industry. Drives growth for TradeFlow and our customers.',
  },
];

const timeline = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'TradeFlow was founded by Michael Roberts after years of frustration with generic CRMs that didn\'t understand the trades industry.',
  },
  {
    year: '2020',
    title: 'First Customers',
    description: 'Launched our beta with 50 roofing companies. Their feedback shaped the platform we have today.',
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Expanded to serve HVAC, plumbing, and general contracting businesses. Reached 500 customers.',
  },
  {
    year: '2022',
    title: 'Major Growth',
    description: 'Crossed 1,500 customers and $100M in influenced revenue. Launched our mobile app.',
  },
  {
    year: '2023',
    title: 'Industry Leader',
    description: 'Became the #1 rated CRM for trade businesses. Reached 2,500+ active customers.',
  },
  {
    year: '2024',
    title: 'The Future',
    description: 'Continuing to innovate with AI-powered features and deeper industry integrations.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Built by Trade Pros,
              <span className="text-blue-600"> for Trade Pros</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We started TradeFlow because we were tired of CRMs that didn&apos;t understand our industry.
              Today, we&apos;re helping thousands of trade businesses grow with tools built specifically for them.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
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

      {/* Our Story */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            <div className="mt-6 space-y-6 text-lg leading-8 text-gray-600">
              <p>
                TradeFlow was born out of frustration. Our founder, Michael Roberts, ran a successful roofing company
                for over 15 years. He tried every CRM on the market, but none of them understood the unique challenges
                of running a trade business.
              </p>
              <p>
                Generic CRMs were built for tech companies and retail businesses. They didn&apos;t have features for
                managing storm damage leads, tracking insurance claims, or scheduling seasonal maintenance. Michael
                spent more time fighting his software than using it to grow his business.
              </p>
              <p>
                In 2019, Michael partnered with Sarah Mitchell, a veteran software engineer, to build the CRM he
                always wished he had. They spent months talking to roofers, HVAC techs, plumbers, and contractors
                to understand exactly what features they needed.
              </p>
              <p>
                The result is TradeFlow - a platform built from the ground up for trade businesses. Every feature,
                every workflow, every integration is designed with the trades in mind. No more workarounds. No more
                frustration. Just tools that actually help you grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Journey</h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-0.5 bg-blue-200 -translate-x-1/2" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200">
                        <span className="text-sm font-semibold text-blue-600">{item.year}</span>
                        <h3 className="mt-2 text-lg font-semibold text-gray-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              These principles guide everything we do at TradeFlow.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
              {values.map((value) => (
                <div key={value.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                      {value.icon}
                    </div>
                    {value.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leadership Team</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Meet the people building the future of trade business software.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((person) => (
                <div key={person.name} className="bg-white rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 text-center">
                  <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">{person.name}</h3>
                  <p className="text-sm text-blue-600">{person.role}</p>
                  <p className="mt-4 text-sm text-gray-600">{person.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Join Us */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Join Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re always looking for talented people who are passionate about helping trade businesses succeed.
              Check out our open positions and join us in building something amazing.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                View Open Positions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CTA
        title="Ready to Experience the TradeFlow Difference?"
        description="Join thousands of trade professionals who are already growing their businesses with TradeFlow."
      />
    </>
  );
}
