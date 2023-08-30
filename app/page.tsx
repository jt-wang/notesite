import Image from "next/image";
export const runtime = "edge";

export default async function Home() {
  const res = await fetch(
    ((process.env.BASE_URL === undefined || process.env.BASE_RUL === null)
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : process.env.BASE_URL) + "/api"
  );
  if (res == null) {
    return <main></main>;
  }
  const { url, width, height } = await res.json();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src={url} width={width} height={height} alt={"a cat"}></Image>
      </div>
    </main>
  );
}
