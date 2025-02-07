import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { excludeDeleted } from 'src/common/middleware/excludeDeleted';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    this.$use(excludeDeleted());
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}
