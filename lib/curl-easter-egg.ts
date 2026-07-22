const LABEL_WIDTH = 22;

const c = {
  reset: "\x1b[0m",
  title: "\x1b[1;38;2;245;245;245m",
  label: "\x1b[38;2;245;245;245m",
  value: "\x1b[38;2;184;184;184m",
  muted: "\x1b[38;2;120;120;120m",
  line: "\x1b[38;2;40;40;40m",
};

function wrap(text: string, width = 52): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;

    if (next.length > width) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function detail(
  label: string,
  primaryLines: string[],
  secondaryLines: string[] = [],
): string {
  const lines = [
    ...primaryLines.map((line) => ({ text: line, tone: c.value })),
    ...secondaryLines.map((line) => ({ text: line, tone: c.muted })),
  ];

  return lines
    .map((line, index) => {
      const prefix =
        index === 0
          ? `${c.label}${label.padEnd(LABEL_WIDTH)}${c.reset}`
          : " ".repeat(LABEL_WIDTH);

      return `${prefix}${line.tone}${line.text}${c.reset}`;
    })
    .join("\n");
}

export function buildCurlEasterEgg(): string {
  const sections = [
    detail("who/", ["21, m, india"]),
    detail(
      "about/",
      wrap(
        "dropout, doing odd jobs, chasing knowledge, serial-ly attempting things.",
      ),
    ),
    detail(
      "actively learning/",
      wrap(
        "math, code, writing, blockchain(solana), gaming virality, chess, sales & marketing",
      ),
    ),
    detail("work/", ["building tryproven.framer.website +6 more"], [
      "https://tryproven.framer.website/",
      "https://notcodesid.com/stuff",
    ]),
    detail("writing/", ["reflection and technical blogs"], [
      "https://notcodesid.com/reflection",
      "https://medium.com/@notcodesid",
    ]),
    detail("links/", ["x, github, email, linkedin, cv, instagram"], [
      "https://x.com/notcodesid",
      "https://github.com/notcodesid",
      "notcodesid@gmail.com",
      "https://linkedin.com/in/sidharthh-pandro",
      "https://notcodesid.com/cv",
      "https://www.instagram.com/sid.ously/",
    ]),
  ];

  return [
    "",
    `${c.title}i'm sid${c.reset}`,
    "",
    sections.join("\n\n"),
    "",
    `${c.line}${"─".repeat(48)}${c.reset}`,
    `${c.muted}curl easter egg · open https://notcodesid.com in a browser${c.reset}`,
    "",
  ].join("\n");
}
