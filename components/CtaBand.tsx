import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="wrap section flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2>Ready to start your Project?</h2>
          <p className="mt-3 text-lg text-slate-300">
             Request a quote , call or Whatsapp us and we will get back to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/contact" className="btn btn-primary">
            Request a quote
          </Link>
         
        </div>
      </div>
    </section>
  );
}