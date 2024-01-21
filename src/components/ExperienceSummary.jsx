export const ExperienceSummary = ({ description }) => {
  return (
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Que harás</h2>
        <p className="text-xl">{description}</p>
      </section>
  );
};
