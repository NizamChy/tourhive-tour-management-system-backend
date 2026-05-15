
```
Backend-TourHive-Tour-Management-System
├─ eslint.config.mjs
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app
│  │  ├─ config
│  │  │  ├─ env.ts
│  │  │  └─ passport.ts
│  │  ├─ errorHelpers
│  │  │  └─ AppError.ts
│  │  ├─ interfaces
│  │  │  └─ index.d.ts
│  │  ├─ middlewares
│  │  │  ├─ checkAuth.ts
│  │  │  ├─ globalErrorHandler.ts
│  │  │  ├─ notFound.ts
│  │  │  └─ validateRequest.ts
│  │  ├─ modules
│  │  │  ├─ auth
│  │  │  │  ├─ auth.controller.ts
│  │  │  │  ├─ auth.route.ts
│  │  │  │  └─ auth.service.ts
│  │  │  ├─ tour
│  │  │  │  ├─ tour.controller.ts
│  │  │  │  ├─ tour.interface.ts
│  │  │  │  └─ tour.model.ts
│  │  │  └─ user
│  │  │     ├─ user.controller.ts
│  │  │     ├─ user.interface.ts
│  │  │     ├─ user.model.ts
│  │  │     ├─ user.route.ts
│  │  │     ├─ user.service.ts
│  │  │     └─ user.validation.ts
│  │  ├─ routes
│  │  │  └─ index.ts
│  │  └─ utils
│  │     ├─ catchAsync.ts
│  │     ├─ jwt.ts
│  │     ├─ seedSuperAdmin.ts
│  │     ├─ sendResponse.ts
│  │     ├─ setCookie.ts
│  │     └─ userTokens.ts
│  ├─ app.ts
│  └─ server.ts
└─ tsconfig.json

```