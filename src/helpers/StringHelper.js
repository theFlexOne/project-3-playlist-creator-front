const COORDINATING_CONJUNCTIONS = [
  "for",
  "and",
  "nor",
  "but",
  "or",
  "yet",
  "so",
];
const ARTICLES = ["the", "a", "an"];
const PREPOSITIONS = [
  "aboard",
  "about",
  "above",
  "across",
  "after",
  "against",
  "along",
  "amid",
  "among",
  "anti",
  "around",
  "as",
  "at",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "besides",
  "between",
  "beyond",
  "but",
  "by",
  "concerning",
  "considering",
  "despite",
  "down",
  "during",
  "except",
  "excepting",
  "excluding",
  "following",
  "for",
  "from",
  "in",
  "inside",
  "into",
  "like",
  "minus",
  "near",
  "of",
  "off",
  "on",
  "onto",
  "opposite",
  "outside",
  "over",
  "past",
  "per",
  "plus",
  "regarding",
  "round",
  "save",
  "since",
  "than",
  "through",
  "to",
  "toward",
  "towards",
  "under",
  "underneath",
  "unlike",
  "until",
  "up",
  "upon",
  "versus",
  "via",
  "with",
  "within",
  "without",
];
export default class StringHelper {
  static titleCase(str) {
    const exceptionWords = [
      ...COORDINATING_CONJUNCTIONS,
      ...ARTICLES,
      ...PREPOSITIONS,
    ];

    const isTooShort = (word) => word.length < 5;

    const words = str.split(" ");
    const fixedWords = words.map((word) => {
      word = word.toLowerCase();
      if (exceptionWords.includes(word) && word.length < 5) return word;
      return word[0].toUpperCase() + word.slice(1);
    });
    return fixedWords.join(" ");
  }

  static trimSlashes = (endpoint) => {
    const last = endpoint.length - 1;
    if (endpoint[last] === "/") endpoint = endpoint.slice(0, -1);
    if (endpoint[0] === "/") endpoint = endpoint.slice(1);
    return endpoint;
  };
}
