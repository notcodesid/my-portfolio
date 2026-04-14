import Link from "next/link";

export default function ThoughtsBackLink() {
  return (
    <Link
      href="/"
      className="fixed left-6 top-6 z-50 text-[0.95rem] leading-none font-semibold text-white hover:underline sm:left-10 sm:top-10"
    >
      &larr; sid
    </Link>
  );
}
