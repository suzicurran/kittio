# KITT.IO

[ ![Codeship Status for suzicurran/breakable-toy](https://app.codeship.com/projects/b33838c0-ca26-0134-1460-327d40ee31ac/status?branch=master)](https://app.codeship.com/projects/199561)
[![Code Climate](https://codeclimate.com/github/suzicurran/breakable-toy/badges/gpa.svg)](https://codeclimate.com/github/suzicurran/breakable-toy)
[![Coverage Status](https://codeclimate.com/github/suzicurran/breakable-toy/badges/coverage.svg)](https://codeclimate.com/github/suzicurran/breakable-toy/coverage)

![App preview](https://github.com/suzicurran/kittio/app/assets/images/kittio_preview.png)

## [Live on Heroku!](http://kittio.herokuapp.com/)

## Overview

Kitt.io is a virtual pet app where each user creates and names an adorable kitty, and is then responsible for keeping it fed and happy. It was built using React to minimize reloading and present the user with quick animations based on their interactions. It also relies on an internal API to communicate changes to and retrieve up-to-date information from the database. This is a vital exchange, as the database experiences changes over time thanks to background jobs that slowly cause pets to become hungry and in need of attention.

When designing my Breakable Toy for Launch Academy, I sought to showcase my passion for making games as well as challenge myself to make a polished, mobile-friendly interface.

## Technologies

* Ruby on Rails
* ReactJS
* PostgreSQL
* Devise
* Twitter API
* Rake background tasks

## Local Setup

To start:
```
git clone https://github.com/suzicurran/kittio.git
```

From the directory:
```
bundle install
npm install
rake db:create && rake db:migrate && rake db:seed
```

If you want to take advantage of the decay_attributes rake task for changes over time,
you'll need to add the following constants (from apps.twitter.com) to your .env file:
```
TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_SECRET
```
