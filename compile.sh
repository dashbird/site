find public/js -type f -name '*.js' -exec $(npm bin)/babel {} -o {}.out \; -exec mv {}.out {} \;
find public -type f -name '*.html' -exec $(npm bin)/html-minifier {} -c htmlmin.json -o {}.out \; -exec mv {}.out {} \;
find public -type f -name '*.css' -exec $(npm bin)/cleancss {} -o {}.out \; -exec mv {}.out {} \;
