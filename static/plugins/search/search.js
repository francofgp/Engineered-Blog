/* ============================================================
 * Search results page (vanilla — replaces the previous jQuery version)
 *
 * Loads the site's JSON index, runs Fuse.js fuzzy search against the
 * `s` query parameter, renders matching pages, and highlights matches
 * with mark.js (vanilla v8 — `new Mark(ctx).mark(keyword)`).
 *
 * `indexURL` is set inline by layouts/partials/footer.html.
 * Template lives in the inline <script id="search-result-template">
 * block inside layouts/search/list.html. The JSON index itself is built
 * from layouts/_default/index.json (Hugo's home `outputs` config emits
 * /index.json from there).
 *
 * Wrapped in an IIFE so summaryInclude/fuseOptions/searchQuery/etc don't
 * leak onto `window`. Reads two globals defined by other scripts (loaded
 * earlier in footer.html): `indexURL` (inline <script>), `Fuse` (fuse.min.js),
 * `Mark` (mark.js).
 * ============================================================ */
(function () {
  'use strict';

  var summaryInclude = 60;
  var fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    threshold: 0.0,
    tokenize: true,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      { name: "title",      weight: 0.8 },
      { name: "contents",   weight: 0.5 },
      { name: "tags",       weight: 0.3 },
      { name: "categories", weight: 0.3 }
    ]
  };

  var searchQuery = param("s");
  if (searchQuery) {
    var queryInput = document.getElementById("search-query");
    if (queryInput) queryInput.value = searchQuery;
    executeSearch(searchQuery);
  }

  function executeSearch(searchQuery) {
    fetch(indexURL)
      .then(function (response) { return response.json(); })
      .then(function (pages) {
        var fuse = new Fuse(pages, fuseOptions);
        var result = fuse.search(searchQuery);
        if (result.length > 0) {
          populateResults(result);
        } else {
          var resultsEl = document.getElementById("search-results");
          if (resultsEl) {
            resultsEl.insertAdjacentHTML(
              "beforeend",
              '<div class="text-center"><img class="img-fluid mb-5" src="https://user-images.githubusercontent.com/37659754/64060567-7cece400-cbf0-11e9-9cf9-abac3543ec1f.png"><h3>No Search Found</h3></div>'
            );
          }
        }
      })
      .catch(function (err) {
        console.error("Search index fetch failed:", err);
      });
  }

  function populateResults(result) {
    var resultsEl = document.getElementById("search-results");
    var templateEl = document.getElementById("search-result-template");
    if (!resultsEl || !templateEl) return;
    var templateDefinition = templateEl.innerHTML;

    result.forEach(function (value, key) {
      var contents = value.item.contents;
      var snippet = "";
      var snippetHighlights = [];

      if (fuseOptions.tokenize) {
        snippetHighlights.push(searchQuery);
      } else {
        value.matches.forEach(function (mvalue) {
          if (mvalue.key === "tags" || mvalue.key === "categories") {
            snippetHighlights.push(mvalue.value);
          } else if (mvalue.key === "contents") {
            var start = mvalue.indices[0][0] - summaryInclude > 0 ? mvalue.indices[0][0] - summaryInclude : 0;
            var end = mvalue.indices[0][1] + summaryInclude < contents.length ? mvalue.indices[0][1] + summaryInclude : contents.length;
            snippet += contents.substring(start, end);
            snippetHighlights.push(mvalue.value.substring(mvalue.indices[0][0], mvalue.indices[0][1] - mvalue.indices[0][0] + 1));
          }
        });
      }

      if (snippet.length < 1) {
        snippet += contents.substring(0, summaryInclude * 2);
      }

      // Render the result row from the template + append to the list.
      var output = render(templateDefinition, {
        key: key,
        title: value.item.title,
        link: value.item.permalink,
        tags: value.item.tags,
        categories: value.item.categories,
        snippet: snippet
      });
      resultsEl.insertAdjacentHTML("beforeend", output);

      // Highlight each match in the just-appended snippet (mark.js vanilla).
      var snippetEl = document.getElementById("summary-" + key);
      if (snippetEl && typeof Mark !== "undefined") {
        var mark = new Mark(snippetEl);
        snippetHighlights.forEach(function (snipvalue) { mark.mark(snipvalue); });
      }
    });
  }

  function param(name) {
    return decodeURIComponent((location.search.split(name + "=")[1] || "").split("&")[0]).replace(/\+/g, " ");
  }

  function render(templateString, data) {
    var conditionalMatches, conditionalPattern, copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    // The loop below depends on re.lastIndex; copy the string so we can mutate while iterating.
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
      if (data[conditionalMatches[1]]) {
        copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
      } else {
        copy = copy.replace(conditionalMatches[0], "");
      }
    }
    templateString = copy;
    // Simple ${key} substitution for the remaining placeholders.
    var key, find, re;
    for (key in data) {
      find = "\\$\\{\\s*" + key + "\\s*\\}";
      re = new RegExp(find, "g");
      templateString = templateString.replace(re, data[key]);
    }
    return templateString;
  }
})();
