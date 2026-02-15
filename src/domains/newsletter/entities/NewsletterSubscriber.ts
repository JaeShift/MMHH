type NewsletterSubscriber = {
  id: string;
  firstName: string | null;
  email: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
};

export type { NewsletterSubscriber };
