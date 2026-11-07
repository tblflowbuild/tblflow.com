---
title: "Cuentas de servicio y tokens de servicio por espacio"
date: 2026-11-07
translationKey: "service-accounts"
type: "feature"
---

Los scripts, la CI y las integraciones ya no necesitan tomar prestada la cuenta de una persona.

- **Dónde**: ajustes del espacio, Seguridad y auditoría, Cuentas de servicio. Reservado a los propietarios del espacio.
- **Roles**: lector, editor o creador. Una cuenta de servicio no ocupa ninguna plaza.
- **Tokens**: válidos solo para este espacio, con un acceso a elegir (solo lectura, lectura y escritura de registros, o todo lo que permite el rol) y una duración de 30, 90, 180 o 365 días. El token solo se muestra una vez; su revocación es inmediata.
- **Seguimiento**: se muestra el último uso, se avisa por correo a los propietarios antes de la caducidad, y la creación y la revocación quedan anotadas en el registro del espacio.

Es la forma recomendada de usar la [CLI de TblFlow](/es/docs/cli) en integración continua.
