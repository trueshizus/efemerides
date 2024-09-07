export function Aspects() {
  return (
    <main className="pt-4">
      <label
        htmlFor="scales"
        className="block w-full h-20 text-center transition-colors "
      >
        <input
          type="checkbox"
          id="scales"
          name="scales"
          className="sr-only peer"
        />
        <hr className="w-10 h-1 mx-auto my-1 rounded border-slate-400 bg-slate-400 md:my-10 peer-checked:bg--slate-400" />
        <h1 className="inline-block text-xl text-slate-700 peer-focus:text-slate-400">
          Aspectos
        </h1>
      </label>

      <ul>
        <li>Aspect 1</li>
        <li>Aspect 2</li>
        <li>Aspect 3</li>
      </ul>

      {/* <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="w-full h-20 transition-colors rounded-t-xl bg-slate-900 hover:bg-gray-700"
          >
            <div className="flex flex-col items-center">
              <div className="w-10 h-1 mb-2 bg-gray-400 rounded-full" />
              <span>Aspectos</span>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="bottom"
          className="h-[80%] rounded-t-xl bg-gray-800 text-white"
        >
          <SheetHeader>
            <SheetTitle>Aspectos</SheetTitle>
            <SheetDescription>
              Current Sky 11:43 - 3 Sep 2024
              <br />
              BUENOS AIRES, ARG.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet> */}
    </main>
  );
}
