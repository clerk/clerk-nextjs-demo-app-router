export function LearnMore() {
  return (
    <div className="grid grid-cols-4 gap-8 max-w-[1200px] mx-auto w-full py-6">
      <div className="flex flex-col">
        <span className="text-[13px] text-[#6C47FF] font-medium">What's next</span>
        <h2 className="text-xl font-semibold text-[#131316] tracking-tight leading-[26px] mt-2 mb-3">
          Learn more from our&nbsp;resources
        </h2>
        <p className="text-[13px] text-[#5E5F6E]">
          Prebuilt components to handle essential functionality like user sign-in, sign-up, and account management.
        </p>
      </div>
      {CARDS.map((card, index) => (
        <a href={card.href} target="_blank" className="border border-[#F2F2F4] rounded-lg overflow-hidden">
          <div className="px-4 py-3 bg-[#FAFAFB]">
            <h3 className="text-sm font-medium text-[#131316] tracking-tight mb-1">{card.title}</h3>
            <p className="text-[13px] text-[#5E5F6E]">{card.description}</p>
          </div>
          <div className="bg-[#F5F5F7] text-[#131316] px-4 py-2 text-[13px] font-medium flex items-center gap-1.5 border-t border-[#EDEDF0]">
            {card.linkText}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="12" height="12" rx="3" fill="#EEEEF0" />
              <path
                d="M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25"
                stroke="#9394A1"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      ))}
    </div>
  );
}

const CARDS = [
  {
    title: 'Use your JWT to authenticate requests?',
    description:
      'Prebuilt components to handle essential functionality like user sign-in, sign-up, and account management.',
    href: 'https://clerk.dev',
    linkText: 'Components',
  },
  {
    title: 'Use your JWT to authenticate requests?',
    description:
      'Prebuilt components to handle essential functionality like user sign-in, sign-up, and account management.',
    href: 'https://dashboard.clerk.dev',
    linkText: 'Components',
  },
  {
    title: 'Use your JWT to authenticate requests?',
    description:
      'Prebuilt components to handle essential functionality like user sign-in, sign-up, and account management.',
    href: 'https://clerk.com',
    linkText: 'Components',
  },
];