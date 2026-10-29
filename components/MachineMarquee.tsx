const machines = [
  "Excavators",
  "Backhoe Loaders",
  "Tipper Trucks",
  "Truck Tractors",
  "Road Rollers",
  "Graders",
  "Front-End Loaders",
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden}
      className="flex shrink-0 items-center"
    >
      {machines.map((name) => (
        <li
          key={name}
          className="flex items-center whitespace-nowrap text-xs font-black uppercase tracking-[0.25em] text-slate-900"
        >
          <span className="px-8">{name}</span>
          
        </li>
      ))}
    </ul>
  );
}

export default function MachineMarquee() {
  return (
    <section
      aria-label="Machines we hire"
      className="overflow-hidden bg-[#9aa4a4] py-3"
    >
      <style>{`
        @keyframes lj-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .lj-marquee-track {
          animation: lj-marquee 30s linear infinite;
        }
        .lj-marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="lj-marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}