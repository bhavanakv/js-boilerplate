/* eslint-disable no-unused-vars */

/* This file contains references to the vendor libraries
we're using in this project. This is used by Webpack in the
production build only. A separate bundle for vendor code is
useful since it's unlikely to change as often as the application
code. So all the libraries we reference will be written to
vendor.js so they can be cached until one of them changes.
This avoids users having to download a large JS file every
time a line of code changes. This file will only be downloaded
when a vendor library changes, which is less frequent. Any
files that aren't referenced here will be bundled into main.js
for the production build. */
import fetch from "whatwg-fetch";
