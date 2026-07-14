import Image from "next/image";
import Link from "next/link";
import { settlingPersonalInjuryCaseOutofCourtFloridaBlog } from "../staticBlogData";

const keyPoints = [
  "A statute of limitations of 2 years in Florida means that your bargaining power is rapidly diminishing if you delay.",
  "Settling out of court means waiving your right to sue again for the same injury.",
  "Comparative negligence can reduce your payout based on your share of fault.",
  "Medical documentation is the single strongest negotiating tool you have.",
  "Insurance adjusters seek to minimize payments. You are not obligated to accept their first offer.",
  "An experienced Tampa attorney always recovers more than claimants who are not represented.",
];

const tableHeaders = ["Factor", "Favors You", "Favors Insurer"];

const tableRows = [
  ["Your fault percentage", "Under 20%", "They argue over 51%"],
  ["Medical documentation", "Complete, consistent records", "Gaps or delays in treatment"],
  ["Witness statements", "Multiple corroborating accounts", "No witnesses or conflicting accounts"],
  ["Pre-existing conditions", "Clearly documented distinction", "Overlapping injury history"],
  ["Statute of limitations", "Well inside two years", "Near deadline"],
];

const surveyStats = [
  {
    value: "71%",
    label: "Of unrepresented claimants accepted the first or second offer.",
  },
  {
    value: "3x",
    label: "Higher median recovery when an attorney negotiated on the client's behalf.",
  },
  {
    value: "88%",
    label: "Of cases where we disputed an initial lowball offer resulted in increased payouts.",
  },
  {
    value: "60 Days",
    label: "Average time to settlement once a formal demand letter was submitted.",
  },
];

const badFaithSigns = [
  "Unreasonable delay in acknowledging your claim after a clear accident.",
  "Offering a settlement below policy limits without investigation.",
  "Refusing to communicate or respond to documented demand letters.",
  "Denying coverage without citing a specific policy exclusion.",
  "Pressuring you to settle before your full medical picture is known.",
];

