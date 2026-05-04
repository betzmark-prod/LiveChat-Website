export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  // { name: 'Pricing', href: '/pricing' },
  { name: "Docs", href: "/docs" },
  { name: "Contact", href: "/contact" },
];

export const FEATURES = [
  {
    title: "Plug-and-play widget",
    description:
      "Embed the chat widget on your website with a single line of JavaScript. No complex setup required.",
    icon: "Plug",
  },
  {
    title: "Real-time WebSockets",
    description:
      "Instantaneous messaging powered by a robust WebSocket architecture for zero-latency communication.",
    icon: "Zap",
  },
  {
    title: "AI Responses",
    description:
      "RAG-ready backend connects to your knowledge base to provide instant, accurate answers 24/7.",
    icon: "Brain",
  },
  {
    title: "Human Escalation",
    description:
      "Seamlessly transfer complex queries to human agents with our integrated ticketing system.",
    icon: "UserPlus",
  },
  {
    title: "Fully Customizable",
    description:
      "Match the widget to your brand identity with custom colors, logos, and conversational tones.",
    icon: "Palette",
  },
  {
    title: "Secure & Private",
    description:
      "Enterprise-grade security with JWT authentication, domain restriction, and iframe sandboxing.",
    icon: "ShieldCheck",
  },
];

export const BENEFITS = [
  {
    title: "Increase Conversions",
    description:
      "Engage visitors at high-intent moments to boost sales and lead generation.",
  },
  {
    title: "Automate Support",
    description:
      "Handle up to 80% of routine customer queries without human intervention.",
  },
  {
    title: "Reduce Workload",
    description:
      "Free up your support team to focus on complex, high-value customer interactions.",
  },
  {
    title: "24/7 Availability",
    description:
      "Provide instant support to your global customers, regardless of their time zone.",
  },
];

export const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and early-stage startups.",
    features: [
      "Up to 1,000 AI conversations/mo",
      "Basic widget customization",
      "Email support",
      "1 Human Agent seat",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    description:
      "Ideal for growing companies with higher traffic and support needs.",
    features: [
      "Up to 10,000 AI conversations/mo",
      "Advanced widget customization",
      "Priority support",
      "5 Human Agent seats",
      "Remove LiveChat branding",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description:
      "For large organizations requiring custom integrations and dedicated support.",
    features: [
      "Unlimited conversations",
      "Custom RAG integration",
      "Dedicated success manager",
      "Unlimited Agent seats",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "LiveChat transformed how we handle customer support. The AI resolves most issues instantly, and our team only steps in when truly needed.",
    author: "Sarah Jenkins",
    role: "Head of Customer Success, TechFlow",
  },
  {
    quote:
      "The easiest widget integration we've ever done. We had the AI trained on our docs and live on our site in under an hour.",
    author: "Mark Davis",
    role: "CTO, SaaSify",
  },
  {
    quote:
      "Since implementing LiveChat, our conversion rate on the pricing page has increased by 35%. The proactive AI outreach is a game-changer.",
    author: "Elena Rodriguez",
    role: "VP of Marketing, GrowthStack",
  },
];

export const FAQS = [
  {
    question: "How long does it take to integrate?",
    answer:
      "Integration takes less than 5 minutes. Just copy and paste our JavaScript snippet into the <head> of your website.",
  },
  {
    question: "Can I customize the look and feel?",
    answer:
      "Absolutely! You can customize the colors, logo, chat bubble icon, and even the bot's tone of voice to perfectly match your brand.",
  },
  {
    question: "What happens if the AI doesn't know the answer?",
    answer:
      "If the AI cannot confidently answer a question, it seamlessly escalates the conversation to a human agent and creates a support ticket in your dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we use enterprise-grade encryption for all data in transit and at rest. Your data is isolated and never used to train generalized models.",
  },
];
