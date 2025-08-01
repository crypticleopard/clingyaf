import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { FaRocket, FaFire, FaCrown } from "react-icons/fa";

export default function Pricing() {
  return (
    <section className="relative py-20 px-4 max-w-5xl mx-auto text-center">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 animate-pulse -z-10 rounded-3xl" />
      <h2 className="text-4xl md:text-5xl font-extrabold fire-gradient-text mb-4">Pricing That Grows With You</h2>
      <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
         Whether you're just starting out or scaling fast—we’ve got a plan that fits. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {/* Starter Plan */}
        <Card className="phoenix-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex flex-col items-center gap-2">
              <FaRocket className="text-3xl text-accent mb-2" />
              <CardTitle className="text-xl font-bold">Starter</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-left text-base text-zinc-300 space-y-2 mb-4 list-disc list-inside">
              <li>Perfect for new brands</li>
              <li>Basic 5 flows</li>
              <li>Multi-channel Real-time support</li>
              <li>Monthly reporting</li>
              <li>4 campaigns per month</li>
            </ul>
            {/*
            <div className="text-sm text-muted-foreground line-through mb-1">$400</div>
            <div className="text-2xl font-bold fire-gradient-text mb-2">$200</div>
            <div className="text-sm text-muted-foreground">No hidden fees</div>
            */}
          </CardContent>
          <CardFooter>
            <Button className="w-full fire-gradient text-primary-foreground font-semibold rounded-full shadow">Get Started</Button>
          </CardFooter>
        </Card>
        {/* Growth Plan (highlighted) */}
        <Card className="border-2 border-accent shadow-lg scale-105 phoenix-glow bg-card/90 relative z-10">
          <CardHeader>
            <div className="flex flex-col items-center gap-2">
              <FaFire className="text-3xl text-primary mb-2 animate-bounce" />
              <CardTitle className="text-xl font-bold">Growth</CardTitle>
              <span className="text-xs px-2 py-1 rounded fire-gradient-text font-semibold">Most Popular</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-left text-base text-zinc-300 space-y-2 mb-4 list-disc list-inside">
              <li>Perfect for mid-sized brands </li>
              <li>5 basic + 2 advanced flows</li>
              <li>Loyalty & referral setup</li>
              <li>Multi-channel Real-time support</li>
              <li>Monthly reporting</li>
              <li>8 campaigns per month</li>
            </ul>
            {/*
            <div className="text-sm text-muted-foreground line-through mb-1">$900</div>
            <div className="text-2xl font-bold fire-gradient-text mb-2">$500</div>
            <div className="text-sm text-muted-foreground">No hidden fees</div>
            */}
          </CardContent>
          <CardFooter>
            <Button className="w-full fire-gradient text-primary-foreground font-semibold rounded-full shadow phoenix-glow">Get Started</Button>
          </CardFooter>
        </Card>
        {/* Enterprise Plan */}
        <Card className="phoenix-glow hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <div className="flex flex-col items-center gap-2">
              <FaCrown className="text-3xl text-secondary mb-2" />
              <CardTitle className="text-xl font-bold">Enterprise</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="text-left text-base text-zinc-300 space-y-2 mb-4 list-disc list-inside">
              <li>Perfect for large brands </li>
              <li>5 basic + 5 Advanced flows</li>
              <li>Loyalty & referral setup</li>
              <li>Multi-channel Real-time support</li>
              <li>Monthly reporting</li>
              <li>12 campaigns per month</li>
            </ul>
            {/*
            <div className="text-sm text-muted-foreground line-through mb-1">$2700</div>
            <div className="text-2xl font-bold fire-gradient-text mb-2">$1200</div>
            <div className="text-sm text-muted-foreground">No hidden fees</div>
            */}
          </CardContent>
          <CardFooter>
            <Button className="w-full fire-gradient text-primary-foreground font-semibold rounded-full shadow">Get Started</Button>
          </CardFooter>
        </Card>
      </div>
      <p className="text-2xl font-semibold text-orange-400">
         Need something tailored?<br />
        <span className="text-lg text-muted-foreground mb-2">We’ll build a strategy just for your goals, budget, and tech stack.</span>
      </p>
      <div className="mt-6">
        <div className="text-center mt-8">
          <a href="https://calendly.com/clingy-afagency/30min" target="_blank" rel="noopener noreferrer">
            <Button className="text-lg px-6 py-3 fire-gradient text-primary-foreground hover:phoenix-glow-hover font-semibold rounded-full shadow cursor-pointer">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
} 