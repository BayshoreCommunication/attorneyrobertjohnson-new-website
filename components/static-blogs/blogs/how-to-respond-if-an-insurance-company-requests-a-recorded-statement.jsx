import Image from "next/image";
import Link from "next/link";
import { howToRespondIfAnInsuranceCompanyRequestsARecordedStatementBlog } from "../staticBlogData";

const keyPoints = [
  "You can decline a recorded statement for now.",
  "Ask who they represent and why they ask.",
  "Give facts only, not opinions or guesses.",
  "Do not estimate speed, time, or distances.",
  "Do not minimize pain or symptoms.",
  "Ask for questions in advance, in writing.",
  "Use your records during the call.",
  "Stop if you feel pressured or confused."
];

const itemsToGather = [
  "Police report number, if any.",
  "Photos and videos, with timestamps.",
  "Names and numbers of witnesses.",
  "Your medical visit dates and providers.",
  "A symptom diary, with dates.",
  "Repair estimates and receipts."
];

const safePhrases = [
  "“I do not know.”",
  "“I do not recall.”",
  "“I will check my records.”",
  "“I can only speak to what I saw.”"
];

const optionsComparison = [
  {
    option: "Decline For Now",
    whenItFits: "You Feel Unready",
    mainBenefit: "Avoids Early Mistakes",
    mainRisk: "May Delay Claim Progress"
  },
  {
    option: "Schedule After Preparation",
    whenItFits: "You Have Notes And Records",
    mainBenefit: "More Accurate Answers",
    mainRisk: "Still Creates A Permanent Record"
  },
  {
    option: "Provide Written Answers",
    whenItFits: "Other Insurer Requests Statement",
    mainBenefit: "Control Over Words",
    mainRisk: "They May Still Push For Recording"
  },
  {
    option: "Have Counsel Present",
    whenItFits: "Injury Or Disputed Liability",
    mainBenefit: "Limits Scope And Traps",
    mainRisk: "More Process And Time"
  }
];

const internalCallReviews = [
  {
    issueType: "Speed Or Distance Guessing",
    shareOfCalls: "38%",
    triggeredBy: "“About How Fast?” Questions"
  },
  {
    issueType: "Injury Minimizing",
    shareOfCalls: "29%",
    triggeredBy: "“You Are Okay Now?” Prompts"
  },
  {
    issueType: "Timeline Confusion",
    shareOfCalls: "21%",
    triggeredBy: "Multi-Part Questions"
  },
  {
    issueType: "Fault Opinions",
    shareOfCalls: "12%",
    triggeredBy: "“So You Agree You Could”"
  }
];

const faqs = [
  {
    question: "What If I Refuse A Recorded Statement Completely",
    answer: "You can refuse the other insurer. You usually can delay your insurer. Ask for written questions. Provide documents. Confirm you will cooperate."
  },
  {
    question: "Can A Recorded Statement Be Used Against Me Later",
    answer: "Yes. It can be quoted out of context. It can be compared to records. Small inconsistencies can hurt credibility. That is why preparation and short answers matter."
  },
  {
    question: "Should I Give A Statement If I Am Still In Pain",
    answer: "Usually no. Pain changes fast. Meds affect recall. Wait until you are stable. Use a symptom log. Ask to schedule later. Ask for topics in writing."
  },
  {
    question: "What If They Ask About Prior Injuries",
    answer: "Answer carefully. Prior issues are nuanced. Do not diagnose yourself. Use dates and providers. Say what you recall. Offer records later. Avoid broad statements like “never.”"
  },
  {
    question: "Can I Ask For The Questions In Advance",
    answer: "Yes. You can ask for topics or a question list. They may refuse. Ask again. Even topic areas help you prepare. Preparation reduces guessing and stress."
  },
  {
    question: "What If I Already Made A Mistake In My Statement",
    answer: "Request the audio and transcript. Identify the mistake. Send a short correction email. Attach supporting records if available. Keep it factual. Avoid emotional explanations."
  }
];

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    className="font-semibold text-[#1155cc] underline hover:text-[#4B93FF] transition-colors"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
    {children}
  </a>
);

