export default function Thoughts() {
  const posts = [
    {
      title: "can you really code?",
      category: "thoughts on development skills",
      link: "/thoughts/code",
    },
    {
      title: "transition from cursor to vscode",
      category: "developer tools",
      link: "/thoughts/vscode",
    },
    {
      title: "my journal",
      category: "personal reflections",
      link: "/thoughts/my-journal",
    },
    {
      title: "a day of 20 years old",
      category: "reflections on youth",
      link: "/thoughts/day",
    },
    {
      title: "how to study 4 hours every day",
      category: "productivity tips",
      link: "/thoughts/study",
    },
    {
      title: "how to get hired - sam altman",
      category: "career advice",
      link: "/thoughts/hire",
    },
    {
      title: "generalists in the information age",
      category: "thoughts on career paths",
      link: "/thoughts/generalists",
    },
  ];

  return (
    <main className="pb-16">
      <div className="text-base leading-relaxed">
        <h1 className="text-xl font-semibold mb-2 text-foreground">thoughts</h1>
        <p className="text-muted mb-8">notes, rants, misc - unstructured, mostly unfiltered</p>

        <div className="flex flex-col gap-4">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              className="group block"
            >
              <span className="text-accent group-hover:underline transition-colors">
                {post.title}
              </span>
              <span className="text-muted text-sm ml-2">{post.category}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-muted/20">
          <h2 className="text-lg font-semibold mb-4 text-foreground">say hello</h2>
          <p className="text-muted">
            say hi on{" "}
            <a href="https://x.com/notcodesid" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              x.com
            </a>
            {" "}or email{" "}
            <a href="mailto:notcodesid@gmail.com" className="text-accent hover:underline">
              notcodesid@gmail.com
            </a>
            . i read every message :)
          </p>
        </div>
      </div>
    </main>
  );
}
