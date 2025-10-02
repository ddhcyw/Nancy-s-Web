"use client";
import Image from "next/image";
import activities from "@/data/activities.json";
import interests from "@/data/interests.json";
import { useReveal } from "@/lib/useReveal";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-56px)] px-6">
      {/* Hero */}
      <section id="home" className="fade-in min-h-[calc(100vh-56px)] flex items-center justify-center py-16 bg-[#F0F8FF]">
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-10 items-center">
          <div className="flex justify-center sm:justify-start">
            <div className="group [perspective:1000px] h-48 w-48">
              <div className="relative h-full w-full rounded-full ring-1 ring-[#7AC7FF]/40 shadow-sm transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 overflow-hidden rounded-full [backface-visibility:hidden]">
                  <Image src="/images/profile.jpg" alt="Nancy Wu Profile" fill className="object-cover" />
                </div>
                <div className="absolute inset-0 overflow-hidden rounded-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Image src="/images/profile-back.jpg" alt="Nancy Wu Profile Back" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF7EB9] via-[#7AC7FF] to-[#FF7EB9]/80 bg-clip-text text-transparent">
              吳采伃 Nancy Wu
            </h1>
            <p className="mt-2 text-base sm:text-lg text-[#4B4B4B]">國立台北教育大學 數位科技設計學系 NTUE DTD</p>
            <p className="mt-5 text-[#4B4B4B]/80 leading-relaxed">
              “Creative problem-solver, growth-driven, continuously improving.”
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="fade-in py-16 bg-[#FFF0F5]">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-[#FF7EB9] via-[#7AC7FF] to-[#FF7EB9]/80 bg-clip-text text-[#4B4B4B] text-center">
            作品集
          </h2>
          <p className="mt-2 text-[#4B4B4B]/80 text-center">以下是我近期完成的五個專案。</p>
          <PortfolioGrid />
        </div>
      </section>

      {/* Activities */}
      <ActivitiesSection />

      {/* Interests */}
      <InterestsSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}

// ---------- Portfolio ----------
const projects = [
  { title: "拾悅咖啡廳", description: "咖啡廳網頁設計與實作", image: "/images/cafe.jpg", github: "https://github.com/s111119043/F2E-final", demo: "https://s111119043.github.io/F2E-final/", linkLabel: "查看專案", tools: "HTML, CSS, JavaScript, Firebase, Figma", story: "這是我第一次完整設計一個網站，從排版、色彩到互動效果都親自實作。" },
  { title: "SuiLa 服飾店", description: "服飾店APP設計與實作", image: "/images/suila.png", github: "https://github.com/zhlhu322/mid_5_SuiLa", demo: "https://youtu.be/y_CN40moX8E", linkLabel: "查看Demo", tools: "React Native, JavaScript, Figma", story: "在這個專案中，我和伙伴一起設計版面並轉換為實際可用的APP，讓我更熟悉react native。" },
  { title: "狠狗 Bad Dog", description: "融合生活知識-Unity 2D冒險射擊遊戲", image: "/images/maddog.jpg", github: "https://github.com/zhlhu322/Unity_MadDog", demo: "https://youtu.be/oiCDGnuyhBg", linkLabel: "查看Demo", tools: "Unity, C#, Procreate", story: "從零開始實作2D遊戲，和伙伴一起寫企劃，我完成了主角程式/可互動物件程式/生命值程式。" },
  { title: "Moody Baby", description: "Line Bot-給學生之情緒價值機器人", image: "/images/moodybaby.jpg", github: "https://github.com/ddhcyw/MoodyBaby", demo: "https://lin.ee/YKmcceE", linkLabel: "查看專案", tools: "Node.js, LINE Messaging API, Python", story: "學會串接LINE Messaging API，我設計了情緒回饋卡，完成了雙圖文選單和情緒回饋功能。" },
  { title: "數位奇境 Digital Odyssey", description: "Unity 2D教育RPG解謎遊戲", image: "/images/do.png", github: "https://github.com/", demo: "https://www.youtube.com/watch?v=Uj9JFRkuzKY", linkLabel: "查看Demo", tools: "Unity, C#, Procreate, Qwen (Hugging Face), Flask (Python)", story: "和伙伴一起寫企劃，我負責AI助手的系統和場景程式。" },
];

function PortfolioGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo?: string;
  tools: string;
  linkLabel?: string;
  story: string;
}

