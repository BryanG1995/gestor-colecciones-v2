import { Prisma } from '@prisma/client';

export function excludeDeleted(): Prisma.Middleware {
  return async (params, next) => {
    // Aplica la lógica solo en consultas de tipo "find"
    if (['findUnique', 'findMany', 'findFirst'].includes(params.action)) {
      // Asegura que params.args esté definido
      params.args = params.args || {};
      params.args.where = params.args.where || {};

      // Filtra los registros eliminados (solo los que tengan deletedAt === null)
      params.args.where.deletedAt = null;
    }

    // Ejecuta la consulta de Prisma
    const result = await next(params);

    // Si la consulta devuelve un solo objeto o un array de objetos, eliminamos los campos sensibles
    if (Array.isArray(result)) {
      // Si es un array, eliminamos los campos 'password' y 'deletedAt' de cada objeto
      result.forEach(item => {
        // delete item.password;
        delete item.deletedAt;
      });
    } else if (result) {
      // Si es un solo objeto, eliminamos los campos directamente
      // delete result.password;
      delete result.deletedAt;
    }

    return result;
  };
}
