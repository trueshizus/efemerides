export function Aspects() {
  return (
    <main className=" h-screen bg-midnight-slate rounded-t-3xl lg:rounded-none">
      <label
        htmlFor="scales"
        className="block w-full h-20 pt-2 text-center transition-colors rounded-t-3xl lg:rounded-none bg-midnight-slate"
      >
        <input
          type="checkbox"
          id="scales"
          name="scales"
          className="sr-only peer"
        />
        <hr className="w-10 h-1 mx-auto my-1 border-slate-400 bg-slate-400 md:my-10 peer-checked:bg--slate-400 lg:hidden" />
        <h1 className="inline-block text-xl text-slate-700 peer-focus:text-sky-blue font-thin">
          Aspectos
        </h1>
      </label>

      <ul>
        <li>Aspect 1</li>
        <li>Aspect 2</li>
        <li>Aspect 3</li>
      </ul>
    </main>
  );
}
