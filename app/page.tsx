export default function Home() {
  return (
    <main className="min-h-screen grid place-content-center">
      <div className="pile">
        <Zodiac />
        {/* <Celestials /> */}
      </div>
    </main>
  );
}

const Zodiac = () => {
  return (
    <figure className="pile zodiac">
      <svg viewBox="0 0 100 100">
        <g stroke-width="0.25" fill="none">
          <circle cx="50" cy="50" r="48" />
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="38" />

          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="5" />
        </g>
        <DashCircle />
        <Celestial name="sun" distance={25} size={4} />
        <Celestial name="earth" distance={0} size={3} indicator={false} />
        <Celestial name="mars" distance={20} size={1} />
        {/* <Celestials /> */}
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
    {indicator && <line x1="12" y1="50" x2="35" y2="50" stroke-width=".05" />}
    <circle cx={50 - distance} cy="50" r={size} stroke="none" />
  </g>
);