function ProjectCard({ title, description, image, github, demo, tools, linkLabel, story }: ProjectCardProps) {
  return (
    <div className="group perspective">
      <div className="relative h-80 w-full [transform-style:preserve-3d] transition-transform duration-700 group-hover:rotate-y-180 rounded-[24px] shadow-lg">
        {/* 正面 */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[24px] border border-[#7AC7FF]/30 overflow-hidden flex flex-col">
          <div className="relative h-48 w-full">
            <Image src={image} alt={title} fill className="object-cover p-4" />
          </div>
          <div className="p-4 flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-[#4B4B4B]">{title}</h3>
            <p className="mt-1 text-sm text-[#4B4B4B]/80">{description}</p>
            <div className="mt-4 flex gap-2">
              <a href={github} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-[#FF7EB9] via-[#7AC7FF] to-[#FF7EB9]/80 text-white hover:scale-105 transition-all">
                GitHub
              </a>
              {demo && (
                <a href={demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7AC7FF] via-[#FF7EB9]/80 to-[#7AC7FF] text-white hover:scale-105 transition-all">
                  {linkLabel || "查看 Demo"}
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 背面 */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[24px] border border-[#7AC7FF]/30 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#4B4B4B]">{title}</h3>
            <p className="mt-2 text-sm text-[#4B4B4B]/80">{story}</p>
          </div>
          <div className="mt-4 text-sm">
            <p className="font-semibold text-[#FF7EB9]">使用工具：</p>
            <p>{tools}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Activities ----------
function ActivitiesSection() {
  return (
    <section id="activities" className="py-16 bg-[#F0F8FF]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#4B4B4B] tracking-tight">活動經歷</h2>
        <div className="mt-8 overflow-x-auto relative">
          <button
            aria-label="scroll left"
            onClick={(e) => {
              const c = e.currentTarget.parentElement?.querySelector('#activities-track') as HTMLDivElement | null;
              if (c) c.scrollBy({ left: -300, behavior: 'smooth' });
            }}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-[#FF7EB9]/40 text-white shadow hover:scale-105 transition"
          >
            ◀
          </button>
          <button
            aria-label="scroll right"
            onClick={(e) => {
              const c = e.currentTarget.parentElement?.querySelector('#activities-track') as HTMLDivElement | null;
              if (c) c.scrollBy({ left: 300, behavior: 'smooth' });
            }}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-9 w-9 items-center justify-center rounded-full bg-[#FF7EB9]/40 text-white shadow hover:scale-105 transition"
          >
            ▶
          </button>
          <div id="activities-track" className="flex snap-x snap-mandatory gap-4 sm:gap-6 pr-4">
            {activities.map((e: ActivityCardProps) => (
              <ActivityCard key={e.title} {...e} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ActivityCardProps {
  title: string;
  image: string;
  description: string;
}

function ActivityCard({ title, image, description }: ActivityCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      className={`snap-start rounded-[24px] border border-[#7AC7FF]/30 bg-white overflow-hidden transition-transform duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } hover:shadow-lg min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%]`}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold text-[#4B4B4B]">{title}</h3>
        <p className="mt-1 text-sm text-[#4B4B4B]/80">{description}</p>
      </div>
    </article>
  );
}

// ---------- Interests ----------
function InterestsSection() {
  return (
    <section id="interests" className="py-16 bg-[#FFF0F5]">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#4B4B4B] tracking-tight">興趣</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {interests.map((it: Omit<InterestCardProps, 'index'>, idx: number) => (
            <InterestCard key={it.title} {...it} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface InterestCardProps {
  image: string;
  title: string;
  description: string;
  index: number;
}

function InterestCard({ image, title, description, index }: InterestCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`rounded-lg border border-[#7AC7FF]/30 bg-white p-5 text-center transition-transform duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      } hover:scale-105 hover:shadow-md`}
    >
      <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto ring-1 ring-[#7AC7FF]/30">
        <Image src={image} alt={title} fill className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
      <h3 className="mt-4 text-base sm:text-lg font-semibold text-[#4B4B4B]">{title}</h3>
      <p className="mt-1 text-sm text-[#4B4B4B]/80">{description}</p>
    </article>
  );
}

// ---------- Contact ----------
function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#F0F8FF]">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#4B4B4B] tracking-tight text-center">聯絡我</h2>
        <p className="mt-2 text-[#4B4B4B]/80 text-center">歡迎透過表單或社群與我聯繫。</p>
        <form className="mt-6 grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-[#4B4B4B]">名字</label>
            <input type="text" placeholder="你的名字" className="mt-1 w-full rounded-md border border-[#7AC7FF]/30 px-3 py-2 outline-none focus:ring-2 focus:ring-[#7AC7FF]/50" />
          </div>
          <div>
            <label className="block text-sm text-[#4B4B4B]">Email</label>
            <input type="email" placeholder="you@example.com" className="mt-1 w-full rounded-md border border-[#7AC7FF]/30 px-3 py-2 outline-none focus:ring-2 focus:ring-[#7AC7FF]/50" />
          </div>
          <div>
            <label className="block text-sm text-[#4B4B4B]">訊息</label>
            <textarea placeholder="想聊聊什麼？" rows={5} className="mt-1 w-full rounded-md border border-[#7AC7FF]/30 px-3 py-2 outline-none focus:ring-2 focus:ring-[#7AC7FF]/50" />
          </div>
          <div>
          <button 
            type="button" 
            className="inline-flex items-center rounded-md bg-[#99BBFF] text-white px-4 py-2 text-sm hover:scale-105 transition-all"
          >
            送出
          </button>

          </div>
        </form>
      </div>
    </section>
  );
}
