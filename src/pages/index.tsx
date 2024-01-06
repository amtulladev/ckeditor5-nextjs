import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => {
    return import("@/components/CustomEditor");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main className="bg-gray-100 h-screen px-5">
      <section className="pt-10 max-w-[1200px] mx-auto">
        <CustomEditor />
      </section>
    </main>
  );
}
