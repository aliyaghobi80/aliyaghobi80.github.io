'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e349b589e5e4bca8cba680633bf127bc",
".git/config": "b7e9b3084d46ecc2bab35e1713c89764",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ba782a93f3f5c044e0091d2fe680a2e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e55411e6594bcf9aad0eeeef13cba12c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "377c93421763ac7afba73515af23e7e0",
".git/logs/refs/heads/main": "92b6b109609d823329f82ff6f1b20f26",
".git/logs/refs/heads/master": "decff1cede565d33b8557b350ea15183",
".git/logs/refs/remotes/origin/main": "371bd6408127fbd97251d49fe5449e53",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1c/6a06cd73c08e48c893902c839108117f32aa78": "568b6e556dd3b75a1f70dbebcec5e1da",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/9c46408daa455343c93757177fb12310424fb8": "f312b581b1cb733ccfc6fbd700cf60a5",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3d/89ee87b821d0fa1923560ce65226f4137b4d35": "8f5a506afd2aa7de79fd54ade1ca18ec",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/2106a0cda429ff64728cef1a4b15b37ae46ef7": "0f6a667ae0590ea6f95b9120294ed025",
".git/objects/58/0e800ff281d3a56790ea6bb186ab823cb55b3f": "c2af47af13ce59d47e4354bb48d9dd9b",
".git/objects/5a/4f734de5a7c0df85a7ef7a77bfd37971320372": "d960c586ddceddb3e9afaf454f13b4bd",
".git/objects/68/67c12b81beccef84569e2480f537e1a7073682": "8136efb44f2b54ec3d46d0d447ea848f",
".git/objects/6c/50638851eb7671cbe375e82ce7a9a29f2cb543": "52db1b98730c49620cf8c045e904535b",
".git/objects/6d/e0e69f2232f4f1f8fcfe4b51688ccc93eb7e8c": "ed48526f480fe07506e2bd03f8e0b75c",
".git/objects/6e/e0ae50b68d7998d48d8ca4182d25bf3bb668b4": "875a8590d572aabae37b978deed2a755",
".git/objects/70/1f1ce91b84a518aba6ec9b40c5bc280ebb0e8f": "d243a656b3569a725102c289df7cb130",
".git/objects/72/f8f5a6c810e49bdfa12550cf4a813810b37739": "4afad34086e2495c4962f1a7bf74199b",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/851c8a4b7a187e6c89dcccf566f91dba344c24": "4abc84c558db7f09e9033b3e07759ca4",
".git/objects/81/eef1598c0369c59ed976db71f6ef5499fc2f3e": "136367b70cac902299e0abfcc222b66c",
".git/objects/88/9d4e4bfc04fc5b6a053a8a14b6f2858721c1da": "de9b074d75626ff4070d57d4cc41f4c4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/bd367aed05f319b2024e7894936ac2af2ae332": "7f8d89ea5e3b505d501c21a263652d0a",
".git/objects/92/c4f31469be64f9b4532897f71c2eb6cb902edb": "77f93d329cf3c7a22797b611c6da67a9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/9e649585f7a65a1c5259e32b727188e2617982": "b6d4d52201bf7973b8eace56faccc88d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/c8abbd2963e9d9680cbcd3d4a414a72a6e6898": "89f2855ba2f98edb90c660533fe826c3",
".git/objects/ad/7a8c60823a04a32444b592c04df6c41411f891": "269e7237192a7851e608dd6a4b03b974",
".git/objects/ad/fd3b1fa014bfba4b03e7b382d4e3010c394e2b": "4cda4b829ef74310469494bac87033c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/173c8380983517190baaf5cc37454256783ab2": "c01fed1e463b9911f87f5df40c1eac6e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/fa370d0225839d26b40d355a344f3be316bad0": "5dc2f3f5b7abd9143e0894aa8f47eb2e",
".git/objects/c8/dc2fb46d916cb2f0fc30b47d9d0f1c83e5da5f": "63e3d0e1cae27450362cfd4904230a1c",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/577a881c4077818e2bf6196675b9c2e468b97a": "11bfee4338249077379b1b4ae5f00dd9",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/32ece7fdf8dedb05c7d6417eb75a7e88cecddb": "554ef750c58d4dafdae82b066d2e44b5",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/36b9dcd3b86e49e409c88be7e95794bcda61e3": "3658da9088e3ac84b8b5087f1ba340e0",
".git/ORIG_HEAD": "e8baef7ad924f1e16e4dc70ae4aca3a7",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "fa0eff5a78c6baa753a66bb93c829f83",
".git/refs/heads/master": "e8baef7ad924f1e16e4dc70ae4aca3a7",
".git/refs/remotes/origin/main": "fa0eff5a78c6baa753a66bb93c829f83",
"assets/AssetManifest.json": "6f67c75f1942fbc19fa6fce008392fb1",
"assets/assets/images/1.jpg": "a0f2edba9cf8b5646eb49104e87ed508",
"assets/assets/images/2.jpg": "a36a56148fae9a6be1a61f7f63a403c6",
"assets/assets/images/3.jpg": "a3638639c10d7acad1744dd78610dc30",
"assets/assets/images/4.jpg": "024643a842335961e71b7fade85fbf3b",
"assets/assets/images/5.jpg": "9ae40b5d19daf6d73bc1cda1537d1b6a",
"assets/assets/images/background.jpg": "23255af6f348227f9d20ec2c1dedf5a1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0e7a3c6264f43a4c8f5551a746724b24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ecdc42329521946e1415f579a7f853e",
"/": "1ecdc42329521946e1415f579a7f853e",
"main.dart.js": "f8c8e152ccfc64ee140fc6dff720f7a2",
"manifest.json": "972a0d4cb6d66824222b75404570d9a7",
"version.json": "a5dff98cb7ebbd0dfb1c10aa204aef5f"
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
