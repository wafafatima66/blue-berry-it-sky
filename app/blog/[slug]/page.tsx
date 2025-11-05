import Image from "next/image";
import { notFound } from "next/navigation";

type Post = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

const posts: Post[] = [
  {
    slug: "cybersecurity-best-practices-2025",
    title: "Cybersecurity Best Practices for 2025",
    subtitle: "Practical steps to protect data and systems",
    author: "Blue Berry IT Sky",
    date: "Nov 2025",
    readTime: "6 min read",
    image: "/images/articles/article.png",
    content: [
      "Attack surfaces keep expanding — from cloud workloads to employee devices. A modern security posture balances prevention, detection, and response.",
      "Start with fundamentals: enforce MFA everywhere, rotate credentials, and apply least-privilege access. Patch regularly and automate compliance reporting.",
      "Segment networks and use zero-trust access for sensitive systems. Monitor logs centrally and set actionable alerts for anomalous behavior.",
      "Backups are non-negotiable. Maintain offline copies and test recovery plans quarterly. Run tabletop exercises to improve incident readiness.",
      "Finally, invest in security culture. Train teams to spot phishing, manage secrets responsibly, and escalate issues early.",
    ],
  },
  {
    slug: "modern-ai-development-guide",
    title: "Modern AI Development: From Prototype to Production",
    subtitle: "Data, models, evaluation, and deployment",
    author: "Blue Berry IT Sky",
    date: "Nov 2025",
    readTime: "7 min read",
    image: "/images/articles/article2.png",
    content: [
      "Successful AI projects begin with well-scoped problems and clean data. Prioritize labeling quality and define metrics tied to business outcomes.",
      "Choose the right model for the job: classical ML for structured data, deep learning for vision and speech, and LLMs for generative tasks.",
      "Evaluation must be continuous. Track accuracy and robustness, but also latency, cost, and fairness. Create test sets that mirror real-world drift.",
      "Productionizing AI requires observability. Collect feature and prediction traces, monitor performance, and set up rollback strategies.",
      "Ship with MLOps practices: version datasets, models, and configs; automate training pipelines; and document interfaces for maintainability.",
    ],
  },
  {
    slug: "building-ai-agents-in-production",
    title: "Building AI Agents for Real-World Use",
    subtitle: "Tools, memory, planning, and safety",
    author: "Blue Berry IT Sky",
    date: "Nov 2025",
    readTime: "6 min read",
    image: "/images/articles/article3.png",
    content: [
      "AI agents combine reasoning with action — calling tools (APIs, databases) to accomplish multi-step goals.",
      "Architect around capabilities: tool wrappers, a planner, and memory. Use structured prompts or graphs to keep tasks grounded and auditable.",
      "Persist short-term and long-term memory judiciously. Index relevant context, but guard sensitive data with strict access policies.",
      "Safety is essential: rate-limit tools, validate outputs, and add human-in-the-loop for high-impact actions. Log every decision for traceability.",
      "Measure success beyond accuracy — track task completion rates, cost per task, and user satisfaction to guide iteration.",
    ],
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return notFound();
  }

  return (
    <main>
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <Image src={post.image} alt={post.title} width={700} height={420} className="rounded-3xl w-full h-auto" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">{post.title}</h1>
            {post.subtitle && (
              <h2 className="text-xl lg:text-2xl text-lightblack mb-4">{post.subtitle}</h2>
            )}
            <div className="text-sm text-lightblack mb-6">
              <span className="mr-3">{post.author}</span>
              <span className="mr-3">• {post.date}</span>
              <span>• {post.readTime}</span>
            </div>
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-black mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}