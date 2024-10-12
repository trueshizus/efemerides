import { Suspense } from "react";
import Scene from "@/components/escene";
import { ZodiacSceneComponent, ZodiacSvg } from "@/components/zodiac-scene";
export default function Home() {
  return (
    <main className="h-screen" style={{ viewTransitionName: "page-content" }}>
      <h1 className="mt-8 text-2xl text-center text-sky-blue font-thin">
        Efemérides
      </h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="h-3/5">
          <ZodiacSceneComponent />
          {/* <ZodiacSvg /> */}
        </div>
      </Suspense>
    </main>
  );
}
