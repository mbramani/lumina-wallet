import { ArrowRight, Globe, Lock, Shield, User, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 animate-pulse" />
          <div className="container px-4 md:px-6 relative mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient"
                role="heading"
                aria-level={1}
              >
                Secure, Private, Multi-Chain Crypto Wallet
              </h1>
              <p className="mx-auto md:max-w-[800px] text-md text-muted-foreground md:text-xl lg:text-2xl leading-relaxed motion-safe:animate-fadeIn">
                Manage your digital assets across multiple blockchains with{" "}
                <span className="text-primary font-semibold inline-block hover:scale-105 transition-transform">
                  zero tracking
                </span>
                ,{" "}
                <span className="text-secondary font-semibold inline-block hover:scale-105 transition-transform">
                  zero downloads
                </span>
                , and{" "}
                <span className="text-accent font-semibold inline-block hover:scale-105 transition-transform">
                  complete privacy
                </span>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 mt-8 motion-safe:animate-fadeInUp">
                <Button
                  asChild
                  size="lg"
                  className="group relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  <Link href="/create-wallet" className="flex items-center">
                    <User className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Create Wallet
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  size="lg"
                  className="group relative transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  <Link href="/recover-wallet" className="flex items-center">
                    <Lock className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Recover Wallet
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/50 backdrop-blur-sm relative">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent motion-safe:animate-fadeIn">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 motion-safe:animate-fadeInUp">
              {[
                {
                  icon: Globe,
                  title: "Multi-Chain Support",
                  description:
                    "Manage assets on Ethereum, Binance Smart Chain, Solana, and more.",
                  color: "primary",
                },
                {
                  icon: Shield,
                  title: "Privacy-Centric",
                  description:
                    "No tracking or data collection—your activity is entirely private.",
                  color: "secondary",
                },
                {
                  icon: Zap,
                  title: "Browser-Based Access",
                  description:
                    "Create or recover your wallet instantly, without installing software.",
                  color: "accent",
                },
                {
                  icon: Lock,
                  title: "Secure Key Management",
                  description:
                    "Your private keys are encrypted and stay on your device.",
                  color: "primary",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className={cn(
                    "transition-all duration-300 hover:scale-105 hover:shadow-lg",
                    feature.color === "primary" && "hover:shadow-primary/50",
                    feature.color === "secondary" &&
                      "hover:shadow-secondary/50",
                    feature.color === "accent" && "hover:shadow-accent/50"
                  )}
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "w-16 h-16 rounded-lg flex items-center justify-center mb-4",
                        feature.color === "primary" && "bg-primary/10",
                        feature.color === "secondary" && "bg-secondary/10",
                        feature.color === "accent" && "bg-accent/10"
                      )}
                    >
                      <feature.icon
                        className={cn(
                          "w-8 h-8",
                          feature.color === "primary" && "text-primary",
                          feature.color === "secondary" && "text-secondary",
                          feature.color === "accent" && "text-accent"
                        )}
                      />
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted/30 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center motion-safe:animate-fadeIn">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                Ready to Start Your Crypto Journey?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-lg md:text-xl">
                Experience the future of crypto management with{" "}
                <span className="text-primary font-semibold hover:scale-105 inline-block transition-transform">
                  zero compromises
                </span>{" "}
                on security and{" "}
                <span className="text-secondary font-semibold hover:scale-105 inline-block transition-transform">
                  complete privacy
                </span>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  asChild
                  size="lg"
                  className="group relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  <Link href="/create-wallet" className="flex items-center">
                    <Zap className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
