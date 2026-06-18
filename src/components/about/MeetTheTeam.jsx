import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { UserCircle2 } from "lucide-react";

const team = [
  {
    name: "Carrie Neal",
    title: "Founder & Principal Consultant | Chief People Officer",
    bio: "With over 20 years of experience in human resources, organizational development, and business consulting, Carrie founded First Choice National Consulting Group on a simple belief: people are the strategy. She has guided commercial and government clients through complex HR challenges, leadership transitions, and cultural transformation — always with a practical, people-first approach.",
    photo: "https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/9392761e5_image.png",
  },
  {
    name: "Ellen Sanders",
    title: "HR Consultant",
    bio: "Ellen brings deep expertise in HR operations, employee relations, and compliance. She partners with clients to strengthen HR infrastructure, develop policies that reflect best practices, and create workplace environments where people can thrive. Her work spans industries including healthcare, nonprofit, and professional services.",
    photo: "https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/81d7ea0ff_image.png",
  },
  {
    name: "Jennifer Tharpe",
    title: "HR Technology & Digital Transformation Consultant",
    bio: "Jennifer specializes in helping organizations evaluate, implement, and optimize HR technology systems. From HRIS selection to change management, she bridges the gap between people strategy and digital capability — ensuring that technology investments actually serve the humans who use them.",
    photo: "https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/4e39229ca_image.png",
  },
  {
    name: "Tonya Henderson-Smith",
    title: "Senior HR Consultant",
    bio: "Tonya brings over two decades of experience in HR operations, compliance, and strategic talent management. She specializes in leave of absence administration, employment law, benefits infrastructure, and complex employee relations, with a track record of guiding executive stakeholders through high-stakes HR decisions. Tonya holds an MS in Human Resource Development from Villanova University.",
    photo: "https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/102ce4cf2_image.png",
  },
  {
    name: "Shemika Hill",
    title: "Global Talent & HR Transformation Consultant",
    bio: "Shemika is a global talent and workforce strategy leader with 20+ years delivering enterprise-wide people solutions across North America, EMEA, APAC, LATAM, and the Middle East. She advises executives on HR transformation, recruiting operations, workforce planning, and people analytics, with a proven track record of reducing time-to-hire by 40% and improving retention by 20-25%.",
    photo: "https://media.base44.com/images/public/6a1db9605bc09d43648fd22c/a92dd0268_image.png",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-20 lg:py-24 bg-warm-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the Team"
          title="The people behind the work."
          subtitle="Our consultants bring decades of real-world experience across HR, leadership, operations, and technology."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.slice(0, 3).map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-white border border-warm-border rounded-lg p-7 flex flex-col items-center text-center ${member.placeholder ? "opacity-60" : ""}`}
            >
              <div className="w-24 h-24 rounded-full bg-sage-pale border-2 border-sage-light flex items-center justify-center mb-5 overflow-hidden flex-shrink-0">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: member.name === "Carrie Neal" ? "center 60%" : "center center" }} />
                ) : (
                  <UserCircle2 className="w-12 h-12 text-sage-light" />
                )}
              </div>
              <h3 className="font-heading text-xl font-semibold text-slate mb-1">{member.name}</h3>
              <p className="text-sm font-medium mb-4" style={{ color: "var(--sage)" }}>{member.title}</p>
              <p className="text-sm text-slate-secondary leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8">
          {team.slice(3).map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-white border border-warm-border rounded-lg p-7 flex flex-col items-center text-center w-full md:w-[calc(33.333%-1rem)] lg:max-w-[calc(33.333%-1.5rem)] ${member.placeholder ? "opacity-60" : ""}`}
            >
              {/* Photo placeholder */}
              <div className="w-24 h-24 rounded-full bg-sage-pale border-2 border-sage-light flex items-center justify-center mb-5 overflow-hidden flex-shrink-0">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" style={{ objectPosition: member.name === "Carrie Neal" ? "center 60%" : "center center" }} />
                ) : (
                  <UserCircle2 className="w-12 h-12 text-sage-light" />
                )}
              </div>

              {member.placeholder ? (
                <>
                  <p className="font-heading text-lg font-medium text-slate-muted italic mb-1">Coming Soon</p>
                  <p className="text-sm mb-3" style={{ color: "var(--sage)" }}>Team Member</p>
                  <p className="text-sm text-slate-muted leading-relaxed">This position will be announced shortly. We're growing our team of experienced consultants.</p>
                </>
              ) : (
                <>
                  <h3 className="font-heading text-xl font-semibold text-slate mb-1">{member.name}</h3>
                  <p className="text-sm font-medium mb-4" style={{ color: "var(--sage)" }}>{member.title}</p>
                  <p className="text-sm text-slate-secondary leading-relaxed">{member.bio}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}