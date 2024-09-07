export default function Page() {
  return <EphemerisTable />;
}

const EphemerisTable = () => {
  // Sample data for multiple days
  const ephemerisData = [
    {
      day: "1",
      sidT: "12:00",
      planets: [
        { name: "☉", sign: "♑ 10°23'" },
        { name: "☽", sign: "♐ 05°47'" },
        { name: "☿", sign: "♑ 29°14'" },
        { name: "♀", sign: "♐ 02°59'" },
        { name: "♂", sign: "♏ 27°59'" },
        { name: "♃", sign: "♉ 13°45'" },
        { name: "♄", sign: "♓ 16°03'" },
        { name: "♅", sign: "♉ 22°11'" },
        { name: "♆", sign: "♓ 25°17'" },
        { name: "♇", sign: "♑ 29°04'" },
        { name: "☊", sign: "♈ 02°58'" },
      ],
    },
    {
      day: "2",
      sidT: "12:04",
      planets: [
        { name: "☉", sign: "♑ 11°24'" },
        { name: "☽", sign: "♐ 18°12'" },
        { name: "☿", sign: "♑ 29°58'" },
        { name: "♀", sign: "♐ 03°59'" },
        { name: "♂", sign: "♏ 28°15'" },
        { name: "♃", sign: "♉ 13°48'" },
        { name: "♄", sign: "♓ 16°04'" },
        { name: "♅", sign: "♉ 22°12'" },
        { name: "♆", sign: "♓ 25°18'" },
        { name: "♇", sign: "♑ 29°05'" },
        { name: "☊", sign: "♈ 02°56'" },
      ],
    },
    {
      day: "3",
      sidT: "12:08",
      planets: [
        { name: "☉", sign: "♑ 12°25'" },
        { name: "☽", sign: "♑ 00°37'" },
        { name: "☿", sign: "♒ 00°42'" },
        { name: "♀", sign: "♐ 04°59'" },
        { name: "♂", sign: "♏ 28°31'" },
        { name: "♃", sign: "♉ 13°51'" },
        { name: "♄", sign: "♓ 16°05'" },
        { name: "♅", sign: "♉ 22°13'" },
        { name: "♆", sign: "♓ 25°19'" },
        { name: "♇", sign: "♑ 29°06'" },
        { name: "☊", sign: "♈ 02°54'" },
      ],
    },
  ];

  return (
    <main className="h-full p-4 overflow-auto">
      <table className="w-full text-center border border-collapse border-gray-500 table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-400">Day</th>
            <th className="p-2 border border-gray-400">Sid.T</th>
            {ephemerisData[0].planets.map((planet) => (
              <th key={planet.name} className="p-2 border border-gray-400">
                {planet.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ephemerisData.map((dayData, index) => (
            <tr key={index}>
              <td className="p-2 border border-gray-400">{dayData.day}</td>
              <td className="p-2 border border-gray-400">{dayData.sidT}</td>
              {dayData.planets.map((planet) => (
                <td key={planet.name} className="p-2 border border-gray-400">
                  {planet.sign}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
