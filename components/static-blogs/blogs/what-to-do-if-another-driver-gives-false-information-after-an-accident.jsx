import Image from "next/image";
import Link from "next/link";
import { whatToDoIfAnotherDriverGivesFalseInformationBlog } from "../staticBlogData";

const keyPoints = [
  "False information after a Florida car accident can include a fake name, wrong insurance, or a denied driver identity.",
  "Florida Statute 316.067 makes knowingly false crash report information a second degree misdemeanor.",
  "A responding officer's crash report is your strongest tool against a driver who lied at the scene.",
  "Florida's 51 percent bar under Statute 768.81 means a false story about fault can cost you your entire claim.",
  "Photos, dashcam footage, and witness names protect you when the other driver's version changes later."
];

const commonTypesList = [
  "A driver gives a name that does not match their license",
  "An insurance card that turns out to be expired or fake",
  "A driver claims someone else was behind the wheel",
  "A false statement about who had the green light",
  "A denial of injury at the scene, reversed later in a counter claim"
];

const statBoxes = [
  {
    stat: "316.067",
    label: "FL Statute making false crash reports a crime"
  },
  {
    stat: "2 Yrs",
    label: "Deadline to file a Florida injury claim"
  }
];

const onSceneChecklist = [
  "Photograph the other driver's license, plate, and insurance card directly",
  "Record the VIN visible through the windshield if possible",
  "Ask any bystander for a name and phone number before they leave",
  "Request a copy of the crash report through the Florida Department of Highway Safety and Motor Vehicles",
  "Never sign anything the other driver hands you at the scene"
];

const warningItems = [
  "Adjusters often accept the first version of events they hear as fact.",
  "A false statement left uncorrected can quietly become the official record.",
  "Waiting weeks to dispute a lie makes it far harder to undo."
];

const consequencesHeaders = ["Type of Lie", "Governing Law", "Possible Outcome"];
const consequencesRows = [
  ["False name or identity", "FL Statute 316.067", "Second degree misdemeanor charge"],
  ["Fake or lapsed insurance card", "FL Statute 316.646", "Fines and license suspension risk"],
  ["Leaving the scene after lying", "FL Statute 316.061 and 316.027", "Criminal charges, possible jail time"],
  ["False statement to law enforcement", "FL Statute 837.06", "Misdemeanor for misleading a public servant"]
];

const timelineList = [
  "Day of crash - photograph everything, request the responding officer's badge number",
  "24 to 72 hours - request the official crash report from FLHSMV",
  "1 to 2 weeks - attorney sends a written dispute if the report contains the false claim",
  "30 to 60 days - insurer completes its own fault investigation",
  "Within 2 years - deadline to file suit under FL Statute 95.11"
];

const comparisonHeaders = ["Without an Attorney", "With Rob Johnson"];
const comparisonRows = [
  ["You rely on the officer's initial notes only", "We request supplemental reports and correct errors in writing"],
  ["Insurer hears one version, decides fault fast", "We submit photos, camera footage, and signed statements"],
  ["A false claim sits unchallenged in the file", "We formally dispute it before it hardens into fact"],
  ["You negotiate alone against a trained adjuster", "We negotiate and litigate if the offer stays unfair"]
];

