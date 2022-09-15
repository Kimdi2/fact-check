const CACHE_NAME = "fact-check-v2"; // 캐시제목 선언
const CACHE_FILE = [
  // 캐시할 파일 선언
  "./",
  "./index.html",
  "./manifest.json",
  "./img/ss.png",
  "./img/favicon-32x32.png",
  "./img/img1.png",
  "./img/question_mark.png",
  "./img/logo.png",
  "./img/action.png",
  "./img/pure.png",
  "./img/conflict.png",
  "./img/case_law.png",
  "./css/init.css",
  "./css/main.css",
  "./js/search.js",
  "./js/totopbutton.js",
  "./js/checkbox.js",
];

// 2.서비스워커를 설치하고 캐시를 저장함
self.addEventListener("install", (event) => {
  console.log("서비스워커 설치함!");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("파일을 캐시에 저장함!");
      return cache.addAll(CACHE_FILE);
    })
  );
});

// 3. 고유번호 할당받은 서비스 워커 동작 시작
self.addEventListener("activate", (event) => {
  console.log("서비스워커 동작 시작됨!");
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cacheName) {
          if (CACHE_NAME !== cacheName && cacheName.startsWith("fact-check")) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// 4.데이터 요청시 네트워크 또는 캐시에서 찾아 반환
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (!response) {
          console.log("네트워크에서 데이터 요청!", event.request);
          return fetch(event.request);
        }
        console.log("캐시에서 데이터 요청!", event.request);
        return response;
      })
      .catch((err) => console.log(err))
  );
});
