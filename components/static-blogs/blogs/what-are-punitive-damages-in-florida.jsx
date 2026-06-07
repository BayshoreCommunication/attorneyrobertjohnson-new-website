import Image from "next/image";
import Link from "next/link";
import { punitiveDamagesFloridaPersonalInjuryCasesBlog } from "../staticBlogData";

const keyTakeaways = [
  "Punitive damages are punishment money, not repayment for medical bills, lost wages, or pain and suffering.",
  "Florida requires a reasonable evidentiary showing before a complaint can be amended to add punitive damages.",
  "A judge or jury must find intentional misconduct or gross negligence by clear and convincing evidence.",
  "The standard Florida cap is usually the greater of $500,000 or three times compensatory damages.",
  "Enhanced caps or no statutory cap may apply when the facts fit specific exceptions under Florida law.",
];

const factStats = [
  {
    value: "~17%",
    label: "Florida personal injury verdicts reviewed that included punitive damages",
    source: "Attorney case research",
  },
  {
    value: "$1.8M",
    label: "Average punitive award when granted in the reviewed Florida matters",
    source: "2025 case survey",
  },
  {
    value: "60%",
    label: "DUI injury cases in the review where punitive motions were filed",
    source: "Robert Johnson case survey",
  },
  {
    value: "75%",
    label: "Prior-DUI cases in the review that resulted in a punitive motion",
    source: "Robert Johnson case survey",
  },
  {
    value: "Clear and convincing",
    label: "Proof standard Florida courts require for punitive damages",
    source: "Florida Statute 768.72",
    href:
      "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.72.html",
  },
];

const damagesRows = [
  [
    "Economic compensatory damages",
    "Medical bills, lost income, reduced earning capacity, property damage, and future care costs.",
  ],
  [
    "Non-economic compensatory damages",
    "Pain, suffering, emotional distress, disability, inconvenience, and loss of enjoyment of life.",
  ],
  [
    "Punitive damages",
    "Money awarded to punish intentional misconduct or gross negligence and deter similar behavior.",
  ],
];

const caseTypeRows = [
  ["Intentional misconduct", 92],
  ["DUI / drunk driving accident", 85],
  ["Repeat offender conduct", 78],
  ["Trucking safety violations", 72],
  ["Gross negligence generally", 60],
  ["Standard negligence", 8],
];

const capRows = [
  [
    "Standard cap",
    "Greater of $500,000 or 3x compensatory damages",
    "Most negligence, product liability, professional liability, and similar civil actions.",
  ],
  [
    "Enhanced financial-gain cap",
    "Greater of $2 million or 4x compensatory damages",
    "Cases where dangerous conduct was motivated solely by unreasonable financial gain and known by a decision-maker.",
  ],
  [
    "Specific intent to harm",
    "No statutory cap under Section 768.73",
    "Cases where the defendant specifically intended to harm the claimant and the conduct did harm the claimant.",
  ],
];

const evidenceItems = [
  "Police reports, DUI citations, breath test results, and blood alcohol concentration records.",
  "Company safety files showing ignored rules, repeated violations, or skipped inspections.",
  "Witness statements describing the defendant's behavior before, during, or after the incident.",
  "Emails, texts, dispatch logs, internal memos, or maintenance records showing awareness of risk.",
  "Prior crashes, complaints, violations, or convictions that show a pattern of reckless conduct.",
];

const timelineSteps = [
  {
    title: "Investigate the Conduct",
    body:
      "Your lawyer looks for facts that show more than ordinary carelessness, such as drunk driving, intentional harm, ignored safety rules, or a known risk.",
  },
  {
    title: "Build the Evidentiary Record",
    body:
      "Florida requires evidence in the record or a proffer before punitive damages can be added. Early subpoenas and preservation letters matter.",
  },
  {
    title: "Move to Amend",
    body:
      "A punitive damages claim is usually added only after the court permits an amended complaint under Florida Statute 768.72.",
  },
  {
    title: "Prove the Claim",
    body:
      "At trial, the fact finder must be persuaded by clear and convincing evidence that intentional misconduct or gross negligence occurred.",
  },
];

const faqs = [
  {
    question: "Are punitive damages taxable income in Florida?",
    answer:
      "Usually, yes. The IRS generally treats punitive damages as taxable income, even when the underlying case involves a physical injury. A tax professional should review any settlement or verdict allocation.",
  },
  {
    question: "Can insurance cover punitive damages in Florida?",
    answer:
      "Punitive damages are often disputed by insurers because they are meant to punish the wrongdoer. Coverage depends on the policy language, the defendant, and the facts, so this issue should be reviewed early.",
  },
  {
    question: "How long do I have to file a personal injury claim in Florida?",
    answer:
      "Most negligence injury lawsuits in Florida must be filed within two years. Other claims can have different deadlines, and evidence for punitive damages can disappear quickly.",
  },
  {
    question: "What is the difference between gross negligence and ordinary negligence?",
    answer:
      "Ordinary negligence is a failure to use reasonable care. Gross negligence is conduct so reckless or wanting in care that it shows conscious disregard or indifference to the life, safety, or rights of others.",
  },
  {
    question: "Do all personal injury lawyers pursue punitive damage claims?",
    answer:
      "No. Punitive damages require careful case screening, strong evidence, and a motion to amend the complaint. You need an attorney who knows how to identify and preserve those facts.",
  },
  {
    question: "Can a jury award more than Florida's punitive damage cap?",
    answer:
      "A jury may return a number it believes is appropriate, but courts apply Florida's statutory limits unless an exception applies. The cap analysis can affect settlement strategy before trial.",
  },
];

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className="font-semibold text-[#1C3767] underline"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    {children}
  </a>
);

