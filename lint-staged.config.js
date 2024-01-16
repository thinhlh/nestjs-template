module.exports = {
    "{src,apps,libs,test}/**/*.{js,ts,jsx,tsx,json}": [
      (files) => "yarn lint",
      (files) =>
        "yarn test",
    ],
  };
  
