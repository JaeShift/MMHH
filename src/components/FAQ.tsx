export default function FAQ() {
    const faqs = [
      { q: "Do you accept insurance?", a: "I provide superbills for reimbursement and accept HSA/FSA. I'll post updates about in-network plans as I onboard. Transparent self-pay pricing is available." },
      { q: "Are visits virtual or in person?", a: "I offer both virtual and in-person appointments. In-person visits are available in Columbus, and telehealth is available throughout Ohio, including Cleveland, Cincinnati, Toledo, Akron, and Dayton." },
      { q: "When are you accepting patients?", a: "I'm opening my schedule in mid-November. Join the waitlist to be notified first." },
      { q: "What conditions do you treat?", a: "Anxiety, depression, ADHD, PMDD, perimenopause symptoms, sleep issues, and more—using medication, psychotherapy-informed strategies, and lifestyle care." }
    ];
    return (
      <section id="faq" className="section">
        <div className="container">
          <h2 className="font-serif text-3xl mb-6">Frequently asked questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <div key={i} className="card p-5">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="text-neutral-700 mt-2">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  