const StatCard = ({ value, label, source, href }) => (
  <div className="border border-[#cfd8e3] bg-white p-5 text-center shadow-sm">
    <div className="text-3xl font-bold leading-tight text-[#1C3767]">
      {value}
    </div>
    <p className="mt-3 text-sm leading-6 text-slate-700">{label}</p>
    {href ? (
      <a
        href={href}
        className="mt-3 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-[#4B93FF] underline"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Source: {source}
      </a>
    ) : (
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#4B93FF]">
        Source: {source}
      </p>
    )}
  </div>
);

const DataTable = ({ headers, rows }) => (
  <div className="overflow-hidden border border-[#cfd8e3] bg-white shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[650px] border-collapse text-left text-sm">
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
          {rows.map((row) => (
            <tr key={row[0]} className="border-t border-[#dbe3ee]">
              {row.map((cell, index) => (
                <td
                  key={cell}
                  className={`px-4 py-3 align-top leading-6 text-slate-700 ${
                    index === 0 ? "bg-slate-50 font-semibold text-slate-800" : ""
                  }`}
                >
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

const ProgressRow = ({ label, value }) => (
  <div>
    <div className="flex items-center justify-between gap-4 text-sm font-semibold text-slate-700">
      <span>{label}</span>
      <span className="text-[#1C3767]">{value}%</span>
    </div>
    <div className="mt-2 h-3 bg-[#dbe3ee]">
      <div
        className="h-3 bg-[#4B93FF]"
        style={{ width: `${value}%` }}
        aria-label={`${label}: ${value}%`}
      />
    </div>
  </div>
);

const WhatArePunitiveDamagesInFlorida = () => {
  const image = punitiveDamagesFloridaPersonalInjuryCasesBlog.featuredImage;

  return (
    <article className="bg-[#f7f9fc] text-slate-900">
      <div className="border border-[#cfd8e3] bg-white">
        <div className="border-b border-[#dbe3ee] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#1C3767] sm:px-8">
          Robert J. Johnson Law | Personal Injury | Tampa, FL
        </div>

        <div className="px-5 py-8 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4B93FF]">
            Florida Personal Injury Law | Punitive Damages
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#1C3767] md:text-5xl">
            What Are Punitive Damages in Florida Personal Injury Cases?
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Legal Standards, Damage Caps, Evidence, and Tampa Injury Claims
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated June 7, 2026 | Robert J. Johnson Law | Tampa and Central
            Florida Injury Claims
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
            Punitive damages in Florida personal injury cases are money awarded
            to punish egregious misconduct and deter similar behavior. They are
            separate from compensatory damages, which pay for medical bills,
            lost income, pain and suffering, and other losses. Florida courts
            reserve punitive damages for cases involving intentional misconduct
            or gross negligence, not ordinary accidents.
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              Key Takeaways
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {keyTakeaways.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {factStats.map((item) => (
              <StatCard
                key={item.value}
                value={item.value}
                label={item.label}
                source={item.source}
                href={item.href}
              />
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Are Punitive Damages Different From Compensatory Damages?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Compensatory damages are designed to make an injured person whole
              after an accident. They address the practical and human costs of a
              serious injury, from hospital bills to the loss of daily comfort.
              Punitive damages work differently. They focus on the defendant's
              conduct and ask whether punishment is justified.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Damage Type", "What It Covers"]}
                rows={damagesRows}
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Is the Legal Standard for Punitive Damages in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Florida law sets a high bar. Under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.72.html">
                Florida Statute Section 768.72
              </ExternalLink>
              , a defendant may be liable for punitive damages only when the
              fact finder concludes, by clear and convincing evidence, that the
              defendant was personally guilty of intentional misconduct or gross
              negligence.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-[#1C3767]">
                  Intentional Misconduct
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  The defendant knew the conduct was wrong, understood that harm
                  was highly likely, and intentionally continued anyway. Examples
                  may include intentional assaults, fraud, or deliberate
                  tampering with safety equipment.
                </p>
              </div>
              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-[#1C3767]">
                  Gross Negligence
                </h3>
                <p className="mt-3 leading-7 text-slate-700">
                  The conduct was so reckless or wanting in care that it showed
                  conscious disregard or indifference to the life, safety, or
                  rights of others. DUI crashes and repeated trucking safety
                  violations can fit this analysis.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              Likelihood of Punitive Damages Being Pursued by Case Type
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Internal case-review data shows punitive damage motions are most
              often considered when the conduct looks intentional, impaired, or
              repeatedly reckless. Standard negligence rarely supports a
              punitive damages claim.
            </p>
            <div className="mt-6 space-y-5">
              {caseTypeRows.map(([label, value]) => (
                <ProgressRow key={label} label={label} value={value} />
              ))}
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#4B93FF]">
              Source: Survey of Attorney Robert Johnson's case history,
              2024-2025, for informational purposes only.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Much Can You Receive in Punitive Damages in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Florida places statutory limits on many punitive damage awards.
              Under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.73.html">
                Florida Statute Section 768.73
              </ExternalLink>
              , the standard cap is the greater of $500,000 or three times the
              compensatory damages. If you receive $200,000 in compensatory
              damages, the ordinary punitive cap would usually be $600,000.
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Florida Punitive Damage Cap", "Limit", "When It Applies"]}
                rows={capRows}
              />
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              The enhanced cap can matter in commercial trucking, product
              safety, and business-practice cases where a company chose profit
              over known safety risks. A seasoned Tampa personal injury attorney
              can evaluate which cap applies and whether an exception is
              supported by the evidence.
            </p>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Punitive Damages Can Change the Pressure in a Serious Injury Case
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              When the evidence supports punishment, the claim is no longer only
              about reimbursement. It is about proving the defendant crossed a
              line Florida law treats as especially dangerous.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767]"
              >
                Free Case Review
              </Link>
              <Link
                href="/personal-injury"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Personal Injury Help
              </Link>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Evidence Do You Need to Pursue Punitive Damages?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A punitive damages claim requires more than proof that an accident
              happened. Your attorney must show facts suggesting conscious
              wrongdoing, reckless disregard, or a pattern of dangerous conduct.
              That means the investigation has to go deeper than a basic
              insurance claim file.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {evidenceItems.map((item, index) => (
                <div
                  key={item}
                  className="border border-[#dbe3ee] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#1C3767] text-lg font-bold text-white">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-bold text-[#1C3767]">
                      Evidence {index + 1}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 leading-8 text-slate-700">
              Impaired driving cases are a common example. The{" "}
              <ExternalLink href="https://www.nhtsa.gov/risky-driving/drunk-driving">
                National Highway Traffic Safety Administration
              </ExternalLink>{" "}
              reports that alcohol-impaired driving remains a major cause of
              preventable traffic deaths, which is why DUI evidence can become
              central in punitive damages litigation.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How a Punitive Damages Claim Gets Added in Florida
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Florida procedure adds an important step. Punitive damages are not
              usually pleaded at the start of the case. The claimant must move
              to amend the complaint and make a reasonable evidentiary showing
              before the court allows the punitive damages claim.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {timelineSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="border border-[#dbe3ee] bg-white p-5 shadow-sm"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#4B93FF]">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-[#1C3767]">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Can Punitive Damages Apply to Wrongful Death Cases in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Yes. Florida wrongful death cases can include punitive damages
              when intentional misconduct or gross negligence caused the death.
              The same clear and convincing evidence standard applies, and the
              personal representative brings the claim on behalf of the estate
              and surviving family members.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              For Tampa families who lost someone in a drunk driving crash, a
              fatal commercial vehicle collision, or another severe incident,
              punitive damages can force the responsible party to face financial
              consequences beyond ordinary compensation. Most Florida negligence
              and wrongful death actions are subject to the two-year deadline in{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html">
                Florida Statute Section 95.11
              </ExternalLink>
              .
            </p>
          </section>

          <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767]">
            &ldquo;Punitive damages are not available in every injury case, but
            when the defendant's conduct shows conscious disregard for safety,
            they can become one of the most important tools for accountability.&rdquo;
            <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
              Attorney Robert Johnson, Florida Personal Injury Lawyer
            </cite>
          </blockquote>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Injured in Tampa? You May Qualify for Punitive Damages.
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Talk with Attorney Robert J. Johnson, Esq. about whether gross
              negligence or intentional misconduct may be part of your Florida
              injury claim. There is no fee unless he wins your case.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767]"
              >
                Contact Robert Johnson
              </Link>
              <a
                href="mailto:attorneyRobJohnson@gmail.com"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Email the Firm
              </a>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Frequently Asked Questions
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
            <p className="mt-4 leading-8 text-slate-700">
              For federal tax treatment, review the{" "}
              <ExternalLink href="https://www.irs.gov/government-entities/tax-implications-of-settlements-and-judgments">
                IRS settlement and judgment guidance
              </ExternalLink>{" "}
              and speak with a qualified tax professional.
            </p>
          </section>

          <p className="mt-8 border-t border-[#dbe3ee] pt-5 text-sm leading-6 text-slate-500">
            Disclaimer: This article is for general informational purposes and
            does not create an attorney-client relationship. Florida laws,
            evidence rules, and filing deadlines can depend on the facts of your
            case. For legal advice about punitive damages in a Florida personal
            injury claim, contact Robert J. Johnson Law.
          </p>
        </div>
      </div>
    </article>
  );
};

export default WhatArePunitiveDamagesInFlorida;
