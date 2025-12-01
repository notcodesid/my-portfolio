export default function Music() {
  const playlists = [
    {
      title: "Coding Vibes",
      description: "Music I listen to while coding",
      link: "#",
    },
    {
      title: "Focus Mix",
      description: "Deep work sessions soundtrack",
      link: "#",
    },
  ];

  return (
    <main className="container">
      <div className="content">
        <h1 className="page-title">Music</h1>
        <p className="page-description">
          Songs I'm listening to and playlists I've curated.
        </p>

        <div className="music-list">
          {playlists.map((playlist, index) => (
            <article key={index} className="music-item">
              <h2 className="music-title">
                <a href={playlist.link}>{playlist.title}</a>
              </h2>
              <p className="music-description">{playlist.description}</p>
            </article>
          ))}
        </div>

        <div className="spotify-embed">
          <p className="text-muted">
            Connect your Spotify playlists or favorite tracks here
          </p>
        </div>
      </div>
    </main>
  );
}
