import {
  BadgeDollarSign,
  Route,
  ShieldCheck,
  Truck,
  Undo2,
  UserRoundCheck,
} from "lucide-react";

const faq = [
  {
    icon: Undo2,
    question: "What is Web3 Integration and how does it benefit me?",
    answer:
      "Web3 Integration leverages decentralized identity (DID) technology to verify user credentials, ensuring a secure and seamless experience. This means your data is protected and you can trust the authenticity of other users.",
  },
  {
    icon: Route,
    question: "How does the Secure Invite System work?",
    answer:
      "Our Secure Invite System generates one-time invite links for verified members, ensuring that only authorized individuals can join your community. This helps maintain the integrity and security of your group.",
  },
  {
    icon: Truck,
    question: "What AI-Powered Tools are available in the app?",
    answer:
      "Our app offers AI-Powered Tools that can generate summaries, auto-format content, and translate into multiple languages seamlessly. These tools are designed to enhance productivity and creativity based on your social contents.",
  },
  {
    icon: BadgeDollarSign,
    question: "How does Automated Moderation help manage my community?",
    answer:
      "Automated Moderation enforces group policies automatically with custom rules and triggers. This feature helps maintain order and compliance within your community without the need for constant manual oversight.",
  },
  {
    icon: ShieldCheck,
    question: "What makes the app Transparent & Trustworthy?",
    answer:
      " User data in our app is verifiable, tamper-resistant, and privacy-focused. This ensures that your information is secure and that you can trust the data you interact with.",
  },
  {
    icon: UserRoundCheck,
    question: "What kind of Actionable Insights can I gain from the app?",
    answer:
      "The app provides insights into member activity, join requests, and invite link usage. These insights help you understand your community better and make informed decisions to enhance engagement and growth.",
  },
];

const FAQ = () => {
  return (
    <div
      id="faq"
      className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
    >
      <div className="max-w-screen-lg">
        <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p>

        <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
          {faq.map(({ question, answer, icon: Icon }) => (
            <div key={question} className="border p-6 -mt-px -ml-px">
              <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                <Icon className="h-4 w-4 xs:h-6 xs:w-6" />
              </div>
              <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                <span>{question}</span>
              </div>
              <p className="text-sm xs:text-base">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
