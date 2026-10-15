type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={["section-heading", light ? "section-heading--light" : ""].join(" ")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}