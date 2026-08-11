const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "C++"],
  },
  {
    title: "Computer Vision",
    skills: ["YOLOv8", "OpenCV", "EasyOCR", "Object Detection", "Semantic Segmentation", "Image Classification"],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "TensorFlow", "Keras", "Transfer Learning", "Data Augmentation"],
  },
  {
    title: "ML Libraries",
    skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Deployment",
    skills: ["FastAPI", "Docker", "ONNX", "Gradio", "Hugging Face Spaces"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Roboflow", "Jupyter Notebook"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell pt-20 md:pt-24">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">
        Core technologies I use to build end-to-end CV and ML solutions, from
        model training to production deployment.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="panel p-5">
            <h3 className="font-heading text-lg font-semibold text-textmain">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tag">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}