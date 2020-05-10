.PHONY: serve

default: build

build:
	npm install -g postcss-cli autoprefixer
	git clone https://github.com/jasonraimondi/hugo-theme-developer-portfolio themes/hugo-theme-developer-portfolio
	npm install
	hugo --gc --enableGitInfo

serve:
	hugo serve -D --disableFastRender --bind 0.0.0.0
