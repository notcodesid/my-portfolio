export default function Music() {
  const playlists = [
    {
      title: "",
      description: "[i will update this soon]",
      link: "#",
    },
    {
      title: "",
      description: "",
      link: "#",
    },
  ];

  return (
    <main className="pb-16">
      <div className="text-base leading-relaxed">
        <h1 className="text-2xl font-semibold mb-2 text-foreground">anime/music</h1>
        <p className="text-muted mb-8">
          anime i'm watching and playlists i've curated
        </p>

        <div className="flex flex-col gap-4">
          {playlists.map((playlist, index) => (
            <div key={index}>
              <a
                href={playlist.link}
                className="text-accent hover:underline transition-colors"
              >
                {playlist.title}
              </a>
              <p className="text-muted text-sm">
                {playlist.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
