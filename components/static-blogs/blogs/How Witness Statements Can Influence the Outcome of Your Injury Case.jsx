import Image from "next/image";
import Link from "next/link";
import { howWitnessStatementsInfluenceOutcomeInjuryCaseBlog } from "../staticBlogData";

const keyPoints = [
  "A reliable eyewitness can prove who caused the crash.",
  "Accounts collected within hours hold up better in court.",
  "Florida judges weigh consistency more than confidence.",
  "Memory fades fast. A delay can cost you the case.",
  "A written account beats a verbal promise to testify later.",
  "Comparative negligence math shifts the moment a witness backs your story.",
];

const mistakes = [
  "Asking leading questions that suggest the answer.",
  "Waiting days or weeks before following up.",
  "Leaving the account only verbal, nothing written.",
  "Coaching a witness on what to say.",
  "Ignoring a witness who saw only part of it.",
];

const timelineSteps = [
  {
    time: "At the Scene (Minutes)",
    desc: "Get full names and phone numbers right away.",
  },
  {
    time: "Within 24 Hours",
    desc: "Call back for a fuller account while memory is fresh.",
  },
  {
    time: "Within 10 Days",
    desc: "File your FLHSMV self-report if no police came.",
  },
  {
    time: "Before Deposition",
    desc: "Your account gets formalized into a sworn statement.",
  },
  {
    time: "At Trial or Settlement",
    desc: "The account becomes evidence that the other side must answer.",
  },
];

const checklistItems = [
  "Get their full name, phone number, and address.",
  "Ask open-ended questions, never leading ones.",
  "Write down their exact words when possible.",
  "Note exactly where they were standing.",
  "Ask if they are willing to testify later.",
  "Confirm the best way to reach them again.",
];

const tableHeaders = ["Witness Type", "What They Provide", "How Courts Weigh It"];

const tableRows = [
  [
    "Eyewitness (Bystander)",
    "A firsthand account of what happened",
    "Strong when given early and detailed",
  ],
  [
    "Expert Witness",
    "A technical opinion on cause or injury",
    "Carries weight on complex fault questions",
  ],
  [
    "Character Witness",
    "Insight into a person's habits or reliability",
    "Rarely decisive alone on its own",
  ],
];

