import { Metadata } from 'next';
import Hero from '@/components/Hero';
import CTA from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Features | TradeFlow - CRM for Trade Businesses',
  description: 'Explore all the powerful features TradeFlow offers for roofing, HVAC, plumbing, and contracting businesses. Lead management, automation, scheduling, and more.',
};

const featureCategories = [
  {
    title: 'Lead Management',
    description: 'Capture, track, and convert more leads into paying customers.',
    features: [
      {
        name: 'Multi-Channel Lead Capture',
        description: 'Capture leads from your website, phone calls, social media, and third-party platforms - all in one place.',
      },
      {
        name: 'Lead Scoring',
        description: 'Automatically score leads based on engagement, budget, and urgency so you know who to call first.',
      },
      {
        name: 'Source Tracking',
        description: 'Know exactly where your leads come from and which marketing channels deliver the best ROI.',
      },
      {
        name: 'Duplicate Detection',
        description: 'Prevent duplicate leads and keep your database clean with smart matching algorithms.',
      },
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    title: 'Marketing Automation',
    description: 'Put your marketing on autopilot and nurture leads while you sleep.',
    features: [
      {
        name: 'Email Campaigns',
        description: 'Design beautiful emails with our drag-and-drop builder. Schedule campaigns and track opens and clicks.',
      },
      {
        name: 'SMS Marketing',
        description: 'Send text messages that get read. 98% open rates mean your message gets through.',
      },
      {
        name: 'Automated Follow-ups',
        description: 'Set up sequences that automatically follow up with leads until they respond or convert.',
      },
      {
        name: 'Trigger-Based Workflows',
        description: 'Create workflows that trigger based on customer actions, dates, or custom conditions.',
      },
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    title: 'Scheduling & Booking',
    description: 'Let customers book 24/7 and reduce no-shows with automated reminders.',
    features: [
      {
        name: 'Online Booking',
        description: 'Embed booking widgets on your website. Customers can schedule appointments anytime.',
      },
      {
        name: 'Calendar Sync',
        description: 'Two-way sync with Google Calendar, Outlook, and iCal. Never double-book again.',
      },
      {
        name: 'Automated Reminders',
        description: 'Reduce no-shows by 40% with SMS and email reminders sent automatically.',
      },
      {
        name: 'Technician Scheduling',
        description: 'Assign jobs to the right technician based on skills, location, and availability.',
      },
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'green',
  },
  {
    title: 'Pipeline Management',
    description: 'Visualize and manage your sales process from lead to completed job.',
    features: [
      {
        name: 'Custom Pipelines',
        description: 'Create pipelines that match your workflow. Drag and drop deals through stages.',
      },
      {
        name: 'Deal Tracking',
        description: 'Track every deal with notes, activities, and custom fields. Never lose track of a sale.',
      },
      {
        name: 'Revenue Forecasting',
        description: 'See projected revenue based on pipeline value and historical close rates.',
      },
      {
        name: 'Activity Logging',
        description: 'Automatic logging of calls, emails, and meetings. Full history at your fingertips.',
      },
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'orange',
  },
  {
    title: 'Reputation Management',
    description: 'Build and protect your online reputation with automated review management.',
    features: [
      {
        name: 'Review Requests',
        description: 'Automatically request reviews after job completion. Make it easy for happy customers to spread the word.',
      },
      {
        name: 'Review Monitoring',
        description: 'Monitor reviews across Google, Facebook, Yelp, and more from one dashboard.',
      },
      {
        name: 'Response Management',
        description: 'Respond to reviews quickly with templates and AI-assisted suggestions.',
      },
      {
        name: 'Review Widgets',
        description: 'Display your best reviews on your website to build trust with new visitors.',
      },
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    color: 'yellow',
  },
  {
    title: 'Reporting & Analytics',
    description: 'Make data-driven decisions with powerful analytics and reporting.',
    features: [
      {
        name: 'Custom Dashboards',
        description: 'Build dashboards that show the metrics that matter most to your business.',
      },
      {
        name: 'Lead Attribution',
        description: 'Track ROI by marketing channel and know exactly which campaigns drive revenue.',
      },
      {
        name: 'Team Performance',
        description: 'Monitor individual and team performance with leaderboards and activity metrics.',
      },
      {
        name: 'Scheduled Reports',
        description: 'Get reports delivered to your inbox daily, weekly, or monthly.',
      },
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'cyan',
  },
];

const integrations = [
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Google Calendar', category: 'Calendar' },
  { name: 'Outlook', category: 'Calendar' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Square', category: 'Payments' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Facebook', category: 'Social' },
  { name: 'Google Ads', category: 'Advertising' },
  { name: 'Angi', category: 'Leads' },
  { name: 'HomeAdvisor', category: 'Leads' },
  { name: 'Twilio', category: 'Communication' },
  { name: 'Mailchimp', category: 'Email' },
];

const colorClasses: Record<string, string> = {
  blue: 'from-blue-500 to-blue-700',
  purple: 'from-purple-500 to-purple-700',
  green: 'from-green-500 to-green-700',
  orange: 'from-orange-500 to-orange-700',
  yellow: 'from-yellow-500 to-yellow-700',
  cyan: 'from-cyan-500 to-cyan-700',
};

export default function FeaturesPage() {
  return (
    <>
      <Hero
        title="Powerful Features"
        subtitle="Built for Trades"
        description="Everything you need to capture leads, close deals, and grow your trade business - all in one platform."
        primaryCta={{ text: "Start Free Trial", href: "/contact" }}
        secondaryCta={{ text: "See Pricing", href: "/pricing" }}
        showStats={false}
      />

      {/* Feature Categories */}
      {featureCategories.map((category, index) => (
        <div key={category.title} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[category.color]} flex items-center justify-center text-white mb-6`}>
                {category.icon}
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {category.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {category.description}
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
                {category.features.map((feature) => (
                  <div key={feature.name} className="relative bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow">
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      ))}

      {/* Integrations Section */}
      <div className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Integrations That Work
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Connect TradeFlow with the tools you already use. 50+ integrations and counting.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {integrations.map((integration) => (
                <div key={integration.name} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-colors">
                  <p className="font-medium text-white">{integration.name}</p>
                  <p className="text-sm text-blue-200">{integration.category}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base font-semibold leading-7 text-blue-600">Mobile App</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Run Your Business from Anywhere
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                The TradeFlow mobile app puts your entire business in your pocket. Manage leads, check schedules, and communicate with customers from the job site.
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Real-time lead notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">View and update schedule on the go</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Call and text customers directly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Capture photos and notes on-site</span>
                </li>
              </ul>
              <div className="mt-10 flex gap-4">
                <a href="#" className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition-colors">
                  <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 lg:p-12">
                <div className="bg-white rounded-2xl shadow-xl p-4 max-w-xs mx-auto">
                  <div className="bg-gray-100 rounded-xl p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">TF</div>
                      <div>
                        <div className="font-semibold text-sm">New Lead</div>
                        <div className="text-xs text-gray-500">Just now</div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">John Smith requested a quote for roof inspection at 123 Main St.</p>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white text-xs py-2 rounded-lg">Call</button>
                      <button className="flex-1 bg-gray-200 text-gray-700 text-xs py-2 rounded-lg">View</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
