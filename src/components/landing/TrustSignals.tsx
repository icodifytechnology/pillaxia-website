
const cards = [
  {
    img: '/partner/aibf-accreditation.jpeg',
    alt: 'AIBF Business All-Stars Accredited',
    label: 'AIBF accreditation',
  },
  {
    imgs: [
      { src: '/partner/intertrade-ireland.png', alt: 'InterTrade Ireland' },
      { src: '/partner/hihi-logo.jpeg', alt: 'Health Innovation Hub Ireland' },
    ],
    prefix: 'Supported by',
    label: 'InterTrade Ireland · HIHI',
  },
  {
    icon: true,
    label: 'Public-sector, pharmacy & hospital collaborations',
  },
];

const logoRows = [
  { src: '/partner/new-frontiers-logo.png', alt: 'New Frontiers – Enterprise Ireland', name: 'New Frontiers' },
  { src: '/partner/ai-healthcare-logo.png', alt: 'AI in Healthcare Programme', name: 'AI in Healthcare' },
];

function CheckIcon() {
  return (
    <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  );
}

export function TrustSignals() {
  return (
    <section className="py-10 px-6 bg-white border-y border-slate-100">
      <p className="text-center text-lg font-semibold tracking-widest uppercase text-slate-400 mb-8">
        Trusted by early healthcare partners across Ireland and Nigeria
      </p>

      {/* Three cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto mb-5">
        {/* Card 1 – AIBF */}
        <div className="flex flex-col items-center justify-center gap-2.5 min-h-[90px] rounded-xl border border-slate-200 bg-white px-4 py-4">
          <img src={cards[0].img} alt={cards[0].alt} className="h-12 object-contain" />
          <span className="text-[11px] text-slate-500 text-center">{cards[0].label}</span>
        </div>

        {/* Card 2 – Supported by logos */}
        <div className="flex flex-col items-center justify-center gap-2 min-h-[90px] rounded-xl border border-slate-200 bg-white px-4 py-4">
          <span className="text-[10px] uppercase tracking-widest text-slate-400">Supported by</span>
          <div className="flex gap-3 items-center flex-wrap justify-center">
            {cards[1].imgs!.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} className="h-6 object-contain" />
            ))}
          </div>
          <span className="text-[11px] text-slate-500 text-center">{cards[1].label}</span>
        </div>

        {/* Card 3 – Shield */}
        <div className="flex flex-col items-center justify-center gap-2.5 min-h-[90px] rounded-xl border border-slate-200 bg-white px-4 py-4">
          <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
            <ShieldIcon />
          </div>
          <span className="text-[11px] text-slate-500 text-center">{cards[2].label}</span>
        </div>
      </div>

      {/* Logo pills row */}
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-5">
        {logoRows.map((l) => (
          <div key={l.name} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2">
            <img src={l.src} alt={l.alt} className="h-7 object-contain" />
            <span className="text-xs text-slate-500">{l.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
}