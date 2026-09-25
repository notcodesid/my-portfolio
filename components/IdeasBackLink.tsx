import Link from "next/link";

type IdeasBackLinkProps = {
  href?: string;
  label?: string;
};

export default function IdeasBackLink({
  href = "/",
  label = "home",
}: IdeasBackLinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-10 items-center text-[0.95rem] font-semibold text-white/62 transition hover:text-white focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <span aria-hidden="true" className="mr-2">
        ←
      </span>
      {label}
    </Link>
  );
}
