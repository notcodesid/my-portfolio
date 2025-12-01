export default function Thoughts() {
  const posts = [
    {
      title: "Your First Blog Post",
      date: "January 2025",
      description: "A brief description of your thoughts and ideas...",
      link: "#",
    },
    {
      title: "Another Interesting Topic",
      date: "December 2024",
      description: "More insights and reflections...",
      link: "#",
    },
  ];

  return (
    <main className="container">
      <div className="content">
        <h1 className="page-title">Thoughts</h1>
        <p className="page-description">My writings and blog posts.</p>

        <div className="posts-list">
          {posts.map((post, index) => (
            <article key={index} className="post-item">
              <h2 className="post-title">
                <a href={post.link}>{post.title}</a>
              </h2>
              <time className="post-date">{post.date}</time>
              <p className="post-description">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
