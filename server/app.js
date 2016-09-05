"use strict";
const path = require("path");
const fs = require("fs");
const request = require("request");
const l = require("lodash");
const hfstospell = require("hfst-ospell-js");

const H = require('./helpers');

// - - -

const langDirectory = path.resolve(process.cwd(), "etc");

const languages = require("./definitions/langs.json");
const langFiles = fs.readdirSync(langDirectory)
  .filter((filename) => path.extname(filename) === ".zhfst")
  .map((filename) => path.basename(filename, ".zhfst"));

const availableLanguages = langFiles.reduce((result, lang) => {
  if (languages[lang]) {
    result[lang] = languages[lang];
  }
  return result;
}, {});

const spellcheckers = langFiles.reduce((result, lang) => {
  const dictionaryFile = path.join(langDirectory, lang + ".zhfst");
  result[lang] = new hfstospell.SpellChecker(dictionaryFile);
  return result;
}, {});

/**
 * Get Banner
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.RequestHandler} next
 */
module.exports.getBanner = function getBanner(req, res) {
  res.status(200).jsonp({
    "banner": false,
  });
}

/**
 * Get Lang List
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.RequestHandler} next
 */
module.exports.getLangList = function getLangList(req, res) {
  res.status(200).jsonp({
    "langList": {
      "ltr": l.extend({}, availableLanguages),
      "rtl": {},
    },
    "verLang": 6,
  });
}

/**
 * Check Spelling
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.RequestHandler} next
 */
module.exports.checkSpelling = function checkSpelling(req, res, next) {
  // Quick n dirty validation of query params
  const checks = [
    H.checkQueryParams("out_type", {
      status: 400, message: "`out_type` needs to be `words`",
    }, "words"),
    H.checkQueryParams("version", {
      status: 400, message: "No language code given",
    }),
    H.checkQueryParams("slang", {
      status: 400, message: "No language code given",
    }),
    H.checkQueryParams("text", {
      status: 400, message: "No text to check given",
    }),
  ];

  // Each check is actually a middleware that happens to return false if the
  // request wasn't valid.
  for (var i = 0; i < checks.length; i++) {
    const error = checks[i](req);
    if (error) {
      return next(error);
    }
  }

  const lang = req.query.slang;

  const spellchecker = spellcheckers[lang];

  if (!spellchecker) {
    return next({
      status: 400, message: "I can't spellcheck `" + lang + "`, sorry.",
    });
  }

  const inputWords = req.query.text.split(",");

  Promise.all(inputWords.map((word) =>
    spellchecker.suggestions(word.trim())
      .then((res) => ({ "word": word, "suggestions": res }))
  ))
    .then((allCorrections) => {
      const corrections = allCorrections
        .filter((item) => item.suggestions)
        .map((item) => {
          // TODO: What is the `ud` param in the response? (It's cargo culted
          //       from <webspellchecker.net>.)
          item.ud = false;
          return item;
        });

      res.status(200).jsonp(corrections);
    })
    .catch(next);
}
