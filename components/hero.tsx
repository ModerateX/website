import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center py-20 px-6">
      <div className="md:mt-6 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <Badge className="bg-primary rounded-full py-1 border-none">
            v0.1 Telegram Bot is available now! 🚀
          </Badge>
          <h1 className="mt-6 max-w-[40ch] text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold !leading-[1.2] tracking-tight">
            Next-Gen Social Management with Ai and Verifiable Credentials
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">
            Empower your Social pages with secure, verifiable credentials using Web3 technology. Manage access, verify identities, Custom AI Agent.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center sm:justify-center gap-4">

            <Link href="https://t.me/moderatexbot" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className=" w-full sm:w-auto rounded-full text-base"
              >
                Telegram Bot <ArrowUpRight className="!h-5 !w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="  w-full sm:w-auto rounded-full text-base shadow-none"
              disabled
            >
              Discord (SOON) <ArrowUpRight className="!h-5 !w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

//<LogoCloud className="mt-24 max-w-3xl mx-auto" />

export default Hero;
