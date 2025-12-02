export default function Things() {
  const ideas = [
    " [i will update this soon]"
  ];

  return (
    <main className="pb-16">
      <div className="text-base leading-relaxed">
        <h1 className="text-2xl font-semibold mb-2 text-foreground">
          things i want to work on
        </h1>
        <p className="text-muted mb-6">projects and ideas on my mind -</p>

        <div className="flex flex-col gap-2">
          {ideas.map((idea, index) => (
            <p key={index} className="text-muted">
              {idea}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
