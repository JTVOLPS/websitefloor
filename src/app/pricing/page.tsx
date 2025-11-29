'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import FAQ from '@/components/FAQ';

const tiers = [
  {
    name: 'Starter',
    id: 'starter',
    priceMonthly: 97,
    priceYearly: 79,
    description: 'Perfect for solo operators and small teams just getting started.',
    features: [
      'Up to 500 contacts',
      'Lead capture forms',
      'Basic email campaigns',
      'Online booking',
      'Mobile app access',
      'Email support',
    ],
    notIncluded: [
      'SMS marketing',
      'Advanced automations',
      'Custom pipelines',
      'Team management',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    priceMonthly: 197,
    priceYearly: 167,
    description: 'For growing businesses that need more power and automation.',
    features: [
      'Up to 5,000 contacts',
      'Everything in Starter',
      'SMS marketing (500/mo)',
      'Advanced automations',
      'Custom pipelines',
      'Reputation management',
      'Priority support',
      '3 team members',
    ],
    notIncluded: [
      'Unlimited contacts',
      'White-label options',
      'API access',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Agency',
    id: 'agency',
    priceMonthly: 397,
    priceYearly: 337,
    description: 'For established businesses and agencies managing multiple locations.',
    features: [
      'Unlimited contacts',
      'Everything in Professional',
      'SMS marketing (2,000/mo)',
      'Unlimited team members',
      'API access',
      'White-label options',
      'Dedicated account manager',
      'Custom onboarding',
      'Priority phone support',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
  },
];

const addons = [
  { name: 'Additional SMS', price: '$0.015/message', description: 'Pay as you go for additional text messages' },
  { name: 'Additional Phone Numbers', price: '$5/number/month', description: 'Local or toll-free numbers' },
  { name: 'Premium Support', price: '$99/month', description: 'Dedicated support with 1-hour response time' },
  { name: 'Custom Integrations', price: 'Contact us', description: 'Connect with any system via custom API work' },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the plan that fits your business. All plans include a 14-day free trial.
              No credit card required.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="mt-10 flex justify-center">
            <div className="relative flex rounded-full bg-gray-100 p-1">
              <button
                onClick={() => setAnnual(false)}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  !annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`relative rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                  annual ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-1 text-xs text-green-600 font-semibold">Save 15%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-3xl bg-white p-8 shadow-md ring-1 ${
                  tier.popular
                    ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                    : 'ring-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">{tier.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{tier.description}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      ${annual ? tier.priceYearly : tier.priceMonthly}
                    </span>
                    <span className="ml-1 text-sm text-gray-500">/month</span>
                  </div>
                  {annual && (
                    <p className="mt-1 text-sm text-gray-500">
                      Billed annually (${tier.priceYearly * 12}/year)
                    </p>
                  )}
                </div>
                <ul role="list" className="mb-8 space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {tier.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 opacity-50">
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    tier.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Optional Add-ons
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Customize your plan with these optional add-ons.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {addons.map((addon) => (
                <div key={addon.name} className="bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                    <span className="text-sm font-medium text-blue-600">{addon.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{addon.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              30-Day Money-Back Guarantee
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Try TradeFlow risk-free. If you&apos;re not completely satisfied within the first 30 days,
              we&apos;ll refund your payment in full. No questions asked.
            </p>
          </div>
        </div>
      </div>

      {/* Compare Plans */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Compare Plans
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 px-6 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Starter</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-blue-600">Professional</th>
                  <th className="py-4 px-6 text-center text-sm font-semibold text-gray-900">Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: 'Contacts', starter: '500', professional: '5,000', agency: 'Unlimited' },
                  { feature: 'Team Members', starter: '1', professional: '3', agency: 'Unlimited' },
                  { feature: 'Email Campaigns', starter: true, professional: true, agency: true },
                  { feature: 'SMS Marketing', starter: false, professional: '500/mo', agency: '2,000/mo' },
                  { feature: 'Online Booking', starter: true, professional: true, agency: true },
                  { feature: 'Lead Capture Forms', starter: true, professional: true, agency: true },
                  { feature: 'Custom Pipelines', starter: false, professional: true, agency: true },
                  { feature: 'Advanced Automations', starter: false, professional: true, agency: true },
                  { feature: 'Reputation Management', starter: false, professional: true, agency: true },
                  { feature: 'API Access', starter: false, professional: false, agency: true },
                  { feature: 'White-label Options', starter: false, professional: false, agency: true },
                  { feature: 'Dedicated Account Manager', starter: false, professional: false, agency: true },
                ].map((row) => (
                  <tr key={row.feature} className="bg-white">
                    <td className="py-4 px-6 text-sm text-gray-900">{row.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <svg className="h-5 w-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center bg-blue-50">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <svg className="h-5 w-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.professional}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof row.agency === 'boolean' ? (
                        row.agency ? (
                          <svg className="h-5 w-5 mx-auto text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="h-5 w-5 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{row.agency}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <FAQ />

      {/* Final CTA */}
      <div className="bg-blue-600 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of trade professionals who are already growing their businesses with TradeFlow.
            Start your free trial today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white hover:text-blue-100 transition-colors"
            >
              Schedule a Demo <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
