import { Suspense } from "react";
import Scene from "@/components/escene";
export default function Home() {
  return (
    <main className="h-screen" style={{ viewTransitionName: "page-content" }}>
      <h1 className="my-8 text-2xl text-center text-sky-blue font-thin">
        Efemérides
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="h-3/5">
          <Scene />
        </div>
      </Suspense>
    </main>
  );
}