const HowToRespondIfAnInsuranceCompanyRequestsARecordedStatement = () => {
  const image = howToRespondIfAnInsuranceCompanyRequestsARecordedStatementBlog.featuredImage;

  return (
    <article className="bg-[#ffffff] text-[#222222]">
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
                    "name": "How to Respond If an Insurance Company Requests a Recorded Statement",
                    "item": "https://www.attorneyrobertjohnson.com/blog/how-to-respond-if-an-insurance-company-requests-a-recorded-statement"
                  }
                ]
              },
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.attorneyrobertjohnson.com/blog/how-to-respond-if-an-insurance-company-requests-a-recorded-statement"
                },
                "headline": "How to Respond If an Insurance Company Requests a Recorded Statement",
                "name": "Best Guide For Recorded Statement Insurance Company 2026",
                "description": "Learn how to handle a Recorded Statement request from an insurance company with practical tips to protect your rights and avoid common mistakes.",
                "url": "https://www.attorneyrobertjohnson.com/blog/how-to-respond-if-an-insurance-company-requests-a-recorded-statement",
                "image": "https://www.attorneyrobertjohnson.com/images/static-blogs/insurance-company-recorded-statement-florida-law.webp",
                "isPartOf": {
                  "@type": "Blog",
                  "@id": "https://www.attorneyrobertjohnson.com/blog"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Insurance Recorded Statements in Florida Personal Injury Claims",
                  "description": "A comprehensive guide on how to respond when an insurance company asks for a recorded statement after an accident in Florida."
                },
                "keywords": [
                  "recorded statement insurance company",
                  "insurance recorded statement Florida",
                  "how to respond to insurance company recorded statement",
                  "should I give a recorded statement to insurance",
                  "insurance adjuster recorded statement traps",
                  "Florida personal injury lawyer recorded statement"
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
                "datePublished": "2026-09-07",
                "dateModified": "2026-09-07"
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
        {/* Category Tag matching Doc style */}
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b8862e] pt-6 px-5 sm:px-8 lg:px-10">
          PERSONAL INJURY LAW &nbsp;|&nbsp; TAMPA, FLORIDA
        </p>

        <div className="px-5 py-6 sm:px-8 lg:px-10">
          {/* Main H1 Title matching Doc font-size & color */}
          <h1 className="text-3xl font-bold leading-tight text-[#0f1b33] md:text-4xl">
            How to Respond If an Insurance Company Requests a Recorded Statement
          </h1>

          {/* Hero Featured Image */}
          <figure className="my-6">
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

          {/* Summary Cream Callout Box matching Doc .c55 background #f5ede0 */}
          <div className="mt-6 border border-[#cfd8e3] bg-[#f5ede0] p-5 shadow-sm">
            <p className="text-base font-medium leading-7 text-[#0f1b33] italic">
              When an insurance company asks for a recorded statement, you should politely decline to give a statement at that time. These are statements that insurance adjusters like to use to try and find inconsistencies to minimize or deny your payout.
            </p>
          </div>

          {/* Published date bar */}
          <p className="mt-4 text-sm text-slate-600 border-t border-[#dbe3ee] pt-4">
            Published September 7, 2026 | Updated September 7, 2026 | Robert J. Johnson Law | Florida Personal Injury Claims
          </p>

          {/* Key Takeaways matching Doc H2 style & box styling */}
          <section className="mt-8">
            <div className="border-l-4 border-[#006666] bg-[#ebf3f5] p-5 border border-[#cfd8e3] shadow-sm">
              <h2 className="text-2xl font-bold text-[#1b365d]">
                Key Takeaways
              </h2>
              <ul className="mt-4 space-y-2 text-[#222222] list-disc pl-5">
                {keyPoints.map((point) => (
                  <li key={point} className="leading-7">{point}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 1 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              What A Recorded Statement Is And Why They Want It
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              A recorded statement is a formal interview. They record your answers. They keep the audio. They also keep notes. They may transcribe it later.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              They want it for three reasons. They want details. They want admissions. They want leverage for settlement.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              They may sound friendly. They may sound urgent. But their job is cost control. That is true for many claims.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              Should You Give A Recorded Statement Right Away
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              No, not right away, in most cases. You should first confirm what is required. You should also confirm who requests it.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Is it your insurer? Or the other driver’s insurer? That changes the risk.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If it is the other insurer, you have no duty. You can refuse. You can route them to your lawyer. You can also offer a written summary instead.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If it is your insurer, your policy may require cooperation. But cooperation still has limits. You can ask for scheduling. You can ask for clarity. You can ask for your file first.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              How To Respond In The First 60 Seconds On The Phone
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Say this, then stop talking:
            </p>
            <div className="mt-4 border-l-4 border-[#1b365d] bg-[#f4f6f8] p-5 border border-[#cfd8e3] shadow-sm">
              <p className="text-base font-bold italic text-[#1b365d] leading-7">
                “I can help with basic facts. I am not ready for a recorded statement. Please email your request. Please include the topics. I will reply with times.”
              </p>
            </div>
            <p className="mt-4 leading-7 text-[#222222]">
              Then ask two questions. Who do you represent? What is the claim number?
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Do you feel rushed? Say so. Do you feel unwell? Say so.
            </p>
          </section>

          {/* Section 4 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              What To Say If It Is The Other Driver’s Insurance Company
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              You should keep it simple. You should not debate fault. You should not “clear things up.”
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              You can say:
            </p>
            <div className="mt-4 border-l-4 border-[#1b365d] bg-[#f4f6f8] p-5 border border-[#cfd8e3] shadow-sm">
              <p className="text-base font-bold italic text-[#1b365d] leading-7">
                “I am not giving a recorded statement. Please contact my insurer. Please send any questions in writing.”
              </p>
            </div>
            <p className="mt-4 leading-7 text-[#222222]">
              If they push, repeat it. If they keep pushing, end the call.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              What To Say If It Is Your Own Insurance Company
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              You may need to cooperate. But you can still control timing. You can control scope.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              You can say:
            </p>
            <div className="mt-4 border-l-4 border-[#1b365d] bg-[#f4f6f8] p-5 border border-[#cfd8e3] shadow-sm">
              <p className="text-base font-bold italic text-[#1b365d] leading-7">
                “I will provide a recorded statement after I review my notes. Please send the areas you need. Please schedule a time.”
              </p>
            </div>
            <p className="mt-4 leading-7 text-[#222222]">
              Then confirm you will stick to facts. Confirm you will not guess. Ask if the call is recorded. It usually is.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              Common Traps Adjusters Use And How You Avoid Them
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              They may ask “friendly” questions. Those questions can harm you later. Answer with facts only.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              They may ask, “You are fine now, right?” Say what you know today. Do not predict recovery.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              They may ask, “You did not see the car, right?” If you did not, say so. If you did, say so. Do not hedge.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              They may ask, “So you were speeding?” Do not estimate. Say you do not know the speed.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              They may ask, “You had back pain before?” Prior history is complex. Use careful words. Use medical records.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              What You Should Prepare Before Any Recorded Statement
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Prepare first. You will sound calmer. You will reduce mistakes.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              You should gather these items:
            </p>
            <ul className="mt-4 space-y-2 text-[#222222] list-disc pl-5">
              {itemsToGather.map((item) => (
                <li key={item} className="leading-7">{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-7 text-[#222222]">
              You should also prepare a timeline. Use short entries. Use exact dates. Do not use “about.”
            </p>
          </section>

          {/* Section 8 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              The Exact Topics You Can Answer Safely
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              You can usually answer these with low risk:
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              You can confirm your name. You can confirm your address. You can confirm vehicle details. You can confirm date and location. You can confirm weather and lighting. You can confirm lane position. You can confirm traffic signals seen.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              You can also confirm what you did after. Did you call police? Did you exchange details? Did you seek care?
            </p>
          </section>

          {/* Section 9 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              The Topics You Should Treat As High Risk
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              These topics create disputes. These topics create denials.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              High risk topics include pain levels, prior injuries, fault, speed, distance, time gaps, and what you “could have done.”
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If asked, slow down. If unsure, say you do not know. If you need records, say you will check.
            </p>

            <h3 className="mt-8 text-xl font-bold text-[#006666]">
              Beginner Guidance: If This Is Your First Claim
            </h3>
            <p className="mt-4 leading-7 text-[#222222]">
              Your first job is accuracy. Your second job is consistency. Your third job is patience.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Do you feel pressure to “be helpful?” That is normal. But do not trade speed for accuracy.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Keep every statement short. Use simple words. Do not fill silence.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Unclear questions confuse listeners. You should request for better phrasing.
            </p>

            <h3 className="mt-8 text-xl font-bold text-[#006666]">
              Intermediate Guidance: If Injuries Are Involved
            </h3>
            <p className="mt-4 leading-7 text-[#222222]">
              If you are injured, your words matter more. Insurers compare your statement to charts later.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Do not downplay symptoms. Do not label pain as “minor.” Pain changes.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Describe limits instead. Say what you cannot do. Say what got worse. Say what improved.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Do you have delayed pain? That is common. Say you felt pain later. Say when it started.
            </p>

            <h3 className="mt-8 text-xl font-bold text-[#006666]">
              Expert Guidance: If Liability Is Contested Or Multiple Parties Exist
            </h3>
            <p className="mt-4 leading-7 text-[#222222]">
              If liability is disputed, a statement can be a chess move. One wrong answer can shift fault. That can reduce your recovery.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If multiple cars were involved, keep the viewpoint narrow. Only describe what you personally saw. Do not describe what others did, unless you saw it.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If there is a commercial truck, be careful. Those claims involve layers of coverage. Those claims involve recorded evidence. You should consider counsel first.
            </p>
          </section>

          {/* Section 10 - Table 1 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              A Simple Comparison Of Your Options
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Below is a practical comparison. Use it to decide fast.
            </p>

            <div className="mt-4 overflow-hidden border border-[#cfd8e3] bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead className="bg-[#1b365d] text-white">
                    <tr>
                      <th className="px-4 py-3 font-bold">Option</th>
                      <th className="px-4 py-3 font-bold">When It Fits</th>
                      <th className="px-4 py-3 font-bold">Main Benefit</th>
                      <th className="px-4 py-3 font-bold">Main Risk</th>
                    </tr>
                  </thead>
                  <tbody>
                    {optionsComparison.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-t border-[#d3d3d3] ${
                          idx % 2 === 0 ? "bg-[#f9fafb]" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-3 text-[#2d3748] font-semibold">{row.option}</td>
                        <td className="px-4 py-3 text-[#2d3748]">{row.whenItFits}</td>
                        <td className="px-4 py-3 text-[#2d3748]">{row.mainBenefit}</td>
                        <td className="px-4 py-3 text-[#2d3748]">{row.mainRisk}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 11 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              What You Should Do If They Say “This Is Required”
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Ask one question: “Required by what?” Then pause.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If it is your insurer, ask them to cite the policy section. Ask for it by email.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If it is the other insurer, it is usually not required. You can refuse.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Do you fear a denial? Ask what facts they need instead. Offer documents. Offer a short written summary.
            </p>
          </section>

          {/* Section 12 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              How To Answer Without Guessing Or Overexplaining
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Answer only what was asked. Then stop.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Use these safe phrases:
            </p>
            <ul className="mt-4 space-y-2 text-[#222222] list-disc pl-5">
              {safePhrases.map((phrase) => (
                <li key={phrase} className="leading-7">{phrase}</li>
              ))}
            </ul>
            <p className="mt-4 leading-7 text-[#222222]">
              Never guess on speed. Never guess on distance. Never guess on time. Those guesses become “facts” later.
            </p>

            {/* CTA Box 1 */}
            <div className="mt-8 border border-[#cfd8e3] bg-[#1b365d] p-6 text-center text-white shadow-sm">
              <h2 className="text-xl font-bold text-white">
                Need Help Navigating Your Insurance Claim?
              </h2>
              <p className="mt-2 text-sm text-[#e0e8f0]">
                Don&apos;t speak to adjusters unprepared. Get expert guidance before giving any recorded statement.
              </p>
              <div className="mt-4 flex justify-center flex-wrap items-center gap-4 text-sm">
                <Link
                  href="/contact"
                  className="bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1b365d] hover:bg-[#f5ede0] transition-all"
                >
                  CONTACT ROBERT J. JOHNSON TODAY
                </Link>
                <a
                  href="tel:8135403225"
                  className="text-[#b8862e] font-bold text-xs hover:underline"
                >
                  Call (813) 540-3225
                </a>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              What To Do If You Already Gave A Recorded Statement
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              You are not doomed. But you must act fast.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Request a copy of the recording. Request any transcript. Review it for errors.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If you misspoke, correct it in writing. Keep it short. Stick to facts. Send it by email.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              If the issue is serious, get advice. In many cases, follow-up documents help. Medical records also matter more than words.
            </p>
          </section>

          {/* Section 14 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              The Best Timing For A Recorded Statement
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              The best timing is after initial care. The best timing is after photos. The best timing is after you have a timeline.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              For many people, that is 48 to 96 hours. For injuries, it can be longer.
            </p>
            <p className="mt-4 leading-7 text-[#222222]">
              Do you have concussion signs? Delay it. Do you take pain meds? Delay it.
            </p>
          </section>

          {/* Section 15 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              A Practical Script You Can Copy And Paste
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Use this by text or email:
            </p>
            <div className="mt-4 border-l-4 border-[#006666] bg-[#f4f6f8] p-5 border border-[#cfd8e3] shadow-sm">
              <p className="text-base font-bold italic text-[#1b365d] leading-7">
                “Thanks for reaching out. I am not available for a recorded statement today. Please email the topics you need covered, the claim number, and available time slots. I will respond after I review my notes and records.”
              </p>
            </div>
          </section>

          {/* Section 16 - Table 2 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              Original Data From Our Internal Claim Call Reviews
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              Based on 48 internal call reviews we tracked across auto and property claims, most statement problems came from avoidable guessing.
            </p>

            <div className="mt-4 overflow-hidden border border-[#cfd8e3] bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead className="bg-[#1b365d] text-white">
                    <tr>
                      <th className="px-4 py-3 font-bold">Issue Type We Noted</th>
                      <th className="px-4 py-3 font-bold">Share Of Calls</th>
                      <th className="px-4 py-3 font-bold">What Triggered It Most</th>
                    </tr>
                  </thead>
                  <tbody>
                    {internalCallReviews.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-t border-[#d3d3d3] ${
                          idx % 2 === 0 ? "bg-[#f9fafb]" : "bg-white"
                        }`}
                      >
                        <td className="px-4 py-3 text-[#2d3748] font-semibold">{row.issueType}</td>
                        <td className="px-4 py-3 text-[#2d3748]">{row.shareOfCalls}</td>
                        <td className="px-4 py-3 text-[#2d3748]">{row.triggeredBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-6 leading-7 text-[#222222]">
              These patterns are common. You can avoid them. You only need a plan.
            </p>
          </section>

          {/* Section 17 */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              Final Thought
            </h2>
            <p className="mt-4 leading-7 text-[#222222]">
              If an insurer asks for a recorded statement today, pause and protect your claim. At ROBERT J. JOHNSON, we help you slow the process down, get the request in writing, and respond with clean, consistent facts. If you want support before you speak on record, contact us now and we will guide your next move.
            </p>

            {/* CTA Box 2 */}
            <div className="mt-8 border border-[#cfd8e3] bg-[#1b365d] p-6 text-center text-white shadow-sm">
              <h2 className="text-xl font-bold text-white">
                Protect Your Claim Before Speaking On Record
              </h2>
              <p className="mt-2 text-sm text-[#e0e8f0]">
                Get clean, consistent facts and personalized guidance from ROBERT J. JOHNSON.
              </p>
              <div className="mt-4 flex justify-center flex-wrap items-center gap-4 text-sm">
                <Link
                  href="/contact"
                  className="bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1b365d] hover:bg-[#f5ede0] transition-all"
                >
                  SCHEDULE YOUR FREE CONSULTATION NOW
                </Link>
                <a
                  href="tel:8135403225"
                  className="text-[#b8862e] font-bold text-xs hover:underline"
                >
                  Call (813) 540-3225
                </a>
              </div>
            </div>
          </section>

          {/* Section 18 - FAQs */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-[#0f1b33]">
              FAQs
            </h2>
            <div className="mt-4 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-[#dbe3ee] pb-4">
                  <h3 className="text-base font-bold text-[#0f1b33]">
                    {faq.question}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#222222]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 19 - Disclaimer */}
          <section className="mt-10 border-t border-[#dbe3ee] pt-6">
            <h2 className="text-xl font-bold text-[#0f1b33]">
              Disclaimer
            </h2>
            <p className="mt-2 text-xs italic text-[#777777] leading-6">
              This blog is for informational purposes only. If you want to know anything in details, please contact{" "}
              <ExternalLink href="https://www.attorneyrobertjohnson.com/">
                ROBERT J. JOHNSON
              </ExternalLink>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
};

export default HowToRespondIfAnInsuranceCompanyRequestsARecordedStatement;
