import Image from "next/image";
import Link from "next/link";
import { dashcamFootagePersonalInjuryClaimBlog } from "../staticBlogData";

const takeaways = [
  "Records driving behavior during the crash",
  "Reduces disputes over fault",
  "Helps keep fault under 50%",
  "Provides time and location data",
  "Supports hit and run identification",
  "Helps claims move faster",
];

const sections = [
  {
    number: "1",
    title: "Florida Fault Rules and Video Impact",
    intro:
      "Florida uses a fault-based system where compensation depends on each driver's share of responsibility. Video often plays a strong role in how that responsibility is assigned.",
    items: [
      {
        title: "The 51% Rule and Its Impact",
        body:
          "Florida law blocks compensation if fault goes above 50%. This makes fault division central in every claim. Insurance companies often try to increase a driver's share of fault to reduce payouts.",
      },
      {
        title: "How Dashcams Capture Fault in Real Time",
        body:
          "A dashcam records speed, braking, and vehicle movement before impact. It shows how each driver acted in the moments leading up to the crash. This reduces reliance on memory or verbal accounts.",
      },
      {
        title: "Why Percentages Decide Your Financial Recovery",
        body:
          "Compensation changes based on fault percentage. Even small differences can affect the final amount. If fault passes 50%, no compensation is available under Florida law.",
      },
    ],
  },
  {
    number: "2",
    title: "Witness Testimony and Common Gaps",
    intro:
      "People involved in crashes often remember events differently. Stress and shock can affect how details are recalled.",
    items: [
      {
        title: "Memory Gaps After a Crash",
        body:
          "People often miss details during a crash because attention shifts to reacting. Later recollections can be incomplete or slightly different. This leads to gaps in statements.",
      },
      {
        title: "Conflicting Stories and Insurance Disputes",
        body:
          "Witnesses may describe speed, signals, or timing in different ways. These differences can create uncertainty during claim review. Insurance companies may use that uncertainty to reduce payouts.",
      },
      {
        title: "How Video Brings Consistency",
        body:
          "Dashcam footage stays the same every time it is viewed. It shows a fixed sequence of events without change. This helps match physical evidence with what actually happened.",
      },
    ],
  },
  {
    number: "3",
    title: "Video Evidence and Settlement Amounts",
    intro:
      "Insurance companies base decisions on available evidence and risk assessment. Video often shifts how they evaluate a claim.",
    items: [
      {
        title: "How Insurance Companies Evaluate Claims",
        body:
          "Insurance adjusters review reports, statements, and available footage. If the fault is not clear at all, they may reduce or dispute the claim. Limited evidence often leads to longer review times.",
      },
      {
        title: "Why Video Increases Payout Potential",
        body:
          "Clear footage makes it harder to dispute fault. It reduces arguments about shared responsibility. This often leads to settlement amounts that better reflect actual losses.",
      },
      {
        title: "Faster Resolutions With Strong Proof",
        body:
          "When footage is available, insurers can review events quickly. This reduces the need for extended investigation. Decisions are often made sooner.",
      },
    ],
  },
  {
    number: "4",
    title: "Dashcam Footage and Claim Speed",
    intro:
      "Claims often take time when fault is unclear or disputed. Video can shorten that delay by showing what happened immediately.",
    items: [
      {
        title: "Reduced Investigation Delays",
        body:
          "Dashcam recordings show what happened without delay. This reduces reliance on reports and interviews. Fewer unknowns often shorten the review process.",
      },
      {
        title: "Immediate Clarity for Insurance Adjusters",
        body:
          "Adjusters can review footage shortly after a crash. This helps them determine fault without waiting for extra information. Decisions often happen faster as a result.",
      },
      {
        title: "Early Settlements and Financial Relief",
        body:
          "Faster review can lead to earlier payouts. This helps cover medical and repair costs sooner. It also reduces waiting time during recovery.",
      },
    ],
  },
  {
    number: "5",
    title: "Florida Recording Laws and Driver Awareness",
    intro:
      "Florida has specific rules about recording conversations, especially when audio is involved. These rules affect how dashcam recordings are used.",
    items: [
      {
        title: "Public vs Private Conversations",
        body:
          "Under Florida Statute 934.03, private conversations usually require consent from all parties. Conversations in public spaces like roads after a crash are treated differently due to lower privacy expectations.",
      },
      {
        title: "When Audio Can Be Used as Evidence",
        body:
          "Statements made at the scene are often spontaneous. Courts may accept them as reliable because they are not prepared in advance. Dashcams record these statements as they happen.",
      },
      {
        title: "Situations That Require Caution",
        body:
          "Audio inside a private vehicle may raise privacy concerns. Passengers may not expect recording in all situations. These factors can affect how audio is used later.",
      },
    ],
  },
  {
    number: "6",
    title: "Audio Evidence and Claim Support",
    intro:
      "Audio adds extra detail that helps explain what happened during a crash. It captures speech and reactions that video alone may not show.",
    items: [
      {
        title: "Captured Statements at the Scene",
        body:
          "Drivers sometimes admit fault right after a crash. Dashcam audio records these statements exactly as spoken. This helps prevent later changes in their account.",
      },
      {
        title: "Tone, Behavior, and Context",
        body:
          "Audio can show stress, confusion, or anger. These reactions help explain what was happening during the crash. It adds detail that video alone may not show.",
      },
      {
        title: "Support Beyond Visual Footage",
        body:
          "Written reports often summarize events. Audio preserves real conversations. Together, they provide a more complete record of what happened.",
      },
    ],
  },
  {
    number: "7",
    title: "Dashcam Selection for Legal Use",
    intro:
      "The type of dashcam used can affect how useful the footage becomes later. Image quality and durability play a major role.",
    items: [
      {
        title: "4K Resolution and Detail Accuracy",
        body:
          "Higher resolution captures small details like license plates and signs. Lower resolution can blur important information. Clear footage is easier to rely on.",
      },
      {
        title: "High Frame Rate and Motion Clarity",
        body:
          "Higher frame rates show smoother movement. This helps when reviewing fast actions like turns or sudden stops. Timing becomes easier to understand.",
      },
      {
        title: "Durability in Florida Conditions",
        body:
          "Heat and humidity can affect electronics. A reliable dashcam should perform consistently in those conditions. Stable recording reduces the risk of missing footage.",
      },
    ],
  },
  {
    number: "8",
    title: "Footage Storage and Protection",
    intro:
      "Recording is only useful if the footage is preserved properly after a crash. Handling it the right way helps keep it usable.",
    items: [
      {
        title: "Prevention of Automatic Deletion",
        body:
          "Dashcams often overwrite old recordings. Saving the file after a crash prevents loss. Quick action helps protect evidence.",
      },
      {
        title: "No Edits or Alterations",
        body:
          "Edited footage can raise questions later. Even small changes may affect credibility. Original files carry stronger value.",
      },
      {
        title: "Original File Preservation",
        body:
          "The original recording should be stored safely. Backups can be created without changes. This helps maintain trust in the file.",
      },
    ],
  },
  {
    number: "9",
    title: "Chain of Custody and Evidence Control",
    intro:
      "Evidence needs a clear record of handling to remain reliable. This helps show that the footage has not been changed.",
    items: [
      {
        title: "Chain of Custody Definition",
        body:
          "This is the record of who handled the footage and when. It shows the file has not been changed. Proper records support authenticity.",
      },
      {
        title: "Verification Process",
        body:
          "Secure storage and access logs track how the file moves. This creates a clear history of the evidence. It reduces questions about tampering.",
      },
      {
        title: "Risks From Poor Handling",
        body:
          "Missing records or altered storage can create doubt. This may weaken how the footage is viewed. Proper handling helps avoid those issues.",
      },
    ],
  },
];

