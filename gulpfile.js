const { src, dest, watch } = require('gulp');
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');


function html(){
  return src('src/html/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('public'));
} 

function css() {
  return src("src/sass/*.scss")
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(dest("public"));
}

function script(){
  return src('./src/js/*.js')
    .pipe(minify({ noSource: true,ignoreFiles: ['.combo.js', '-min.js']}))
    .pipe(dest('public'))
}

exports.default = function() {
  watch('./src/html/*.html',  html);
  watch('./src/sass/*.scss',  css);
  watch('./src/js/*.js',      script);
};