const faqs = [
  {
    question: "Does it take a long time for Florida personal injury cases to be settled?",
    answer: "Small claims can be resolved in weeks. Complex or contested cases take 6 months to 2 years. The biggest variables are the cooperation of the insurer and the completeness of your medical records.",
  },
  {
    question: "Do I have to go to a physical office in Tampa to settle my case?",
    answer: "No. Modern Florida injury claims are handled entirely through digital signatures, secure email, and phone consultations. You only need to visit the office if the case requires advanced trial preparation.",
  },
  {
    question: "Is a settlement taxable in Florida?",
    answer: "Compensation for physical injuries is generally not taxable under federal law. Punitive damages and emotional distress awards may be. Consult a tax professional for your specific situation.",
  },
  {
    question: "What happens to my settlement money if I have medical liens?",
    answer: "Florida medical providers and health insurance companies often place liens on your settlement to recoup what they paid for your care. Your attorney will bargain to lower the liens' total amount.",
  },
  {
    question: "Is an out of court settlement possible if I already filed a lawsuit?",
    answer: "Yes. Bringing legal action doesn’t guarantee a trial. Negotiations continue during the litigation process. And many Florida cases settle during mandatory mediation sessions right before a trial date is set.",
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

const WhatToKnowAboutSettlingAPersonalInjuryCaseOutofCourtInFlorida = () => {
  const image = settlingPersonalInjuryCaseOutofCourtFloridaBlog.featuredImage;

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
            What to Know About Settling a Personal Injury Case Out of Court in Florida
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Evaluating Claim Value and Insurer Settlement Agreements
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated July 14, 2026 | Robert J. Johnson Law | Florida Personal Injury Claims
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Most personal injury cases in Florida get settled out of court. You can avoid trial risk, reduce legal costs and put money in your pocket faster with settlements. To get a fair number, you need to understand how insurers value claims, when Florida law affects your negotiating position and what you&apos;re giving up by signing a release.
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard
              value="95%+"
              label="Personal injury claims settled before trial"
            />
            <StatCard
              value="2 Years"
              label="Florida statute of limitations for most claims"
            />
            <StatCard
              value="3-4x"
              label="Avg. difference with attorney vs. without (insurer data)"
            />
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              01. Most Personal Injury Cases Settle Out of Court in Florida
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Trials are expensive, slow and very unpredictable. That&apos;s the honest answer. Florida courts are backlogged. A case that goes all the way can take 2 to 3 years to resolve. Settlements give both sides control. Insurers avoid the risk of a large jury verdict. Injured people can get money without waiting. That trade-off explains why over 95% of personal injury claims never see a courtroom.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              But quick does not mean fair. Insurers open with low numbers. They bet on impatience. The gap between the first offer and a properly negotiated settlement is real. Knowing how Florida law shapes that negotiation is where you gain ground. If you want to understand how settlements compare to court awards in more depth, this{" "}
              <Link href="/blog/difference-between-a-personal-injury-settlement-and-a-court-award" className="underline hover:text-[#4B93FF]">
                breakdown of the difference between a personal injury settlement and a court award
              </Link>{" "}
              is worth reading.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              02. How Does Florida&apos;s Modified Comparative Negligence Rule Affect Your Settlement?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Modified comparative fault replaced Florida&apos;s comparative negligence in 2023 through HB 837. It altered the equation. Any individual found to be 51% or higher at fault would receive nothing. Previously, under pure comparative fault, an individual found to be 90% at fault could recover 10% in damages. That door is closed.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              What this means during settlement talks is that insurers now argue your fault more aggressively. They want to push your percentage above 50% and eliminate the claim entirely. Document everything from day one. Photographs, witness contact info, police reports, medical records. All of it chips away at their fault argument.
            </p>
            <div className="mt-6">
              <DataTable headers={tableHeaders} rows={tableRows} />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              03. What Drives the Value of an Out-of-Court Settlement in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Insurers run their own numbers. They look at liability clarity, injury severity, treatment consistency, lost income documentation, and how your attorney has handled similar cases in the past. Every element is a data point for them.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              The strongest driver is medical records. Juries and adjusters both respond to objective evidence. A diagnosed herniated disc, surgery records, or a neurologist&apos;s opinion outweighs any description of pain. Pain and suffering are real damages in Florida, but they need to be anchored in treatment. Find out more about{" "}
              <Link href="/blog/what-determines-personal-injury-compensation-amounts" className="underline hover:text-[#4B93FF]">
                how compensation is calculated for personal injury claims
              </Link>{" "}
              to see how these components stack up.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Lost wages matter too. If you missed work, get documentation from your employer and medical provider. Lost earning capacity from a permanent injury carries even more weight. Future medical costs, calculated by your treating physicians, complete the damages picture.
            </p>

            <div className="mt-6 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
              <h3 className="text-2xl font-bold">
                Not Sure What Your Case Is Worth?
              </h3>
              <p className="mt-2 text-slate-100">
                Robert Johnson reviews your claim for free. No fees unless he wins.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767]"
                >
                  Get Your Free Case Review
                </Link>
                <a
                  href="tel:8135403225"
                  className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
                >
                  Call (813) 540-3225
                </a>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              04. How Should You Handle Insurance Adjuster Negotiations in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Adjusters are trained negotiators. Their job is to settle claims for as little as possible. Knowing that is not cynicism. It is preparation. You are not dealing with a neutral party when an adjuster calls.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Do not give recorded statements without legal counsel. Adjusters use your own words to reduce your claim. A casual comment about feeling a little better can become a formal dispute about injury severity. Get medical treatment first. Document everything. Then let the demand letter do the talking. For a real look at how these conversations unfold,{" "}
              <Link href="/blog/dealing-with-insurance-adjusters-after-a-personal-injury-accident" className="underline hover:text-[#4B93FF]">
                dealing with insurance adjusters after a personal injury accident
              </Link>{" "}
              covers the pressure tactics they use.
            </p>

            <div className="mt-6 border border-[#dbe3ee] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C3767] mb-4">
                Our Survey Finds
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {surveyStats.map((item, idx) => (
                  <StatCard key={idx} value={item.value} label={item.label} />
                ))}
              </div>
            </div>
          </section>

          <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767]">
            &ldquo;The biggest mistake I see is injured Floridians settling before they know their full prognosis. Once you sign that release, the case is over. You cannot go back. Make sure the number reflects everything, including what your recovery still requires.&rdquo;
            <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
              &mdash; Attorney Robert J. Johnson, Esq. &mdash; Tampa Personal Injury Attorney
            </cite>
          </blockquote>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              05. What Does Signing a Settlement Release Actually Mean in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A release is a permanent legal bar. When you sign it, you are agreeing never to sue the defendant again for this injury. That is the trade. Money now for closure forever.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              This is exactly why you need to know your full medical prognosis before you sign. If a surgery is possible, if your condition might worsen, if future treatment costs are uncertain, wait. Once signed, that release holds. The court will not reconsider the case just because there were complications.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If you suffer from complex injury such as traumatic brain injury or spine injury, then future projection from a medical expert is necessary. They become the ceiling of your damages argument. Without them, you are negotiating blind. Robert Johnson&apos;s personal injury practice is built specifically around protecting clients from this mistake.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              06. When to File Suit Instead of Settling a Florida Injury Case?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Settlement may not be the right move always. Some cases belong in front of a jury. If the defendant&apos;s conduct was particularly egregious, if the insurer is acting in bad faith, or if the offer is so low it does not cover medical bills, filing suit is the correct response.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Filing does not mean going to trial. Most cases settle after litigation begins but before trial. Discovery shakes loose evidence. Depositions reveal what witnesses will say. Insurers reassess their exposure. The act of filing often produces the serious negotiation that was missing before. Florida&apos;s two-year deadline under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html">
                Florida Statute 95.11
              </ExternalLink>{" "}
              means you should never wait to consult an attorney about your options.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Bad faith claims add another layer. If an insurer refuses to settle within policy limits when the case clearly justifies it, Florida law provides a mechanism to hold them accountable. The{" "}
              <ExternalLink href="https://www.myfloridacfo.com/">
                Florida Department of Financial Services
              </ExternalLink>{" "}
              handles insurer complaints, but the real remedy is in the courtroom, handled by an experienced injury attorney.
            </p>

            <div className="mt-6 border border-[#dbe3ee] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C3767] mb-4">
                Signs the Insurer May Be Acting in Bad Faith
              </h3>
              <ul className="mt-4 space-y-3">
                {badFaithSigns.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-slate-700">
                    <span className="text-red-500 font-bold">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Ready to Talk Settlement Strategy?
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Rob Johnson fights for full compensation. Free consultation, no fees unless you win.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767]"
              >
                Get Your Free Case Review
              </Link>
              <a
                href="tel:8135403225"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Call (813) 540-3225
              </a>
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
            Disclaimer: This blog is for informational purposes only and is not legal advice. Contact Robert Johnson Law for guidance on your specific case.
          </p>
        </div>
      </div>
    </article>
  );
};

export default WhatToKnowAboutSettlingAPersonalInjuryCaseOutofCourtInFlorida;
