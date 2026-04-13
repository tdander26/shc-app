import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── Sample content used across all layouts ───
const sampleData = {
  symptom: "Chronic Fatigue & Low Energy",
  category: "Fatigue / Low Energy",
  overview: {
    title: "Overview",
    subtitle: "Understanding Your Fatigue Pattern",
    body: "Your symptom profile suggests a pattern consistent with adrenal fatigue and possible mitochondrial dysfunction. Chronic fatigue affecting daily function — particularly when paired with mid-afternoon energy crashes and unrefreshing sleep — often points to HPA axis dysregulation, nutrient depletion, or subclinical thyroid imbalance.",
    highlights: [
      "HPA axis dysregulation is the most common root cause of persistent fatigue in otherwise healthy adults",
      "Mitochondrial energy production depends heavily on B-vitamins, CoQ10, and magnesium",
      "Thyroid function should be evaluated with a full panel (TSH, Free T3, Free T4, and antibodies)",
    ],
    labsToConsider: ["Complete Metabolic Panel", "Thyroid Full Panel", "Cortisol (4-point saliva)", "Vitamin D, B12, Ferritin"],
  },
  lifestyle: {
    title: "Lifestyle & Dietary",
    subtitle: "Targeted Changes for Energy Recovery",
    recommendations: [
      { label: "Morning Sunlight Exposure", desc: "Get 10–15 minutes of direct sunlight within 30 minutes of waking to reset circadian rhythm and support cortisol awakening response.", priority: "high" },
      { label: "Blood Sugar Stabilization", desc: "Eat a protein-rich breakfast within 1 hour of waking. Include 20–30g protein with healthy fats. Avoid starting the day with caffeine on an empty stomach.", priority: "high" },
      { label: "Movement Timing", desc: "Gentle movement (walking, yoga) in the morning. Avoid intense exercise after 4pm, which can further tax the adrenals.", priority: "medium" },
      { label: "Sleep Hygiene Protocol", desc: "Dim lights by 8pm. No screens 1 hour before bed. Keep bedroom at 65–68°F. Target 7.5–9 hours in bed.", priority: "high" },
      { label: "Anti-Inflammatory Diet Focus", desc: "Emphasize leafy greens, wild-caught fish, berries, and turmeric. Reduce sugar, processed foods, and alcohol for 30 days.", priority: "medium" },
    ],
  },
  supplements: {
    title: "Nutritional Supplements",
    subtitle: "Practitioner-Recommended Protocol",
    items: [
      { name: "Magnesium Glycinate", dose: "400mg nightly", why: "Supports 300+ enzymatic reactions including energy production. Glycinate form is best absorbed and promotes relaxation.", duration: "Ongoing", priority: "essential" },
      { name: "Vitamin B Complex (Methylated)", dose: "1 capsule with breakfast", why: "Methylated B-vitamins support mitochondrial ATP production and adrenal function. Critical if MTHFR variants are present.", duration: "3–6 months", priority: "essential" },
      { name: "CoQ10 (Ubiquinol)", dose: "200mg with meal", why: "Direct mitochondrial fuel. Ubiquinol is the reduced, bioavailable form. Especially important if over 40 or on statins.", duration: "3–6 months", priority: "essential" },
      { name: "Adaptogenic Blend (Ashwagandha + Rhodiola)", dose: "AM dose per label", why: "Ashwagandha modulates cortisol; Rhodiola supports mental energy and stress resilience without stimulation.", duration: "8–12 weeks, then reassess", priority: "recommended" },
      { name: "Vitamin D3 + K2", dose: "5000 IU D3 / 100mcg K2 daily", why: "Vitamin D deficiency is strongly correlated with fatigue. K2 ensures proper calcium metabolism.", duration: "Until serum level reaches 50–70 ng/mL", priority: "recommended" },
    ],
    disclaimer: "These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. Always consult your healthcare provider before starting any supplement protocol.",
  },
};

// ─── Color Tokens ───
const C = {
  brand: "#1B5E8C",
  brandDark: "#0F3D5C",
  brandLight: "#E8F4FD",
  accent: "#2E7D32",
  accentLight: "#E8F5E9",
  warm: "#F57C00",
  warmLight: "#FFF3E0",
  bg: "#F8FAFB",
  card: "#FFFFFF",
  text: "#1A1A2E",
  muted: "#64748B",
  border: "#E2E8F0",
};

