import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlineMapPin } from "react-icons/hi2";
import { NAV_ITEMS } from "@/src/data/navigation";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Security", href: "#" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto w-full overflow-hidden bg-primary text-secondary">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/45 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-accent/[0.07] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-secondary/[0.04] blur-3xl" aria-hidden />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-7 pt-12 sm:px-10 sm:pb-8 sm:pt-14 lg:px-16 lg:pb-10 lg:pt-16">
        <div className="rounded-[1.75rem] border border-secondary/12 bg-secondary/[0.04] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_48px_rgba(0,0,0,0.14)] backdrop-blur-md sm:rounded-[2rem] sm:p-9 lg:p-11">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-14">
            <div className="max-w-md shrink-0 lg:max-w-[26rem] lg:pt-0.5">
              <Link href="/" className="inline-block rounded-lg outline-none ring-offset-2 ring-offset-primary focus-visible:ring-2 focus-visible:ring-accent">
                <Image
                  src="/logo.svg"
                  alt="Staracme"
                  width={170}
                  height={42}
                  className="h-auto w-[148px] opacity-[0.97] brightness-0 invert sm:w-[168px]"
                />
              </Link>
              <p className="mt-6 text-sm leading-[1.65] text-secondary/76 sm:text-base">
                Personalised digital systems for operations, visibility, and workflow — built to match
                how your organisation actually works.
              </p>
            </div>

            <div className="flex flex-col gap-12 sm:flex-row sm:gap-14 lg:gap-16 xl:gap-20">
              <div className="min-w-0 sm:w-[11.5rem]">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  Explore
                </p>
                <nav aria-label="Footer">
                  <ul className="mt-5 flex flex-col">
                    {NAV_ITEMS.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="group inline-flex items-center gap-2 py-2.5 text-[0.9375rem] font-medium text-secondary/90 transition-colors hover:text-secondary sm:py-2"
                        >
                          <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-3" aria-hidden />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="min-w-0 sm:max-w-[20rem] lg:max-w-[22rem]">
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  Contact
                </p>
                <ul className="mt-5 flex flex-col gap-5 text-[0.9375rem] text-secondary/85">
                  <li>
                    <a
                      href="mailto:hello@staracme.com"
                      className="group inline-flex items-start gap-3 transition-colors hover:text-secondary"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/15 bg-secondary/[0.06] transition-colors group-hover:border-accent/35 group-hover:bg-accent/10">
                        <HiOutlineEnvelope className="h-4 w-4 text-accent" aria-hidden />
                      </span>
                      <span className="pt-1.5 leading-snug">hello@staracme.com</span>
                    </a>
                  </li>
                  <li>
                    <div className="inline-flex items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-secondary/15 bg-secondary/[0.06]">
                        <HiOutlineMapPin className="h-4 w-4 text-accent" aria-hidden />
                      </span>
                      <span className="pt-1.5 leading-snug">
                        Operating globally — tell us where you&apos;re based.
                      </span>
                    </div>
                  </li>
                </ul>
                <Link
                  href="#"
                  className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full border border-secondary/25 bg-secondary/[0.08] px-7 py-3.5 text-sm font-semibold text-secondary shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all hover:border-accent/40 hover:bg-accent/[0.12] hover:text-secondary sm:w-auto"
                >
                  Start a conversation
                  <HiArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>

          <nav
            aria-label="Legal"
            className="mt-10 border-t border-secondary/10 pt-8 sm:mt-11 sm:pt-9"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary/58 transition-colors hover:text-secondary/90"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center gap-5 border-t border-secondary/12 pt-7 text-center sm:mt-9 sm:gap-6 sm:pt-8">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-sm text-secondary/52">© {year} Staracme. All rights reserved.</p>
            <p className="text-sm text-secondary/52">
              Designed & Developed by{" "}
              <Link
                href="https://www.fibonce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-secondary/68 underline decoration-secondary/25 underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
              >
                Fibonce Tech Solutions Pvt. Ltd.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
