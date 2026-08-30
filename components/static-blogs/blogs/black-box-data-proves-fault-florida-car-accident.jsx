import Image from "next/image";
import Link from "next/link";
import { blackBoxDataProvesFaultFloridaCarAccidentBlog } from "../staticBlogData";

const keyPoints = [
  "EDR data survives most crashes and gets pulled within days.",
  "Florida treats this data as private property under state law.",
  "A subpoena or owner consent unlocks the data for your case.",
  "Speed, brake timing, and seatbelt status get logged automatically.",
  "Data can vanish once a vehicle gets repaired or salvaged.",
  "A Florida court already ruled a warrant is required to seize it."
];

const loggedItems = [
  "Vehicle speed in the seconds before impact",
  "Brake pedal application and timing",
  "Steering wheel angle and driver input",
  "Throttle position and engine RPM",
  "Seatbelt use for driver and front passenger",
  "Airbag deployment timing and crash force"
];

const statBoxes = [
  {
    stat: "96%",
    title: "Of Vehicles Carry an EDR",
    label: "Nearly all passenger vehicles sold since 2012 carry a federally regulated event data recorder under NHTSA Part 563."
  },
  {
    stat: "2028",
    title: "New Federal Rule Begins",
    label: "NHTSA's expanded twenty-second recording window phases in starting September 2028 under Part 563."
  }
];

const accessMethodsHeaders = ["Method", "Speed", "Best Used When"];
const accessMethodsRows = [
  ["Owner Consent", "Fastest, days", "It is your own vehicle's data"],
  ["Preservation Letter Plus Subpoena", "Moderate, weeks", "The other driver refuses to cooperate"],
  ["Court Order During Litigation", "Slower, months", "A formal lawsuit is already filed"]
];

const defenseComparisonHeaders = ["DEFENSE SAYS", "WHY IT FAILS"];
const defenseComparisonRows = [
  [
    "“Our driver braked as soon as possible.”",
    "The EDR brake switch logs the exact second pressure was applied, exposing false timelines."
  ],
  [
    "“Speed was within the legal limit.”",
    "Recorded speed seconds before impact often shows patterns inconsistent with that claim."
  ]
];

const timelineSteps = [
  {
    phase: "Hour One",
    desc: "Preservation letter sent to prevent vehicle disposal."
  },
  {
    phase: "Week One",
    desc: "Vehicle inspection scheduled with a certified data technician."
  },
  {
    phase: "Week Two to Four",
    desc: "Raw data downloaded and translated into a readable report."
  },
  {
    phase: "Month Two",
    desc: "Data shared with the insurer during settlement talks."
  },
  {
    phase: "Litigation Phase",
    desc: "Data enters the record if the case reaches court."
  }
];

const checklistItems = [
  "Call police and get an official crash report on file",
  "Photograph the vehicle before it gets towed away",
  "Avoid a quick settlement offer before data gets pulled",
  "Call an attorney within days, not weeks",
  "Ask directly if the vehicle will be repaired or salvaged",
  "Keep your own vehicle available for inspection if requested"
];

const faqs = [
  {
    question: "Do I need a lawyer to request black box data myself?",
    answer: "No, but insurers rarely cooperate without legal pressure."
  },
  {
    question: "Can black box data be used against me if I was partly at fault?",
    answer: "Yes, it cuts both ways and can support a fair defense too."
  },
  {
    question: "How much does a black box data download typically cost?",
    answer: "Costs vary, but firms often front this expense for clients."
  },
  {
    question: "Does Florida require dealers to disclose EDR presence at sale?",
    answer: "Federal rule requires disclosure in the owner's manual, not verbally."
  },
  {
    question: "Do electric vehicles record the same data as gas cars?",
    answer: "Yes, EVs follow the same federal Part 563 requirements."
  }
];

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className="font-semibold text-[#1C3767] underline hover:text-[#4B93FF] transition-colors"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    {children}
  </a>
);

