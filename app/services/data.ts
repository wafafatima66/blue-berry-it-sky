export type Service = {
  slug: string;
  title: string;
  image: string;
  summary: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "web-mobile-application-development",
    title: "Web & Mobile Application Development",
    image: "/images/aboutus/imgOne.svg",
    summary:
      "Design, develop, and deploy scalable applications that drive engagement and growth.",
    details: [
      "We build performant, accessible web and mobile apps using modern stacks.",
      "Our delivery includes CI/CD, testing pipelines, and observability for stability.",
      "Scale seamlessly with best practices for caching, security, and cloud-native deployments.",
    ],
  },
  {
    slug: "cloud-infrastructure-devops",
    title: "Cloud Infrastructure & DevOps Solutions",
    image: "/images/aboutus/imgTwo.svg",
    summary:
      "Design, migrate, and manage cloud environments with cost optimization and high uptime.",
    details: [
      "We automate infrastructure with Terraform, Kubernetes, and GitOps workflows.",
      "Improve reliability with monitoring, alerting, and on-call runbooks.",
      "Optimize cloud spend while maintaining performance and security baselines.",
    ],
  },
  {
    slug: "cybersecurity-compliance",
    title: "Cybersecurity & Compliance Solutions",
    image: "/images/aboutus/imgThree.svg",
    summary:
      "Protect your business with enterprise-grade security and compliance frameworks.",
    details: [
      "Threat detection, vulnerability management, and incident response playbooks.",
      "Zero-trust access controls, data encryption, and secure SDLC practices.",
      "Map controls to standards like ISO 27001, SOC 2, and GDPR.",
    ],
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    image: "/images/aboutus/imgOne.svg",
    summary:
      "Build reliable data pipelines and dashboards to unlock actionable insights.",
    details: [
      "Model, process, and visualize data with robust ETL/ELT.",
      "Create KPIs and self-serve analytics to empower teams.",
      "Ensure data quality, governance, and lineage tracking.",
    ],
  },
  {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    image: "/images/aboutus/imgTwo.svg",
    summary:
      "Augment teams and automate workflows—from LLM integrations to task agents.",
    details: [
      "Design agents with safe tool use, memory, and guardrails.",
      "Measure outcomes with cost, latency, and task success metrics.",
      "Integrate AI into products while maintaining reliability and security.",
    ],
  },
  {
    slug: "it-support-managed-services",
    title: "IT Support & Managed Services",
    image: "/images/aboutus/imgThree.svg",
    summary:
      "Keep operations running smoothly with proactive monitoring and helpdesk support.",
    details: [
      "Patch management, asset tracking, and endpoint security.",
      "SLA-backed support with transparent reporting and change management.",
      "Tailored plans for SMEs and growing organizations.",
    ],
  },
];