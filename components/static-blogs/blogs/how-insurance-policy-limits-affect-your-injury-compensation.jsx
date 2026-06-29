import Image from "next/image";
import Link from "next/link";
import { howInsurancePolicyLimitsAffectYourInjuryCompensationBlog } from "../staticBlogData";

const table1Headers = [
  "Coverage Level",
  "Coverage Type",
  "Minimum Amount",
  "Who Pays",
];

const table1Rows = [
  ["Florida Legal Minimum", "PIP (No-Fault)", <span key="pip" className="font-semibold text-red-600">$10,000</span>, "Your Own Insurer"],
  ["Florida Legal Minimum", "Property Damage Liability", <span key="pd" className="font-semibold text-red-600">$10,000</span>, "Your Own Insurer"],
  ["Most Common Driver", "Bodily Injury Coverage", <span key="bi" className="font-semibold text-red-600">$25K / $50K</span>, "At-Fault Driver's Insurer"],
  ["Recommended Coverage", "Bodily Injury", <span key="rec-bi" className="font-semibold text-green-600">$100K / $300K</span>, "At-Fault Driver's Insurer"],
  ["Recommended Add-On", "Uninsured / Underinsured Motorist", <span key="uim" className="font-semibold text-green-600">$100,000+</span>, "Your Own Insurer"],
  ["Maximum Protection", "Stacked UM/UIM (Multi-Vehicle)", <span key="stacked" className="font-semibold text-green-600">Varies</span>, "Your Own Insurer"],
];

const table2Headers = [
  "Feature",
  "At-Fault Driver Liability",
  "Your UM/UIM Coverage",
  "MedPay Coverage",
];

const table2Rows = [
  ["Who triggers it?", "Other driver causes the crash", "Other driver uninsured or underinsured", "Any accident, regardless of fault"],
  ["Do you need it?", "No (depends on other driver)", "Optional but highly recommended", "Optional add-on"],
  ["Florida minimum?", "Not required for all drivers", "Must be offered by insurer", "Not required"],
  ["Typical limit", "$25K–$100K per person", "$25K–$100K+ (your choice)", "$1K–$10K per incident"],
  ["Pays for what?", "Your medical costs and damages", "Remaining medical costs and damages", "Medical bills only, immediate"],
  ["When does it kick in?", "After fault is established", "After at-fault policy is exhausted", "Immediately after accident"],
  ["Stackable in FL?", "No", "Yes, if multi-vehicle", "No"],
];

const steps = [
  {
    number: "1",
    title: "Accident occurs",
    body: "You file a claim against the at-fault driver's insurer to seek compensation for your medical bills and losses.",
  },
  {
    number: "2",
    title: "Insurer evaluates damages",
    body: "The insurance adjuster reviews and compares your total damages to their insured's policy limit.",
  },
  {
    number: "3",
    title: "Within limits payout",
    body: "If your documented damages are fully within the policy limit, the insurer pays the claim and the case closes.",
  },
  {
    number: "4",
    title: "Policy limit capped",
    body: "If your damages exceed the limit, the insurer pays the maximum cap of their policy and stops further payment.",
  },
  {
    number: "5",
    title: "Identify options",
    body: "Your attorney identifies remaining recovery options: your own UM/UIM coverage, MedPay, or pursuing a personal judgment.",
  },
  {
    number: "6",
    title: "UM/UIM coverage kicks in",
    body: "If you carry UM/UIM coverage, your own insurer steps in to cover the remaining gap up to your chosen policy limits.",
  },
  {
    number: "7",
    title: "Evaluate personal assets",
    body: "If gaps remain after all coverage is exhausted, your attorney evaluates whether the at-fault driver has collectible personal assets.",
  },
  {
    number: "8",
    title: "Pursue highest potential path",
    body: "Your attorney pursues the path with the highest recovery potential on your behalf, protecting your rights and compensation.",
  },
];

