'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "59056a5156bd27fadd7555211b5a78d2",
"assets/AssetManifest.bin.json": "c8ae5b369ff18f904ac83694d4533d11",
"assets/AssetManifest.json": "13c02d2920791507e3edb013018ea902",
"assets/assets/fonts/Lato/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato/Lato-BoldItalic.ttf": "acc03ac1e9162f0388c005177d55d762",
"assets/assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lato/Lato-Thin.ttf": "7ab0bc06eecc1b75f8708aba3d3b044a",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Black.ttf": "c3be51ba61c5c513480579312f8185b9",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Bold.ttf": "5d93d5284b27bb76db6210f8dc2f5867",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Light.ttf": "14e6f1dcc96e8e74270de2512edff286",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Regular.ttf": "b6d2fc04477566cc16047e2e3b65f6ff",
"assets/assets/fonts/NotoSansEthiopic/NotoSansEthiopic-Thin.ttf": "01e04c0f3626cc27053a76157da83660",
"assets/assets/icons/404.svg": "9db21ea7c8fe15417d7e74ba0ed5bbbb",
"assets/assets/icons/admin.svg": "f9beee5cfe1312a9c7fa9da8449b0afb",
"assets/assets/icons/application.svg": "f49054859d19fb695b75829caa2c4887",
"assets/assets/icons/balance.svg": "e014918e1e693cda51c24a5c712d93ae",
"assets/assets/icons/briefcase.svg": "05f996747cd3030a45e10febc7427de5",
"assets/assets/icons/calendar.svg": "f1393eb092e01aaa15a9d359295916c1",
"assets/assets/icons/company.svg": "aa0cc1c5cc6041a8e565b1a9b8801ec5",
"assets/assets/icons/dashboard.svg": "470661be77acf1b33f4e5593c886476f",
"assets/assets/icons/excel.svg": "906c67ccbe45b79ce97a716a6950338f",
"assets/assets/icons/hellopay.svg": "653bccd3accc341b3f7bdef90e998b66",
"assets/assets/icons/image-gallery.svg": "c6d6abf172f1e9e8828d8a170d701d2e",
"assets/assets/icons/logo.svg": "984e6373fbf6f7cec1b0e39f6e9860b9",
"assets/assets/icons/people.svg": "3b8f9fde8c62810ed4ff83d0cff5fb3a",
"assets/assets/icons/product.svg": "837f149bcb34ebcc2dee2ba8288e5a34",
"assets/assets/icons/service.svg": "6ab228e597a9fe92836c83bf86c8352e",
"assets/assets/icons/task.svg": "7c31bcdae405fc037973a9b456a773c3",
"assets/assets/icons/upload.svg": "348061c52b72663fb9f92660db301191",
"assets/assets/icons/user.svg": "50b0fe53d7f794f7bd7e047a1bf8ff7c",
"assets/assets/icons/wfp.svg": "6226bb43a31ea93846c7526433a6c9e6",
"assets/assets/images/app_icon.png": "385176a9b1358359c7ecfb6306f4d21f",
"assets/assets/images/icon.png": "53af7b1c5f6d2289c46d91041d2dadb8",
"assets/assets/images/logo.png": "ea29dc2758b97a3c9217eb791aef5aa0",
"assets/assets/images/no-image-available.png": "0e4a663eae8cbe389514e3fde18bf4da",
"assets/assets/images/splash.png": "cd42bbcf0a935ff9474425400246ddcb",
"assets/FontManifest.json": "d8d0dfcf5651f7f2a11dc7692bce2c1b",
"assets/fonts/MaterialIcons-Regular.otf": "8778dd36fb83251128d47f5b8b215941",
"assets/NOTICES": "0ce12a17dde4ff1d6c4c717e4f0a63a8",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6ff5e11e5adbb45927b346e84a850c23",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa8777fd846cf1ecf32a13f179e97ee7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "e57e1fa59ad942546fe5d55cf422edc4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "53ea03676979560fce42d51d53a4d6b3",
"icons/Icon-192.png": "e53574007f62cea7041b8518ea13dc62",
"icons/Icon-512.png": "cfb33314b8212a5b9ffd1d96d3c59628",
"icons/Icon-maskable-192.png": "e53574007f62cea7041b8518ea13dc62",
"icons/Icon-maskable-512.png": "cfb33314b8212a5b9ffd1d96d3c59628",
"index.html": "e08cdfda3b4e4af0d7e66adfd40a40cf",
"/": "e08cdfda3b4e4af0d7e66adfd40a40cf",
"main.dart.js": "fdbf152c2d1956323c8636e6c96c90da",
"manifest.json": "e27bfbea6c2359570b4b04b1fcd05c81",
"splash/img/dark-1x.png": "2b39089c6eaa09376989abd98057f867",
"splash/img/dark-2x.png": "cfb33314b8212a5b9ffd1d96d3c59628",
"splash/img/dark-3x.png": "3376dec4804aa69719284e46985c2095",
"splash/img/dark-4x.png": "48771bfa40c31eb4af7ef4ec48c44250",
"splash/img/light-1x.png": "2b39089c6eaa09376989abd98057f867",
"splash/img/light-2x.png": "cfb33314b8212a5b9ffd1d96d3c59628",
"splash/img/light-3x.png": "3376dec4804aa69719284e46985c2095",
"splash/img/light-4x.png": "48771bfa40c31eb4af7ef4ec48c44250",
"version.json": "704d0e47c3e94a998685facbd906cd10"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
