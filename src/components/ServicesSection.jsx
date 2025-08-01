'use client';

import { Mail, MessageSquare, Smartphone, Bell, Send } from 'lucide-react';

const services = [
  {
    icon: Mail,
    label: 'Email Marketing',
  },
  {
    icon: MessageSquare,
    label: 'SMS Marketing',
  },
  {
    icon: Smartphone,
    label: 'WhatsApp Messaging',
  },
  {
    icon: Send,
    label: 'RCS Messaging',
  },
  {
    icon: Bell,
    label: 'Push Notifications',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-2 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 fire-gradient-text leading-[1.15] pb-1">Retention Marketing That Actually Performs</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
        We design and execute full-funnel retention strategies across email, SMS, WhatsApp, RCS, and push notifications,so your customers don’t just buy once, they stick around. Every message is on-brand, data-backed, and built to convert.
        </p>
        {/* Custom layout for 3+2 icons, always centered */}
        <div className="flex flex-col items-center gap-4 w-full">
          {/* First row: 3 icons */}
          <div className="flex justify-center gap-2 md:gap-4 w-full flex-wrap">
            {services.slice(0, 3).map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-card rounded-xl p-3 md:p-6 shadow-lg border border-border hover:phoenix-glow-hover transition-all duration-300 min-w-[100px] md:min-w-[140px]"
              >
                <Icon className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-3 text-accent" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">{label}</span>
              </div>
            ))}
          </div>
          {/* Second row: 2 icons, centered */}
          <div className="flex justify-center gap-2 md:gap-4 w-full flex-wrap">
            {services.slice(3).map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center bg-card rounded-xl p-3 md:p-6 shadow-lg border border-border hover:phoenix-glow-hover transition-all duration-300 min-w-[100px] md:min-w-[140px]"
              >
                <Icon className="w-6 h-6 md:w-10 md:h-10 mb-2 md:mb-3 text-accent" />
                <span className="text-sm md:text-lg font-semibold text-foreground text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 