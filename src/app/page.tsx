"use client";
import Image from "next/image";
import activities from "@/data/activities.json";
import interests from "@/data/interests.json";
import { useReveal } from "@/lib/useReveal";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-56px)]">
      {/* Hero */}
      <section id="home" className="fade-in min-h-[calc(100vh-56px)] flex items-center justify-center py-16 bg-[#F0F8FF]">
        <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8 sm:gap-10 items-center px-6">
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
        <div className="mx-auto max-w-6xl px-6">
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
  { title: "Moody Baby", description: "Line Bot-給學生之情緒價值機器人", image: "/images/moodybaby.jpg", github: "https://github.com/ddhcyw/MoodyBaby", demo: "https://lin.ee/YKmcceE", linkLabel: "查看專案", tools: "ngrok, LINE Messaging API, Python", story: "學會串接LINE Messaging API，我設計了情緒回饋卡，完成了雙圖文選單和情緒回饋功能。" },
  { title: "數位奇境 Digital Odyssey", description: "Unity 2D教育RPG解謎遊戲", image: "/images/dtdo.png", github: "https://github.com/ddhcyw/DO_test2", demo: "https://www.youtube.com/watch?v=Uj9JFRkuzKY", linkLabel: "查看Demo", tools: "Unity, C#, Procreate, Qwen (Hugging Face), Flask (Python)", story: "和伙伴一起寫企劃，我負責AI助手的系統和場景程式。" },
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
      <div className="relative h-80 w-full [transform-style:preserve-3d] transition-transform duration-1000 group-hover:rotate-y-180 rounded-[24px] shadow-lg">
        {/* 正面 */}
        <div className="absolute inset-0 bg-white rounded-[24px] border border-[#7AC7FF]/30 overflow-hidden flex flex-col">
          <div className="relative h-48 w-full">
            {demo ? (
              <a href={demo} target="_blank" rel="noreferrer" className="block h-full w-full">
                <Image src={image} alt={title} fill className="object-cover p-4 cursor-pointer hover:opacity-90 transition-opacity" />
              </a>
            ) : (
              <Image src={image} alt={title} fill className="object-cover p-4" />
            )}
          </div>
          <div className="p-4 flex flex-col justify-between flex-1">
            <h3 className="text-lg font-bold text-[#4B4B4B]">{title}</h3>
            <p className="mt-1 text-sm text-[#4B4B4B]/80">{description}</p>
            
            <div className="mt-4 text-sm">
            <p className="font-semibold text-[#FF7EB9]">使用工具：</p>
            <p>{tools}</p>
          </div>
          </div>
        </div>

        {/* 背面 */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[24px] border border-[#7AC7FF]/30 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#4B4B4B]">{title}</h3>
            <p className="mt-2 text-sm text-[#4B4B4B]/80">{story}</p>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-[#696969] text-white hover:scale-105 transition-all"
            >
              <Image
                src="/images/github-mark.png"
                alt="GitHub"
                width={16}
                height={16}
                className="invert"
              />
            </a>

            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7AC7FF] via-[#FF7EB9]/80 to-[#7AC7FF] text-white hover:scale-105 transition-all">
                {linkLabel || "查看 Demo"}
              </a>
            )}
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
        <div className="mt-8 overflow-x-auto">
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
      <div className="mx-auto max-w-3xl px-6">
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
            <textarea placeholder="想說的話" rows={5} className="mt-1 w-full rounded-md border border-[#7AC7FF]/30 px-3 py-2 outline-none focus:ring-2 focus:ring-[#7AC7FF]/50" />
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
        
        {/* Social Media Links */}
        <div className="mt-8 flex justify-end gap-6">
          <a 
            href="https://www.instagram.com/your_instagram" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#FF7EB9] via-[#7AC7FF] to-[#FF7EB9]/80 text-white hover:scale-110 transition-all shadow-lg"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a 
            href="https://discord.com/users/ddhcyw" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#7AC7FF] via-[#FF7EB9]/80 to-[#7AC7FF] text-white hover:scale-110 transition-all shadow-lg"
            aria-label="Discord"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
