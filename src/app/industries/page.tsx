import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Industries We Serve | TradeFlow - CRM for Trade Businesses',
  description: 'TradeFlow serves roofing, HVAC, plumbing, and contracting businesses with specialized CRM and marketing tools built for each industry.',
};

const industries = [
  {
    name: 'Roofing',
    description: 'From storm damage leads to insurance claim tracking, we have everything roofers need to grow their business.',
    href: '/industries/roofing',
    features: ['Storm damage lead capture', 'Insurance claim tracking', 'Before/after photo galleries', 'Seasonal campaign automation'],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: 'from-orange-500 to-red-600',
    stats: { leads: '47%', deals: '32%', time: '15hrs' },
  },
  {
    name: 'HVAC',
    description: 'Manage maintenance contracts, dispatch technicians, and stay busy year-round with seasonal marketing automation.',
    href: '/industries/hvac',
    features: ['Maintenance agreement management', 'Seasonal campaign automation', 'Equipment tracking', 'Technician scheduling'],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-blue-500 to-cyan-600',
    stats: { leads: '65%', deals: '38%', time: '94%' },
  },
  {
    name: 'Plumbing',
    description: 'Handle emergency calls 24/7, dispatch the nearest technician, and turn one-time customers into repeat clients.',
    href: '/industries/plumbing',
    features: ['24/7 emergency call handling', 'Smart dispatch routing', 'Service history tracking', 'Membership program management'],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: 'from-green-500 to-emerald-600',
    stats: { leads: '45%', deals: '28%', time: '89%' },
  },
  {
    name: 'General Contractors',
    description: 'Manage projects, coordinate subcontractors, and keep clients informed from bid to completion.',
    href: '/industries/contractors',
    features: ['Project pipeline management', 'Subcontractor coordination', 'Client communication portal', 'Change order tracking'],
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: 'from-purple-500 to-indigo-600',
    stats: { leads: '35%', deals: '50%', time: '4.9/5' },
  },
];

export default function IndustriesPage() {
  return (
    <>
      <Hero
        title="Built for Your"
        subtitle="Specific Trade"
        description="We don't believe in one-size-fits-all solutions. That's why we've built specialized features for each trade industry."
        primaryCta={{ text: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ text: "See All Features", href: "/features" }}
        showStats={false}
      />

      {/* Industries Grid */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Industry
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Each industry page shows you the specific features and benefits designed for your trade.
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div
                key={industry.name}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${industry.color} p-4 text-white mb-6`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{industry.name}</h3>
                  <p className="mt-4 text-lg text-gray-600">{industry.description}</p>

                  <ul className="mt-8 space-y-3">
                    {industry.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Link
                      href={industry.href}
                      className={`inline-flex items-center rounded-lg bg-gradient-to-r ${industry.color} px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity`}
                    >
                      Learn More About {industry.name}
                      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="flex-1">
                  <div className={`bg-gradient-to-br ${industry.color} bg-opacity-10 rounded-2xl p-8`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                        Results for {industry.name} Companies
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{industry.stats.leads}</div>
                          <div className="text-xs text-gray-500 mt-1">More Leads</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{industry.stats.deals}</div>
                          <div className="text-xs text-gray-500 mt-1">Better Close Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{industry.stats.time}</div>
                          <div className="text-xs text-gray-500 mt-1">
                            {industry.name === 'Roofing' ? 'Saved/Week' :
                             industry.name === 'General Contractors' ? 'Client Rating' :
                             'Retention'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cross-Industry Features */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Features for All Trades
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              No matter your trade, these powerful features help you grow your business.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { name: 'Lead Management', icon: '👥' },
                { name: 'Marketing Automation', icon: '📧' },
                { name: 'Online Booking', icon: '📅' },
                { name: 'Reputation Management', icon: '⭐' },
                { name: 'Pipeline Tracking', icon: '📊' },
                { name: 'Mobile App', icon: '📱' },
                { name: 'Reporting', icon: '📈' },
                { name: 'Integrations', icon: '🔗' },
              ].map((feature) => (
                <div key={feature.name} className="text-center">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTA
        title="Ready to Find Your Perfect Solution?"
        description="Select your industry above to see how TradeFlow can help your specific business, or start a free trial today."
      />
    </>
  );
}
