import { Exclude, Expose } from 'class-transformer';

export abstract class BaseEntity {
  id: bigint;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  deletedAt: Date | null;


}
