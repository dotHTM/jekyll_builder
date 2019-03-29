# jekyll_builder

Docker containers to build, process, and preview work in Jekyll

# What you get out of this

1. Jekyll container in build & watch mode.
2. Grunt container for SASS and livereload.
3. Apache container to preview what it'll look like.

# To use

This project requires [Docker](https://docker.com).

1. clone to your local
2. link or copy your jekyll source to ./static_src
3. `make up` to start the container
4. `make logs` to see activity
5. `make down` to stop.
6. `make cycle` to down then up.

# License

NO WARRANTY