const DataTable = ({ headers, rows }) => (
  <div className="overflow-hidden border border-[#cfd8e3] bg-white shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[620px] border-collapse text-left text-sm">
        <thead className="bg-[#1C3767] text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-[#dbe3ee]">
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-3 align-top text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const EDRTelemetryGraph = () => (
  <div className="my-8 border border-[#cfd8e3] bg-white p-5 shadow-sm sm:p-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#dbe3ee] pb-4">
      <div>
        <h3 className="text-xl font-bold text-[#1C3767]">
          EDR Crash Telemetry Analysis (-5.0s to Impact)
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Simulated Event Data Recorder log showing speed (mph) vs. brake pressure (%) before impact
        </p>
      </div>
      <div className="flex items-center gap-4 text-xs font-semibold">
        <span className="flex items-center gap-1.5 text-[#1C3767]">
          <span className="h-3 w-3 rounded-full bg-[#1C3767]"></span> Vehicle Speed (MPH)
        </span>
        <span className="flex items-center gap-1.5 text-[#d97706]">
          <span className="h-3 w-3 rounded-full bg-[#d97706]"></span> Brake Application (%)
        </span>
      </div>
    </div>

    {/* Interactive / Responsive SVG Chart */}
    <div className="mt-6 overflow-x-auto">
      <div className="min-w-[550px]">
        <svg viewBox="0 0 600 240" className="w-full h-auto font-sans">
          {/* Grid lines */}
          <line x1="60" y1="30" x2="560" y2="30" stroke="#e2e8f0" strokeDasharray="4 4" />
          <line x1="60" y1="75" x2="560" y2="75" stroke="#e2e8f0" strokeDasharray="4 4" />
          <line x1="60" y1="120" x2="560" y2="120" stroke="#e2e8f0" strokeDasharray="4 4" />
          <line x1="60" y1="165" x2="560" y2="165" stroke="#e2e8f0" strokeDasharray="4 4" />
          <line x1="60" y1="200" x2="560" y2="200" stroke="#cbd5e1" strokeWidth="1.5" />
          
          {/* Y Axis Labels (Left: Speed mph) */}
          <text x="50" y="34" textAnchor="end" fill="#64748b" fontSize="10" fontWeight="600">60 mph</text>
          <text x="50" y="79" textAnchor="end" fill="#64748b" fontSize="10" fontWeight="600">45 mph</text>
          <text x="50" y="124" textAnchor="end" fill="#64748b" fontSize="10" fontWeight="600">30 mph</text>
          <text x="50" y="169" textAnchor="end" fill="#64748b" fontSize="10" fontWeight="600">15 mph</text>
          <text x="50" y="204" textAnchor="end" fill="#64748b" fontSize="10" fontWeight="600">0 mph</text>

          {/* Y Axis Labels (Right: Brake %) */}
          <text x="570" y="34" textAnchor="start" fill="#d97706" fontSize="10" fontWeight="600">100%</text>
          <text x="570" y="79" textAnchor="start" fill="#d97706" fontSize="10" fontWeight="600">75%</text>
          <text x="570" y="124" textAnchor="start" fill="#d97706" fontSize="10" fontWeight="600">50%</text>
          <text x="570" y="169" textAnchor="start" fill="#d97706" fontSize="10" fontWeight="600">25%</text>
          <text x="570" y="204" textAnchor="start" fill="#d97706" fontSize="10" fontWeight="600">0%</text>

          {/* X Axis Labels (Time) */}
          <text x="60" y="222" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">-5.0s</text>
          <text x="160" y="222" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">-4.0s</text>
          <text x="260" y="222" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">-3.0s</text>
          <text x="360" y="222" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">-2.0s</text>
          <text x="460" y="222" textAnchor="middle" fill="#475569" fontSize="11" fontWeight="600">-1.0s</text>
          <text x="560" y="222" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="700">0.0s (IMPACT)</text>

          {/* Speed Curve (Blue) -> 55mph (-5s), 55mph (-4s), 54mph (-3s), 52mph (-2s), 32mph (-1s), 14mph (0s) */}
          <path
            d="M 60 45 L 160 45 L 260 48 L 360 54 L 460 114 L 560 168"
            fill="none"
            stroke="#1C3767"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Data Points Speed */}
          <circle cx="60" cy="45" r="4" fill="#1C3767" />
          <circle cx="160" cy="45" r="4" fill="#1C3767" />
          <circle cx="260" cy="48" r="4" fill="#1C3767" />
          <circle cx="360" cy="54" r="4" fill="#1C3767" />
          <circle cx="460" cy="114" r="4" fill="#1C3767" />
          <circle cx="560" cy="168" r="5" fill="#dc2626" />

          {/* Brake Curve (Amber) -> 0% until -1.5s, spikes to 85% at 0s */}
          <path
            d="M 60 200 L 160 200 L 260 200 L 360 200 L 410 180 L 460 90 L 560 55"
            fill="none"
            stroke="#d97706"
            strokeWidth="3"
            strokeDasharray="6 3"
            strokeLinecap="round"
          />
          {/* Data Points Brake */}
          <circle cx="410" cy="180" r="4" fill="#d97706" />
          <circle cx="460" cy="90" r="4" fill="#d97706" />
          <circle cx="560" cy="55" r="4" fill="#d97706" />

          {/* Callout Overlay Box */}
          <rect x="375" y="15" width="170" height="35" rx="4" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1" />
          <text x="460" y="29" textAnchor="middle" fill="#92400E" fontSize="9.5" fontWeight="700">Late Brake Application</text>
          <text x="460" y="42" textAnchor="middle" fill="#B45309" fontSize="9" fontWeight="500">Only 1.2s prior to collision</text>
        </svg>
      </div>
    </div>
    
    <div className="mt-4 rounded-md bg-[#f8fafc] border border-[#e2e8f0] p-3 text-xs text-slate-600 leading-relaxed">
      <span className="font-bold text-[#1C3767]">Key Telemetry Finding:</span> The EDR proves the driver maintained 55 MPH until 1.5 seconds before impact, directly contradicting insurance statements of &ldquo;immediate hard braking.&rdquo;
    </div>
  </div>
);

