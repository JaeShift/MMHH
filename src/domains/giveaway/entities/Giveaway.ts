type Giveaway = {
  id: string;
  title: string;
  description: string | null;
  slug: string;
  isActive: boolean;
  adminId: string;
  winnerEntryId: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type { Giveaway };