const faqs = [
  {
    question: "How do policy limits change if I am hit by a rideshare driver or a truck?",
    answer: "When a driver has someone in the car during an accident (or is on the app), insurance might cover up to a million dollars or more for injuries. That kind of protection comes from commercial rideshare or company-related policies.",
  },
  {
    question: "Can I use an Umbrella Policy for compensation?",
    answer: "Yes. An umbrella policy provides an extra layer of liability coverage that kicks in only after a standard auto insurance policy limit is completely exhausted.",
  },
  {
    question: "Can I file a claim against multiple policy limits for a multiple-party accident?",
    answer: "Yes. Florida is a comparative fault state. If two or more drivers contributed to the crash that injured you, your attorney can file claims against the insurance policies of all at-fault parties.",
  },
  {
    question: "Does property damage come out of the same policy limit as my bodily injury medical bills?",
    answer: "No. Policies for auto insurance treat bodily injury coverage separately from property damage liability. One covers medical costs, discomfort, and physical harm; the other handles repairs or replacement of vehicles.",
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
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-[#dbe3ee]">
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} className="px-4 py-3 align-top text-slate-700">
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

const HowInsurancePolicyLimitsAffectYourInjuryCompensation = () => {
  const image = howInsurancePolicyLimitsAffectYourInjuryCompensationBlog.featuredImage;

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
            How Insurance Policy Limits Affect Your Injury Compensation
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Maximizing Payouts & Navigating Auto Insurance Caps in Florida
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated June 29, 2026 | Robert J. Johnson Law | Central Florida Injury Defense
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Insurance policy limits determine the outside amount an at fault driver’s insurer will pay toward your injuries after an accident. When your medical bills and losses exceed that cap, your full recovery depends on knowing every lawful avenue still forthcoming to you.
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              IMPORTANT TAKEAWAYS
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              <li>Policy limits cap the insurer’s payout, not total right to compensation.</li>
              <li>Florida’s minimum auto insurance requirements are among the lowest in the nation.</li>
              <li>Underinsured Motorist (UIM) coverage can bridge the gap when at-fault limits run short.</li>
              <li>Stacking UM/UIM policies in Florida can multiply your available recovery significantly.</li>
              <li>Pursuing the at-fault driver personally is possible but depends on their financial assets.</li>
              <li>An experienced Tampa personal injury attorney can find coverage layers you may not know exist.</li>
            </ul>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard
              value="6 in 10"
              subtitle="Initial Settlement Shortfall"
              label="Accident victims whose initial offers did not cover their total documented damages"
            />
            <StatCard
              value="1.7x"
              subtitle="Stacked Coverage Boost"
              label="More compensation recovered on average with stacked policies"
            />
            <StatCard
              value="$10,000"
              subtitle="Florida PIP Minimum"
              label="Legal minimum coverage required for Personal Injury Protection"
            />
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              01. What Exactly Are Insurance Policy Limits?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Every auto insurance policy has a cap. That cap is the policy limit. It controls exactly how much the insurer will ever pay out after an accident.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Usually, insurance for physical harm lists distinct limits. One plan might cover up to twenty-five thousand per individual, but only fifty grand overall per incident. When two people get badly injured, say, driver and rider, the payout divides across both. That fifty grand overall cap applies no matter how many are harmed.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Insurance adjusters are not on your side. Their job is to settle your claim as cheaply as possible within those limits. If you have ever dealt with a denied insurance claim you already know exactly how that plays out.
            </p>

            <div className="mt-6">
              <DataTable
                headers={table1Headers}
                rows={table1Rows}
              />
              <p className="mt-2 text-xs text-slate-500 italic">
                Red values indicate dangerously low coverage. Green values reflect recommended levels.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              02. What Does Florida Law Actually Require Drivers to Carry?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Florida’s minimum coverage requirements are shockingly low. Just 10 grand for injury protection. Florida law says that is enough. Drivers also need ten thousand for damage to someone else&apos;s property. The rule comes from <ExternalLink href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0600-0699/0627/Sections/0627.733.html">Florida Statute 627.733</ExternalLink>.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Outside the no-fault rule, a path opens in Florida if serious injury occurs. Permanent damage, major scarring, or loss of life lets claims go straight to the responsible driver&apos;s insurance. Data from the <ExternalLink href="https://www.iii.org/">Insurance Information Institute</ExternalLink> shows Florida often leads in drivers lacking proper coverage.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              03. What Happens When the At-Fault Driver’s Policy Is Not Enough?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              This scenario plays out constantly in Tampa and across the Bay. Our survey of personal injury cases handled at Robert Johnson Law reveals that more than 6 in 10 accident victims in the Tampa Bay area received initial settlement offers that did not cover their total documented damages. And the driver at-fault simply didn’t carry enough coverage.
            </p>

            <div className="mt-6 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
              <h3 className="text-xl font-bold text-[#1C3767]">
                What If Your Damages Exceed Policy Limits?
              </h3>
              <p className="mt-2 leading-7 text-slate-700">
                When medical bills outpace policy limits, you must look beyond standard liability coverage. Your attorney will trace secondary coverage options, examine personal asset collections, and check if the insurer acted in bad faith.
              </p>
            </div>

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
              <Link href="/blog/can-you-file-personal-injury-claim-without-a-police-report-in-florida" className="underline hover:text-[#4B93FF]">
                Can You File Personal Injury Claim Without a Police Report in Florida?
              </Link>
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              04. Can Your Own Insurance Step In When the Other Driver’s Coverage Falls Short?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Yes, and far more Floridians should be using this than actually do.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Should an accident happen, Florida makes sure insurance companies provide UM or UIM options. Yet purchasing them is entirely up to you. Skipping it saves a few dollars per month. After a serious accident, that decision can cost you tens of thousands.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              MedPay is another option worth knowing. It pays medical bills right after an accident, regardless of fault. No injury threshold. No waiting. If your car accident left you with urgent treatment costs, MedPay can handle that too.
            </p>

            <div className="mt-6">
              <DataTable
                headers={table2Headers}
                rows={table2Rows}
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              05. How Do Stacked and Unstacked Policies Work in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Most drivers elsewhere cannot combine uninsured motorist coverage like this. Florida lets people who insure several cars add their protection amounts. When more than one vehicle has coverage, the policy payouts link up. A major accident could trigger higher compensation because of it. That multiplies the total recovery available to you after a serious crash.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Say you have 50 grand in UM/UIM coverage for each of your two vehicles. If a crash hits and stacking applies, those layers add up fast. Suddenly you got $100,000 ready to lend a hand. Without stacking? That safety cushion never grows beyond 50 grand per incident.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Stacked policies cost a bit more each month. But after a serious motorcycle accident or a commercial truck crash, that extra premium is the best money you ever spent. Our survey at Robert Johnson Law found that clients with stacked policies recovered on average 1.7 times more in UM/UIM claims compared to those carrying unstacked coverage.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              06. Is Going After the At-Fault Driver Personally Worth Pursuing?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              It depends entirely on what the driver actually owns.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              When a settlement or court judgment exceeds the at-fault driver’s policy limit, their insurer pays the limit and stops. The remaining balance becomes the driver’s personal financial responsibility. In theory, you can collect from their wages, bank accounts, or non-exempt property.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The problem is that Florida provides strong protections for personal assets. Homestead property, for example, is largely exempt from civil judgments under Florida law. The Florida Legislature’s exemption statutes make collecting on a judgment against a low-asset driver genuinely difficult. If they have little to collect, a judgment may exist on paper but bring in nothing in practice.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This is why Rob evaluates this option at the very start of every case. You deserve an honest picture of what is actually collectible, not just what is theoretically possible.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              07. What Should You Do Right Now If Policy Limits Are an Issue in Your Case?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Insurers count on urgency. They push early settlements before you know the full cost of your recovery. Once you sign that release, your case is done. Your options are gone.
            </p>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              FROM THE ATTORNEY
            </h2>
            <blockquote className="mt-4 border-l-4 border-[#4B93FF] pl-4 italic text-slate-100">
              &ldquo;In 20 years of working in both law and the insurance industry, I have seen too many injured Floridians walk away with far less than they deserved. They did not know what coverage was still available to them. My job is to find every dollar that is rightfully yours and fight like Tampa thunder to get it.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-sm font-semibold not-italic text-slate-200">
              -- Robert J. Johnson, Esq. | Tampa Personal Injury Attorney | Robert Johnson Law
            </cite>
            <p className="mt-6 leading-7 text-slate-100">
              Give Rob Johnson a call today at <a href="tel:8135403225" className="underline font-bold">(813) 540-3225</a> for a free consultation. Crash harm hits millions yearly across the U.S., says the <ExternalLink href="https://www.nhtsa.gov/">National Highway Traffic Safety Administration</ExternalLink>, yet most never have to happen. Your compensation is worth fighting for.
            </p>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#EEF6F8] p-6 text-slate-900">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              CLIENT VOICE
            </h2>
            <blockquote className="mt-4 pl-4 border-l-4 border-[#4B93FF] italic text-slate-700">
              &ldquo;After my accident, I was convinced the insurance company’s first offer was all I could get. Attorney Johnson found additional coverage I did not even know I had and recovered nearly twice what the insurer originally put on the table. He treated my case like it was personal. Because to him, it was.&rdquo;
            </blockquote>
            <cite className="mt-4 block text-sm font-semibold not-italic text-slate-600">
              -- Marcus T., Tampa, FL
            </cite>
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

          <p className="mt-6 font-semibold text-[#1C3767]">
            Check this out:{" "}
            <Link href="/blog/what-happens-If-multiple-parties-are-at-fault-in-a-florida-accident" className="underline hover:text-[#4B93FF]">
              What Happens If Multiple Parties Are at Fault in a Florida Accident?
            </Link>
          </p>

          <p className="mt-8 border-t border-[#dbe3ee] pt-5 text-sm leading-6 text-slate-500">
            Disclaimer: The content in this blog post is for informational purposes only and is not legal advice. Please contact Robert Johnson Law for specific advice on your case.
          </p>
        </div>
      </div>
    </article>
  );
};

export default HowInsurancePolicyLimitsAffectYourInjuryCompensation;
