type Props = {
  eyebrow: string;
  title: string;
  id?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({ eyebrow, title, id, center, light }: Props) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      <p
        className={`flex items-center gap-4 text-xs font-medium uppercase tracking-[0.35em] ${
          center ? "justify-center" : ""
        } ${light ? "text-slate-300" : "text-slate-600"}`}
      >
        <span aria-hidden="true" className="h-px w-10 bg-brand" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-4 font-display text-4xl font-bold uppercase leading-[1] sm:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}