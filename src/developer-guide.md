# Developer Guide

## Quickstart new project

Start from documentation:

```bash
mkdir /tmp/1 && wget -qO- https://github.com/daggerok/vuepress-pdf/archive/master.zip | tar xvf - -C $_
# wget -qO- https://github.com/daggerok/vuepress-pdf/archive/master.zip | tar xvf -
# tar -xvf <(curl -sL https://github.com/daggerok/vuepress-pdf/archive/master.zip)
# jar -xvf <(curl -sL https://github.com/daggerok/vuepress-pdf/archive/master.zip)
mv /tmp/1/vuepress-pdf /tmp/my-new-project
cd /tmp/my-new-project/
# find and replace: vuepress-pdf -> my-new-project
# such as: BASE='/my-new-project/'
vi package.json
vi .vuepress/config.js
```

## Build and serve

```sh
npm i -E ; npm run build ; npx serve .vuepress/dist/
```

open [http://localhost:8080/](http://localhost:8080/) url

## Publish via CI

Checkout `.github/workflows/ci.yaml` file to see how easily you can deploy your VuePress docs on GitHub Pages:

@[code transcludeWith=::include lang=yaml](@/.github/workflows/ci.yaml)

That README.md documentation file is compiled and deployed on [GitHub Pages](https://daggerok.github.io/vuepress-pdf/)

## rtfm
* https://friendlyuser.github.io/vuepress-theme-cool-starter
* https://github.com/mermaid-js/mermaid
* https://github.com/KaTeX/KaTeX
