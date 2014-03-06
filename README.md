gmaps-requirejs-example
=======================

This repository was created as a response to Brice's question on my blog post about [loading Google Maps within a requirejs project](http://mattsurabian.github.io/requirejs-projects-and-asynchronously-loading-the-google-maps-api/).

It was ported from the [Google Maps Marker Clusterer example code](http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/examples/simple_example.html).

The main.js file defines the shims used to load the non-amd friendly `MarkerClusterer` file and necessary `data` file as well. It would be possible to wrap both of these files in `define()` blocks, but keeping them non-amd friendly allows this example to focus only on the loading of the custom app code's dependencies (which are also dependent on google maps) and not on wrapping non-amd code.

What we avoid using by this "bootstrap" pattern is specifying `MarkerClusterer` with Google Maps as a dependency in our require shim config. 

Because of how Google Maps is loaded, telling require about the dependecy only confuses the situation without actually insuring the dependency is met. Instead we load up the Google Maps base dependency higher in the call stack so by the time the custom app code executes the base level map dependcy has already been met.


