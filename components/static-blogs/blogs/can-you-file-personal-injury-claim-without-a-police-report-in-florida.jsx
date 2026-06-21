import Image from "next/image";
import Link from "next/link";
import { canYouFilePersonalInjuryClaimWithoutPoliceReportBlog } from "../staticBlogData";

const tableHeaders = [
  "Situation",
  "Police Report Required?",
  "Strongly Recommended?",
];

const tableRows = [
  ["Car accident with injury", "✔ Yes", "✔ Yes"],
  ["Car accident with $500+ damage", "✔ Yes", "✔ Yes"],
  ["Minor fender bender, no injury", "✖ No", "✔ Yes"],
  ["Slip and fall", "✖ No", "File incident report with property owner"],
  ["Uber/Lyft accident", "✖ No", "Yes + app trip records"],
  ["Workplace injury", "✖ No", "Report to employer within 30 days"],
];

const caseTypes = [
  {
    letter: "A",
    title: "Slip and Fall / Premises Liability",
    body: "Fall accidents or premises liability issues are best reported right away to the property manager in writing. Send an email or text with a timestamp. If you do not get any form to complete then keep a record of the date.",
  },
  {
    letter: "B",
    title: "Uber or Lyft Rideshare Accidents",
    body: "If you are involved in an Uber or Lyft rideshare accident, your trip history with GPS data can be used as evidence. Also keep any messages or calls with the driver.",
  },
  {
    letter: "C",
    title: "Workplace Injuries",
    body: "For workplace injuries the rules are different. You do not need a police report. You must tell your employer within 30 days.",
  },
  {
    letter: "D",
    title: "Dog Bites and Assaults",
    body: "Animal control and emergency room records become your primary documentation.",
  },
];

const steps = [
  {
    number: "1",
    title: "Document the scene",
    body: "Use the evidence checklist above. Safety first, then evidence.",
  },
  {
    number: "2",
    title: "Exchange information",
    body: "With the other party. Do not say you are sorry or that it is your fault because even saying “I am sorry” can be used against you under Florida’s comparative negligence rules.",
  },
  {
    number: "3",
    title: "File the FLHSMV Driver Self Report",
    body: "On flhsmv.gov, within 10 days. This is what you do if the police did not show up.",
  },
  {
    number: "4",
    title: "Seek medical treatment within 14 days",
    body: "This is the hard deadline for Florida PIP coverage. Don’t miss it.",
  },
  {
    number: "5",
    title: "Notify your PIP insurer within 24–48 hours",
    body: "Tell them there is no police report and provide all the documentation you gathered. Florida law requires “prompt” notification because delays can jeopardize coverage.",
  },
  {
    number: "6",
    title: "Contact a Florida personal injury attorney",
    body: "The earlier the better. Evidence preservation letters go out, fault investigation begins and your 2 year clock is managed.",
  },
  {
    number: "7",
    title: "Build your evidence package",
    body: "Medical records, witness statements, expert opinions and your pain journal are assembled into a demand package once you reach Maximum Medical Improvement (MMI).",
  },
  {
    number: "8",
    title: "Negotiate or file suit within 2 years",
    body: "Over 90% of Florida PI cases settle before trial but you need leverage and leverage requires evidence.",
  },
];

const riskFactors = [
  {
    symbol: "!",
    title: "Fault disputes become harder",
    body: "Without an officer’s observations and citations, it becomes a credibility contest. Under Florida’s 50% comparative negligence rule, if an insurer can successfully argue you were primarily at fault, you walk away with nothing.",
  },
  {
    symbol: "!",
    title: "Insurance skepticism is real",
    body: "Adjusters are trained to treat no report claims with more scrutiny. Denial rates are higher. Offers are lower. The negotiation will be longer.",
  },
  {
    symbol: "!",
    title: "Delayed injuries are a trap",
    body: "Signs like soft tissue injuries, whiplash, or concussions might start showing after day two or three of collision. When you refuse medical help and then problems reappear later, the sequence of events grows harder to prove.",
  },
  {
    symbol: "!",
    title: "Hit & run situations are very difficult without a report",
    body: "Florida ranks with highest rate of hit and run incidents. If the other driver fled, your own Uninsured Motorist (UM/UIM) coverage becomes critical.",
  },
];