const claimRows = [
  ["Fault clearly established", "No - Disputed", "Yes - On Record"],
  ["Settlement reached faster", "No - Delayed", "Yes - Expedited"],
  ["Insurance payout reduced", "Often - Yes", "Rarely - Stronger Claim"],
  ["Witness conflicts neutralized", "No - Unresolved", "Yes - Video Prevails"],
  ["Hit and run ID possible", "Difficult", "Yes - Plate Captured"],
  ["Audio statements preserved", "No - Lost", "Yes - Exact Words"],
];

const faqs = [
  {
    question: "Can police take a dashcam at the scene?",
    answer:
      "Police usually need consent or a warrant. Without legal grounds, the device is not taken.",
  },
  {
    question: "Can compensation still be received with shared fault?",
    answer:
      "Yes. Recovery is possible if fault is 50% or less. The payout depends on the final percentage assigned.",
  },
  {
    question: "Do dashcams reduce insurance cost?",
    answer:
      "They do not lower premiums directly. However, they can help avoid increases after an accident.",
  },
  {
    question: "Is recording police allowed?",
    answer:
      "Yes. Recording public officers during duty is generally allowed in Florida. It must stay within legal limits.",
  },
  {
    question: "Where should a dashcam be placed?",
    answer:
      "Behind the rearview mirror works best. This position keeps the road view open and avoids obstruction.",
  },
];

