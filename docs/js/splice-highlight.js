hljs.registerLanguage("splice", function(hljs) {
  return {
    name: "Splice",
    keywords: {
      keyword: "let if while for func return end raise warn info",
      literal: "true false null"
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: "comment",
        begin: "#",
        end: "$"
      }
    ]
  };
});