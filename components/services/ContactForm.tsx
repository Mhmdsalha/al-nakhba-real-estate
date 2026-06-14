type ContactFormProps = {
  title?: string;
  fields: string[];
  submit: string;
};

export function ContactForm({ title = "أرسل طلبك", fields, submit }: ContactFormProps) {
  return (
    <section className="section">
      <div className="container">
        <form className="form-card glass-dark">
          <div>
            <p className="eyebrow">نموذج تواصل</p>
            <h2 className="section-title">{title}</h2>
          </div>
          <div className="form-grid">
            {fields.map((field, index) => (
              <label className={`form-field ${index === fields.length - 1 ? "full" : ""}`} key={field}>
                <span>{field}</span>
                {index === fields.length - 1 ? <textarea placeholder={field} /> : <input placeholder={field} />}
              </label>
            ))}
          </div>
          <button className="button gold" type="submit">
            {submit}
          </button>
        </form>
      </div>
    </section>
  );
}
