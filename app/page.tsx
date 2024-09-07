import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ChartCircle, TableDocument } from "iconic-react";
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ viewTransitionName: "page-content" }}>
      <h1 className="my-8 text-2xl text-center text-slate-400">Efemérides</h1>

      <Zodiac />
    </main>
  );
}

const Zodiac = () => {
  const celestials = [
    { name: "sun", distance: 25, size: 4 },
    // { name: "earth", distance: 0, size: 3, indicator: false },
    // { name: "mars", distance: 20, size: 1 },
    // { name: "moon", distance: 10, size: 1 },
    // { name: "jupiter", distance: 20, size: 1.5 },
    // { name: "saturn", distance: 20, size: 1.3 },
    // { name: "uranus", distance: 20, size: 1.2 },
    // { name: "neptune", distance: 20, size: 1.1 },
  ];
  return (
    <figure className="w-full h-full pile zodiac">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <g strokeWidth="0.25" fill="none">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="38" />

          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="5" />
        </g>
        <DashCircle />
        {celestials.map((celestial) => (
          <Celestial key={celestial.name} {...celestial} />
        ))}
      </svg>
    </figure>
  );
};

const DashCircle = () => {
  const dashRadius = 10; // Assuming this is defined somewhere in the component.

  const createLine = (i: number, orientation: number) => {
    const rotation = i === 0 && orientation === -1 ? 180 : i * orientation;
    const isMajorTick = i % 30 === 0;
    const isMediumTick = i % 6 === 0;

    const x1 = isMajorTick ? 2 : dashRadius;
    const x2 = isMajorTick ? 35 : dashRadius + 2;
    const strokeWidth = isMediumTick ? 0.25 : 0.1;

    return (
      <line
        key={`${i}-${orientation}`}
        x1={x1}
        y1="50"
        x2={x2}
        y2="50"
        strokeWidth={strokeWidth}
        transform={`rotate(${rotation} 50 50)`}
      />
    );
  };

  return (
    <>
      {[...Array(180)].map((_, i) => (
        <>
          {createLine(i, 1)}
          {createLine(i, -1)}
        </>
      ))}
    </>
  );
};

const Celestial = ({
  name,
  distance,
  size,
  indicator = true,
}: {
  name: string;
  distance: number;
  size: number;
  indicator?: boolean;
}) => (
  <g className={`celestial ${name}`}>
    {indicator && (
      <>
        <line x1="12" y1="50" x2="35" y2="50" strokeWidth=".05" />
        <circle
          cx={50 - distance - 1}
          cy="50"
          r={1.2 * size}
          stroke="none"
          className="celestial-shadow"
        />
      </>
    )}
    <circle
      cx={50 - distance}
      cy="50"
      r={size}
      stroke="none"
      className="celestial-body"
    />
  </g>
);
