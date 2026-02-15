import { subscribeNewsletterSchema } from "../dtos/NewsletterSubscriberDto";
import { upsert } from "../repositories/NewsletterSubscriberRepository";

type SubscribeInput = {
  firstName?: string;
  email: string;
  source?: string;
};

async function execute(input: SubscribeInput) {
  try {
    const parsed = subscribeNewsletterSchema.parse(input);
    const subscriber = await upsert({
      firstName: parsed.firstName || undefined,
      email: parsed.email,
      source: parsed.source,
    });

    return { success: true, data: subscriber };
  } catch (error) {
    return { success: false, error: "Unable to subscribe to newsletter.", details: error };
  }
}

export { execute };
