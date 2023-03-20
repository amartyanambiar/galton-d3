import Head from "next/head";
import "tailwindcss/tailwind.css";
import BarChart from "../components/chart";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Galton Board</title>
      </Head>
      <main>
        <h1 className="text-4xl font-bold ml-2 mt-2">Galton Board</h1>
        <div id="one" className="ml-2">
          <p id="tooltip">fog</p>

          <BarChart />
        </div>
      </main>
    </div>
  );
}
