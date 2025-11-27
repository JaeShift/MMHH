import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, serviceBySlug } from '../../../../content/services';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = serviceBySlug(resolvedParams.slug);
  
  if (!service) {
    return {
      title: 'Service Not Found | Modern Mental Health & Hormones',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = serviceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation would go here */}
      
      <main className="container mx-auto px-6 lg:px-8 py-12">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/#services" 
            className="inline-flex items-center font-body text-lg font-medium text-[#3b4340] hover:text-[#6b8c4a] transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Title and Subtitle */}
          <header className="mb-12">
            <h1 className="font-heading italic text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6" style={{fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              {service.title}
            </h1>
            <p className="font-body text-xl md:text-2xl text-neutral-600 leading-relaxed">
              {service.subtitle}
            </p>
          </header>

          {/* Intro Paragraphs */}
          <section className="mb-12">
            {service.intro.map((paragraph, index) => (
              <p key={index} className="font-body text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </section>

          {/* What to Expect Section */}
          <section className="mb-12">
            <h2 className="font-heading italic text-2xl md:text-3xl font-semibold text-neutral-900 mb-6" style={{fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              What to Expect
            </h2>
            <ul className="font-body text-lg text-neutral-700 leading-relaxed list-disc list-inside space-y-3">
              {service.expect.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Treatment Approaches Section */}
          <section className="mb-12">
            <h2 className="font-heading italic text-2xl md:text-3xl font-semibold text-neutral-900 mb-6" style={{fontFamily: 'var(--font-serif)', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
              Treatment Approaches
            </h2>
            <ul className="font-body text-lg text-neutral-700 leading-relaxed list-disc list-inside space-y-3">
              {service.approaches.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Closing Paragraph */}
          <section className="mb-12">
            <p className="font-body text-lg md:text-xl text-neutral-700 leading-relaxed">
              {service.closing}
            </p>
          </section>

          {/* Call-to-Action Box */}
          <section className="bg-stone-50 rounded-lg p-8 md:p-12 border border-stone-200 shadow-sm">
            <div className="text-center">
              <h3 className="font-heading italic text-2xl md:text-3xl font-semibold text-neutral-900 mb-4" style={{fontFamily: 'var(--font-serif)'}}>
                Ready to Get Started?
              </h3>
              <p className="font-body text-lg text-neutral-700 leading-relaxed mb-8">
                Take the first step toward feeling like yourself again. Schedule your consultation today.
              </p>
              <a 
                href="mailto:appointments@modernmhh.com?subject=Appointment Request - {service.title}"
                className="inline-flex items-center justify-center bg-[#3b4340] text-white font-body font-semibold px-8 py-4 rounded-lg hover:bg-[#2a302d] transition-colors duration-200 text-lg"
              >
                Request Appointment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}