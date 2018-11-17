const moviesFolder = '/media/sam/drive/movies/';
const figlet = require('figlet');
const fs = require('fs');

let movies = [];

var walkSync = function(dir, filelist) {
  var fs = fs || require('fs'),
      files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', filelist);
    }
    else {
      filelist.push(file);
    }
  });
  return filelist;
};

walkSync(moviesFolder, movies);

figlet(movies[Math.floor(Math.random()*movies.length)], {
  kerning: "full",
}, function(err, data) {
    if (err) {
      console.log(`

                    ${movies[Math.floor(Math.random()*movies.length)]}

                  `);
        return;
    }
    console.log(data)
});
