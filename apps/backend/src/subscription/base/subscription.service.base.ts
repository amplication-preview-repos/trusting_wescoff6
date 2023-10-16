/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Subscription } from "@prisma/client";

export class SubscriptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SubscriptionCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionCountArgs>
  ): Promise<number> {
    return this.prisma.subscription.count(args);
  }

  async findMany<T extends Prisma.SubscriptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionFindManyArgs>
  ): Promise<Subscription[]> {
    return this.prisma.subscription.findMany(args);
  }
  async findOne<T extends Prisma.SubscriptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionFindUniqueArgs>
  ): Promise<Subscription | null> {
    return this.prisma.subscription.findUnique(args);
  }
  async create<T extends Prisma.SubscriptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionCreateArgs>
  ): Promise<Subscription> {
    return this.prisma.subscription.create<T>(args);
  }
  async update<T extends Prisma.SubscriptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionUpdateArgs>
  ): Promise<Subscription> {
    return this.prisma.subscription.update<T>(args);
  }
  async delete<T extends Prisma.SubscriptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SubscriptionDeleteArgs>
  ): Promise<Subscription> {
    return this.prisma.subscription.delete(args);
  }
}
