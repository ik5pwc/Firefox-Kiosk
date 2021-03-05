
// ------------ DISABLE ALL Firefox online services -------------------

// Do not update extension
pref("extensions.update.enabled", false);


// Default to no suggestions in the urlbar. This still brings a panel asking
// the user whether they want to opt-in on first use.
pref("browser.urlbar.suggest.searches", false);

// Disable first run TAB (i.e. the one pointing to firefx web site)
pref("toolkit.telemetry.reportingpolicy.firstRun", false);

// Reuse same tab
pref("browser.link.open_newwindow",1);

// Disable multi processes
pref("browser.tabs.remote.autostart",false);
pref("dom.ipc.processCount",1);


// Disable detect portal
// https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections
pref("network.captive-portal-service.enabled", false);
pref("extensions.blocklist.enabled",false);
pref("browser.safebrowsing.downloads.remote.enabled",false);
pref("network.prefetch-next",false);
pref("network.dns.disablePrefetch",true);
pref("network.http.speculative-parallel-limit",0);

pref("dom.push.connection.enabled", false);
pref("geo.provider.network.url", "");
pref("browser.region.network.url", "");

// Allow users to ignore Safe Browsing warnings.
pref("browser.safebrowsing.allowOverride", true);

// Download protection
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.timeout_ms", 1);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.downloads.remote.block_dangerous",false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host",false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

pref("browser.safebrowsing.provider.google.updateURL", "");
pref("browser.safebrowsing.provider.google.gethashURL", "");
pref("browser.safebrowsing.provider.google.reportURL", "");
pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google.advisoryURL", "");

// Google Safe Browsing provider
pref("browser.safebrowsing.provider.google4.updateURL", "");
pref("browser.safebrowsing.provider.google4.gethashURL", "");
pref("browser.safebrowsing.provider.google4.reportURL", "");
pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
pref("browser.safebrowsing.provider.google4.advisoryURL", "");
pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
pref("browser.safebrowsing.reportPhishURL", "");

// Mozilla Safe Browsing provider (for tracking protection and plugin blocking)
pref("browser.safebrowsing.provider.mozilla.updateURL", "");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
pref("browser.safebrowsing.provider.mozilla.lists.content", "moz-full");

pref("media.gmp-manager.url", "");
pref("datareporting.policy.dataSubmissionEnabled", false);
