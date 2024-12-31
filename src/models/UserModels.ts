import { KycLevel } from "../types";

export interface IUser {
  id: string;
  quiverTag: string;
  email: string;
  lastSeen?: string;
  isActive?: boolean;
  referredBy?: string;
  numberOfReferrals: number;
  kycLevel: KycLevel;
}
