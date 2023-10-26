# Roda project combine with Vue.js using CDN

This is a small project to combine Roda and Vue.js using CDN.


#### Project setup
```
$ bundle install
```

#### Run server
```
$ bundle exec puma config.ru
```

#### Routing for example
```

$ locaclhost:9292 # => index.html
$ locaclhost:9292/b # => complicate.example
$ locaclhost:9292/c # => advanced.example

```

#### how to separate load js files in slim


  1. slim file
  ```
  script type="text/javascript" src="/assets/js/filename.js"
  ```
  2. app.rb
  ```
    plugin :assets, 
      js: ['a.js', 'b.js', 'c.js'], 
      path: 'public/assests/' 
  ```
  3. routing
  ``` 
    route do |rounting|
      response['Content-Type'] = 'text/html; charset=utf-8' # => set content type
      rounting.assets # => load js files
    end
  ```

#### Code Structure

```
sGemfile
Gemfile.lock
app.rb
config.ru
[public]
    ├── .DS_Store
    └── [assests]
        ├── [css]
            └── test.css
        └── [js]
            ├── test-2.js
            └── test.js
[views]
    ├── complicate.slim
    ├── home.slim
    ├── jquery_test.slim
    └── layout.slim

```

### Known issues
1. Todo example is not working properly.
