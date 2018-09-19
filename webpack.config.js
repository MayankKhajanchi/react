// two critical things
// what is the entry point
// where will the final bundle file go (final js file)

const path = require("path");


module.exports = {
    entry: "./src/newapp.js",
    output:{
        path:  path.join(__dirname, "../public"),  //__dirname + './../public',  // wont use './' because path is going to be different in different machines
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-core',
            test: /\.js$ /,     // "\" is an escape for "."
            exclude: /node_modules/

            //these three above lines mean whenever you see any js file in any folder
            //except node_modules run it through babel

        }]
    }
};


