"use client";

import { Heart, Brain, Leaf } from "lucide-react";

type Story = {
  title: string;
  points: string[];
  Icon: any;
};

const stories: Story[] = [
  {
    title: "Women’s Mental Wellness",
    points: ["Emotional balance", "Restful sleep", "Clarity + focus"],
    Icon: Heart,
  },
  {
    title: "Mid‑Life Hormone Health",
    points: ["Perimenopause & menopause", "Energy & metabolism", "Thyroid balance"],
    Icon: Brain,
  },
  {
    title: "Whole‑Person Approach",
    points: ["Personalized plans", "Continuity via telehealth", "Boutique, human care"],
    Icon: Leaf,
  },
];

export default function FocusAreas() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="font-serif-display display-h2 text-forest mb-10">Our Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map(({ title, points, Icon }, i) => (
            <article
              key={title}
              className="card p-6 bg-white/90"
              style={{ transition: "transform 250ms ease, box-shadow 250ms ease" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "color-mix(in srgb, var(--khaki) 70%, white)" }}>
                  <Icon className="w-5 h-5 text-sage-600" />
                </div>
                <h3 className="font-serif-display text-xl text-forest">{title}</h3>
              </div>
              <ul className="leaf-bullets space-y-3 text-charcoal">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

