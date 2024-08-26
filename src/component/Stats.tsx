type StatsProps = {
  stats: {
    numberOfWords: number;
    numberOfCharacters: number;
    instagramCharactersLeft: number;
    facebookCharactersLeft: number;
  };
};

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="flex flex-wrap bg-[#f1f6f8] flex-[1.3]">
      <Stat number={stats.numberOfWords} label={"Words"} />
      <Stat number={stats.numberOfCharacters} label={"Characters"} />
      <Stat number={stats.instagramCharactersLeft} label={"Instagram"} />
      <Stat number={stats.facebookCharactersLeft} label={"Facebook"} />
    </section>
  );
}

type StatProps = {
  number: number;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <section className="flex flex-col flex-[1_150px] justify-center items-center stat">
      <span
        className={`text-[#4d5457] font-semibold lg:text-[35px] text-xl mb-2.5 ${
          number < 0 ? "text-red-500" : ""
        }`}
      >
        {number}
      </span>
      <h2 className="text-sm uppercase font-medium text-[#747a7c]">{label}</h2>
    </section>
  );
}
