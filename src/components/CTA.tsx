import Link from 'next/link';

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'default' | 'dark';
}

export default function CTA({
  title = "Ready to Grow Your Trade Business?",
  description = "Join thousands of trade professionals who are already using TradeFlow to get more leads, close more deals, and scale their businesses.",
  primaryButtonText = "Start Free Trial",
  primaryButtonHref = "/contact",
  secondaryButtonText = "Schedule a Demo",
  secondaryButtonHref = "/contact",
  variant = 'default',
}: CTAProps) {
  const isDark = variant === 'dark';

  return (
    <div className={isDark ? 'bg-gray-900' : 'bg-blue-600'}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className={`text-3xl font-bold tracking-tight sm:text-4xl ${isDark ? 'text-white' : 'text-white'}`}>
            {title}
          </h2>
          <p className={`mt-6 text-lg leading-8 ${isDark ? 'text-gray-300' : 'text-blue-100'}`}>
            {description}
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:mt-0 lg:flex-shrink-0">
          <Link
            href={primaryButtonHref}
            className={`rounded-lg px-6 py-3 text-sm font-semibold shadow-sm transition-all hover:scale-105 ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-white text-blue-600 hover:bg-blue-50'
            }`}
          >
            {primaryButtonText}
          </Link>
          <Link
            href={secondaryButtonHref}
            className={`rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
              isDark
                ? 'text-white hover:text-blue-400'
                : 'text-white hover:text-blue-100'
            }`}
          >
            {secondaryButtonText} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
