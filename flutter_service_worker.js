'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f334154b432376797ab2eaeabec85dfc",
"index.html": "1905d24fdf273d6edae8ad9396c027a5",
"/": "1905d24fdf273d6edae8ad9396c027a5",
"main.dart.js": "c430680338095005f9ef05368cee8266",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "971a8bede48283c69c0470e5d287eef9",
"assets/AssetManifest.json": "c0533e345b0e844c71c1eed2c8b00e7f",
"assets/NOTICES": "89771c4e999f57ed14ac2ef9916c0a92",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_signin_button/assets/logos/google_dark.png": "c32e2778b1d6552b7b4055e49407036f",
"assets/packages/flutter_signin_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_dark.png": "937022ea241c167c8ce463d2ef7ed105",
"assets/packages/flutter_signin_button/assets/logos/2.0x/google_light.png": "8f10eb93525f0c0259c5e97271796b3c",
"assets/packages/flutter_signin_button/assets/logos/2.0x/facebook_new.png": "83bf0093719b2db2b16e2839aee1069f",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_dark.png": "ac553491f0002941159b405c2d37e8c6",
"assets/packages/flutter_signin_button/assets/logos/3.0x/google_light.png": "fe46d37e7d6a16ecd15d5908a795b4ee",
"assets/packages/flutter_signin_button/assets/logos/3.0x/facebook_new.png": "12531aa3541312b7e5ddd41223fc60cb",
"assets/packages/flutter_signin_button/assets/logos/facebook_new.png": "e1dff5c319a9d7898aee817f624336e3",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/Illustrations.svg": "eb416b0728270f78fdbb3219c370fb8d",
"assets/assets/images/signature_released_image.svg": "8e61f84ba99bba9a36080a1c38b9ac6c",
"assets/assets/images/doc%2520img.svg": "b0b6445dd8fa343ec19a028b22c9cc0e",
"assets/assets/images/sberpravo.png": "142c5d350a6b7a736e6ef4ff1e1a252e",
"assets/assets/images/sber_sdelki.svg": "cc23aa2dbd8f489fd3136099c9ac83ad",
"assets/assets/images/failed_verification.svg": "817e6d24e8fb7102e995827e36e15d08",
"assets/assets/images/logo.png": "babf26c93931d8d0cfee12c1ce9aea4f",
"assets/assets/images/data_validation_image.svg": "d24f5563526cb3816858ce113d005097",
"assets/assets/images/img_sm.png": "30706fc9f84f3f4b90dc05f6c5150018",
"assets/assets/images/logo.svg": "fcb8701f02bdacbd5578bd3b744ce97b",
"assets/assets/icons/search.svg": "d9066090fea479155136ff009d378f11",
"assets/assets/icons/ic_doc.svg": "807481cd695e843f25cb382554d7c782",
"assets/assets/icons/ic_waiting.svg": "9160fe0f2685d4e1c8f0931f1e764ec2",
"assets/assets/icons/ic_cross.svg": "4dde70eb7ffe93721ea6d8f00f9e5cff",
"assets/assets/icons/ic_delete.svg": "f5934f32eece5501c53184488f4b2554",
"assets/assets/icons/ic_info.svg": "626dc136f4d475c33de1b34b5813c0d1",
"assets/assets/icons/log_out.svg": "44998adfac3c17be1a1adc489fd7861b",
"assets/assets/icons/ic_folder.svg": "7ec45b22e9a346565f01cf029625980b",
"assets/assets/icons/user_btn.svg": "1f0bdfe6554072abb8219cc9e069f527",
"assets/assets/icons/inbox.svg": "989d5f49a7f18abb7b9f1c3ed110b42e",
"assets/assets/icons/ic_not_signed.svg": "0405e49653f602ca4b18ec51bf24667b",
"assets/assets/icons/ic_camera.svg": "ace91f41648e1c66aae7dba4aeb9c813",
"assets/assets/icons/lock.svg": "bd8023e7aabc54b2928cb9c07d59ee08",
"assets/assets/icons/ic_user.svg": "98c85e8e2e0dde948ae2b61d5a6232ad",
"assets/assets/icons/edit_3.svg": "3c6b23ae6cc00f7202c021ab5eb7daaa",
"assets/assets/icons/ic_signification.svg": "3b01d96c26e330b8b4155f46df9703df",
"assets/assets/icons/ic_download_fill.svg": "461b6347d2c647e9fc8047addbf037de",
"assets/assets/icons/ic_document_downloaded.svg": "c0251bbfa6a31898aed6f28dd6dbf394",
"assets/assets/icons/download.svg": "4950bf37899e0ba927928c32132e248a",
"assets/assets/icons/ic_notification.svg": "f30017d7756d9ecd510a08212889f225",
"assets/assets/icons/ic_calendar.svg": "ca7b505b47efa52ad07d96ab69a8482d",
"assets/assets/icons/bell.svg": "1586570567557e29e8be24f704bb9f38",
"assets/assets/icons/ic_signed_by_all.svg": "bd6f8ad70705d7c4c05c91e56f0d1bbc",
"assets/assets/icons/chevron_left.svg": "b5b64f4ecdc17ed79d66e3fd93c30f54",
"assets/assets/icons/check.svg": "93bf37f0124646b0755c26822381b33d",
"assets/assets/icons/ic_sber_id.svg": "7421acf5e82bd1eedb12e1c9ce578afd",
"assets/assets/icons/ic_eye.svg": "c7e012a48c39a25350e1340abe68e601",
"assets/assets/icons/ic_empty_wallet.svg": "3e09e23440e867573f82db99cb74ee57",
"assets/assets/icons/check_circle.svg": "0addd6a4f0cfcb7cbd72c2e9cdfedf12",
"assets/assets/icons/ic_import.svg": "a086f03c3ce7aa2ede061994076377a7",
"assets/assets/icons/ic_menu_sign_out.svg": "8617608c55003275e9235c9508d6788e",
"assets/assets/icons/ic_passport.svg": "eb58f7edff8f95af86afeed0376e2c84",
"assets/assets/icons/ic_sort.svg": "6f7546ae178b2a321b15f804e4ddbf60",
"assets/assets/icons/trash_2.svg": "bbca26211f4772bb6c68da8d303f2fc4",
"assets/assets/icons/sber_znachek_green.svg": "a19437c8a92e9568acf7e70171c60ea1",
"assets/assets/icons/ic_left.svg": "866bcbcdfeaa22a9b3dfb27cd1414229",
"assets/assets/icons/ic_handbook.svg": "03880fd5a2edcd42086583b183027eea",
"assets/assets/icons/ic_signed_by_me.svg": "1d952401a3f4538688e64e143b4499d6",
"assets/assets/icons/file_text.svg": "2598f78c99b0c462d2f7a0130481859e",
"assets/assets/icons/ic_signed_by_me_and_sent.svg": "3594776f4a53d17d5ffb51d91a4d39f4",
"assets/assets/icons/edit.svg": "ac1655cac9cdb34232467e62ab43268c",
"assets/assets/icons/ic_more_vertical.svg": "76d3edf4125ab8b9941e2be5500c4b3b",
"assets/assets/icons/eye.svg": "bee58854e1d5b9d150fbeae330c40ff8",
"assets/assets/icons/ic_download.svg": "dd94982596ae665dbc57b80e73fc497e",
"assets/assets/icons/ic_chevron_right.svg": "70438dfda19cd00824e2f740af7364d1",
"assets/assets/icons/ic_chevron.svg": "cf150a1e7706fe702917c284a40aeb23",
"assets/assets/icons/ic_medal_star.svg": "e2ab77f5a02fc7e148ef1ecd3cce9a1e",
"assets/assets/icons/ic_popap_doc.svg": "c4b2762ddd6b859110a1e9e811132120",
"assets/assets/icons/vec_check.svg": "95d2428f7c323e6ac8f9f90ea085f7f5",
"assets/assets/icons/ic_persona.svg": "977f29e007e961ce2d966ced3c1be7dd",
"assets/assets/icons/ic_signed_by_me_and_sent_and_received.svg": "222fa8e96070c1f967ba6b4994cd0eee",
"assets/assets/icons/ic_edit.svg": "895c9799ae0f66f6373205a942ea1b8b",
"assets/assets/icons/ic_delete_red_status.svg": "e5e512139c5d043c6cfd106def1698de",
"assets/assets/icons/log_in.svg": "b8bca00036f85a3ed12f8b3d3f314d9d",
"assets/assets/icons/ic_waiting_for_my_signing.svg": "6c867838420af9a65d71f0cc3aff7bf0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
