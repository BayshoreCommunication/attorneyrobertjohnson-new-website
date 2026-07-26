import Image from "next/image";
import Link from "next/link";
import { whatHappensIfFaultDriverLeavesStateBlog } from "../staticBlogData";

const keyPoints = [
  "If you were involved in a car accident in Florida, a court can gain jurisdiction over an at-fault driver even if they flee the state.",
  "The “2 year” window to file a lawsuit can be put on hold through the use of Florida Statute 95.051 as long as the defendant is absent from Florida.",
  "If a defendant lives out-of-state but causes an accident on the roads of Florida, the state’s “long-arm” statute allows for service via the Florida Secretary of State.",
  "Your own uninsured motorist coverage may apply to cover damages if the at-fault party is inaccessible.",
  "In 2015 alone there were 91,644 hit-and-run accidents, many of them involved the vehicle and driver(s) who had not originally been residents of Florida.",
  "An experienced Florida personal injury attorney can track the driver, file across state lines, and fight for full compensation."
];

const tableHeaders = ["Service Method", "When It Applies"];

const tableRows = [
  ["Personal service in their state", "Defendant's address is known"],
  ["Florida Secretary of State service", "Defendant caused crash in Florida"],
  ["Certified mail to defendant", "Required alongside SoS service"],
  ["Federal court (diversity jurisdiction)", "Parties are from different states"],
  ["Skip-trace investigation", "Defendant's address is unknown"]
];

const surveyStats = [
  {
    value: "91,644",
    label: "Hit & run crashes on Florida roads in 2025 (FLHSMV Data)",
  },
  {
    value: "26.7%",
    label: "Estimated percentage of Florida drivers who are uninsured",
  },
  {
    value: "28,000+",
    label: "Car accidents recorded in Hillsborough County each year",
  },
  {
    value: "2 Years",
    label: "Florida statute of limitations for personal injury claims",
  },
];

const steps = [
  "Dial 911 and also report to police at the scene.",
  "Record the vehicle type and plate number as well as the direction it was traveling.",
  "Take pictures of the damage on your vehicle and any other vehicles involved.",
  "Collect contact information from all witnesses.",
  "Seek medical care within 14 days to preserve your PIP claim.",
  "Notify your own insurance company to preserve your UM rights.",
  "Contact a Florida personal injury attorney before giving recorded statements."
];

const damageHeaders = ["Damage Type", "Available After Driver Flees?"];
const damageRows = [
  ["Medical expenses (past)", "Yes, via PIP and UM coverage"],
  ["Medical expenses (future)", "Yes, via lawsuit or UM claim"],
  ["Lost wages", "Yes, via PIP (80%) and lawsuit"],
  ["Pain and suffering", "Yes, if serious injury threshold met"],
  ["Property damage", "Yes, via your collision coverage or lawsuit"],
  ["Wrongful death damages", "Yes, within 2-year deadline"]
];

const actionHeaders = ["What Rob Does", "Why It Matters in Your Case"];
const actionRows = [
  ["Investigates the driver's location", "Enables proper out-of-state service"],
  ["Files under Florida long-arm statute", "Keeps the case in Florida courts"],
  ["Pursues UM claim simultaneously", "Gets money moving while lawsuit proceeds"],
  ["Tracks evidence before it vanishes", "Protects your claim value"],
  ["Negotiates directly with insurers", "Prevents lowball settlement tactics"],
  ["Takes case to trial if needed", "Forces fair offers from defendants"]
];

