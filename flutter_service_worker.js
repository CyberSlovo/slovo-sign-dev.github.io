'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f334154b432376797ab2eaeabec85dfc",
"index.html": "1b2aa9fd555b23ad995b9b7dfe52a276",
"/": "1b2aa9fd555b23ad995b9b7dfe52a276",
"main.dart.js": "84023b6d887bc9c96e399efeef728b12",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "971a8bede48283c69c0470e5d287eef9",
"assets/AssetManifest.json": "fe13d24cc83f06a7151439c42b070b9f",
"assets/NOTICES": "acefc3c1c55ad445cf0ab8c20a0e7c02",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/Illustrations.svg": "eb416b0728270f78fdbb3219c370fb8d",
"assets/assets/images/doc%2520img.svg": "b0b6445dd8fa343ec19a028b22c9cc0e",
"assets/assets/images/sberpravo.png": "142c5d350a6b7a736e6ef4ff1e1a252e",
"assets/assets/icons/search.svg": "d9066090fea479155136ff009d378f11",
"assets/assets/icons/ic_waiting.svg": "9160fe0f2685d4e1c8f0931f1e764ec2",
"assets/assets/icons/ic_cross.svg": "4dde70eb7ffe93721ea6d8f00f9e5cff",
"assets/assets/icons/ic_info.svg": "c6a3bb3e7c92dee9af34ac27b7f570bb",
"assets/assets/icons/log_out.svg": "44998adfac3c17be1a1adc489fd7861b",
"assets/assets/icons/ic_folder.svg": "7ec45b22e9a346565f01cf029625980b",
"assets/assets/icons/user_btn.svg": "1f0bdfe6554072abb8219cc9e069f527",
"assets/assets/icons/inbox.svg": "989d5f49a7f18abb7b9f1c3ed110b42e",
"assets/assets/icons/ic_waiting_green_status.svg": "a44de836aba90e03cd54289b86ebeda6",
"assets/assets/icons/lock.svg": "bd8023e7aabc54b2928cb9c07d59ee08",
"assets/assets/icons/ic_user.svg": "98c85e8e2e0dde948ae2b61d5a6232ad",
"assets/assets/icons/edit_3.svg": "3c6b23ae6cc00f7202c021ab5eb7daaa",
"assets/assets/icons/ic_download_fill.svg": "461b6347d2c647e9fc8047addbf037de",
"assets/assets/icons/download.svg": "4950bf37899e0ba927928c32132e248a",
"assets/assets/icons/ic_notification.svg": "f4eaa33c8d4d5b5f5b056fde71cdd3b7",
"assets/assets/icons/ic_waiting_blue_status.svg": "9160fe0f2685d4e1c8f0931f1e764ec2",
"assets/assets/icons/bell.svg": "1586570567557e29e8be24f704bb9f38",
"assets/assets/icons/chevron_left.svg": "b5b64f4ecdc17ed79d66e3fd93c30f54",
"assets/assets/icons/ic_check_blue_status.svg": "b8b403f20cdbc019b465c3edfadc21f2",
"assets/assets/icons/check.svg": "93bf37f0124646b0755c26822381b33d",
"assets/assets/icons/ic_eye.svg": "c7e012a48c39a25350e1340abe68e601",
"assets/assets/icons/check_circle.svg": "0addd6a4f0cfcb7cbd72c2e9cdfedf12",
"assets/assets/icons/ic_menu_sign_out.svg": "8617608c55003275e9235c9508d6788e",
"assets/assets/icons/ic_waiting_grey_status.svg": "828cd680972113b23e85e8d8e92605e6",
"assets/assets/icons/trash_2.svg": "bbca26211f4772bb6c68da8d303f2fc4",
"assets/assets/icons/sber_znachek_green.svg": "a19437c8a92e9568acf7e70171c60ea1",
"assets/assets/icons/file_text.svg": "2598f78c99b0c462d2f7a0130481859e",
"assets/assets/icons/edit.svg": "ac1655cac9cdb34232467e62ab43268c",
"assets/assets/icons/ic_check_grey_status.svg": "a798bed86f941c9561dd093ae33a8d71",
"assets/assets/icons/eye.svg": "bee58854e1d5b9d150fbeae330c40ff8",
"assets/assets/icons/ic_popap_doc.svg": "c4b2762ddd6b859110a1e9e811132120",
"assets/assets/icons/vec_check.svg": "95d2428f7c323e6ac8f9f90ea085f7f5",
"assets/assets/icons/ic_delete_red_status.svg": "e5e512139c5d043c6cfd106def1698de",
"assets/assets/icons/log_in.svg": "b8bca00036f85a3ed12f8b3d3f314d9d",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
