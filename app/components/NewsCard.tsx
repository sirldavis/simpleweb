export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  imageUrl?: string;
};

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-black/[.08] bg-white transition-shadow hover:shadow-md dark:border-white/[.145] dark:bg-[#111]">
      {item.imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.imageUrl}
          alt={item.title}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          <span>{item.category}</span>
          <span aria-hidden>·</span>
          <time>{item.date}</time>
        </div>
        <h2 className="text-lg font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
          {item.title}
        </h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {item.summary}
        </p>
      </div>
    </article>
  );
}