const StatCard = ({ value, label, tone = "blue" }) => (
  <div
    className={`border border-[#d8dee8] p-5 text-center shadow-sm ${
      tone === "red" ? "bg-[#FDEDEA]" : "bg-white"
    }`}
  >
    <div className="text-4xl font-bold text-[#C0392B]">{value}</div>
    <p className="mt-3 text-sm leading-6 text-slate-700">{label}</p>
  </div>
);

const SectionBlock = ({ section }) => (
  <section className="mt-10">
    <div className="flex overflow-hidden border border-[#d8dee8] bg-white shadow-sm">
      <div className="flex w-16 shrink-0 items-center justify-center bg-[#C0392B] text-3xl font-bold text-white">
        {section.number}
      </div>
      <div className="flex-1 bg-[#1B2B4B] px-5 py-4">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          {section.title}
        </h2>
      </div>
    </div>
    <p className="mt-5 leading-8 text-slate-700">{section.intro}</p>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
      {section.items.map((item) => (
        <div key={item.title} className="border border-[#d8dee8] bg-white p-5">
          <h3 className="text-xl font-bold text-[#1B2B4B]">{item.title}</h3>
          <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
        </div>
      ))}
    </div>
  </section>
);

const DataTable = ({ rows }) => (
  <div className="overflow-hidden border border-[#d8dee8] bg-white shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse text-left text-sm">
        <thead className="bg-[#1B2B4B] text-white">
          <tr>
            <th className="px-4 py-3 font-semibold">Claim Factor</th>
            <th className="px-4 py-3 font-semibold">Without Dashcam</th>
            <th className="px-4 py-3 font-semibold">With Dashcam</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row[0]} className="border-t border-[#d8dee8]">
              <td className="bg-slate-50 px-4 py-3 font-semibold text-slate-800">
                {row[0]}
              </td>
              <td
                className={`px-4 py-3 text-slate-700 ${
                  index % 2 === 0 ? "bg-[#FDEDEA]" : "bg-white"
                }`}
              >
                {row[1]}
              </td>
              <td
                className={`px-4 py-3 text-slate-700 ${
                  index % 2 === 0 ? "bg-[#EDF8EF]" : "bg-white"
                }`}
              >
                {row[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const HowDashcamFootageCanStrengthen = () => {
  const image = dashcamFootagePersonalInjuryClaimBlog.featuredImage;

  return (
    <article className="bg-[#f7f9fc] text-slate-900">
      <div className="border border-[#cfd8e3] bg-white">
        <div className="border-b border-[#dbe3ee] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#1B2B4B] sm:px-8">
          Robert J. Johnson Law | Personal Injury | Tampa, FL
        </div>

        <div className="px-5 py-8 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#C0392B]">
            Personal Injury Law | Florida Crash Evidence
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#1B2B4B] md:text-5xl">
            How Dashcam Footage Can Strengthen Your Personal Injury Claim in
            Florida
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Dashcam footage shows what actually happened during a crash.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated May 14, 2026 | Robert J. Johnson Law | Central Florida
            Injury Claims
          </p>

          <figure className="mt-8">
            <Image
              src={image.image.url}
              alt={image.altText}
              title={image.title}
              width={1502}
              height={670}
              priority
              className="h-auto w-full border border-[#dbe3ee] object-cover"
            />
            <figcaption className="mt-3 text-sm italic text-slate-600">
              {image.caption}
            </figcaption>
          </figure>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Dashcam footage shows what actually happened during a crash. In
            Florida, where fault decides compensation under the 51% rule, this
            type of recording can influence how a claim is reviewed. It helps
            reduce disputes and often leads to quicker settlement decisions.
          </p>

          <section className="mt-8 border-l-4 border-[#C0392B] bg-[#FDEDEA] p-6">
            <h2 className="text-2xl font-bold text-[#1B2B4B]">
              Key Takeaways
            </h2>
            <ul className="mt-4 grid gap-3 text-slate-700 md:grid-cols-2">
              {takeaways.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 bg-[#C0392B]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <SectionBlock section={sections[0]} />

          <p className="mt-6 leading-8 text-slate-700">
            You may also want to read about{" "}
            <Link
              href="/blog/who-pays-for-injuries-after-a-florida-parking-lot-accident"
              className="font-semibold text-[#1B2B4B] underline"
            >
              who pays for injuries after a Florida parking lot accident
            </Link>
            , particularly in cases where fault is shared.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            According to the{" "}
            <a
              href="https://www.flhsmv.gov/"
              className="font-semibold text-[#1B2B4B] underline"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Florida Department of Highway Safety and Motor Vehicles
            </a>
            , more than 360,000 crashes were reported, many involving disputes
            over signals and right of way.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <StatCard
              value="360,000+"
              label="Florida crashes reported in 2025 (FLHSMV)"
              tone="red"
            />
            <StatCard
              value="2 Million+"
              label="People injured in U.S. crashes each year (CDC)"
            />
          </div>

          {sections.slice(1, 3).map((section) => (
            <SectionBlock key={section.number} section={section} />
          ))}

          <p className="mt-6 leading-8 text-slate-700">
            You may also find it helpful to explore how{" "}
            <Link
              href="/blog/security-camera-recordings-can-help-or-harm-a-personal-injury-case"
              className="font-semibold text-[#1B2B4B] underline"
            >
              security camera recordings can help or harm a personal injury
              case
            </Link>
            .
          </p>

          <section className="mt-10 border border-[#d8dee8] bg-[#1B2B4B] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Were You Injured in a Florida Crash?
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Get a free consultation with Robert J. Johnson today. He comes to
              you.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:8135403225"
                className="bg-[#C0392B] px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Call (813) 540-3225
              </a>
              <Link
                href="/contact"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                No Cost Unless We Win
              </Link>
            </div>
          </section>

          <SectionBlock section={sections[3]} />

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1B2B4B]">
              Dashcam vs. No Dashcam: Claims at a Glance
            </h2>
            <div className="mt-6">
              <DataTable rows={claimRows} />
            </div>
          </section>

          {sections.slice(4, 6).map((section) => (
            <SectionBlock key={section.number} section={section} />
          ))}

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <StatCard
              value="50%"
              label="Fault threshold above which Florida law bars all compensation"
              tone="red"
            />
            <StatCard
              value="20+"
              label="Years Robert J. Johnson has spent fighting for injured Floridians"
            />
          </div>

          <p className="mt-8 leading-8 text-slate-700">
            According to the{" "}
            <a
              href="https://www.cdc.gov/transportationsafety/"
              className="font-semibold text-[#1B2B4B] underline"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Centers for Disease Control and Prevention
            </a>
            , more than 2 million people are injured in crashes each year in
            the United States.
          </p>

          {sections.slice(6).map((section) => (
            <SectionBlock key={section.number} section={section} />
          ))}

          <section className="mt-10 border border-[#d8dee8] bg-[#1B2B4B] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Ready to Strengthen Your Claim?
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Available 24/7 | Tampa, Florida | No upfront cost.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#C0392B] px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Get Your Free Consultation
              </Link>
              <Link
                href="/personal-injury"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                No Cost Unless We Win
              </Link>
            </div>
          </section>

          <p className="mt-8 leading-8 text-slate-700">
            Dashcam footage creates a steady record of what happens on the
            road. In Florida, where fault decides compensation, that record
            often influences how a claim is assessed. When events are captured
            as they happen, there is less room for disagreement about what took
            place.
          </p>
          <p className="mt-4 leading-8 text-slate-700">
            For guidance on how this type of evidence may support a claim,{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#1B2B4B] underline"
            >
              contact Robert J. Johnson
            </Link>{" "}
            to discuss your situation.
          </p>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1B2B4B]">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 divide-y divide-[#d8dee8] border border-[#d8dee8] bg-white">
              {faqs.map((faq) => (
                <div key={faq.question} className="p-5">
                  <h3 className="text-xl font-bold text-[#1B2B4B]">
                    {faq.question}
                  </h3>
                  <p className="mt-2 leading-7 text-slate-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-8 border-t border-[#dbe3ee] pt-5 text-sm leading-6 text-slate-500">
            Disclaimer: This article is for general informational purposes and
            does not form an attorney-client relationship. For help with any
            personal injury case, reach out to Robert Johnson.
          </p>
        </div>
      </div>
    </article>
  );
};

export default HowDashcamFootageCanStrengthen;
