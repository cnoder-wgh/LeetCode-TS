module.exports = {
  extends: ["airbnb-typescript-prettier"],
  settings: {
      "import/resolver": {
          "alias": {
              "map": [
                  ["@dataStructure", "./src/dataStructure/"],
              ],
              extensions: ['.ts', '.js', '.tsx', '.json']
          }
      },
      "react": {
          "version": "detect"
      }
  }
};