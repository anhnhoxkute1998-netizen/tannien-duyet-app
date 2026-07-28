// Ban: tnduyet-v1 — Tan Nien 2000 (khong dung Cache Storage, khong co cache de xoa)
// Service worker tối thiểu để trình duyệt cho cài app (không cache gì —
// trang duyệt luôn cần mạng, cache dễ gây hiện danh sách ticket cũ).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* để trình duyệt tự xử lý */ });