const faqs = [
  {
    question: "Does a police officer verify what each driver says?",
    answer: "Officers note statements but rarely verify them on scene. Your evidence is what forces a correction later."
  },
  {
    question: "What if the other driver gave a fake insurance card?",
    answer: "Report it to FLHSMV immediately. Driving without valid coverage is a separate violation under Florida law."
  },
  {
    question: "Can dashcam footage overturn a false statement?",
    answer: "Yes, dashcam and nearby business camera footage are some of the strongest evidence against a false account."
  },
  {
    question: "Is hit and run different from giving false information?",
    answer: "Yes, leaving the scene is a separate charge under FL Statute 316.061, often filed alongside a false report charge."
  },
  {
    question: "Do false statement cases usually go to trial?",
    answer: "Most settle once the record is corrected and the evidence is clear, but we prepare every case as if it will not."
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

const WhatToDoIfAnotherDriverGivesFalseInformationAfterAnAccident = () => {
  const image = whatToDoIfAnotherDriverGivesFalseInformationBlog.featuredImage;

  return (
    <article className="bg-[#f7f9fc] text-slate-900">
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
                    "name": "What to Do If Another Driver Gives False Information After an Accident",
                    "item": "https://www.attorneyrobertjohnson.com/blog/what-to-do-if-another-driver-gives-false-information-after-an-accident"
                  }
                ]
              },
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.attorneyrobertjohnson.com/blog/what-to-do-if-another-driver-gives-false-information-after-an-accident"
                },
                "headline": "What to Do If Another Driver Gives False Information After an Accident",
                "name": "False Info After a Crash? Tampa Attorney Explains",
                "description": "Another driver lied after your Florida crash. Learn what counts as false information, your legal options, and how Rob Johnson can help.",
                "url": "https://www.attorneyrobertjohnson.com/blog/what-to-do-if-another-driver-gives-false-information-after-an-accident",
                "image": "https://www.attorneyrobertjohnson.com/images/static-blogs/what-to-do-another-driver-false-information.webp",
                "isPartOf": {
                  "@type": "Blog",
                  "@id": "https://www.attorneyrobertjohnson.com/blog"
                },
                "about": {
                  "@type": "Thing",
                  "name": "False Information After a Florida Car Accident",
                  "description": "An overview of what accident victims can do when another driver provides false information about their identity, insurance, fault, or the circumstances of a Florida car accident, including evidence preservation and legal options."
                },
                "keywords": [
                  "what to do if another driver gives false information after an accident",
                  "driver gives false information after accident",
                  "false information after car accident",
                  "false information car accident Florida",
                  "other driver lying after accident",
                  "false statement after car accident",
                  "false insurance information after accident",
                  "fake insurance card accident",
                  "false police report car accident",
                  "Florida car accident false information",
                  "Florida car accident lawyer",
                  "Tampa car accident lawyer",
                  "Florida personal injury lawyer",
                  "car accident claim Florida",
                  "Florida comparative negligence",
                  "Florida Statute 316.067",
                  "Florida Statute 768.81",
                  "Florida personal injury claim",
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
                "datePublished": "2026-08-23",
                "dateModified": "2026-08-23"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does a police officer verify what each driver says?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Officers note statements but rarely verify them on scene. Your evidence is what forces a correction later."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if the other driver gave a fake insurance card?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Report it to FLHSMV immediately. Driving without valid coverage is a separate violation under Florida law."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can dashcam footage overturn a false statement?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, dashcam and nearby business camera footage are some of the strongest evidence against a false account."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is hit and run different from giving false information?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, leaving the scene is a separate charge under FL Statute 316.061, often filed alongside a false report charge."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do false statement cases usually go to trial?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Most settle once the record is corrected and the evidence is clear, but we prepare every case as if it will not."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
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
            What to Do If Another Driver Gives False Information After an Accident
          </h1>
          
          <p className="mt-6 text-lg font-medium leading-8 text-slate-700">
            Write down what the other driver told you, then check it against their license, registration, and insurance card. Call the police to the scene so the mismatch lands in an official report. Do not argue with the driver directly. Photograph everything before anyone leaves.
          </p>

          <p className="mt-4 text-sm text-slate-600 border-t border-[#dbe3ee] pt-4">
            Published August 23, 2026 | Updated August 23, 2026 | Robert J. Johnson Law | Florida Personal Injury Claims
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              Key Points
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Counts as False Information After a Car Accident
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              False information means any detail a driver gives that does not match their real identity, insurance, or account of the crash. This includes a fake name, an expired policy passed off as active, or a denied ownership of the vehicle.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Florida drivers sometimes lie out of panic, not always malice. That does not make the lie less costly for you.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Common Types We See in Tampa Cases
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {commonTypesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Should You Do the Moment You Spot a Lie
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Stop talking to the other driver and start documenting instead. Call 911 immediately and let a Florida Highway Patrol or local officer take control of the scene.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Arguing rarely changes a liar&apos;s story. A recorded, time stamped record does.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {statBoxes.map((item, idx) => (
                <div key={idx} className="border border-[#cfd8e3] bg-[#EEF6F8] p-5 text-center shadow-sm">
                  <div className="text-3xl font-extrabold text-[#1C3767]">{item.stat}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-2xl font-bold text-[#1C3767]">
              On Scene Checklist
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {onSceneChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="mt-8 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white text-center">
            <h2 className="text-2xl font-bold">
              A driver who lied once at the scene will likely lie again to the insurance adjuster.
            </h2>
            <p className="mt-2 text-slate-100">
              Rob Johnson has spent 20 years catching that pattern for Tampa clients.
            </p>
            <div className="mt-4 flex justify-center flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#EEF6F8] transition-all"
              >
                Get a Free Case Review
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
              Why a False Statement Can Wreck Your Injury Claim
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Florida runs on a modified comparative negligence rule under{" "}
              <ExternalLink href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html">
                Statute 768.81
              </ExternalLink>
              . If a lying driver shifts enough blame onto you, your payout shrinks fast. You can learn more about how{" "}
              <Link href="/blog/what-happens-If-multiple-parties-are-at-fault-in-a-florida-accident" className="underline hover:text-[#4B93FF]">
                comparative fault laws apply in Florida accident claims
              </Link>.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Go past 51 percent fault and Florida law bars you from recovering anything at all. That single number is why a false statement is never a small thing.
            </p>

            <div className="mt-6 border-l-4 border-amber-500 bg-amber-50 p-5 shadow-sm">
              <h3 className="text-lg font-bold text-amber-900">Warning</h3>
              <ul className="mt-3 space-y-2 text-amber-900 list-disc pl-5">
                {warningItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767] text-center">
              &ldquo;I have watched a single false statement shave a client&apos;s settlement by tens of thousands of dollars. We move fast to correct the record before the insurer builds a case on someone else&apos;s lie.&rdquo;
              <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
                &mdash; Robert J. Johnson, Esq., Florida Personal Injury Attorney
              </cite>
            </blockquote>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Legal Consequences a Dishonest Driver Actually Faces in Florida
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A driver who lies to police faces a real criminal charge, not just an insurance headache. Florida treats false crash statements as a public safety issue.
            </p>

            <div className="mt-6">
              <DataTable headers={consequencesHeaders} rows={consequencesRows} />
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              None of these charges automatically pay your medical bills. That still runs through a civil injury claim, built on facts your attorney gathers and proves.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Long Do You Have to Correct the Record
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You have two years from the crash date to file a Florida personal injury lawsuit under the current statute of limitations (
              <ExternalLink href="http://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html">
                FL Statute 95.11
              </ExternalLink>
              ). Correcting a false statement works best in the first days, not the final weeks.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Timeline After a Disputed Statement
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {timelineList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How a Tampa Car Accident Attorney Turns a Lie Into Your Advantage
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              An attorney does more than repeat your version of events. Rob Johnson subpoenas insurance records, phone data, and{" "}
              <Link href="/blog/how-dashcam-footage-can-strengthen" className="underline hover:text-[#4B93FF]">
                traffic camera and dashcam footage
              </Link>{" "}
              a driver cannot argue away.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Our firm has handled Florida car accident claims across Tampa, Lakeland, and St. Petersburg for over 20 years, and false statements come up in a large share of them.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Without an Attorney vs With Rob Johnson on Your Case
            </h3>
            <div className="mt-4">
              <DataTable headers={comparisonHeaders} rows={comparisonRows} />
            </div>

            <p className="mt-4 leading-8 text-slate-700">
              Our surveys of past client files show that cases with a disputed statement settle for meaningfully more once an attorney formally challenges the record early. Silence tends to cost our clients money.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If{" "}
              <Link href="/blog/witness-statements-injury-case-outcome-florida" className="underline hover:text-[#4B93FF]">
                credible witness statements
              </Link>{" "}
              back up your version, it becomes even harder for the other side to keep a false claim alive.
            </p>
          </section>

          <div className="mt-8 border border-[#cfd8e3] bg-[#EEF6F8] p-6 text-center">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              DO NOT LET ANOTHER DRIVER&apos;S LIE DECIDE YOUR SETTLEMENT
            </h2>
            <p className="mt-2 text-slate-700 font-medium">
              Rob Johnson reviews false statement cases across Tampa and central Florida at no cost to you.
            </p>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#1C3767] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-[#4B93FF] transition-all"
              >
                Call (813) 540-3225 today or visit attorneyrobertjohnson.com
              </Link>
              <a
                href="tel:8135403225"
                className="bg-white border border-[#1C3767] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#1C3767] hover:text-white transition-all"
              >
                Call (813) 540-3225
              </a>
            </div>
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Frequently Asked Questions (FAQs)
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
            Disclaimer: This blog is for informational purposes only. If you want to know anything in details, please contact ROBERT J. JOHNSON.
          </p>
        </div>
      </div>
    </article>
  );
};

export default WhatToDoIfAnotherDriverGivesFalseInformationAfterAnAccident;
