import { Shield, Zap, Lock, BadgeCheck, Home, Activity } from 'lucide-react';

const BASE = 'https://pillaxia-website.vercel.app';

function TrustCard({ children, className = '' }: {children: React.ReactNode;className?: string;}) {
  return (
    <div
      className={`
        bg-white rounded-2xl flex flex-col items-center
        px-4 pt-10 pb-8 min-h-[280px]
        shadow-[0_2px_4px_rgba(0,0,0,0.04),_0_6px_18px_rgba(0,0,0,0.06)]
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.13),_0_3px_10px_rgba(0,0,0,0.07)]
        hover:-translate-y-1.5 transition-all duration-300 ease-out
        ${className}
      `}>
      
      {children}
    </div>);

}

function Prefix({ children }: {children: React.ReactNode;}) {
  return (
    <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-stone-400 mb-4 shrink-0">
      {children}
    </span>);

}

function CardTitle({ children }: {children: React.ReactNode;}) {
  return (
    <p className="font-bold text-[15px] text-stone-800 text-center leading-snug mb-2 shrink-0">
      {children}
    </p>);

}

function CardSub({ children }: {children: React.ReactNode;}) {
  return (
    <p className="text-[12px] text-stone-400 text-center leading-relaxed shrink-0">
      {children}
    </p>);

}

const taglines = [
{
  icon: <Shield size={16} strokeWidth={1.8} className="text-green-700" />,
  bg: 'bg-green-50',
  text: 'Compliant by design'
},
{
  icon: <Zap size={16} strokeWidth={1.8} className="text-blue-600" />,
  bg: 'bg-blue-50',
  text: 'Built for scale'
},
{
  icon: <Lock size={16} strokeWidth={1.8} className="text-violet-600" />,
  bg: 'bg-violet-50',
  text: 'Ready for regulated environments'
}];


export function TrustSignals() {
  return (
    <section className="w-full py-12 px-8">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <span className="block w-14 h-px bg-stone-300" />
        <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-stone-400 text-center">
          Trusted by early healthcare partners across Ireland &amp; Nigeria
        </p>
        <span className="block w-14 h-px bg-stone-300" />
      </div>

      {/* 5-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 w-full items-stretch mb-5">

        {/* Card 1 — AIBF */}
        <TrustCard>
          <img
            src={`${BASE}/partner/aibf-accreditation.jpeg`}
            alt="AIBF"
            className="h-14 max-w-[130px] w-full object-contain mb-5 shrink-0" />
          
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-blue-800 bg-blue-50 rounded-lg px-3 py-1.5 mb-4 whitespace-nowrap shrink-0">
            <BadgeCheck size={12} className="text-blue-700" strokeWidth={2.5} />
            Accredited
          </span>
          <CardTitle>AIBF Business<br />All-Stars</CardTitle>
          <CardSub>National business accreditation programme</CardSub>
        </TrustCard>

        {/* Card 2 — InterTrade + HIHI */}
        <TrustCard>
          <Prefix>Supported by</Prefix>
          <div className="flex items-center justify-center gap-3 mb-5 w-full shrink-0">
            <img
              src={`${BASE}/partner/intertrade-ireland.png`}
              alt="InterTrade Ireland"
              className="h-14 max-w-[90px] object-contain shrink-0" />
            
            <div className="w-px h-7 bg-stone-200 shrink-0" />
            <img
              src={`${BASE}/partner/hihi-logo.jpeg`}
              alt="HIHI"
              className="h-8 max-w-[90px] object-contain shrink-0" />
            
          </div>
          <CardTitle>InterTrade Ireland<br />· HIHI</CardTitle>
          <CardSub>Cross-border trade &amp; health innovation support</CardSub>
        </TrustCard>

        {/* Card 3 — New Frontiers only */}
        <TrustCard>
          <Prefix>Programme</Prefix>
          <div className="flex flex-col items-center justify-center flex-1 w-full mb-5">
            <div className="w-full bg-stone-50 rounded-xl px-4 py-5 flex flex-col items-center gap-2">
              <img
                src={`${BASE}/partner/new-frontiers-logo.png`}
                alt="New Frontiers"
                className="h-14 max-w-[240px] object-contain" />
              
            </div>
          </div>
          <CardTitle>New Frontiers</CardTitle>
          <CardSub>Enterprise Ireland startup development programme</CardSub>
        </TrustCard>

        {/* Card 4 — AI in Healthcare only */}
        <TrustCard>
          <Prefix>Programme</Prefix>
          <div className="flex flex-col items-center justify-center flex-1 w-full mb-5">
            <div className="w-full bg-stone-50 rounded-xl px-4 py-5 flex flex-col items-center gap-2">
              <img
                src={`${BASE}/partner/ai-healthcare-logo.png`}
                alt="AI in Healthcare"
                className="h-14 max-w-[120px] object-contain" />
              
            </div>
          </div>
          <CardTitle>AI in Healthcare</CardTitle>
          <CardSub>AI-focused healthcare accelerator programme</CardSub>
        </TrustCard>

        {/* Card 5 — Backed by */}
        <TrustCard>
          <Prefix>Backed by</Prefix>
          <div className="flex justify-center gap-3 mb-5 shrink-0">
            {[
            { icon: <Shield size={18} strokeWidth={1.8} className="text-blue-600" />, bg: 'bg-blue-50', label: 'Public' },
            { icon: <Home size={18} strokeWidth={1.8} className="text-emerald-700" />, bg: 'bg-emerald-50', label: 'Pharmacy' },
            { icon: <Activity size={18} strokeWidth={1.8} className="text-violet-600" />, bg: 'bg-violet-50', label: 'Hospital' }].
            map(({ icon, bg, label }) =>
            <div key={label} className="flex flex-col items-center gap-1.5">
                <div className={`w-11 h-11 rounded-xl ${bg} flex items-center justify-center`}>
                  {icon}
                </div>
              </div>
            )}
          </div>
          <CardTitle>Public Sector<br />Collaborations</CardTitle>
          <CardSub>Pharmacy &amp; hospital partners across Ireland</CardSub>
        </TrustCard>

      </div>

      {/* Tagline strip — inline text row, no card */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-0 sm:gap-0 pt-8">
        {taglines.map(({ icon, bg, text }, i) =>
        <div key={text} className="flex items-center">
            <div className="flex items-center gap-2.5 px-6 py-1">
              <div className={`w-7 h-7 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                {icon}
              </div>
              <span className="text-[12.5px] font-semibold text-stone-500 whitespace-nowrap">{text}</span>
            </div>
            {i < taglines.length - 1 &&
          <div className="hidden sm:block w-px h-5 bg-stone-300 shrink-0" />
          }
          </div>
        )}
      </div>

    </section>);

}