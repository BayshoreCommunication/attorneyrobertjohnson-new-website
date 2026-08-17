import Image from "next/image";
import Link from "next/link";
import { canYouRecoverCompensationRoadConstructionCrashBlog } from "../staticBlogData";

const keyPoints = [
  "You can win compensation if you prove fault. You should act fast and document everything.",
  "You may face short deadlines with government claims.",
  "You can sue private contractors for unsafe zones.",
  "You can file claims against cities or states too.",
  "Government claims enforce strict notice deadlines.",
  "Photos, dashcams, and witnesses decide case outcomes.",
  "Comparative fault reduces your payout."
];

const commonHazardsList = [
  "Missing “Road Work Ahead” signs",
  "Late merge warnings near lane drops",
  "Cones placed too close to travel lanes",
  "Steel plates that shift or lift",
  "No lighting in night work zones",
  "Flaggers who misdirect traffic",
  "Closed exits without detour guidance"
];

const contractorFaultList = [
  "Signs were not placed per plan.",
  "Barrels were too sparse.",
  "Lane tapers were too short.",
  "Debris stayed on the roadway."
];

const tableHeaders = ["Work Zone Element", "What “Good” Often Looks Like", "Red Flag That Helps Your Claim"];

const tableRows = [
  ["Advance Warning Signs", "Placed with enough distance to react", "Sign appears right at the lane drop"],
  ["Lane Taper", "Smooth merge with clear channelization", "Sudden cone wall forcing sharp braking"],
  ["Night Lighting", "Hazards visible without high beams", "Dark edge drop-off or unlit equipment"],
  ["Road Surface Cleanliness", "No loose gravel in travel lanes", "Gravel or dirt on a curve or ramp"],
  ["Steel Plates", "Secured and ramped, no bounce", "Plate shifts, rattles, or sits proud"]
];

const matrixItems = [
  {
    title: "★ PHOTOS & VIDEOS",
    description: "Visual proof of missing signs, shifted cones, and layout deviations."
  },
  {
    title: "★ DASHCAM FOOTAGE",
    description: "Real-time look at driver perspective and sudden reaction hazards."
  },
  {
    title: "★ WITNESS STATEMENTS",
    description: "Unbiased validation of the exact condition during the crash."
  }
];

const selfEvidenceList = [
  "Photos of signs and cone spacing",
  "Video of the approach to the hazard",
  "A wide shot showing missing warnings",
  "Close shots of debris or drop-offs",
  "Weather and lighting conditions",
  "Your injuries and vehicle damage"
];

const lawyerEvidenceList = [
  "Traffic control plans and permits",
  "Daily logs and inspection reports",
  "Change orders and emails",
  "Crew schedules and training records",
  "Prior complaints about that location",
  "Prior crashes in the same zone"
];

const typicalDamagesList = [
  "ER visits and hospital care",
  "Surgery, rehab, and future treatment",
  "Lost wages and lost earning ability",
  "Vehicle repair or replacement",
  "Pain, stress, and sleep loss",
  "Disability and loss of normal life"
];

const checklistItems = [
  "Get medical care and follow instructions.",
  "Return for photos if you could not.",
  "Request the police report number.",
  "Save dashcam and phone files.",
  "Get witness names and numbers.",
  "Write a short timeline while fresh.",
  "Avoid recorded insurer statements alone."
];

