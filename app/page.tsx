import NewsCard, { NewsItem } from "./components/NewsCard";

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Local council approves new park redevelopment",
    summary:
      "The plan adds walking trails, a playground, and native plantings, with construction set to begin next spring.",
    category: "Local",
    date: "Jul 21, 2026",
  },
  {
    id: "2",
    title: "Regional startups raise record funding this quarter",
    summary:
      "Investors point to strong growth in climate tech and logistics as the driving forces behind the surge.",
    category: "Business",
    date: "Jul 20, 2026",
  },
  {
    id: "3",
    title: "New library branch opens downtown",
    summary:
      "The branch features a dedicated makerspace, expanded children's section, and extended weekend hours.",
    category: "Community",
    date: "Jul 18, 2026",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="border-b border-black/[.08] bg-white dark:border-white/[.145] dark:bg-[#111]">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            New Report
          </h1>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            The latest stories, updated throughout the day.
          </p>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-6 px-6 py-10">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </main>
    </div>
  );
}
