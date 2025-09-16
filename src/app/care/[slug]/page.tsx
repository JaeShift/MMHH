import { notFound } from 'next/navigation';
import Link from 'next/link';

// Define the care services data
const careServices = {
  'anxiety-and-depression': {
    title: 'Anxiety and Depression',
    description: 'Diagnosis and medication management with structured follow-up.',
    content: `
      <h3>Comprehensive Mental Health Care</h3>
      <p>I provide thorough assessment and evidence-based treatment for anxiety and depression, particularly as they relate to hormonal changes in mid-life women.</p>
      
      <h4>What to Expect:</h4>
      <ul>
        <li>Detailed initial evaluation to understand your symptoms and history</li>
        <li>Collaborative treatment planning tailored to your goals</li>
        <li>Medication management when appropriate, with "start low, go slow" approach</li>
        <li>Regular follow-up to monitor progress and adjust treatment</li>
        <li>Integration with hormone evaluation when relevant</li>
      </ul>
      
      <h4>Treatment Approaches:</h4>
      <ul>
        <li>Evidence-based medications for anxiety and depression</li>
        <li>Consideration of hormonal influences on mood</li>
        <li>Lifestyle and stress management strategies</li>
        <li>Coordination with therapy providers when beneficial</li>
      </ul>
    `
  },
  'pmdd-and-cyclical-mood': {
    title: 'PMDD and Cyclical Mood',
    description: 'Targeted evaluation and treatment for severe premenstrual symptoms.',
    content: `
      <h3>Specialized Care for Premenstrual Dysphoric Disorder</h3>
      <p>PMDD is a severe form of PMS that significantly impacts daily functioning. I provide comprehensive evaluation and treatment for cyclical mood symptoms.</p>
      
      <h4>Assessment Includes:</h4>
      <ul>
        <li>Detailed symptom tracking and pattern recognition</li>
        <li>Hormone evaluation to understand cyclical changes</li>
        <li>Screening for other conditions that may worsen premenstrually</li>
        <li>Impact assessment on work, relationships, and daily life</li>
      </ul>
      
      <h4>Treatment Options:</h4>
      <ul>
        <li>Targeted medications for PMDD symptoms</li>
        <li>Hormonal interventions when appropriate</li>
        <li>Lifestyle modifications and supplement recommendations</li>
        <li>Stress management techniques</li>
      </ul>
    `
  },
  'sleep-and-insomnia': {
    title: 'Sleep and Insomnia',
    description: 'Assessment and treatment for mid-life sleep disruption.',
    content: `
      <h3>Comprehensive Sleep Health</h3>
      <p>Sleep disruption is common during perimenopause and menopause. I provide thorough evaluation and treatment for sleep disorders in mid-life women.</p>
      
      <h4>Common Sleep Issues:</h4>
      <ul>
        <li>Difficulty falling asleep or staying asleep</li>
        <li>Hot flashes disrupting sleep</li>
        <li>Early morning awakening</li>
        <li>Restless sleep and frequent waking</li>
      </ul>
      
      <h4>Treatment Approach:</h4>
      <ul>
        <li>Sleep hygiene education and optimization</li>
        <li>Hormone evaluation and treatment when appropriate</li>
        <li>Safe, effective sleep medications when needed</li>
        <li>Addressing underlying anxiety or depression</li>
        <li>Lifestyle modifications for better sleep</li>
      </ul>
    `
  },
  'adhd-and-focus-concerns': {
    title: 'ADHD and Focus Concerns',
    description: 'Evaluation, prescribing when appropriate, and monitoring.',
    content: `
      <h3>Adult ADHD Assessment and Treatment</h3>
      <p>Many women discover ADHD later in life, sometimes when their children are diagnosed, or when hormonal changes affect focus and attention.</p>
      
      <h4>Comprehensive Evaluation:</h4>
      <ul>
        <li>Detailed history of attention and focus symptoms</li>
        <li>Assessment of how symptoms impact daily life</li>
        <li>Screening for other conditions that affect concentration</li>
        <li>Consideration of hormonal influences on attention</li>
      </ul>
      
      <h4>Treatment Options:</h4>
      <ul>
        <li>FDA-approved ADHD medications when appropriate</li>
        <li>Non-stimulant alternatives</li>
        <li>Organizational strategies and tools</li>
        <li>Lifestyle modifications to support focus</li>
        <li>Regular monitoring and adjustment of treatment</li>
      </ul>
    `
  },
  'perimenopause-and-menopause': {
    title: 'Perimenopause and Menopause',
    description: 'Treatment for hot flashes, mood changes, sleep issues, and more.',
    content: `
      <h3>Comprehensive Menopause Care</h3>
      <p>As a NAMS-certified menopause practitioner, I provide evidence-based care for all aspects of the menopause transition.</p>
      
      <h4>Common Symptoms We Address:</h4>
      <ul>
        <li>Hot flashes and night sweats</li>
        <li>Mood changes and irritability</li>
        <li>Sleep disruption</li>
        <li>Brain fog and memory concerns</li>
        <li>Changes in energy and motivation</li>
        <li>Physical symptoms like joint aches</li>
      </ul>
      
      <h4>Treatment Approaches:</h4>
      <ul>
        <li>Hormone therapy (HRT) when appropriate and safe</li>
        <li>Non-hormonal medications for symptom relief</li>
        <li>Lifestyle modifications and supplements</li>
        <li>Individualized treatment plans based on your goals</li>
      </ul>
    `
  },
  'hormone-therapy-hrt': {
    title: 'Hormone Therapy (HRT)',
    description: 'Individualized hormonal and non-hormonal options with ongoing monitoring.',
    content: `
      <h3>Evidence-Based Hormone Therapy</h3>
      <p>I provide individualized hormone therapy based on the latest research and your personal health profile and preferences.</p>
      
      <h4>Comprehensive Approach:</h4>
      <ul>
        <li>Thorough evaluation of symptoms and health history</li>
        <li>Discussion of benefits and risks specific to you</li>
        <li>Multiple delivery methods available</li>
        <li>Regular monitoring and adjustment</li>
        <li>Coordination with other healthcare providers</li>
      </ul>
      
      <h4>Treatment Options:</h4>
      <ul>
        <li>Bioidentical and traditional hormone preparations</li>
        <li>Oral, transdermal, and other delivery methods</li>
        <li>Customized dosing based on your response</li>
        <li>Non-hormonal alternatives when HRT isn't suitable</li>
      </ul>
    `
  },
  'thyroid-and-related-concerns': {
    title: 'Thyroid and Related Concerns',
    description: 'Evaluation of thyroid contributions to mood, energy, and sleep.',
    content: `
      <h3>Thyroid Health and Mental Wellness</h3>
      <p>Thyroid disorders are common in mid-life women and can significantly impact mood, energy, and overall well-being.</p>
      
      <h4>Comprehensive Thyroid Evaluation:</h4>
      <ul>
        <li>Complete thyroid function testing</li>
        <li>Assessment of thyroid antibodies when indicated</li>
        <li>Evaluation of how thyroid function affects mood and energy</li>
        <li>Coordination with endocrinologists when needed</li>
      </ul>
      
      <h4>Treatment Approach:</h4>
      <ul>
        <li>Optimization of thyroid hormone levels</li>
        <li>Addressing thyroid-related mood symptoms</li>
        <li>Monitoring for interactions with other medications</li>
        <li>Lifestyle recommendations to support thyroid health</li>
      </ul>
    `
  },
  'stress-management': {
    title: 'Stress Management',
    description: 'Comprehensive approaches to managing work, family, and life stressors.',
    content: `
      <h3>Holistic Stress Management</h3>
      <p>Chronic stress can significantly impact physical and mental health, especially during life transitions. I provide comprehensive approaches to stress management.</p>
      
      <h4>Areas of Focus:</h4>
      <ul>
        <li>Work-life balance and boundary setting</li>
        <li>Family and relationship stressors</li>
        <li>Financial and life transition stress</li>
        <li>Caregiving responsibilities</li>
      </ul>
      
      <h4>Treatment Strategies:</h4>
      <ul>
        <li>Stress reduction techniques and coping strategies</li>
        <li>Medication support when stress affects sleep or mood</li>
        <li>Lifestyle modifications to reduce stress impact</li>
        <li>Referrals to therapy and support resources</li>
        <li>Mind-body approaches and relaxation techniques</li>
      </ul>
    `
  },
  'weight-and-metabolism': {
    title: 'Weight and Metabolism',
    description: 'Support for metabolic health and sustainable weight management strategies.',
    content: `
      <h3>Metabolic Health in Mid-Life</h3>
      <p>Hormonal changes during perimenopause and menopause can affect metabolism and weight. I provide comprehensive support for metabolic health.</p>
      
      <h4>Comprehensive Assessment:</h4>
      <ul>
        <li>Evaluation of hormonal influences on weight</li>
        <li>Assessment of metabolic health markers</li>
        <li>Review of medications that may affect weight</li>
        <li>Lifestyle and dietary pattern evaluation</li>
      </ul>
      
      <h4>Treatment Approach:</h4>
      <ul>
        <li>Hormone optimization when appropriate</li>
        <li>Medication management for metabolic health</li>
        <li>Sustainable lifestyle modifications</li>
        <li>Coordination with nutritionists and other specialists</li>
        <li>Focus on overall health rather than just weight loss</li>
      </ul>
    `
  }
};

export default async function CarePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = careServices[slug as keyof typeof careServices];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <div className="mb-8">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-[#3b4340] hover:text-[#596163] font-medium transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Services
            </Link>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {service.description}
            </p>
            <div className="w-24 h-1 bg-[#3b4340] mt-6 rounded-full"></div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* Call to action */}
          <div className="mt-16 p-8 bg-slate-50 rounded-lg border border-slate-200">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-neutral-600 mb-6">
              I&apos;ll confirm benefits and share any out-of-pocket costs before your visit.
            </p>
            <a 
              href="mailto:info@modernmhh.com"
              className="inline-flex items-center bg-[#596163] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#3b4340] transition-colors duration-300"
            >
              Request Appointment via Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all care services
export function generateStaticParams() {
  return Object.keys(careServices).map((slug) => ({
    slug,
  }));
}
