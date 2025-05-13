import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  Globe2,
  MessageCircle,
  Settings2,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Globe2,
    title: "Web3 Integration",
    description:
      "Leverage decentralized identity (DID) technology to verify user credentials.",
  },
  {
    icon: Blocks,
    title: "Secure Invite System",
    description:
      "Generate one-time invite links for verified members.",
  },
  {
    icon: Film,
    title: "AI-Powered Tools",
    description:
      "Generate summaries, auto-format content, or translate into multiple languages seamlessly.",
  },
  {
    icon: Bot,
    title: "🤖 Automated Moderation",
    description:
      "Enforce group policies automatically with custom rules and triggers.",
  },
  {
    icon: ChartPie,
    title: "Transparent & Trustworthy",
    description:
      "User data is verifiable, tamper-resistant, and privacy-focused.",
  },
  {
    icon: MessageCircle,
    title: " Actionable Insights",
    description:
      "Track member activity, join requests, and invite link usage.",
  },
];

const Features = () => {
  return (
    <div id="features" className="w-full py-12 xs:py-20 px-6">
      <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold tracking-tight text-center">
        Unleash Your Creativity
      </h2>
      <div className="w-full max-w-screen-lg mx-auto mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col bg-background border rounded-xl py-6 px-5"
          >
            <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
              <feature.icon className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">{feature.title}</span>
            <p className="mt-1 text-foreground/80 text-[15px]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
