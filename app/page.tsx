import { Suspense } from "react";
import Scene from "@/components/escene";
import { ZodiacSceneComponent } from "@/components/zodiac-scene";
export default function Home() {
  return (
    <main className="h-screen" style={{ viewTransitionName: "page-content" }}>
      <h1 className="mt-8 text-2xl text-center text-sky-blue font-thin">
        Efemérides
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full aspect-square">
          <ZodiacSceneComponent />
        </div>
      </Suspense>
    </main>
  );
}