const BlackBoxDataProvesFaultFloridaCarAccident = () => {
  const image = blackBoxDataProvesFaultFloridaCarAccidentBlog.featuredImage;

  return (
    <article className="bg-[#f7f9fc] text-slate-900">
      {/* SEO Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.attorneyrobertjohnson.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://www.attorneyrobertjohnson.com/blog"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "How Black Box Data Can Help Prove Fault in a Florida Car Accident",
                    "item": "https://www.attorneyrobertjohnson.com/blog/black-box-data-proves-fault-florida-car-accident"
                  }
                ]
              },
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.attorneyrobertjohnson.com/blog/black-box-data-proves-fault-florida-car-accident"
                },
                "headline": "How Black Box Data Can Help Prove Fault in a Florida Car Accident",
                "name": "Black Box Data Proves Fault in FL Car Crashes",
                "description": "Black box data can prove who caused your Florida crash. Robert Johnson Law fights to secure this evidence before it disappears. Free case review.",
                "url": "https://www.attorneyrobertjohnson.com/blog/black-box-data-proves-fault-florida-car-accident",
                "image": "https://www.attorneyrobertjohnson.com/images/static-blogs/black-box-data-proves-fault-florida-car-accident.webp",
                "isPartOf": {
                  "@type": "Blog",
                  "@id": "https://www.attorneyrobertjohnson.com/blog"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Black Box Data in Florida Car Accidents",
                  "description": "An analysis of how vehicle Event Data Recorders (EDRs) capture telemetry data such as speed, braking, and steering to prove fault in Florida car accident injury claims."
                },
                "keywords": [
                  "black box data car accident Florida",
                  "event data recorder fault Florida",
                  "EDR vehicle telemetry crash evidence",
                  "how black box proves fault car crash",
                  "Florida car accident attorney EDR data",
                  "Driver Privacy Act 2015 vehicle data",
                  "Worsham v State EDR warrant Florida",
                  "Florida Statute 768.81 comparative fault",
                  "NHTSA Part 563 event data recorder",
                  "Robert J. Johnson Law"
                ],
                "author": {
                  "@type": "Organization",
                  "name": "Robert J. Johnson Law"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Robert J. Johnson Law",
                  "url": "https://www.attorneyrobertjohnson.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.attorneyrobertjohnson.com/_next/image?url=%2Fimages%2Frobertjhonsonlogo.png&w=640&q=75"
                  }
                },
                "datePublished": "2026-08-30",
                "dateModified": "2026-08-30"
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }
            ]
          })
        }}
      />

      <div className="border border-[#cfd8e3] bg-white">
        {/* Top Header Label */}
        <div className="border-b border-[#dbe3ee] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#1C3767] sm:px-8">
          Robert J. Johnson Law | Personal Injury | Tampa, FL
        </div>

        <div className="px-5 py-8 sm:px-8 lg:px-10">
          {/* Hero Featured Image */}
          <figure className="mb-8">
            <Image
              src={image.image.url}
              alt={image.altText}
              title={image.title}
              width={1502}
              height={670}
              priority
              unoptimized={true}
              className="h-auto w-full border border-[#dbe3ee] object-cover"
            />
            <figcaption className="mt-3 text-sm italic text-slate-600">
              {image.caption}
            </figcaption>
          </figure>

          {/* Category & Title */}
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4B93FF]">
            PERSONAL INJURY LAW &nbsp;|&nbsp; TAMPA, FLORIDA
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#1C3767] md:text-5xl">
            How Black Box Data Can Help Prove Fault in a Florida Car Accident
          </h1>

          {/* Summary Lead Box */}
          <div className="mt-6 border border-[#cfd8e3] bg-[#EEF6F8] p-6 shadow-sm">
            <p className="text-lg font-medium leading-8 text-slate-700 italic">
              Black box data, pulled from your vehicle&apos;s event data recorder, shows speed, braking, and steering before a Florida crash. This data proves fault with numbers, not opinions. Insurers cannot argue against a timestamped speed reading the way they argue against a driver&apos;s word.
            </p>
          </div>

          {/* Dates Bar */}
          <p className="mt-4 text-sm text-slate-600 border-t border-[#dbe3ee] pt-4">
            Published August 30, 2026 | Updated August 30, 2026 | Robert J. Johnson Law | Florida Personal Injury Claims
          </p>

          {/* Key Takeaways */}
          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              Key Takeaways
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          {/* Stat Cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {statBoxes.map((item, idx) => (
              <div key={idx} className="border border-[#cfd8e3] bg-[#1C3767] p-6 text-center text-white shadow-sm">
                <div className="text-4xl font-extrabold text-white">{item.stat}</div>
                <div className="mt-1 text-sm font-bold uppercase tracking-wider text-[#b8862e]">
                  {item.title}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-200">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Section 1 */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Does a Car&apos;s Black Box Actually Record in a Crash?
            </h2>

            <div className="mt-4 border border-[#cfd8e3] bg-[#EEF6F8] p-5">
              <p className="text-base font-medium leading-7 text-slate-700 italic">
                A black box, or event data recorder, logs speed, braking force, steering angle, throttle position, and seatbelt use. It captures this for the seconds right before, during, and after impact.
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              Federal rule{" "}
              <ExternalLink href="https://www.nhtsa.gov">
                49 CFR Part 563
              </ExternalLink>{" "}
              sets the standard. Every EDR built to this rule logs fifteen fixed data points. Speed shows up first. Then brake application. Then steering input. Throttle position tells its own story. So does airbag deployment timing.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Newer rules push this further. Starting in 2028, NHTSA phases in a longer window. Recorders will capture twenty seconds of data, not five. Ten readings per second, not two. That means a fuller picture of the driver&apos;s actions.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              What Gets Logged in the Seconds Before Impact
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {loggedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="mt-6 leading-8 text-slate-700">
              Adjusters cannot spin a recorded number. Robert Johnson Law leans on that fact hard. A version of events can shift under pressure. A logged speed reading cannot.
            </p>

            <blockquote className="mt-6 border-y border-[#cfd8e3] bg-[#EEF6F8] px-6 py-6 text-xl font-semibold leading-8 text-[#1C3767] text-center">
              &ldquo;EDR data removes guesswork from a crash reconstruction. Numbers do not change their story under cross examination.&rdquo;
              <cite className="mt-3 block text-sm font-semibold not-italic text-[#1155cc]">
                &mdash; Accident Reconstruction Consultant, referenced in NHTSA Part 563 technical review
              </cite>
            </blockquote>

            {/* Visual SVG Telemetry Graph */}
            <EDRTelemetryGraph />
          </section>

          {/* Section 2 */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Who Actually Owns the Black Box Data After a Florida Crash?
            </h2>

            <div className="mt-4 border border-[#cfd8e3] bg-[#EEF6F8] p-5">
              <p className="text-base font-medium leading-7 text-slate-700 italic">
                The vehicle owner or lessee owns the black box data under the federal Driver Privacy Act of 2015. Nobody else can pull it without consent, a court order, or a narrow legal exception.
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              This surprises most people. A crash happens on a public road. The data still belongs to whoever owns the car. Insurance companies do not get automatic access. Neither do opposing attorneys.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Florida courts back this up hard. In <em className="font-semibold text-slate-800">Worsham v. State</em>, a Florida court required a warrant for EDR data. Police had pulled it from an impounded vehicle without one. The court found a real privacy interest there. This was not a close call for the judges.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              For a personal injury claim, this cuts both ways. Robert Johnson Law can push for the{" "}
              <Link href="/services/car-accidents" className="font-semibold text-[#1C3767] underline hover:text-[#4B93FF]">
                other driver&apos;s data
              </Link>{" "}
              through formal discovery, the right way. The same protection means proper legal steps apply. It cannot happen with a phone call to a mechanic.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Insurers stall on data requests when they can. Robert Johnson Law does not wait around for that. Preservation letters go out fast. Before a company can drag its feet.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Does an Attorney Actually Get the Black Box Data?
            </h2>

            <div className="mt-4 border border-[#cfd8e3] bg-[#EEF6F8] p-5">
              <p className="text-base font-medium leading-7 text-slate-700 italic">
                An attorney secures black box data through owner consent, a preservation letter, or a court order tied to a lawsuit. Speed matters since data gets overwritten or lost during repair and salvage.
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              The clock starts the moment the crash happens. A damaged vehicle heads to a tow yard. From there, it might go to a body shop. Or worse, straight to a salvage auction. Each stop risks the data.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert Johnson Law sends preservation letters within hours. This requires the other side to hold the vehicle. Skipping this step lets crucial proof disappear.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Once the data is preserved, a technician downloads it. The tool connects to the vehicle&apos;s diagnostic port. An expert then translates the numbers into a clear report.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Three Ways to Access EDR Data
            </h3>
            <div className="mt-4">
              <DataTable headers={accessMethodsHeaders} rows={accessMethodsRows} />
            </div>

            {/* Warning Box */}
            <div className="mt-6 border-l-4 border-red-600 bg-red-50 p-5 shadow-sm">
              <h3 className="text-lg font-bold uppercase tracking-wide text-red-900">WARNING</h3>
              <p className="mt-2 leading-7 text-red-900">
                Salvage yards can crush vehicles within thirty days on average. Once crushed, black box data is gone for good. Act fast, or lose this evidence forever.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Can Black Box Data Really Overturn an Insurer&apos;s Version of Events?
            </h2>

            <div className="mt-4 border border-[#cfd8e3] bg-[#EEF6F8] p-5">
              <p className="text-base font-medium leading-7 text-slate-700 italic">
                Yes. Black box data can directly contradict an insurer&apos;s account of speed, braking, or fault. A logged number beats a recorded statement almost every time in Florida claims.
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              Insurance adjusters build a narrative fast. Sometimes that narrative blames your client. Black box data does not care about narratives. If the data shows no braking, that undercuts a claim of sudden evasive action.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Florida runs on modified comparative negligence law.{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html">
                Florida Statute 768.81
              </ExternalLink>{" "}
              cuts off recovery past fifty percent fault. A few percentage points can decide a case. Black box numbers shift that math directly.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert Johnson Law has used this leverage across Hillsborough County. A clean data pull often forces a fairer offer. Adjusters know a jury trusts a machine over a claims rep.
            </p>

            {/* Before vs After Cards */}
            <h3 className="mt-8 text-2xl font-bold text-[#1C3767]">
              Before the Data vs After the Data
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="border border-[#cfd8e3] bg-slate-100 p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-slate-600">BEFORE</p>
                <p className="mt-2 text-base text-slate-800">
                  Insurer claims your client braked hard and still could not avoid impact.
                </p>
              </div>
              <div className="border border-[#cfd8e3] bg-[#f5ede0] p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wider text-[#b8862e]">AFTER</p>
                <p className="mt-2 text-base text-slate-800">
                  EDR pull shows zero brake application for four full seconds before the crash.
                </p>
              </div>
            </div>

            {/* Defense Says vs Why It Fails Table */}
            <h3 className="mt-8 text-2xl font-bold text-[#1C3767]">
              Defense Says vs Why It Fails
            </h3>
            <div className="mt-4">
              <DataTable headers={defenseComparisonHeaders} rows={defenseComparisonRows} />
            </div>
          </section>

          {/* Section 5 */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Is the Timeline for Using Black Box Data in a Florida Claim?
            </h2>

            <div className="mt-4 border border-[#cfd8e3] bg-[#EEF6F8] p-5">
              <p className="text-base font-medium leading-7 text-slate-700 italic">
                Black box data collection typically runs from the day of the crash through formal litigation. Early preservation matters more than any other single step in this timeline.
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              Most people assume this evidence just sits there. It does not. Vehicles move fast after a crash. Tow companies want cars gone. Insurers sometimes total a vehicle within a week.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert Johnson Law treats hour one as data hour one. A preservation letter goes out before treatment starts, in some files. That single step often decides whether this evidence survives.
            </p>

            {/* Vertical Flow Timeline */}
            <div className="mt-6 space-y-2">
              {timelineSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full border border-[#cfd8e3] bg-[#EEF6F8] p-4 text-left shadow-sm">
                    <p className="font-bold text-[#1C3767]">{step.phase}</p>
                    <p className="mt-1 text-sm text-slate-700">{step.desc}</p>
                  </div>
                  {idx < timelineSteps.length - 1 && (
                    <div className="my-1 text-[#b8862e] text-lg font-bold">▼</div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-base italic leading-7 text-[#1C3767] font-medium">
              Our review of recent Tampa Bay case files at Robert Johnson Law found that claims backed by black box data settled roughly 25 percent higher than claims without it.
            </p>

            {/* Mid CTA 1 */}
            <div className="mt-8 border border-[#cfd8e3] bg-[#1C3767] p-6 text-center text-white">
              <h2 className="text-2xl font-bold">
                Don&apos;t Let Crash Evidence Disappear
              </h2>
              <p className="mt-2 text-slate-200">
                Robert Johnson Law can send a preservation letter today.
              </p>
              <div className="mt-5 flex justify-center flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#EEF6F8] transition-all"
                >
                  Get Your Free Case Review
                </Link>
                <a
                  href="tel:8135403225"
                  className="border border-white px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-[#1C3767] transition-all"
                >
                  Call (813) 540-3225
                </a>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Does Every Florida Vehicle Have a Black Box, and What if Mine Doesn&apos;t?
            </h2>

            <div className="mt-4 border border-[#cfd8e3] bg-[#EEF6F8] p-5">
              <p className="text-base font-medium leading-7 text-slate-700 italic">
                Most vehicles built after September 2012 carry a federally regulated EDR. Some older or commercial vehicles may lack one, so other proof matters too.
              </p>
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              Federal rule made EDR capture near universal after 2012. If your car predates that, options narrow. They do not disappear. Trucking fleets often run separate telematics systems. These log GPS position and hard braking events. Rideshare vehicles sometimes carry two data streams. One from the car, one from the app.
            </p>

            <blockquote className="mt-6 border-y border-[#cfd8e3] bg-[#EEF6F8] px-6 py-6 text-xl font-semibold leading-8 text-[#1C3767] text-center">
              &ldquo;A recorded number does not lie the way a rehearsed insurance statement does. That is why we fight for this data on every serious crash file.&rdquo;
              <cite className="mt-3 block text-sm font-bold not-italic text-[#b8862e]">
                &mdash; Robert J. Johnson, Personal Injury Attorney, Tampa FL
              </cite>
            </blockquote>

            <p className="mt-6 leading-8 text-slate-700">
              Robert Johnson Law never treats black box data as the only proof.{" "}
              <Link href="/blog/how-dashcam-footage-can-strengthen" className="font-semibold text-[#1C3767] underline hover:text-[#4B93FF]">
                Dashcam footage
              </Link>{" "}
              and traffic camera footage fill gaps. So do cell records, when the black box is missing.{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.0731.html">
                Florida Statute 316.0731
              </ExternalLink>{" "}
              addresses recorder data specifically. Related traffic law under Florida Statute 316.183 covers unsafe speed.
            </p>

            {/* Checklist Box */}
            <div className="mt-6 border border-[#cfd8e3] bg-[#f7f9fc] p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C3767]">
                What to Do Right After a Crash to Protect This Evidence
              </h3>
              <ul className="mt-4 space-y-3 text-slate-700">
                {checklistItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-bold text-emerald-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 7 - FAQs */}
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Questions People Usually Ask Us
            </h2>
            <div className="mt-6 divide-y divide-[#dbe3ee] border border-[#dbe3ee] bg-white">
              {faqs.map((faq) => (
                <div key={faq.question} className="p-5">
                  <h3 className="text-xl font-bold text-[#1C3767]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Final CTA Box */}
          <div className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-8 text-center text-white">
            <h2 className="text-3xl font-bold">
              Protect Your Crash Evidence Before It Disappears
            </h2>
            <p className="mt-3 text-[#d8d8d8] text-base">
              Robert Johnson Law fights for the data that proves your case.
            </p>
            <div className="mt-6 flex justify-center flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#EEF6F8] transition-all"
              >
                Free Consultation
              </Link>
              <a
                href="tel:8135403225"
                className="border border-white px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-[#b8862e] hover:bg-white hover:text-[#1C3767] transition-all"
              >
                Call (813) 540-3225
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 border-t border-[#dbe3ee] pt-5 text-xs italic text-slate-500">
            Disclaimer: This blog is for informational purposes only and is not legal advice. Contact Robert Johnson Law for guidance on your specific case.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlackBoxDataProvesFaultFloridaCarAccident;
