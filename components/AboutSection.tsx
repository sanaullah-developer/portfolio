export function AboutSection() {
  return (
    <section id="about" className="section-shell pt-20 md:pt-24">
      <div className="panel px-6 py-8 md:px-10 md:py-10">
        <h2 className="section-title">About</h2>
        <div className="mt-6 grid gap-5 text-base leading-relaxed text-textmuted md:grid-cols-2">
          <p>
            I am a Software Engineering student building a focused career in Computer Vision and Machine Learning.
            My projects are grounded in practical
            software engineering, with emphasis on reliability, testing, and
            maintainable architecture.
          </p>
          <p>
            My primary domain is Computer Vision. I work on model development,
            data-centric iteration, and production deployment pipelines. My goal
            is to design and deliver production-level AI systems that solve
            measurable business problems.
          </p>
        </div>
      </div>
    </section>
  );
}
