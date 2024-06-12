import MotionEffect from "@/components/motion/MotionEffect";
import ContactUs from "@/components/shared/ContactUs";
import SectionLayout from "@/components/shared/SectionLayout";
import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";

const PersonInjuryPage = () => {
  const data = [
    {
      imgLink: "/images/personalInjuries1.png",
      title: "Personal Injury",
      text: [
        "If you’ve been injured, whether in an automobile accident or an incident due to someone else’s fault, Florida law provides that you have legal rights and are entitled to be fully compensated for your injury.",
        "It is important that you consult with an attorney as soon as possible after your injury to make sure your rights are protected, and you do not do anything that might jeopardize your case. Car Crash Rob and his team stand ready to fight for you if you’ve been injured in a motor vehicle accident, slip and fall, trip and fall, dog bite, or any other incident in which you were injured due to another’s negligence.",
        "Directly following an injury, you may be contacted by an insurance company. It is important to remember that the insurance company has no duty to look out for your best interests. If you want someone in your corner that has a legal obligation to act in your best interests, you should hire an attorney to deal with the insurance company. When you hire Attorney Robert Johnson aka “Car Crash Rob”, him and his team works diligently to maximize your settlement money and ensure the best outcome for your case.",
      ],
      imageInLeft: true,
    },
    {
      imgLink: "/images/personalInjuries2.png",
      title: "Auto Accidents",
      text: [
        "Being involved in an auto accident in Florida can be a very confusing and frustrating time. How will I get my car fixed? Who pays for my rental? What is PIP? What does it mean that Florida is a No-Fault state? Who will pay my medical bills? Car Crash Rob and his team can handle all of this for you. We aim to take the stress of you by answering all of your questions and doing the “heavy lifting” so you can focus on healing from your injuries and obtaining fair compensation for your car and your injuries.",
      ],
      imageInLeft: false,
    },
    {
      imgLink: "/images/personalInjuries1.png",
      title: "Slip & Fall",
      text: [
        "An unexpected fall to a hard surface can cause significant injuries to a person’s body, bringing about medical bills, pain, suffering, and lost of the ability to earn a living. If you’ve slipped and fallen, or tripped and fallen, on someone else’s property, you may be entitled to financial compensation if you can prove that the property owner somehow failed to inspect the property or maintain it in a reasonably safe condition.",
        "Some examples of slip/trip and falls are a slippery substance on the floor, uneven concrete, potholes in a parking lot, items left out in a store walkway, or even roots sticking up through a sidewalk. Evidence of a property owner’s negligence is especially important in a slip and fall claim because the property owner may later deny they knew anything about the dangerous condition that hurt someone. If you can, you should take photographs of the dangerous condition and ask for the first and last name of the manager on duty. An experienced attorney can help prove your slip and fall claim and potentially get you compensated for your loss.",
        "With Attorney Rob Johnson and his team, they have experience with these claims and will help collect evidence to prove your case.",
      ],
      imageInLeft: true,
    },
    {
      imgLink: "/images/personalInjuries2.png",
      title: "Medical Malpractice",
      text: [
        "Medical error is the 3rd leading cause of death in the United States. Yet, hospitals and physicians will fight tooth and nail to deny compensation when someone is seriously injured or killed as a result of their negligence. Having an attorney ready to battle for you can even the playing field.",
      ],
      imageInLeft: false,
    },
    {
      imgLink: "/images/personalInjuries1.png",
      title: "Premise Liability",
      text: [
        "Premises liability claims encompass a wide range of cases. If you’ve been injured on someone else’s property, you may be entitled to financial compensation if you can prove that the property owner somehow caused your injury and was negligent in doing so. Some examples of premises liability claims are slip and falls, trip and falls, dog bites, a business or residential complex that failed to provide adequate, security that fails to protect you at a bar from another disorderly patron, or an overaggressive security person at a night club.",
        "Evidence of a property owner’s negligence is especially important in a premises liability claim because the property owner may later deny they knew anything about the reason someone was hurt on the property. If you can, you should take photographs of the property and ask for the first and last name of the manager on duty.",
        "An experienced attorney can help prove your premises liability claim and potentially get you compensated for your loss. Attorney Rob Johnson and his team have experience with these claims and will help collect evidence to prove your case.",
      ],
      imageInLeft: true,
    },
    {
      imgLink: "/images/personalInjuries2.png",
      title: "Dog Bites",
      text: [
        "A vicious dog can cause serious injury to a person that may result in hospitalization, the need for plastic surgery, or even death. Florida is a strict-liability dog bite state, meaning that you need not prove that a dog bit someone due to the negligence of the owner; you only need to prove that the dog owner actually owned the dog and that it bit you. There are narrow exceptions based on the types of signs that a dog owner posts on the property (if that is where the bite occurred) and the age of the person who was bitten (children and the elderly are especially vulnerable to dangerous dogs).",
        "Unfortunately, many homeowners’ insurance policies now specifically exclude coverage for losses sustained due to an animal, such as a dog that got out of the yard; however, the owner of that dog is still legally liable for the damage caused by a dog bite. If you’ve been bitten by someone else’s dog, you may be entitled to financial compensation. If you can, you should take photographs of the dog and the location where the bite occurred. It is also important to report the dog bite to animal control so the proper steps can be taken to ensure that no one else is bitten by the dog. An experienced attorney can help prove your dog bite claim and potentially get you compensated for your loss. Attorney Robert Johnson and his team have experience with these claims and will help collect evidence to prove your case and hold the dog owner responsible for your injuries.",
      ],
      imageInLeft: false,
    },
    {
      imgLink: "/images/personalInjuries1.png",
      title: "Uber, Lyft, and other Ride-Sharing or Meal Delivery Platforms",
      text: [
        "If you’ve been injured by a delivery driver, while a passenger in a ride-sharing vehicle, or in any other way involving a “fee-to-ride” platform, there may be insurance to cover your losses. We have experience dealing with these companies and their insurance companies to help resolve your claim.",
      ],
      imageInLeft: true,
    },
    {
      imgLink: "/images/personalInjuries2.png",
      title: "Bicycle and Pedestrian Accidents",
      text: [
        "Being injured while on a bicycle or as a pedestrian can cause unique injuries and complications. We have experience in handling complex injuries and know how secure all available sources of insurance to pay your medical bills in these scenarios. For example, you may be entitled to the PIP coverage of the at-fault driver.",
      ],
      imageInLeft: false,
    },
  ];
  return (
    <main className="pb-10">
      <section className="h-[64vh] bg-[url('/images/personal_injury_cover.png')] bg-cover flex items-center justify-center">
        <SectionLayout>
          <div className="flex flex-col items-center gap-3 text-white">
            <MotionEffect effect={"fade-right"} duration={1500}>
              <h1 className="text-3xl sm:text-4xl font-bold text-center">
                PERSONAL INJURY CASES
              </h1>
            </MotionEffect>
            <MotionEffect effect={"fade-left"} duration={1500}>
              <div className="text-center hidden sm:block">
                <p>
                  Robert has over 20 years of valuable experience in the legal
                  community and insurance industry.
                </p>
                <p>
                  He is not afraid to fight for justice for you and your family.
                </p>
              </div>
            </MotionEffect>
            <MotionEffect
              effect={"fade-left"}
              duration={1500}
              className="text-center sm:hidden"
            >
              Robert has over 20 years of valuable experience in the legal
              community and insurance industry.He is not afraid to fight for
              justice for you and your family.
            </MotionEffect>
            <MotionEffect effect={"fade-up"} duration={1500}>
              <button className="flex justify-center items-center gap-1 bg-white px-6 py-2 mt-2 rounded-md text-[#4b93ff] font-bold mx-auto text-lg">
                <BiSolidPhoneCall size={24} />
                (813) 540-3225
              </button>
            </MotionEffect>
          </div>
        </SectionLayout>
      </section>
      <SectionLayout>
        <div className="py-4">
          <div className="text-center">
            <MotionEffect effect={"fade-right"} duration={1500}>
              <h3 className="mb-2 font-bold text-2xl lg:text-3xl">
                All Types of Personal Injuries
              </h3>
            </MotionEffect>

            <MotionEffect
              effect={"fade-left"}
              duration={1500}
              className="text-sm mb-6 lg:mb-12"
            >
              <p>
                Robert has over 20 years of valuable experience in the legal
                community and insurance industry.
              </p>
              <p>
                He is not afraid to fight for justice for you and your family.
              </p>
            </MotionEffect>
          </div>
          <div className="flex flex-col gap-12">
            {data.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col ${item.imageInLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-6 md:gap-16 lg:items-center`}
              >
                <MotionEffect
                  effect={item.imageInLeft ? "fade-right" : "fade-left"}
                  duration={1500}
                  className="lg:w-1/2"
                >
                  <Image
                    src={item.imgLink}
                    alt="personal injuries"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                </MotionEffect>
                <MotionEffect
                  effect={!item.imageInLeft ? "fade-right" : "fade-left"}
                  duration={1500}
                  className="lg:w-1/2 flex flex-col gap-4"
                >
                  <div>
                    <h6 className="text-xl lg:text-2xl font-bold mb-1">
                      {item.title}
                    </h6>
                    <div className="w-28 h-1 bg-[#4b93ff]"></div>
                  </div>
                  {item.text.map((text, index) => (
                    <p key={index} className="text-sm sm:text-base">
                      {text}
                    </p>
                  ))}
                </MotionEffect>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>
      <SectionLayout>
        <ContactUs />
      </SectionLayout>
    </main>
  );
};

export default PersonInjuryPage;
