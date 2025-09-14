export default function FAQ() {
    const faqs = [
      { q: "Do you accept insurance?", a: "We provide superbills for out-of-network reimbursement and accept HSA/FSA. We’ll post updates about in-network plans as we onboard. Transparent self-pay pricing is available." },
      { q: "Are visits virtual or in person?", a: "We offer telehealth appointments across Ohio." },
      { q: "When are you accepting patients?", a: "We’re opening our schedule in mid-November. Join the waitlist to be notified first." },
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
  