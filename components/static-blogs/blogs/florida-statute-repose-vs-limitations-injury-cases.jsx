import Image from "next/image";
import Link from "next/link";
import { floridaStatuteReposeBlog } from "../staticBlogData";

const reposeTypes = [
  {
    number: "1",
    title: "Liability for Products",
    body: "Florida product liability repose can run for 12 years from delivery to the first buyer. Manufacturers gain liability protection after that window, even when injuries show up later.",
  },
  {
    number: "2",
    title: "Construction Defects",
    body: "Construction defect repose commonly starts around completion, such as a certificate of occupancy. SB 360 changed many construction repose claims from ten years to seven years.",
  },
  {
    number: "3",
    title: "Fraud Claims",
    body: "Fraud claims can follow repose rules tied to the contract ending or the fraudulent act. Courts look closely at exact dates and proof before allowing a claim to move forward.",
  },
  {
    number: "4",
    title: "Medical Malpractice",
    body: "Medical malpractice repose often reaches an outer four-year deadline from the negligent act or omission. Limited exceptions can apply for minors and specific facts.",
  },
];

const limitationRows = [
  ["Professional malpractice / libel / slander", "Civil", "2 years"],
  [
    "Negligence / personal injury / fraud / property damage",
    "Civil",
    "4 years",
  ],
  ["Written contracts / foreign judgments", "Civil", "5 years"],
  ["Domestic judgments", "Civil", "20 years"],
  ["First-degree felony", "Criminal", "4 years"],
  ["Second / third-degree felony", "Criminal", "3 years"],
  ["First-degree misdemeanor", "Criminal", "2 years"],
  ["Second-degree misdemeanor", "Criminal", "1 year"],
  ["Capital felony", "Criminal", "No limit"],
];

const comparisonRows = [
  ["Trigger", "Injury discovery", "Fixed event like delivery or occupancy"],
  ["Flexibility", "May toll or extend", "Absolute barrier in most cases"],
  ["Purpose", "Prevents stale claims", "Provides finality for defendants"],
  [
    "Length in Florida",
    "1 to 5 years typical, depending on the claim",
    "4 to 12 years, depending on the repose type",
  ],
  [
    "Impact on claims",
    "Bars late filing after discovery",
    "Bars claims after the outer limit",
  ],
];

const exceptionCards = [
  {
    title: "Fraud or Hidden Defects Can Delay or Extend Legal Time Limits",
    body: "If a manufacturer knowingly hides a flaw, a plaintiff may argue that deadlines should pause. Courts usually require clear proof of intentional concealment.",
  },
  {
    title: "Some Injuries Allow Limited Extensions When Discovery Is Delayed",
    body: "A delayed injury can affect a limitations analysis when the harm was not reasonably discoverable. The result depends heavily on the medical and factual record.",
  },
  {
    title: "Specialized Industries Follow Different Liability Time Rules",
    body: "Aircraft, large vessels, railroad equipment, and federal claims can involve rules beyond ordinary Florida repose periods.",
  },
  {
    title: "Legal Tolling Can Pause the Statute of Limitations",
    body: "Tolling may pause a limitations clock in specific situations, but it rarely changes a strict statute of repose deadline.",
  },
];

const faqs = [
  {
    question: "What is the 7-year boundary rule in Florida?",
    answer:
      "SB 360 sets a seven-year statute of repose for many construction defects. It often starts from a certificate of occupancy or a similar trigger.",
  },
  {
    question: "Can a statute of limitations be waived in Florida?",
    answer:
      "Parties rarely waive this deadline by agreement. Courts generally enforce filing deadlines to keep claims timely.",
  },
  {
    question: "Can you sue someone for something that happened 20 years ago?",
    answer:
      "Most claims are barred after the applicable repose or limitations deadline expires. Narrow fraud or concealment exceptions require strong proof.",
  },
  {
    question: "Did Florida change the statute of limitations?",
    answer:
      "Yes. Recent reforms shortened many negligence and personal injury limitations periods for claims arising after March 2023.",
  },
  {
    question:
      "Can you sue a hospital for something that happened 10 years ago?",
    answer:
      "Medical malpractice claims usually face a four-year repose period. Ten-year-old claims are commonly barred unless a narrow exception applies.",
  },
];

