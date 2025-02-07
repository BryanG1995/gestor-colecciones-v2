import { Prisma } from '@prisma/client';

export function excludeDeleted(): Prisma.Middleware {
    return async (params, next) => {
        // Aplica la lógica solo en consultas de tipo "find"
        if (['findUnique', 'findMany', 'findFirst'].includes(params.action)) {
          // Asegurar que `params.args` esté definido
          params.args = params.args || {};
          params.args.where = params.args.where || {};
    
          // Filtra los registros eliminados
          params.args.where.deletedAt = null;
        }
    
        return next(params);
      };
    }
