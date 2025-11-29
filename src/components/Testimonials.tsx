const testimonials = [
  {
    body: "TradeFlow transformed our roofing business. We went from chasing leads to having them come to us. Our revenue is up 40% since we started using it.",
    author: {
      name: 'Mike Johnson',
      role: 'Owner, Johnson Roofing Co.',
      industry: 'Roofing',
    },
  },
  {
    body: "The automated follow-ups alone have saved us 20 hours a week. Now we can focus on what we do best - fixing AC units, not managing spreadsheets.",
    author: {
      name: 'Sarah Chen',
      role: 'Operations Manager, CoolAir HVAC',
      industry: 'HVAC',
    },
  },
  {
    body: "Best investment we ever made. The booking system handles our emergency calls perfectly, and the reputation management got us to 4.9 stars on Google.",
    author: {
      name: 'David Martinez',
      role: 'Founder, FlowRight Plumbing',
      industry: 'Plumbing',
    },
  },
  {
    body: "Managing multiple projects used to be a nightmare. Now everything is in one place. My clients love the automated updates on their renovations.",
    author: {
      name: 'Jennifer Williams',
      role: 'President, Williams Construction',
      industry: 'Contracting',
    },
  },
  {
    body: "We tried 5 different CRMs before finding TradeFlow. It's the only one that actually understands how a plumbing business works. Worth every penny.",
    author: {
      name: 'Robert Kim',
      role: 'CEO, Premier Plumbing Services',
      industry: 'Plumbing',
    },
  },
  {
    body: "The pipeline management is incredible. I can see exactly where every job is at any time. Closed 30% more deals in our first quarter using TradeFlow.",
    author: {
      name: 'Amanda Foster',
      role: 'Sales Director, TopNotch Roofing',
      industry: 'Roofing',
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Trade Professionals
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200 hover:ring-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-7 text-gray-600">&ldquo;{testimonial.body}&rdquo;</p>
                </div>
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-semibold">
                      {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{testimonial.author.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