const faqs = [
  {
    question: "Can I still file a claim if I only have the license plate number?",
    answer: "Yes. The license plate alone is sufficient to locate both the driver and their insurer. The police can look the plate up for you, and a process server or your lawyer can subpoena their insurance company records.",
  },
  {
    question: "Can I use my collision coverage if the at-fault driver left the state?",
    answer: "Yes, you can use your collision coverage to fix your vehicle immediately. Your insurance company will pay for the repairs, less your deductible.",
  },
  {
    question: "What if the driver from out of state was driving a rental?",
    answer: "Rental car crashes involve unique rules. If the fleeing driver was in a rental car the rental company might share liability under specific conditions.",
  },
  {
    question: "What if the driver is missing, do I have to pay my medical bills?",
    answer: "The Florida Personal Injury Protection coverage will pay for 80% of your medical bills up to $10,000 regardless of who is at fault in the car wreck.",
  },
  {
    question: "Does Rob Johnson take cases outside of Hillsborough County?",
    answer: "Yes. Car Crash Rob has represented clients from all over the state, including Tampa, Clearwater, St. Petersburg, Lakeland, Bradenton and other areas throughout central Florida.",
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

const StatCard = ({ value, label }) => (
  <div className="border border-[#cfd8e3] bg-white p-5 text-center shadow-sm">
    <div className="text-4xl font-bold text-[#1C3767]">{value}</div>
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

const WhatHappensIfTheAtFaultDriverLeavesTheStateAfterAnAccident = () => {
  const image = whatHappensIfFaultDriverLeavesStateBlog.featuredImage;

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
            What Happens If the At-Fault Driver Leaves the State After an Accident?
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Legal Implications and Options for Out-of-State Defendant Claims
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated July 21, 2026 | Robert J. Johnson Law | Florida Personal Injury Claims
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            The out-of-state driver who caused your accident won’t be able to get off the hook just because they have crossed the state lines. Under Florida law, you may have the power to sue a driver outside the state, hunt them down, and make sure they pay what they owe. Don’t let the out-of-state driver flee the scene.
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              MAIN TAKEAWAYS
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Florida Law Still Owns the At-Fault Driver
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A lot of people think that once the other driver crosses the state line, the case dies. That is flat wrong. Under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0048/Sections/0048.193.html">
                Florida Statute Section 48.193
              </ExternalLink>
              , any driver who causes an accident on Florida roads submits to Florida&apos;s jurisdiction. Full stop. It does not matter where they live. It does not matter where they ran.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This is Florida&apos;s long-arm statute. Courts use it to reach out-of-state defendants in civil cases. Every driver on Florida roads implicitly accepts the state&apos;s legal authority. The moment they caused your crash in Tampa, Clearwater, or anywhere in Hillsborough or Pinellas County, Florida owned jurisdiction.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Our surveys show that most accident victims in Tampa assume they cannot sue a driver who left the state. That assumption costs them thousands. Do not make the same mistake.
            </p>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {surveyStats.map((item, idx) => (
              <StatCard key={idx} value={item.value} label={item.label} />
            ))}
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Florida Courts Serve a Driver Who Fled
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Here is something other law firms gloss over. You can serve an out-of-state defendant through the Florida Secretary of State. This is authorized under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0048/Sections/0048.194.html">
                Florida Statute Section 48.194
              </ExternalLink>
              . It requires two steps. First, you file the lawsuit and serve the Secretary of State as the driver&apos;s legal agent. Second, you mail a copy of the suit directly to the defendant.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Most defendants do not ignore lawsuits once they arrive by certified mail. Their own insurance company gets involved. The insurer has a duty to defend them. That is when serious negotiation starts.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Rob Johnson has gone through this exact process for Tampa Bay clients. You need an attorney who knows Florida procedural rules cold. One missed step in service can get your case dismissed.
            </p>
            <div className="mt-6">
              <DataTable headers={tableHeaders} rows={tableRows} />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Is the Two-year Time Limit Applicable If You Leave Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The time limit from the 4 year deadline was recently shortened, effective last year, to just 2 years. The{" "}
              <Link href="/blog/florida-statute-repose-vs-limitations-injury-cases" className="underline hover:text-[#4B93FF]">
                2 year limit
              </Link>{" "}
              should still apply to your case if you have not filed an injury lawsuit against a Florida-licensed driver yet. But{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.051.html">
                Florida Statute 95.051
              </ExternalLink>{" "}
              has a powerful exception that most lawyers underuse.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If the at-fault driver left Florida before you could file a lawsuit, the statute of limitations can be tolled. That means the clock pauses while they remain outside the state. It also pauses if the driver conceals their identity or uses a false name to dodge service.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This is not automatic. You have to prove it applies. Courts require strong legal arguments and solid evidence. This is exactly the kind of angle Rob fights for. He has built cases around defendants who thought distance bought them safety.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Do not assume the deadline has passed. Call Rob&apos;s office and let him evaluate your timeline.
            </p>
          </section>

          <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767] text-center">
            &ldquo;Distance never erased liability. Florida courts have a long reach, and I have used every inch of that reach to get my clients paid. If the driver left the state, we find them and we hold them accountable.&rdquo;
            <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
              &mdash; Robert J. Johnson, Esq. &mdash; Florida Personal Injury Attorney
            </cite>
          </blockquote>

          <div className="mt-8 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white text-center">
            <h2 className="text-2xl font-bold">The Driver Left. Your Rights Did Not.</h2>
            <p className="mt-2 text-slate-100">
              Rob Johnson fights for Tampa Bay accident victims 24 hours a day, 7 days a week.
            </p>
            <div className="mt-4 flex justify-center flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#EEF6F8] transition-all"
              >
                Get Your Free Case Review
              </Link>
              <a
                href="tel:8135403225"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-white hover:text-[#1C3767] transition-all"
              >
                Call (813) 540-3225
              </a>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Your Own Insurance May Be Your Fastest Path to Compensation
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Here is a fact other firms rarely lead with. When the at-fault driver is out of reach, your own uninsured or underinsured motorist (UM) coverage can step in immediately. Under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.727.html">
                Florida Statute Section 627.727
              </ExternalLink>
              , your insurer can be required to pay for your injuries just as if the at-fault driver had proper coverage.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Florida does not require drivers to carry bodily injury liability coverage. That means roughly 26.7% of Florida drivers may be uninsured. When someone with no or low coverage hits you and then flees the state, your UM policy becomes your financial lifeline.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              There is a catch. Florida insurers fight UM claims hard. They will look for reasons to pay less. You need an attorney, not just a claim adjuster. Rob handles UM claims aggressively and knows the tactics insurers use to undervalue payouts. Learn more about{" "}
              <Link href="/blog/how-insurance-policy-limits-affect-your-injury-compensation" className="underline hover:text-[#4B93FF]">
                how insurance policy limits affect your injury compensation
              </Link>.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Check out the{" "}
              <Link href="/car-accidents" className="underline hover:text-[#4B93FF]">
                full breakdown of your car accident rights in Florida
              </Link>{" "}
              to understand what coverage options apply to you.
            </p>

            <div className="mt-6 border border-[#dbe3ee] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C3767] mb-4">
                Steps to Take Immediately After the At-Fault Driver Flees
              </h3>
              <ul className="mt-4 space-y-3">
                {steps.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-slate-700">
                    <span className="text-green-500 font-bold">✓</span>
                    <span>
                      {idx === 3 ? (
                        <>
                          Collect contact information from all witnesses. Read about{" "}
                          <Link href="/blog/witness-statements-injury-case-outcome-florida" className="underline hover:text-[#4B93FF]">
                            how witness statements influence your case outcome
                          </Link>.
                        </>
                      ) : (
                        item
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Damages Can You Still Recover After the Driver Left?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Do not accept the idea that a fleeing driver limits what you can collect. Florida law lets you pursue the full spectrum of damages in a personal injury case. That includes your full medical expenses, lost wages, pain and suffering, and future care costs.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Pain and suffering is unavailable under your PIP coverage. But it is very much on the table once you step outside the no-fault system. House Bill 837 (2023) also altered Florida&apos;s comparative fault law. Under this{" "}
              <Link href="/blog/what-happens-If-multiple-parties-are-at-fault-in-a-florida-accident" className="underline hover:text-[#4B93FF]">
                comparative fault law
              </Link>
              , you can still pursue damages in personal injury cases provided you bear less than 50% of the fault for the crash. In cases of wrongful death, the timeline is much tighter for family members.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The crash survivor must file within two years of the fatal crash date. Think of it this way, there are 28,000+ accidents in Hillsborough County alone per year and hundreds killed during this time. Each of those families deserves help.
            </p>
            <div className="mt-6">
              <DataTable headers={damageHeaders} rows={damageRows} />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Why Robert Johnson Turns the Tide in Exactly These Cases
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Rob Johnson was born and raised right here in central Florida. He earned his law degree cum laude and spent over 20 years fighting for injured Floridians from the Panhandle to South Florida. He is not a billboard firm. You speak directly to Rob.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              When a driver flees the state after an accident, Rob&apos;s approach is three-part. He moves immediately to preserve evidence before it disappears. He files within the correct jurisdiction and uses Florida&apos;s long-arm reach to serve the defendant. He works your UM claim simultaneously so you are not left waiting on a lawsuit timeline.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Rob has handled DUI accidents involving drivers who fled, trucking cases, motorcycle crashes, and more. He knows that every delay costs the injured victim. That’s why he is available 24 hours a day, seven days a week.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              You also need to know there is no upfront cost. Rob works on contingency. If he does not win, you pay nothing.
            </p>
            <div className="mt-6">
              <DataTable headers={actionHeaders} rows={actionRows} />
            </div>
          </section>

          <div className="mt-8 border border-[#cfd8e3] bg-[#EEF6F8] p-6 text-center">
            <h2 className="text-2xl font-bold text-[#1C3767]">Do Not Let Them Get Away With It</h2>
            <p className="mt-2 text-slate-700 font-medium">
              Rob Johnson has fought for Tampa, Clearwater, and St. Petersburg accident victims for over 20 years. You pay nothing unless he wins.
            </p>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#1C3767] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-[#4B93FF] transition-all"
              >
                Free Case Review
              </Link>
              <a
                href="tel:8135403225"
                className="bg-white border border-[#1C3767] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#1C3767] hover:text-white transition-all"
              >
                Call Us Today
              </a>
            </div>
          </div>

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
            Disclaimer: This blog is for informational purposes only and is not legal advice. Contact Robert Johnson Law for guidance on your specific case.
          </p>
        </div>
      </div>
    </article>
  );
};

export default WhatHappensIfTheAtFaultDriverLeavesTheStateAfterAnAccident;
