import Link from 'next/link';

const industries = [
  {
    name: 'Roofing',
    description: 'Generate more roofing leads, manage estimates, and close more jobs with tools built for roofers.',
    href: '/industries/roofing',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'from-orange-500 to-red-600',
  },
  {
    name: 'HVAC',
    description: 'Schedule service calls, manage maintenance contracts, and grow your HVAC business year-round.',
    href: '/industries/hvac',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-600',
  },
  {
    name: 'Plumbing',
    description: 'Handle emergency calls, dispatch technicians, and build recurring revenue with ease.',
    href: '/industries/plumbing',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-600',
  },
  {
    name: 'General Contractors',
    description: 'Manage projects, coordinate subcontractors, and keep clients informed every step of the way.',
    href: '/industries/contractors',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-purple-500 to-indigo-600',
  },
];

export default function Industries() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Specialized Solutions</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Your Trade
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand the unique challenges of your industry. That&apos;s why we&apos;ve built specialized features for each trade.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              <div className="p-8">
                <div className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${industry.color} p-3 text-white`}>
                  {industry.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {industry.name}
                </h3>
                <p className="mt-2 text-gray-600">{industry.description}</p>
                <div className="mt-4 flex items-center text-sm font-semibold text-blue-600">
                  Learn more
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