const faqs = [
  {
    question: "Can I Still Sue If A “Road Work” Sign Was Present?",
    answer: "Yes. A sign does not excuse unsafe setup. If warnings were late or unclear, liability may still exist. You must show the setup did not allow safe reaction time."
  },
  {
    question: "What If Another Driver Hit Me In A Construction Zone?",
    answer: "You may have two claims. The driver may be at fault. The work zone may also share fault."
  },
  {
    question: "When Do I Need To Make A Claim?",
    answer: "That depends on your state and the defendant. Government claims can require fast notice. Contractor cases usually allow longer. You should confirm deadlines immediately to avoid losing rights."
  },
  {
    question: "What If The Hazard Was Gone The Next Day?",
    answer: "That is common. Work zones change quickly. Photos, dashcam, and witnesses become crucial. Police notes can also help. A lawyer can request logs showing the setup that day."
  },
  {
    question: "Can Loose Gravel Or Debris Really Support A Claim?",
    answer: "Yes, if it came from the work. Debris in travel lanes can show poor housekeeping. You must connect the debris to the contractor’s operations and show it caused loss of control."
  }
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

const CanYouRecoverCompensationRoadConstructionCrash = () => {
  const image = canYouRecoverCompensationRoadConstructionCrashBlog.featuredImage;

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
                    "name": "Can You Recover Compensation If Road Construction Caused Your Crash?",
                    "item": "https://www.attorneyrobertjohnson.com/blog/can-you-recover-compensation-road-construction-crash"
                  }
                ]
              },
              {
                "@type": "BlogPosting",
                "mainEntityOfPage": {
                  "@type": "WebPage",
                  "@id": "https://www.attorneyrobertjohnson.com/blog/can-you-recover-compensation-road-construction-crash"
                },
                "headline": "Can You Recover Compensation If Road Construction Caused Your Crash?",
                "name": "Proven Ways To Recover Compensation 2026",
                "description": "Can you recover compensation after a road construction crash? Discover who may be liable, what evidence matters, and your legal options in 2026.",
                "url": "https://www.attorneyrobertjohnson.com/blog/can-you-recover-compensation-road-construction-crash",
                "image": "https://www.attorneyrobertjohnson.com/images/static-blogs/can-you-recover-compensation-road-construction-crash.webp",
                "isPartOf": {
                  "@type": "Blog",
                  "@id": "https://www.attorneyrobertjohnson.com/blog"
                },
                "about": {
                  "@type": "Thing",
                  "name": "Road Construction Accident Compensation Claim",
                  "description": "An overview of pursuing legal compensation after a road construction zone crash in Florida, including proving negligence, government vs contractor liability, comparative fault, and evidence collection."
                },
                "keywords": [
                  "road construction crash compensation",
                  "construction zone accident lawyer Florida",
                  "road work accident claim",
                  "construction zone liability Florida",
                  "contractor negligence car crash",
                  "work zone accident lawyer Tampa",
                  "Florida road construction injury attorney",
                  "MUTCD road work safety standards"
                ],
                "author": {
                  "@type": "Person",
                  "name": "Robert J. Johnson, Esq."
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
                "datePublished": "2026-08-17",
                "dateModified": "2026-08-17"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Can I Still Sue If A “Road Work” Sign Was Present?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. A sign does not excuse unsafe setup. If warnings were late or unclear, liability may still exist. You must show the setup did not allow safe reaction time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What If Another Driver Hit Me In A Construction Zone?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You may have two claims. The driver may be at fault. The work zone may also share fault."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When Do I Need To Make A Claim?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "That depends on your state and the defendant. Government claims can require fast notice. Contractor cases usually allow longer. You should confirm deadlines immediately to avoid losing rights."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What If The Hazard Was Gone The Next Day?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "That is common. Work zones change quickly. Photos, dashcam, and witnesses become crucial. Police notes can also help. A lawyer can request logs showing the setup that day."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Loose Gravel Or Debris Really Support A Claim?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, if it came from the work. Debris in travel lanes can show poor housekeeping. You must connect the debris to the contractor’s operations and show it caused loss of control."
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
            Can You Recover Compensation If Road Construction Caused Your Crash?
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Understanding Construction Zone Negligence, Liability Paths, and Evidence Preservation Under Florida Law
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Published August 17, 2026 | Updated August 17, 2026 | Robert J. Johnson Law | Florida Personal Injury Claims
          </p>

          <p className="mt-8 text-lg leading-8 text-slate-700">
            Yes, you can get compensation if the crash you were in was caused by road construction. If you want to prevail in court, you’ll have to prove that the party at fault, whether it was a construction company, government entity, or subcontractor, was negligent. Construction zone negligence usually involves a lack of adequate warning signs, poorly placed barriers, insufficient lighting, or the unattended presence of hazardous road conditions.
          </p>

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

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Counts As A Road Construction Crash For A Claim?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A crash counts if the work zone changed road safety. The danger must be more than “normal traffic.” It must be a hazard from planning or execution.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Common work zone hazards include poor warnings, confusing merges, and unsafe surfaces. Some hazards are temporary. That does not excuse them.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Common Construction Hazards That Support A Claim
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You may have a strong case if you faced:
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {commonHazardsList.map((hazard) => (
                <li key={hazard}>{hazard}</li>
              ))}
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              Did you feel surprised by the change? That matters. Surprise hazards often show poor planning.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Who Could Be Liable When A Crash Occurs Due To Construction?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Liability falls on several parties. Safety control determines the target. Projects split duties across contracts.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Contractors, Subcontractors May Be Directly Liable
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Contractors control signs. Contractors control cones. Contractors control traffic shifts. Contractors control cleanup. Contractors control daily inspections. Negligent contractors face liability.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              You may see contractor fault when:
            </p>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {contractorFaultList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Cities, Counties, And States Can Also Share Liability
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Public agencies approve designs and permit closures. They may also inspect work zones. If they ignore dangers, they can share fault.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Government cases can be harder. They also have special rules. Deadlines can be much shorter.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Engineers And Traffic Control Vendors May Be In The Chain
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Some projects use separate traffic control firms. Some use engineering consultants. If their plan was unsafe, they can be liable too.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Ask yourself this: Who decided the setup that day? That is often the key.
            </p>
          </section>

          <div className="mt-8 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white text-center">
            <h2 className="text-2xl font-bold">Injured in a Construction Zone Crash?</h2>
            <p className="mt-2 text-slate-100">
              Evidence vanishes quickly as work zones change daily. Don&apos;t wait until the proof is buried.
            </p>
            <div className="mt-4 flex justify-center flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#1C3767] hover:bg-[#EEF6F8] transition-all"
              >
                Get a Free Case Evaluation Today
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
              What You Need To Prove To Get Compensation
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Most claims require four elements. You prove legal duties. You prove rule breaches. You prove direct causation. You prove financial damages. Defendants owed safety. Defendants broke rules. Defendants caused harm. You lost money.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Duty: They Had A Job To Keep The Zone Safe
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Work zones must protect drivers and workers. That duty comes from contracts and safety standards. It also comes from common sense.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              One recent case illustrates this fact. Negligent parties face significant liability. Broken duties cause major legal problems.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Breach: They Didn’t Meet That Duty
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              A breach can be a missing sign. It can be a bad taper length. It can be a failure to light a hazard at night.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Causation: The Hazard Led To Your Crash
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              You must connect the hazard to the crash. Insurers will try to blame speed or distraction. You need evidence to counter that.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Damages: You Suffered Real Losses
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Damages can include medical bills and lost income. They also include pain and limits on daily life.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Safety Standards Often Decide These Cases
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Standards matter because they show what “safe” means. They also show what “reasonable” looks like. Violations can support negligence.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              MUTCD And Work Zone Plans Often Set The Baseline
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Many states follow the{" "}
              <ExternalLink href="https://mutcd.fhwa.dot.gov/">
                MUTCD
              </ExternalLink>
              . It covers sign types, spacing, and warnings.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Projects also have a traffic control plan. That plan can be stricter than general rules. A deviation can be powerful evidence.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Original Reference Data You Can Use When Evaluating Your Case
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Below is practical spacing guidance often used by roadway crews. It varies by state and project. It gives you a quick reality check. Treat it as a field screen, not legal proof.
            </p>
            <div className="mt-6">
              <DataTable headers={tableHeaders} rows={tableRows} />
            </div>
            <p className="mt-4 leading-8 text-slate-700 font-semibold">
              Did you see any red flags listed above? If yes, document them.
            </p>

            <h3 className="mt-8 text-2xl font-bold text-[#1C3767]">
              Key Factor Matrix in Work Zone Claims
            </h3>
            <p className="mt-3 leading-8 text-slate-700">
              Crucial evidence types that decide case outcomes:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {matrixItems.map((item, idx) => (
                <div key={idx} className="border border-[#cfd8e3] bg-white p-5 shadow-sm">
                  <div className="text-lg font-bold text-[#1C3767]">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-700">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767] text-center">
            &ldquo;When road construction hazards cause a crash, evidence can disappear as quickly as the work zone changes. We act fast to document missing signage, unsafe tapers, and contractor negligence so victims can secure full compensation.&rdquo;
            <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
              &mdash; Robert J. Johnson, Esq. &mdash; Florida Personal Injury Attorney
            </cite>
          </blockquote>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Evidence Helps You Win A Construction Zone Claim
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You should collect evidence fast. Work zones change daily. Signs move. Crews clean debris. Your best proof can vanish.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Evidence You Can Gather Yourself Right Away
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {selfEvidenceList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              Also capture location data. Record cross streets and mile markers.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Evidence Your Lawyer Can Request Later
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {lawyerEvidenceList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              This evidence often shows a pattern. Patterns build leverage.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Comparative Fault Can Reduce Your Payout
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You can still recover money if you share a fault. Many states reduce your payout by your fault share. Some bar recovery past a threshold. Learn more about{" "}
              <Link href="/blog/what-happens-If-multiple-parties-are-at-fault-in-a-florida-accident" className="underline hover:text-[#4B93FF]">
                how comparative fault affects injury compensation in multi-party accidents
              </Link>.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Insurers often claim you drove too fast. They may claim you followed too close. They may claim you ignored signs.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              You should address this early. You can do that with photos and witness statements. You can also use crash reconstruction when needed. See how{" "}
              <Link href="/blog/how-dashcam-footage-can-strengthen" className="underline hover:text-[#4B93FF]">
                dashcam footage can strengthen your injury claim
              </Link>{" "}
              and help establish key facts.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Compensation You Can Recover After A Work Zone Crash
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You can seek economic and non-economic damages. Some cases may also allow punitive damages. That depends on extreme misconduct.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              Typical Damages In These Claims
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {typicalDamagesList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-8 text-slate-700 font-semibold">
              Do you have future care needs? Get them documented early.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              How Government Claims Differ From Contractor Claims
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Government claims can have special limits. Notice deadlines can be short. Damage caps may apply in some states.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              You must also identify the right agency. That is not always obvious. A state route may run through a city.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If a contractor caused the hazard, you may prefer that claim. Contractors often have larger policies.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              First 48 Hours After A Crash: What To Do
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Construction zones change quickly. You must expect daily changes. Your job requires immediate action. You preserve case facts.
            </p>

            <h3 className="mt-6 text-2xl font-bold text-[#1C3767]">
              A Simple 48-Hour Checklist You Can Follow
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
              {checklistItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-8 text-slate-700">
              Can you revisit the site safely? Bring a passenger to film.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              When You Should Talk To A Lawyer For A Work Zone Crash
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You should talk to a lawyer early if injuries are serious. You should also call early if a government agency is involved. Early review helps preserve video, logs, and plans.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              You may also need help identifying defendants. One wrong target can waste time. Time can kill a claim.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Final Thought
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              You can recover compensation if construction caused your crash. You must show the zone was unsafe. You must show that failure caused harm. The best cases rely on fast evidence and clear standards.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If road work caused your crash, time is not neutral. The signs move. The cones shift. The proof fades. At ROBERT J. JOHNSON, we help you document clearly, communicate firmly, and protect your claim before it gets buried.
            </p>
          </section>

          <div className="mt-8 border border-[#cfd8e3] bg-[#EEF6F8] p-6 text-center">
            <h2 className="text-2xl font-bold text-[#1C3767]">PROTECT YOUR CLAIM BEFORE IT GETS BURIED</h2>
            <p className="mt-2 text-slate-700 font-medium">
              Get in touch with ROBERT J. JOHNSON for guidance on your road construction claim.
            </p>
            <div className="mt-5 flex justify-center flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-[#1C3767] px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] text-white hover:bg-[#4B93FF] transition-all"
              >
                Contact ROBERT J. JOHNSON Now
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

export default CanYouRecoverCompensationRoadConstructionCrash;
