import type { IconType } from "react-icons";
import {
  HiOutlineClock,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { MetricItem } from "@/src/components/sections/home/MetricItem";

const metrics: {
  value: string;
  label: string;
  emphasize: boolean;
  Icon: IconType;
}[] = [
  { value: "40%", label: "Faster Operations", emphasize: false, Icon: HiOutlineClock },
  { value: "60%", label: "Reduced Manual Effort", emphasize: true, Icon: HiOutlineCpuChip },
  { value: "2x", label: "Faster Decisions", emphasize: false, Icon: HiOutlineLightBulb },
  { value: "95%", label: "Process Accuracy", emphasize: true, Icon: HiOutlineShieldCheck },
];

export function MetricsSection() {
  return (
    <section className="mt-36 w-full">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-16">
        <div className="liquid-glass liquid-glass-readable rounded-[10vw] md:rounded-[4vw] p-8 py-12 shadow-[var(--shadow-soft)] sm:p-10 lg:p-16">
          <div className="grid grid-cols-1 place-items-center gap-16 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-0 xl:gap-x-10">
            {metrics.map((m) => {
              const Icon = m.Icon;
              return (
                <MetricItem
                  key={m.label}
                  value={m.value}
                  label={m.label}
                  emphasize={m.emphasize}
                  icon={
                    <Icon
                      className={`h-12 w-12 shrink-0 sm:h-9 sm:w-9 ${m.emphasize ? "text-accent" : "text-primary"}`}
                      aria-hidden
                    />
                  }
                />
              );
            })}
          </div>
        </div>

        <div className="my-10 flex justify-center gap-3 sm:mt-12" aria-hidden>
          <span className="h-6 w-6 rounded-full border border-accent bg-transparent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
          <span className="h-6 w-6 rounded-full bg-accent" />
        </div>
      </div>
    </section>
  );
}
