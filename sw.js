self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    self.clients.claim().then(async () => {
      const registrations = await self.registration
        .getRegistrations?.();

      if (registrations) {
        for (const registration of registrations) {
          if (registration !== self.registration) {
            await registration.unregister();
          }
        }
      }
    })
  );
});