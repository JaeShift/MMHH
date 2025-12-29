export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  intro: string[];
  expect: string[];
  approaches: string[];
  closing: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const serviceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const services: Service[] = [
  {
    slug: 'anxiety-depression',
    title: 'Anxiety & Depression Treatment',
    subtitle: 'Warm, evidence-based care for women in Ohio—telehealth statewide and in-person visits in Columbus',
    intro: [
      'Anxiety and depression can make everything feel harder—work, relationships, sleep, and even simple daily tasks. You deserve care that takes your symptoms seriously and treats you like a whole person, not a checklist.',
      'I provide thoughtful, evidence-based treatment for women across Ohio, with telehealth appointments statewide and in-person visits in Columbus. Together, we’ll clarify what’s driving your symptoms and build a plan that helps you feel steadier, clearer, and more like yourself again.'
    ],
    expect: [
      'Comprehensive evaluation of symptoms, history, and relevant hormone factors',
      'Collaborative treatment planning aligned with your goals and daily routine',
      'Clear education about options and what to expect at each step',
      'Regular follow-ups to monitor progress and refine your plan'
    ],
    approaches: [
      'Evidence-based medications for anxiety and depression with a "start low, go slow" approach when appropriate',
      'Attention to sleep, stress, and hormonal influences on mood and energy',
      'Practical lifestyle strategies to support recovery and resilience',
      'Coordination with therapy or other clinicians when helpful'
    ],
    faqs: [
      {
        question: 'Do you offer telehealth appointments across Ohio?',
        answer: 'Yes. Telehealth is available statewide in Ohio, and in-person visits are also available in Columbus.'
      },
      {
        question: 'What happens during the first appointment?',
        answer: 'We’ll review your symptoms, history, and goals, and talk through options so you understand what we’re doing and why. You’ll leave with a clear next step.'
      },
      {
        question: 'Do you prescribe medication for anxiety and depression?',
        answer: 'When appropriate, yes. We’ll discuss benefits, side effects, and your preferences, and use the safest effective approach.'
      },
      {
        question: 'Can hormones affect anxiety, depression, and brain fog?',
        answer: 'They can. Hormonal changes can influence mood, sleep, and focus. We’ll consider those patterns as part of your plan.'
      },
      {
        question: 'How often are follow-up visits?',
        answer: 'It depends on your needs and what we’re working on. We’ll decide together based on symptom severity, medication changes (if any), and your schedule.'
      },
      {
        question: 'Can you coordinate with my therapist or other providers?',
        answer: 'Yes—when helpful and with your consent, I’m happy to coordinate with your therapist, primary care, or OB/GYN so your care feels cohesive.'
      }
    ],
    closing: 'If you’re ready for support, you don’t have to do this alone. Appointments are available via telehealth anywhere in Ohio, plus in-person visits in Columbus.',
    seo: {
      title: 'Anxiety & Depression Treatment for Women in Ohio | Modern Mental Health & Hormones',
      description: 'Warm, evidence-based anxiety and depression treatment for women in Ohio. Telehealth statewide and in-person visits in Columbus.',
      keywords: ['anxiety treatment Ohio', 'depression treatment Ohio', 'women mental health Ohio', 'PMHNP Ohio', 'telehealth mental health Ohio', 'Columbus PMHNP']
    }
  },
  {
    slug: 'pmdd-cyclical-mood',
    title: 'PMDD & Hormone-Related Mood Changes',
    subtitle: 'Specialized treatment for severe cyclical mood symptoms that disrupt your life and relationships',
    intro: [
      'If your mood changes on a predictable monthly rhythm, there may be a hormonal pattern at the root. I provide focused care for PMDD and cyclical mood shifts to reduce symptom severity, improve daily functioning, and help you feel more in control throughout your cycle.'
    ],
    expect: [
      'Symptom tracking to clarify timing, triggers, and severity',
      'Review of medical history, medications, and hormone factors',
      'Education about PMDD vs. PMS and other look-alike conditions',
      'Ongoing follow-up to fine-tune treatment as your needs change'
    ],
    approaches: [
      'Targeted medication options for PMDD and related symptoms',
      'Hormone-informed strategies when appropriate, with shared decision-making',
      'Sleep, nutrition, and stress supports to soften cyclical spikes',
      'Collaboration with therapy or gynecology as needed'
    ],
    closing: 'Telehealth appointments available statewide in Ohio.',
    seo: {
      title: 'PMDD Treatment & Hormone-Related Mood Changes | Ohio Women\'s Health',
      description: 'Expert PMDD treatment and hormone-related mood disorder care. Specialized help for cyclical mood symptoms. Telehealth available across Ohio.',
      keywords: ['PMDD treatment', 'premenstrual dysphoric disorder', 'hormone mood changes', 'cyclical depression', 'PMS treatment', 'women hormone therapy']
    }
  },
  {
    slug: 'sleep-insomnia',
    title: 'Sleep & Insomnia Care',
    subtitle: 'Comprehensive sleep health solutions that address the root causes of midlife sleep disruption',
    intro: [
      'Poor sleep can cascade into low mood, brain fog, and reduced resilience. I evaluate the medical, behavioral, and hormone-related factors behind insomnia and build a plan that helps you sleep more consistently—and wake up with more energy.'
    ],
    expect: [
      'Review of sleep patterns, routines, medications, and contributing conditions',
      'Discussion of behavioral strategies and realistic changes you can keep',
      'Clear plan for when medications are appropriate—and when they aren\'t',
      'Follow-up to adjust timing, dosage, and techniques'
    ],
    approaches: [
      'Evidence-based behavioral sleep strategies tailored to your life',
      'Medication options for insomnia when appropriate, with careful monitoring',
      'Attention to hormone timing, vasomotor symptoms, and circadian rhythm',
      'Stress and lifestyle supports that protect sleep'
    ],
    closing: 'Telehealth available throughout Ohio.',
    seo: {
      title: 'Sleep & Insomnia Treatment for Women | Menopause Sleep Solutions Ohio',
      description: 'Expert sleep disorder treatment for women. Specialized care for menopause-related insomnia and sleep disruption. Telehealth available in Ohio.',
      keywords: ['insomnia treatment', 'menopause sleep problems', 'perimenopause insomnia', 'women sleep disorders', 'hormone sleep disruption', 'sleep medicine Ohio']
    }
  },
  {
    slug: 'adhd-focus-concerns',
    title: 'ADHD Evaluation & Focus Support',
    subtitle: 'Comprehensive ADHD assessment and treatment for women discovering attention challenges later in life',
    intro: [
      'If focus and follow-through feel like a daily battle, a thoughtful ADHD evaluation can clarify next steps. I provide adult ADHD assessment and medication support to improve attention, reduce overwhelm, and help you function better at work and at home.'
    ],
    expect: [
      'Structured history and symptom review with functional impact',
      'Screening for conditions that can mimic or worsen attention problems',
      'Clear discussion of medication and non-medication options',
      'Regular follow-ups to monitor benefits, side effects, and goals'
    ],
    approaches: [
      'FDA-approved stimulant and non-stimulant medications when appropriate',
      'Consideration of sleep, stress, and hormonal changes that affect attention',
      'Practical strategies for organization and task initiation',
      'Collaboration with therapy, coaching, or primary care as needed'
    ],
    closing: 'Available via telehealth across Ohio.',
    seo: {
      title: 'Adult ADHD Evaluation & Treatment for Women | Ohio ADHD Specialist',
      description: 'Expert ADHD evaluation and treatment for adult women. Specialized care for attention challenges and executive function. Telehealth available in Ohio.',
      keywords: ['adult ADHD', 'ADHD women', 'ADHD evaluation', 'attention deficit treatment', 'executive function', 'ADHD medication management']
    }
  },
  {
    slug: 'perimenopause-menopause',
    title: 'Perimenopause & Menopause Care',
    subtitle: 'Supportive menopause and perimenopause care for women in Ohio—telehealth statewide and in-person visits in Columbus',
    intro: [
      'Perimenopause and menopause can affect how you feel in your body and in your mind—sleep, mood, energy, focus, and confidence. If you feel dismissed or told “it’s just stress,” you’re not alone.',
      'As a NAMS-certified menopause practitioner, I provide evidence-based care to help you feel supported and informed. Telehealth is available statewide in Ohio, with in-person visits in Columbus.'
    ],
    expect: [
      'Review of symptom patterns, history, goals, and safety considerations',
      'Education on hormonal and non-hormonal options with realistic expectations',
      'Shared decision-making to choose an approach that fits your life',
      'Follow-ups to assess response and adjust dosing or strategy'
    ],
    approaches: [
      'Hormone therapy (HRT) when appropriate and safe, with careful titration',
      'Non-hormonal options for vasomotor, sleep, and mood symptoms',
      'Lifestyle strategies and supplement guidance supported by evidence',
      'Attention to mental health and cognitive changes during transition'
    ],
    faqs: [
      {
        question: 'How do I know if this is perimenopause?',
        answer: 'Perimenopause often includes changes in cycles plus symptoms like hot flashes, sleep disruption, mood changes, brain fog, and fatigue. We’ll review your pattern and history to clarify what fits.'
      },
      {
        question: 'Do you offer menopause care statewide in Ohio?',
        answer: 'Yes. Telehealth is available anywhere in Ohio, and in-person visits are available in Columbus.'
      },
      {
        question: 'Is hormone therapy (HRT) my only option?',
        answer: 'No. We can discuss hormonal and non-hormonal options, depending on your symptoms, preferences, and safety considerations.'
      },
      {
        question: 'Can menopause affect anxiety, depression, or sleep?',
        answer: 'Yes—hormonal shifts can affect sleep and mood. We’ll address both physical symptoms and mental well-being in your plan.'
      },
      {
        question: 'What should I bring to my visit?',
        answer: 'A list of current medications/supplements and a quick timeline of symptoms (what started when, and what makes it better or worse) is very helpful.'
      }
    ],
    closing: 'You don’t have to “push through” and hope it passes. Care is available via telehealth across Ohio, plus in-person visits in Columbus.',
    seo: {
      title: 'Perimenopause & Menopause Care in Ohio | NAMS-Certified Practitioner | Modern MHH',
      description: 'Supportive, evidence-based perimenopause and menopause care in Ohio. Telehealth statewide and in-person visits in Columbus.',
      keywords: ['menopause care Ohio', 'perimenopause Ohio', 'menopause specialist Ohio', 'NAMS certified menopause practitioner Ohio', 'hot flashes treatment Ohio', 'menopause anxiety Ohio']
    }
  },
  {
    slug: 'hormone-therapy-hrt',
    title: 'Individualized Hormone Therapy (HRT)',
    subtitle: 'Personalized hormone therapy for women in Ohio—telehealth statewide and in-person visits in Columbus',
    intro: [
      'Hormonal shifts can be confusing—and deeply felt. If you’re dealing with hot flashes, poor sleep, mood changes, brain fog, or feeling unlike yourself, you deserve clear answers and a plan that respects your body and your goals.',
      'I offer individualized hormone therapy options (when appropriate), alongside non-hormonal strategies. Telehealth is available statewide in Ohio, with in-person visits in Columbus.'
    ],
    expect: [
      'Thorough review of symptoms, history, preferences, and safety',
      'Discussion of candidacy, timing, and delivery methods',
      'Clear plan for monitoring and dose adjustments',
      'Ongoing follow-up to ensure benefits and minimize side effects'
    ],
    approaches: [
      'Estrogen, progesterone, or combination therapy when indicated',
      'Multiple delivery options with personalized dosing',
      'Non-hormonal alternatives when HRT isn\'t the best fit',
      'Coordination with your other providers when helpful'
    ],
    faqs: [
      {
        question: 'Do you offer hormone therapy (HRT) in Ohio?',
        answer: 'Yes. Telehealth is available statewide in Ohio, and in-person visits are available in Columbus.'
      },
      {
        question: 'How do you decide if HRT is a good fit for me?',
        answer: 'We’ll review your symptoms, medical history, goals, and safety considerations. If HRT isn’t a fit, we’ll discuss non-hormonal options.'
      },
      {
        question: 'What symptoms can HRT help with?',
        answer: 'Many people seek HRT for vasomotor symptoms (like hot flashes), sleep disruption, and quality-of-life concerns during perimenopause/menopause. We’ll focus on what’s most disruptive for you.'
      },
      {
        question: 'Do you offer bioidentical hormones?',
        answer: 'When appropriate, we can discuss options and what “bioidentical” means in practice, including benefits, limitations, and safety.'
      },
      {
        question: 'Do you offer non-hormonal options too?',
        answer: 'Yes. Depending on your symptoms and history, we can consider non-hormonal medications and supportive lifestyle strategies.'
      }
    ],
    closing: 'If you want a careful, personalized approach, I’m here to help. Appointments are available via telehealth across Ohio, plus in-person visits in Columbus.',
    seo: {
      title: 'Hormone Therapy (HRT) for Women in Ohio | Modern Mental Health & Hormones',
      description: 'Personalized hormone therapy (HRT) for women in Ohio. Telehealth statewide and in-person visits in Columbus.',
      keywords: ['hormone therapy Ohio', 'HRT Ohio', 'hormone replacement therapy Ohio', 'bioidentical hormones Ohio', 'menopause hormone therapy Ohio', 'Columbus hormone therapy']
    }
  },
  {
    slug: 'thyroid-related-concerns',
    title: 'Thyroid Health & Mood Connection',
    subtitle: 'Comprehensive thyroid evaluation and treatment addressing the vital link between thyroid function and mental wellness',
    intro: [
      'Thyroid disorders can affect mood, energy, sleep, and overall well-being. I evaluate thyroid function in the context of mental health and help align treatment so your plan supports both body and mind.'
    ],
    expect: [
      'Review of symptoms, labs, medications, and coexisting conditions',
      'Education on how thyroid levels relate to mood and energy',
      'Shared plan for optimizing treatment and setting clear goals',
      'Follow-up to assess response and adjust as needed'
    ],
    approaches: [
      'Thyroid function testing and antibody assessment when indicated',
      'Medication review and optimization with attention to interactions',
      'Goal-oriented thyroid hormone adjustment and monitoring',
      'Collaboration with endocrinology and primary care when needed'
    ],
    closing: 'Ohio-wide telehealth appointments available.',
    seo: {
      title: 'Thyroid Treatment & Mood Connection | Thyroid Specialist Ohio',
      description: 'Expert thyroid evaluation and treatment focusing on thyroid-mood connection. Comprehensive thyroid care for women. Telehealth available in Ohio.',
      keywords: ['thyroid treatment', 'thyroid mood connection', 'hypothyroid treatment', 'thyroid anxiety', 'thyroid depression', 'thyroid specialist']
    }
  },
  {
    slug: 'stress-management',
    title: 'Stress & Resilience Support',
    subtitle: 'Comprehensive stress management strategies that strengthen your ability to navigate life\'s challenges with greater ease',
    intro: [
      'Chronic stress takes a toll on both body and mind, and it often intensifies during life transitions. I provide strategies—and medication support when appropriate—to help you steady your nervous system and feel more like yourself.'
    ],
    expect: [
      'Conversation about stressors, sleep, coping patterns, and supports',
      'Practical plan you can use immediately, not a long to-do list',
      'Clear guidance on when medication can help and how I\'ll monitor it',
      'Regular follow-ups to adjust and build on what\'s working'
    ],
    approaches: [
      'Personalized coping tools and routines that fit your day',
      'Medication support when stress significantly affects mood or sleep',
      'Lifestyle changes that reduce stress load and improve recovery',
      'Referrals to therapy and community resources to expand support'
    ],
    closing: 'Telehealth services offered across Ohio.',
    seo: {
      title: 'Stress Management & Resilience Support | Mental Health Ohio',
      description: 'Expert stress management and resilience building for women. Comprehensive stress treatment and coping strategies. Telehealth available in Ohio.',
      keywords: ['stress management', 'resilience building', 'chronic stress treatment', 'stress anxiety', 'stress counseling', 'stress therapy Ohio']
    }
  },
  {
    slug: 'weight-metabolism',
    title: 'Weight Management & Metabolic Health',
    subtitle: 'Comprehensive metabolic health support that addresses the complex factors affecting weight and wellness in midlife',
    intro: [
      'Weight changes and slowed metabolism are common. I provide medical support tailored to your body\'s needs—aimed at metabolic health, energy, and sustainable results without quick-fix promises.'
    ],
    expect: [
      'Review of history, medications, hormones, sleep, and eating patterns',
      'Realistic goals that focus on health outcomes and how you feel',
      'Discussion of medication options when appropriate and safe',
      'Follow-up to monitor response and fine-tune your plan'
    ],
    approaches: [
      'Assessment of hormonal and metabolic contributors to weight change',
      'Review and optimization of medications that affect weight',
      'Evidence-based prescribing for metabolic health when appropriate',
      'Sustainable lifestyle strategies and coordination with nutrition support'
    ],
    closing: 'Telehealth appointments available statewide in Ohio.',
    seo: {
      title: 'Weight Management & Metabolic Health | Women\'s Health Ohio',
      description: 'Expert weight management and metabolic health support for women. Comprehensive approach to midlife weight changes. Telehealth available in Ohio.',
      keywords: ['weight management', 'metabolic health', 'menopause weight gain', 'hormone weight', 'weight loss medication', 'metabolism support']
    }
  }
];