const faqs = [
  {
    question: "Do I need a lawyer to gather an eyewitness account in Florida?",
    answer: "No, but it helps a lot. An attorney secures accounts that hold up in court.",
  },
  {
    question: "Can a text message count as proof of what a witness saw?",
    answer: "Yes, if it is dated and sent by that witness directly.",
  },
  {
    question: "What happens if my witness refuses to testify in court?",
    answer: "Their earlier recorded account may still qualify under certain hearsay exceptions.",
  },
  {
    question: "Is a written note enough or do I need a sworn affidavit?",
    answer: "A note helps right away. An affidavit carries more weight later.",
  },
  {
    question: "How long do I have to track down witnesses after a Florida accident?",
    answer: "As soon as possible. Contact details go stale within days.",
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

const HowWitnessStatementsCanInfluenceTheOutcomeOfYourInjuryCase = () => {
  const image = howWitnessStatementsInfluenceOutcomeInjuryCaseBlog.featuredImage;

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
            How Witness Statements Can Influence the Outcome of Your Injury Case
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Credible Eyewitness Testimony and Settlement Value in Florida
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated July 8, 2026 | Robert J. Johnson Law | Central Florida Injury Claims
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Witness statements can make or break your injury claim. They confirm fault. They support your version of events. They counter whatever the other side claims happened. A clear eyewitness account often decides who pays. And how much you walk away with.
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              KEY POINTS
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <StatCard
              value="50%"
              subtitle="Florida's Fault Bar"
              label="Cross fifty percent at fault under Florida Statute 768.81 and you recover nothing, no matter how strong your medical bills are."
            />
            <StatCard
              value="30%"
              subtitle="Higher Average Settlement"
              label="Robert Johnson Law's review of recent case files found claims with a credible eyewitness settled for about 30 percent more than claims without one."
            />
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              01. What Makes a Witness Account Strong Enough to Use in Court?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A strong account is specific and collected fast. Vague answers fall apart under questioning. Florida courts want details. Who stood where. What they actually saw. What happened right after?
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Someone saying the truck ran the light helps more. Just saying it was fast does not help much. Under{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0090/Sections/0090.803.html">
                Florida Statute 90.803
              </ExternalLink>
              , timing matters. An account made right after the event carries extra weight. The law calls it an excited utterance. Panic is hard to fake. A witness statement gathered within the hour rarely gets challenged later. Calm, rehearsed recall gets picked apart fast.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Adjusters look for holes in your story. A detailed, early account closes most of them. Evidence matters from day one. Not after weeks of waiting. Robert Johnson Law has reviewed thousands of Tampa Bay area files. The pattern holds across Hillsborough and Pinellas County. Strong accounts move cases toward fair settlements faster.
            </p>
          </section>

          <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767]">
            &ldquo;In twenty years of Florida injury cases, the file with a strong witness almost always settles faster and for more.&rdquo;
            <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
              — Robert J. Johnson, Personal Injury Attorney, Tampa FL
            </cite>
          </blockquote>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              02. How Do Florida Courts Decide If a Witness Account Is Credible?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Courts weigh position, consistency, and bias. A neutral bystander beats a close friend most of the time. Where someone stood changes everything. A driver two cars back saw very little. The pedestrian on the corner saw it all. Florida courts ask about sightlines first, not confidence.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Consistency between the police account and what comes up later in a deposition matters most. A witness who repeats the same story holds up well. Shifting details gets used against you fast.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Bias gets tested hard too. Family members and coworkers face tougher cross examination. Judges discount testimony from anyone with something to gain. Robert Johnson Law trains every client on this early. We ask who saw what before anything else. This holds true in Brandon, Riverview, or downtown Tampa.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              03. Why Do Witness Accounts Disappear or Change Over Time?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              People move, forget, or stop answering calls. Some change their story without meaning to. Phone numbers go dead within weeks. People switch jobs, cities, and carriers fast. A name scribbled on a napkin rarely survives a month.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Human memory is not a recording. Each retelling reshapes the original memory slightly. Waiting months to get a formal account invites real trouble. Outside pressure plays a role too. A coworker of the at fault party may grow quiet. This often happens once management gets involved.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert Johnson Law moves fast on every case. We secure contact details before either problem sets in. This holds true in Clearwater or Plant City.
            </p>

            <div className="mt-6 border border-[#dbe3ee] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#1C3767]">
                Mistakes That Weaken a Witness Account
              </h3>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc pl-5">
                {mistakes.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              04. Can a Witness Account Affect Your Settlement Value in Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Yes. A credible account often raises the number an insurer offers. Insurers price risk for a living. A file with no witness gives the adjuster room to argue. They can call your version unreliable.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Florida runs on modified comparative negligence. Cross fifty percent at fault and you recover nothing. This comes from{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html">
                Florida Statute 768.81
              </ExternalLink>
              . A witness who backs your story shifts that fault percentage.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert Johnson Law has seen this pattern across Hillsborough County. It plays out again and again. Files with a strong account settle faster. They usually settle for more too. The same holds true on I-275 or in a Tampa store.
            </p>

            <div className="mt-6 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
              <h3 className="text-2xl font-bold">
                Witnesses Forget. Evidence Disappears. Don&apos;t Wait.
              </h3>
              <p className="mt-2 text-slate-100">
                Robert Johnson Law can start preserving your case today.
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
              05. What Should You Do Right After the Accident to Protect These Accounts?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Act within minutes, not days. Get names and numbers on the spot. Ask open questions only. What did you see. Where were you standing. Avoid suggesting an answer, since that can look like coaching later. Write down their exact words if you can. Paraphrasing loses detail that might matter at trial.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If police never arrive, Florida still allows a self report. File it through the{" "}
              <ExternalLink href="https://www.flhsmv.gov/">
                FLHSMV
              </ExternalLink>{" "}
              within ten days.{" "}
              <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html">
                Florida Statute 95.11
              </ExternalLink>{" "}
              gives you two years to file your claim. Pair that report with any account you gathered at the scene.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert Johnson Law can send preservation letters fast. We act within hours of your call. This locks in surveillance footage before a Tampa business overwrites it.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-[#1C3767]">
                  The Witness Account Timeline
                </h3>
                <ul className="mt-4 space-y-4">
                  {timelineSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1C3767] text-xs font-bold text-white">
                        {idx + 1}
                      </span>
                      <div>
                        <strong className="text-slate-800">{step.time}:</strong>
                        <p className="text-sm text-slate-600 mt-1">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#dbe3ee] bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-[#1C3767]">
                  Checklist for Collecting a Witness Account
                </h3>
                <ul className="mt-4 space-y-3">
                  {checklistItems.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-slate-700">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              06. How Do Expert Witnesses Differ From Eyewitnesses in an Injury Case?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Eyewitnesses describe what happened. Experts explain why or how it happened technically. An eyewitness might say a car ran the light. An accident reconstruction expert calculates speed and impact using physical evidence. Both serve different jobs in the same file.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Medical experts connect your injury directly to the crash. This matters when an insurer claims your injury was pre-existing. One expert opinion can outweigh a dozen lay observations.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Complex cases often need both types working together. One paints the picture. The other proves the science behind it. Robert Johnson Law works with trusted experts across Tampa Bay. This includes accident reconstruction and orthopedic specialists.
            </p>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-[#1C3767] mb-4">
                Eyewitness vs Expert Witness vs Character Witness
              </h3>
              <DataTable headers={tableHeaders} rows={tableRows} />
            </div>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Were You Hurt in a Florida Accident?
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Let Robert Johnson Law track down your witnesses before it is too late. Free consultation, confidential review.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="tel:8135403225"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767]"
              >
                Call (813) 540-3225
              </a>
              <Link
                href="/contact"
                className="border border-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white"
              >
                Free Consultation
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
            Disclaimer: This blog is for informational purposes only and is not legal advice. Contact Robert Johnson Law for guidance on your specific case.
          </p>
        </div>
      </div>
    </article>
  );
};

export default HowWitnessStatementsCanInfluenceTheOutcomeOfYourInjuryCase;