import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

// Extraemos los nombres de los modelos de Prisma como tipo válido
type ModelNames = keyof Omit<PrismaService, `$${string}`>;

export async function findEntityOrFail<T>(
  prisma: PrismaService,
  model: ModelNames, // Asegura que el modelo sea un nombre válido de Prisma
  id: number,
): Promise<T> {
  const entity = await (prisma[model] as any).findUnique({ where: { id } });

  if (!entity) {
    throw new NotFoundException(`El registro con la ID ${id} no se ha encontrado en ${String(model)}`);
  }

  return entity;
}