const priorityColor = (p) =>
  p === "high" || p === "essential" ? C.warm : C.accent;
const priorityBadge = (p) =>
  p === "high" || p === "essential"
    ? "bg-orange-100 text-orange-700"
    : "bg-green-100 text-green-700";

// ─── Icon Components ───
const IconOverview = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const IconLifestyle = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);
const IconSupplement = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <rect x="6" y="3" width="12" height="18" rx="3" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <path d="M9 7h6M9 17h6" strokeWidth="1.5" />
  </svg>
);
const IconChevron = ({ open }) => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
const IconCheck = () => (
  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 13l4 4L19 7" />
  </svg>
);
const IconFlask = () => (
  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path d="M9 3h6M10 3v7.4a2 2 0 01-.5 1.3L4 19a1 1 0 00.8 1.6h14.4a1 1 0 00.8-1.6l-5.5-7.3a2 2 0 01-.5-1.3V3" />
  </svg>
);

// ═══════════════════════════════════════════
//  LAYOUT 1 — STACKED CARDS
// ═══════════════════════════════════════════
function Layout1() {
  const d = sampleData;
  return (
    <div className="space-y-4">
      <div className="rounded-2xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}` }}>
        <div className="px-5 py-3 flex items-center gap-3" style={{ background: C.brand }}>
          <span className="text-white"><IconOverview /></span>
          <div>
            <p className="text-white font-semibold text-sm">{d.overview.title}</p>
            <p className="text-blue-100 text-xs">{d.overview.subtitle}</p>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm leading-relaxed" style={{ color: C.text }}>{d.overview.body}</p>
          <div className="mt-4 space-y-2">
            {d.overview.highlights.map((h, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="mt-1 flex-shrink-0" style={{ color: C.accent }}><IconCheck /></span>
                <p className="text-xs" style={{ color: C.muted }}>{h}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg" style={{ background: C.brandLight }}>
            <p className="text-xs font-semibold mb-1" style={{ color: C.brand }}>Labs to Consider</p>
            <div className="flex flex-wrap gap-1.5">
              {d.overview.labsToConsider.map((l, i) => (
                <span key={i} className="px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: C.card, color: C.brand, border: `1px solid ${C.brand}30` }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}` }}>
        <div className="px-5 py-3 flex items-center gap-3" style={{ background: C.accent }}>
          <span className="text-white"><IconLifestyle /></span>
          <div>
            <p className="text-white font-semibold text-sm">{d.lifestyle.title}</p>
            <p className="text-green-100 text-xs">{d.lifestyle.subtitle}</p>
          </div>
        </div>
        <div className="p-5 space-y-3">
          {d.lifestyle.recommendations.map((r, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style={{ background: priorityColor(r.priority) }}>{i + 1}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold" style={{ color: C.text }}>{r.label}</p>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${priorityBadge(r.priority)}`}>{r.priority}</span>
                </div>
                <p className="text-xs mt-0.5" style={{ color: C.muted }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}` }}>
        <div className="px-5 py-3 flex items-center gap-3" style={{ background: C.brandDark }}>
          <span className="text-white"><IconSupplement /></span>
          <div>
            <p className="text-white font-semibold text-sm">{d.supplements.title}</p>
            <p className="text-blue-200 text-xs">{d.supplements.subtitle}</p>
          </div>
        </div>
        <div className="p-5 space-y-3">
          {d.supplements.items.map((s, i) => (
            <div key={i} className="p-3 rounded-xl" style={{ background: i % 2 === 0 ? C.bg : C.card, border: `1px solid ${C.border}` }}>
              <div className="flex justify-between items-start">
                <p className="text-sm font-bold" style={{ color: C.text }}>{s.name}</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.priority === "essential" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{s.priority}</span>
              </div>
              <p className="text-xs font-semibold mt-1" style={{ color: C.brand }}>{s.dose} · {s.duration}</p>
              <p className="text-xs mt-1" style={{ color: C.muted }}>{s.why}</p>
            </div>
          ))}
          <p className="text-xs italic mt-3 px-1" style={{ color: "#94A3B8" }}>{d.supplements.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
//  LAYOUT 2 — TABBED PANELS
// ═══════════════════════════════════════════
function Layout2() {
  const [tab, setTab] = useState(0);
  const d = sampleData;
  const tabs = [
    { icon: <IconOverview />, label: "Overview", color: C.brand },
    { icon: <IconLifestyle />, label: "Lifestyle", color: C.accent },
    { icon: <IconSupplement />, label: "Supplements", color: C.brandDark },
  ];
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}` }}>
      <div className="flex" style={{ borderBottom: `2px solid ${C.border}` }}>
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} className="flex-1 py-3 flex flex-col items-center gap-1 transition-all duration-200"
            style={{ background: tab === i ? `${t.color}10` : "transparent", borderBottom: tab === i ? `3px solid ${t.color}` : "3px solid transparent", color: tab === i ? t.color : C.muted }}>
            {t.icon}
            <span className="text-xs font-semibold">{t.label}</span>
          </button>
        ))}
      </div>
      <div className="p-5">
        {tab === 0 && (
          <div>
            <h3 className="text-base font-bold mb-1" style={{ color: C.brand }}>{d.overview.subtitle}</h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.text }}>{d.overview.body}</p>
            <div className="space-y-3">
              {d.overview.highlights.map((h, i) => (
                <div key={i} className="flex gap-3 items-start p-3 rounded-xl" style={{ background: C.brandLight }}>
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: C.brand }}>{i + 1}</span>
                  <p className="text-xs leading-relaxed" style={{ color: C.text }}>{h}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <div className="flex items-center gap-2 mb-2">
                <IconFlask />
                <p className="text-sm font-semibold" style={{ color: C.brand }}>Recommended Lab Work</p>
              </div>
              {d.overview.labsToConsider.map((l, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: C.brand }} />
                  <span className="text-xs" style={{ color: C.text }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 1 && (
          <div>
            <h3 className="text-base font-bold mb-3" style={{ color: C.accent }}>{d.lifestyle.subtitle}</h3>
            {d.lifestyle.recommendations.map((r, i) => (
              <div key={i} className="mb-4 pb-4" style={{ borderBottom: i < d.lifestyle.recommendations.length - 1 ? `1px solid ${C.border}` : "none" }}>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: `${priorityColor(r.priority)}20` }}>
                    <span className="text-xs font-bold" style={{ color: priorityColor(r.priority) }}>{i + 1}</span>
                  </div>
                  <p className="text-sm font-semibold" style={{ color: C.text }}>{r.label}</p>
                  <span className={`text-xs px-1.5 py-0.5 rounded font-medium ${priorityBadge(r.priority)}`}>{r.priority}</span>
                </div>
                <p className="text-xs leading-relaxed ml-7" style={{ color: C.muted }}>{r.desc}</p>
              </div>
            ))}
          </div>
        )}
        {tab === 2 && (
          <div>
            <h3 className="text-base font-bold mb-3" style={{ color: C.brandDark }}>{d.supplements.subtitle}</h3>
            {d.supplements.items.map((s, i) => (
              <div key={i} className="mb-3 p-4 rounded-xl" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-bold" style={{ color: C.text }}>{s.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.priority === "essential" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{s.priority}</span>
                </div>
                <div className="flex gap-3 mb-2">
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: C.brandLight, color: C.brand }}>{s.dose}</span>
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: C.accentLight, color: C.accent }}>{s.duration}</span>
                </div>
                <p className="text-xs" style={{ color: C.muted }}>{s.why}</p>
              </div>
            ))}
            <p className="text-xs italic mt-4" style={{ color: "#94A3B8" }}>{d.supplements.disclaimer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
//  LAYOUT 3 — VERTICAL JOURNEY / TIMELINE
// ═══════════════════════════════════════════
function Layout3() {
  const d = sampleData;
  const sections = [
    { icon: <IconOverview />, color: C.brand, lightBg: C.brandLight, title: d.overview.title, sub: d.overview.subtitle },
    { icon: <IconLifestyle />, color: C.accent, lightBg: C.accentLight, title: d.lifestyle.title, sub: d.lifestyle.subtitle },
    { icon: <IconSupplement />, color: C.brandDark, lightBg: "#EDE7F6", title: d.supplements.title, sub: d.supplements.subtitle },
  ];
  return (
    <div className="relative pl-10">
      <div className="absolute left-4 top-4 bottom-4 w-0.5" style={{ background: `linear-gradient(to bottom, ${C.brand}, ${C.accent}, ${C.brandDark})` }} />

      {sections.map((sec, si) => (
        <div key={si} className="relative mb-6">
          <div className="absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-md" style={{ background: sec.color, top: "0.5rem" }}>
            {sec.icon}
          </div>

          <div className="rounded-2xl overflow-hidden" style={{ background: C.card, border: `1px solid ${C.border}` }}>
            <div className="px-5 py-3" style={{ background: sec.lightBg, borderBottom: `2px solid ${sec.color}` }}>
              <p className="text-sm font-bold" style={{ color: sec.color }}>{sec.title}</p>
              <p className="text-xs" style={{ color: C.muted }}>{sec.sub}</p>
            </div>
            <div className="p-5">
              {si === 0 && (
                <>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: C.text }}>{d.overview.body}</p>
                  {d.overview.highlights.map((h, i) => (
                    <div key={i} className="flex gap-2 items-start mb-2">
                      <span className="text-green-600 mt-0.5 flex-shrink-0"><IconCheck /></span>
                      <p className="text-xs" style={{ color: C.muted }}>{h}</p>
                    </div>
                  ))}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {d.overview.labsToConsider.map((l, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs" style={{ background: C.brandLight, color: C.brand }}>
                        <IconFlask />{l}
                      </span>
                    ))}
                  </div>
                </>
              )}
              {si === 1 && d.lifestyle.recommendations.map((r, i) => (
                <div key={i} className="flex gap-3 mb-3 pb-3" style={{ borderBottom: i < d.lifestyle.recommendations.length - 1 ? `1px dashed ${C.border}` : "none" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold text-white" style={{ background: `linear-gradient(135deg, ${C.accent}, ${C.accent}CC)` }}>{i + 1}</div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: C.text }}>{r.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: C.muted }}>{r.desc}</p>
                  </div>
                </div>
              ))}
              {si === 2 && (
                <>
                  {d.supplements.items.map((s, i) => (
                    <div key={i} className="flex gap-3 mb-3 items-start">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: s.priority === "essential" ? C.warmLight : C.brandLight }}>
                        <IconSupplement />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold" style={{ color: C.text }}>{s.name}</p>
                        <p className="text-xs font-medium" style={{ color: C.brand }}>{s.dose}</p>
                        <p className="text-xs mt-0.5" style={{ color: C.muted }}>{s.why}</p>
                      </div>
                    </div>
                  ))}
                  <p className="text-xs italic mt-3" style={{ color: "#94A3B8" }}>{d.supplements.disclaimer}</p>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════
//  LAYOUT 4 — MAGAZINE / EDITORIAL
// ═══════════════════════════════════════════
function Layout4() {
  const d = sampleData;
  return (
    <div className="space-y-0">
      <div className="p-6 rounded-t-2xl" style={{ background: `linear-gradient(135deg, ${C.brand}, ${C.brandDark})` }}>
        <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">Understanding Your Symptoms</p>
        <h2 className="text-xl font-bold text-white mb-3">{d.overview.subtitle}</h2>
        <p className="text-sm leading-relaxed text-blue-100">{d.overview.body}</p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {d.overview.labsToConsider.map((l, i) => (
            <div key={i} className="px-3 py-2 rounded-lg text-xs text-white font-medium" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)" }}>
              {l}
            </div>
          ))}
        </div>
      </div>

      <div className="p-4" style={{ background: C.brandLight }}>
        {d.overview.highlights.map((h, i) => (
          <div key={i} className="flex gap-2 items-start mb-2 last:mb-0">
            <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs" style={{ background: C.brand }}>{i + 1}</span>
            <p className="text-xs" style={{ color: C.brandDark }}>{h}</p>
          </div>
        ))}
      </div>

      <div className="p-6" style={{ background: C.card }}>
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: C.accent }}>Action Plan</p>
        <h2 className="text-lg font-bold mb-4" style={{ color: C.text }}>{d.lifestyle.subtitle}</h2>
        <div className="space-y-3">
          {d.lifestyle.recommendations.map((r, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="text-3xl font-black leading-none" style={{ color: `${C.accent}30`, minWidth: "2rem", textAlign: "right" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 pb-3" style={{ borderBottom: `1px solid ${C.border}` }}>
                <p className="text-sm font-bold" style={{ color: C.text }}>{r.label}</p>
                <p className="text-xs mt-1 leading-relaxed" style={{ color: C.muted }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-b-2xl" style={{ background: C.brandDark }}>
        <p className="text-xs uppercase tracking-widest text-blue-300 mb-1">Recommended Protocol</p>
        <h2 className="text-lg font-bold text-white mb-4">{d.supplements.subtitle}</h2>
        {d.supplements.items.map((s, i) => (
          <div key={i} className="mb-3 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-bold text-white">{s.name}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.priority === "essential" ? "bg-orange-500 text-white" : "bg-blue-400 text-white"}`}>{s.priority}</span>
            </div>
            <p className="text-xs text-blue-300">{s.dose} · {s.duration}</p>
            <p className="text-xs mt-1.5 text-blue-200 leading-relaxed">{s.why}</p>
          </div>
        ))}
        <p className="text-xs italic mt-4 text-blue-300 opacity-70">{d.supplements.disclaimer}</p>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════
//  LAYOUT 5 — EXPANDABLE ACCORDION
// ═══════════════════════════════════════════
function Layout5() {
  const [open, setOpen] = useState(0);
  const d = sampleData;

  const panels = [
    {
      icon: <IconOverview />, color: C.brand, lightBg: C.brandLight,
      title: d.overview.title, badge: `${d.overview.highlights.length} Key Insights`,
      content: (
        <div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: C.text }}>{d.overview.body}</p>
          <div className="grid gap-2">
            {d.overview.highlights.map((h, i) => (
              <div key={i} className="p-3 rounded-lg flex gap-2 items-start" style={{ background: C.brandLight }}>
                <span style={{ color: C.accent }} className="flex-shrink-0 mt-0.5"><IconCheck /></span>
                <p className="text-xs leading-relaxed" style={{ color: C.text }}>{h}</p>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <p className="text-xs font-bold mb-2" style={{ color: C.brand }}>Recommended Labs</p>
            <div className="flex flex-wrap gap-2">
              {d.overview.labsToConsider.map((l, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: C.bg, color: C.brand, border: `1px solid ${C.brand}30` }}>{l}</span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: <IconLifestyle />, color: C.accent, lightBg: C.accentLight,
      title: d.lifestyle.title, badge: `${d.lifestyle.recommendations.length} Recommendations`,
      content: (
        <div className="space-y-0">
          {d.lifestyle.recommendations.map((r, i) => (
            <div key={i} className="py-3 flex gap-3" style={{ borderBottom: i < d.lifestyle.recommendations.length - 1 ? `1px solid ${C.border}` : "none" }}>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: priorityColor(r.priority) }}>{i + 1}</div>
                <span className="text-xs" style={{ color: priorityColor(r.priority) }}>{r.priority}</span>
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: C.text }}>{r.label}</p>
                <p className="text-xs mt-0.5 leading-relaxed" style={{ color: C.muted }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: <IconSupplement />, color: C.brandDark, lightBg: "#EDE7F6",
      title: d.supplements.title, badge: `${d.supplements.items.length} Supplements`,
      content: (
        <div>
          <div className="space-y-2">
            {d.supplements.items.map((s, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
                <div className="px-4 py-2 flex justify-between items-center" style={{ background: s.priority === "essential" ? C.warmLight : C.bg }}>
                  <div>
                    <p className="text-sm font-bold" style={{ color: C.text }}>{s.name}</p>
                    <p className="text-xs" style={{ color: C.brand }}>{s.dose}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${s.priority === "essential" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>{s.priority}</span>
                    <p className="text-xs mt-0.5" style={{ color: C.muted }}>{s.duration}</p>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{s.why}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs italic mt-4" style={{ color: "#94A3B8" }}>{d.supplements.disclaimer}</p>
        </div>
      ),
    },
  ];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
      {panels.map((p, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center gap-3 px-5 py-4 transition-all duration-200"
            style={{ background: open === i ? p.lightBg : C.card, borderBottom: `1px solid ${C.border}` }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: p.color }}>
              {p.icon}
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-bold" style={{ color: C.text }}>{p.title}</p>
              <p className="text-xs" style={{ color: C.muted }}>{p.badge}</p>
            </div>
            <IconChevron open={open === i} />
          </button>
          {open === i && (
            <div className="px-5 py-4" style={{ background: C.card, borderBottom: `1px solid ${C.border}` }}>
              {p.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════
//  LAYOUT META + MAIN PROTOTYPE PAGE
// ═══════════════════════════════════════════
const layoutMeta = [
  { id: 1, name: "Stacked Cards", desc: "Clean, scrollable cards with color-coded headers for each section. Best for users who want to see everything at a glance.", comp: Layout1 },
  { id: 2, name: "Tabbed Panels", desc: "Compact tab navigation keeps all three sections in one container. Great for saving vertical space and focused reading.", comp: Layout2 },
  { id: 3, name: "Journey Timeline", desc: "Vertical timeline that guides users through a visual progression from understanding to action to protocol.", comp: Layout3 },
  { id: 4, name: "Magazine Editorial", desc: "Bold, immersive editorial style with gradient hero sections and a dark supplement panel. Premium, modern feel.", comp: Layout4 },
  { id: 5, name: "Smart Accordion", desc: "Expandable panels that reveal one section at a time. Minimizes overwhelm and lets users focus on what matters.", comp: Layout5 },
];

export default function PrototypePage() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  if (selected !== null) {
    const layout = layoutMeta[selected];
    const Comp = layout.comp;
    return (
      <div className="min-h-screen" style={{ background: C.bg }}>
        {/* Top bar */}
        <div className="sticky top-0 z-50 px-4 py-3 flex items-center gap-3 shadow-sm" style={{ background: C.card, borderBottom: `1px solid ${C.border}` }}>
          <button onClick={() => setSelected(null)} className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: C.brandLight }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={C.brand} strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
            <p className="text-sm font-bold" style={{ color: C.text }}>Layout {layout.id}: {layout.name}</p>
            <p className="text-xs" style={{ color: C.muted }}>{sampleData.symptom}</p>
          </div>
        </div>

        {/* Phone frame */}
        <div className="max-w-sm mx-auto my-6 px-4">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ background: C.warm }} />
            <span className="text-xs font-medium" style={{ color: C.muted }}>{sampleData.category}</span>
          </div>
          <h1 className="text-lg font-bold mb-4" style={{ color: C.text }}>{sampleData.symptom}</h1>
          <Comp />
        </div>

        {/* Layout switcher strip */}
        <div className="fixed bottom-0 left-0 right-0 px-3 py-2 flex gap-2 overflow-x-auto" style={{ background: C.card, borderTop: `1px solid ${C.border}` }}>
          {layoutMeta.map((l, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all"
              style={{
                background: selected === i ? C.brand : C.bg,
                color: selected === i ? "white" : C.muted,
                border: `1px solid ${selected === i ? C.brand : C.border}`,
              }}>
              {l.id}. {l.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ─── PROTOTYPE SPLASH PAGE ───
  return (
    <div className="min-h-screen flex flex-col" style={{ background: `linear-gradient(180deg, ${C.brandDark} 0%, ${C.brand} 100%)` }}>
      {/* Back to app button */}
      <div className="px-4 pt-4">
        <button
          onClick={() => navigate('/home')}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-white text-sm font-medium"
          style={{ background: "rgba(255,255,255,0.15)" }}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M15 19l-7-7 7-7" /></svg>
          Back to App
        </button>
      </div>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}>
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="white" strokeWidth="1.5" />
            <path d="M12 8v4m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 12h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Symptom Solution</h1>
        <p className="text-blue-200 text-sm mb-1">by Dr. Todd Anderson</p>
        <p className="text-blue-300 text-xs max-w-xs mb-10 leading-relaxed">
          Explore 5 different ways to display your results — Overview, Lifestyle & Dietary, and Supplement recommendations.
        </p>

        <div className="w-full max-w-sm space-y-3">
          {layoutMeta.map((l, i) => (
            <button key={i} onClick={() => setSelected(i)} className="w-full text-left px-5 py-4 rounded-2xl flex items-center gap-4 transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-black" style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
                {l.id}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-white">{l.name}</p>
                <p className="text-xs text-blue-200 leading-snug">{l.desc}</p>
              </div>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M9 5l7 7-7 7" /></svg>
            </button>
          ))}
        </div>
      </div>

      <div className="pb-6 pt-4 text-center">
        <p className="text-xs text-blue-300 opacity-60">Display Concept Prototype · April 2026</p>
      </div>
    </div>
  );
}
