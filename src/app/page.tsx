import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-4xl font-extrabold pb-8">CSS helpers</h1>
      <div className="flex flex-wrap gap-8">
        <Link
          href="/shadow"
          className="bg-zinc-800 text-white font-bold p-8 rounded-lg hover:bg-zinc-600 transition-all"
        >
          Shadows
        </Link>
      </div>
    </main>
  );
}
