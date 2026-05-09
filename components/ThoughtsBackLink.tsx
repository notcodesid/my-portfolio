import Link from "next/link";

type ThoughtsBackLinkProps = {
  href?: string;
  label?: string;
};

export default function ThoughtsBackLink({
  href = "/",
  label = "sid",
}: ThoughtsBackLinkProps) {
  return (
    <Link
      href={href}
      className="fixed left-6 top-6 z-50 text-[0.95rem] leading-none font-semibold text-white hover:underline sm:left-10 sm:top-10"
    >
      &larr; {label}
    </Link>
  );
}