const faqs = [
  {
    question: "What happens when I don’t call the police after my Florida accident?",
    answer:
      "You can still file a claim. Submit FLHSMV self report within 10 days, gather evidence, seek medical attention within 14 days, and notify your insurer immediately.",
  },
  {
    question: "What is the time limit for filing without a police report?",
    answer: "2 years from the date of injury under Florida’s statute of limitations.",
  },
  {
    question: "What if I don’t have a police report? Can I still get PIP?",
    answer: "Yes. If you receive treatment within 14 days, PIP covers you regardless of fault.",
  },
  {
    question: "Does the other driver’s insurance pay without a police report?",
    answer:
      "They might but be prepared for pushback. Photos, witnesses and medical records, along with an attorney, will help get you a fair offer.",
  },
  {
    question: "Is a Florida Driver Self Report the same as a police report?",
    answer:
      "No. The self report submitted to FLHSMV is an official record but holds less weight than an officer’s observations.",
  },
  {
    question: "Can I get a police report after the fact in Florida?",
    answer:
      "Yes, if an officer was present but you didn’t obtain a copy, request it via the Official Crash Portal or the responding department. If no officer came, no report is available.",
  },
  {
    question: "Does not having a police report lower my settlement?",
    answer:
      "It can. Claims with police reports and dashcam footage typically settle faster and for more.",
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

const StatCard = ({ value, label, subtitle }) => (
  <div className="border border-[#cfd8e3] bg-white p-5 text-center shadow-sm">
    <div className="text-4xl font-bold text-[#1C3767]">{value}</div>
    {subtitle && (
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B93FF]">
        {subtitle}
      </p>
    )}
    <p className="mt-3 text-sm leading-6 text-slate-700">{label}</p>
  </div>
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
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-[#dbe3ee]">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 align-top text-slate-700">
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

const CanYouFilePersonalInjuryClaimWithoutAPoliceReportInFlorida = () => {
  const image = canYouFilePersonalInjuryClaimWithoutPoliceReportBlog.featuredImage;

  return (
    <article className="bg-[#f7f9fc] text-slate-900">
      <div className="border border-[#cfd8e3] bg-white">
        <div className="border-b border-[#dbe3ee] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#1C3767] sm:px-8">
          Robert J. Johnson Law | Personal Injury | Tampa, FL
        </div>

        <div className="px-5 py-8 sm:px-8 lg:px-10">
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

          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4B93FF]">
            Personal Injury Law | Tampa, Florida
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#1C3767] md:text-5xl">
            Can You File Personal Injury Claim Without a Police Report in Florida?
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Filing Florida Injury Claims Without a Police Report
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated June 21, 2026 | Robert J. Johnson Law | Central Florida Injury Defense
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Yes you can file a personal injury claim in Florida without a police report. Florida law does not require a police report to pursue compensation for injury. If you do not have a police report then you have to prove other person&apos;s at fault and your damages.
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              IMPORTANT TAKEAWAYS
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              <li>You can legally file a personal injury claim without a police report.</li>
              <li>You must file your lawsuit within the 2 year statute of limitations or lose your right to compensation.</li>
              <li>Under modified comparative negligence, you recover nothing if you are found more than 50% at fault for the accident.</li>
              <li>You have to see a doctor within 14 days to get your $10,000 PIP insurance benefits.</li>
              <li>In Florida if police didn&apos;t show up to the accident scene you have to report it to the FLHSMV yourself within 10 days.</li>
              <li>Surveillance footage usually gets deleted after 72 hours — collecting evidence immediately is critical for your case.</li>
              <li>If there&apos;s no report then you&apos;ll have to use things like photos, witness statements and medical records to prove who was at fault.</li>
            </ul>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard
              value="2 Years"
              subtitle="Statute of Limitations"
              label="Florida statute of limitations (HB 837, 2023)"
            />
            <StatCard
              value="50%"
              subtitle="Fault Bar"
              label="Exceed fault bar, recover nothing"
            />
            <StatCard
              value="14 Days"
              subtitle="PIP Window"
              label="Window to see a doctor for PIP coverage"
            />
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              01. What Florida Law Actually Says
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Under <ExternalLink href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.065.html">Florida Statute 316.065</ExternalLink> drivers only have to call the police if someone gets hurt, dies, or if the property damage is $500 or more. If it&apos;s a small crash with no injuries and not much damage you don&apos;t have to involve the police.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              But here’s what many Floridians miss: any injury, no matter how minor, triggers the requirement. A small cut, a brief headache, or mild soreness all count. And because injuries like whiplash can take 24–72 hours to fully appear, what seems like “just property damage” often isn’t.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If police weren’t called, you must file a Florida Driver Self Report of Traffic Crash within 10 days through the <ExternalLink href="https://www.flhsmv.gov/">Florida Highway Safety and Motor Vehicles (FLHSMV)</ExternalLink> online portal. This is not optional. Submitting it creates an official record and demonstrates you acted responsibly, something insurance adjusters and courts will notice.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Florida’s 2023 tort reform still governs claims in 2026. The statute of limitations for personal injury is now 2 years (down from 4). Modified comparative negligence means if you’re found more than 50% at fault, you recover nothing. Without a police report to anchor fault, these rules carry real risk. According to <ExternalLink href="https://www.leg.state.fl.us/Statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html">Florida Stat. §95.11</ExternalLink> and <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html">§768.81</ExternalLink>.
            </p>

            <div className="mt-6">
              <DataTable
                headers={tableHeaders}
                rows={tableRows}
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              02. Does “Claim Without Official Report” Apply To ALL Injury Cases?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Most people think &ldquo;no police report&rdquo; only applies to car accidents but it doesn&apos;t. Car accidents are the most common scenario, but the same principles apply to:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {caseTypes.map((item) => (
                <div
                  key={item.title}
                  className="border border-[#dbe3ee] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#1C3767] text-lg font-bold text-white">
                      {item.letter}
                    </span>
                    <h3 className="text-xl font-bold text-[#1C3767]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              03. What Evidence Replaces a Police Report
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              This is where cases are won or lost. You have a narrow window so act fast.
            </p>

            <div className="mt-6 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
              <h3 className="text-xl font-bold text-[#1C3767]">
                ⏰ The 72-Hour Evidence Clock
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                Surveillance footage from businesses and traffic cameras is typically overwritten within 48–72 hours. Once it’s gone, it’s gone. An attorney can send a legal preservation letter within 24 hours of being contacted. This is one of the most compelling reasons to call one immediately after an accident.
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h4 className="font-bold text-[#1C3767]">At the Scene — Do This Before You Leave</h4>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-700">
                  <li>Take pictures of all vehicles from multiple angles (show damage, get license plates, capture positions).</li>
                  <li>Take pictures of road conditions, skid marks, signage, and weather.</li>
                  <li>If you are hurt take a picture of your injuries if you can see them.</li>
                  <li>Get details from the person involved: name, license, registration, insurance card.</li>
                  <li>Get names and phone numbers from people who saw what happened.</li>
                </ul>
              </div>

              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h4 className="font-bold text-[#1C3767]">Within 14 Days — PIP Deadline</h4>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-700">
                  <li>Go see a doctor even if you feel okay.</li>
                  <li>Start writing down the date and how much pain (level 0 to 10) you are experiencing.</li>
                  <li>In your journal note down what you can do and what you cannot do because of the pain.</li>
                  <li>Also write down how it is affecting you emotionally.</li>
                  <li>Make sure to keep all of your bills and records from the doctor.</li>
                </ul>
              </div>

              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h4 className="font-bold text-[#1C3767]">Ongoing — Keep Collecting</h4>
                <ul className="mt-3 list-disc pl-5 space-y-2 text-sm text-slate-700">
                  <li>If the other person acknowledges fault in a text message, an email or on social media — keep those messages.</li>
                  <li>Request any security camera footage in writing immediately.</li>
                  <li>File the FLHSMV self report within 10 days if applicable.</li>
                </ul>
              </div>
            </div>

            <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767]">
              &ldquo;Through our last year’s survey, we found expert witnesses, medical professionals and accident reconstruction specialists can increase Florida settlement values by 25–40% when other documentation is thin.&rdquo;
              <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
                Robert J. Johnson, Personal Injury Attorney, Tampa FL
              </cite>
            </blockquote>

            <p className="mt-6 font-semibold text-[#1C3767]">
              Check this out:{" "}
              <Link href="/blog/how-dashcam-footage-can-strengthen" className="underline hover:text-[#4B93FF]">
                How Surveillance Footage Can Help or Hurt Your Claim?
              </Link>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              04. How to File Your Claim: Step by Step
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {steps.map((item) => (
                <div
                  key={item.number}
                  className="border border-[#dbe3ee] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#1C3767] text-lg font-bold text-white">
                      {item.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#1C3767]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 font-semibold text-[#1C3767]">
              Check this out:{" "}
              <Link href="/blog/structured-settlements-vs-lump-sum-payments" className="underline hover:text-[#4B93FF]">
                Can You Reopen a Personal Injury Case After Settlement?
              </Link>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              05. Filing with Florida PIP Insurance
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Florida still has a no fault system in 2026. The Personal Injury Protection (PIP) insurance will pay for 80% of the expenses, 60% of the lost wages and up to $10,000.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              It does not matter who caused the accident. It also does not matter if the police made a report or not. Your Personal Injury Protection insurance will cover these things.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This kicks in immediately from your own insurer, which is why you notify them first. For damages beyond PIP (serious injuries, lost wages beyond $10,000, pain and suffering), you&apos;ll pursue the at fault driver&apos;s liability insurer.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              That’s where not having a police report causes the trouble. Expect pushback. Expect the adjuster to raise the “no report” issue as a reason to reduce your offer. Have your evidence ready before that conversation happens.
            </p>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Injured in a Florida Accident Without a Police Report?
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Do not let insurance companies blame the lack of a report to reduce your compensation. Contact Robert J. Johnson Law today to protect your rights.
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
              06. Risks You Need to Know
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Collected from Florida Department of Insurance, FLHSMV crash data, attorney practice experience. Results may vary.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {riskFactors.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#dbe3ee] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center bg-[#4B93FF] text-lg font-bold text-white">
                      {item.symbol}
                    </span>
                    <h3 className="text-xl font-bold text-[#1C3767]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-7 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              07. When to Call a Florida Personal Injury Attorney
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              If there’s no police report, the attorney’s role becomes more important, not less. Here’s what we do that you can’t:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-3 text-slate-700">
              <li>Send evidence preservation letters within hours, legally compelling businesses to hold onto surveillance footage.</li>
              <li>Retain accident reconstruction experts who can independently establish fault from physical evidence.</li>
              <li>Navigate the insurance company’s “no report” objection with documentation and legal precedent.</li>
              <li>Ensure your claim is filed well within the 2 year statute of limitations with maximum evidentiary support.</li>
            </ul>
            <p className="mt-6 leading-8 text-slate-700">
              If you were injured in Tampa, Florida and there’s no police report on file, a free consultation with our local personal injury attorney, Robert Johnson, is the best next step.
            </p>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              No Police Report? No Problem.
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Robert Johnson Law, Florida Personal Injury. We handle evidence preservation, fault investigation, and insurer negotiations so you can focus on recovery. Full confidentiality with free consultation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767]"
              >
                Get Your Free Consultation →
              </Link>
            </div>
          </section>

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

          <p className="mt-8 border-t border-[#dbe3ee] pt-5 text-sm leading-6 text-slate-500">
            Disclaimer: The content in this blog post is for informational purposes only and is not legal advice. Please contact Robert Johnson Law for specific advice on your case.
          </p>
        </div>
      </div>
    </article>
  );
};

export default CanYouFilePersonalInjuryClaimWithoutAPoliceReportInFlorida;
