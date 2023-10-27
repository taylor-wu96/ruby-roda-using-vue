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
$ locaclhost:9292/todo # => todo.example (in single file)

```

#### how to separate load js files in slim


  1. slim file
  ```
  script type="text/javascript" src="/assets/js/filename.js"
  script type="text/javascript" src="/assets/js/folder/filename.js" #should be included in app.rb folder/filename.js
  ```
  2. app.rb
  ```
    plugin :assets, 
      js: ['a.js', 'b.js', 'c.js','folder/d.js'], 
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
Gemfile
Gemfile.lock
README.md
app.rb
config.ru
[public]
    ├── .DS_Store
    └── [assests]
        ├── [css]
            └── test.css
        └── [js]
            ├── test-2.js
            ├── test-3.js
            ├── test.js
            ├── [todo]
                ├── TodoInput.js
                └── TodoList.js
            ├── todomain.js
            └── todoone.js
[views]
    ├── advanced.slim
    ├── complicate.slim
    ├── home.slim
    ├── jquery_test.slim
    ├── layout.slim
    └── todo.slim

```

### Known issues
1. Todo example is not working properly. maybe can't use vue object for lack of complier