const StatCard = ({ value, label }) => (
  <div className="border border-[#cfd8e3] bg-white p-5 text-center shadow-sm">
    <div className="text-4xl font-bold text-[#1C3767]">{value}</div>
    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#4B93FF]">
      Years
    </p>
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

const FloridaStatuteReposeVsLimitationsInjuryCases = () => {
  const image = floridaStatuteReposeBlog.featuredImage;

  return (
    <article className="bg-[#f7f9fc] text-slate-900">
      <div className="border border-[#cfd8e3] bg-white">
        <div className="border-b border-[#dbe3ee] px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#1C3767] sm:px-8">
          Robert J. Johnson Law | Personal Injury | Tampa, FL
        </div>

        <div className="px-5 py-8 sm:px-8 lg:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#4B93FF]">
            Personal Injury Law | Tampa, Florida
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-[#1C3767] md:text-5xl">
            The Statute of Repose vs. Statute of Limitations in Florida Injury
            Cases
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">
            Explained by a Personal Injury Lawyer in Tampa, Florida
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Updated May 12, 2026 | Robert J. Johnson Law | Central Florida
            Injury Defense
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
            Florida law has two legal systems with strict injury claim
            deadlines. The statute of limitations is a deadline for taking
            action after you have been injured. The statute of repose sets a
            deadline tied to certain events. If you miss either deadline, you
            can lose your right to pursue a claim.
          </p>

          <section className="mt-8 border-l-4 border-[#4B93FF] bg-[#EEF6F8] p-6">
            <h2 className="text-2xl font-bold text-[#1C3767]">
              Quick Takeaways
            </h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>
                Statutes of limitations are based on when injury or harm
                happened.
              </li>
              <li>
                Statutes of repose depend on a fixed date linked to an event.
              </li>
              <li>
                You need to meet both deadlines to keep your legal claim valid.
              </li>
              <li>
                Florida courts dismiss cases filed after key dates have passed.
              </li>
              <li>
                Talk to a lawyer in Tampa to understand whether your claim is
                still timely.
              </li>
            </ul>
          </section>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <StatCard
              value="12"
              label="Product liability statute of repose window in Florida"
            />
            <StatCard
              value="7"
              label="Construction defect repose limit after SB 360 reform"
            />
            <StatCard
              value="4"
              label="Medical malpractice repose outer court deadline"
            />
          </div>

          <blockquote className="mt-8 border-y border-[#cfd8e3] px-4 py-6 text-xl font-semibold leading-8 text-[#1C3767]">
            "Clients often ask me if a statute of repose is the same thing as a
            statute of limitations. No, they are not the same. Florida has
            different rules for these two legal ideas."
            <cite className="mt-4 block text-sm font-normal not-italic text-slate-600">
              Robert J. Johnson, Personal Injury Attorney, Tampa FL
            </cite>
          </blockquote>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Is A Statute Of Repose In Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              A statute of repose is a deadline that can block lawsuits even if
              an injury is discovered later. It gives defendants a clear end
              date and can protect manufacturers, contractors, and medical
              providers from claims after the outer deadline expires.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {reposeTypes.map((item) => (
                <div
                  key={item.title}
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
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              What Is the Statute Of Limitations In Florida?
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              The statute of limitations requires action within a specific time
              after injury. It sets a deadline for the plaintiff to file a
              formal complaint. Florida civil deadlines, including personal
              injury deadlines, are commonly analyzed under{" "}
              <a
                href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0095/Sections/0095.11.html"
                className="font-semibold text-[#1C3767] underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fla. Stat. Section 95.11
              </a>
              .
            </p>
            <div className="mt-6">
              <DataTable
                headers={["Claim Type", "Category", "Florida Time Limit"]}
                rows={limitationRows}
              />
            </div>
          </section>

          <section className="mt-10 border border-[#cfd8e3] bg-[#1C3767] p-6 text-white">
            <h2 className="text-2xl font-bold">
              Think You Have a Deadline Issue in Polk County or Tampa?
            </h2>
            <p className="mt-3 leading-7 text-slate-100">
              Do not wait until the clock runs out. Contact Robert J. Johnson
              Law today and find out where you stand.
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
              Similarities And Differences Between A Statute Of Limitations And
              A Statute Of Repose
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              Both laws set deadlines for making legal claims. The statute of
              limitations gives you a window based on injury or discovery. A
              statute of repose runs from a fixed event and can bar a claim even
              when the limitations period appears to leave time.
            </p>
            <div className="mt-6">
              <DataTable
                headers={[
                  "Aspect",
                  "Statute of Limitations",
                  "Statute of Repose",
                ]}
                rows={comparisonRows}
              />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              In Which Cases Statute Of Repose or Limitations Does Not Work
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {exceptionCards.map((item) => (
                <div
                  key={item.title}
                  className="border border-[#dbe3ee] bg-white p-5 shadow-sm"
                >
                  <div className="text-3xl font-bold text-[#4B93FF]">!</div>
                  <h3 className="mt-2 text-xl font-bold text-[#1C3767]">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold text-[#1C3767]">
              Call A Personal Injury Lawyer Today So You Do Not Miss Any
              Deadlines
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              If you miss a legal deadline, you lose your right to seek
              financial justice. Florida law sets clear but strict deadlines for
              injury claims, so prompt legal review matters.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Robert J. Johnson helps injured people evaluate claims involving
              statutes of limitations and repose. Call the Tampa, Florida office
              or{" "}
              <Link
                href="/contact"
                className="font-semibold text-[#1C3767] underline"
              >
                request a private case review
              </Link>
              .
            </p>
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

export default FloridaStatuteReposeVsLimitationsInjuryCases;
