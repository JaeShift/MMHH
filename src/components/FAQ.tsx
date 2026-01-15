export default function FAQ() {
    const faqs = [
      { q: "Do you accept insurance?", a: "Yes! I am now in-network with Cigna - Evernorth, United Healthcare / Optum, and Medical Mutual - Supermed. I also provide superbills for out-of-network reimbursement and accept HSA/FSA payments." },
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
  