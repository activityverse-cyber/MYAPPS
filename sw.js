// هذا الملف ضروري لتحويل الموقع لتطبيق
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // مطلوب لكي يعمل التطبيق
});
