# app.rb
require 'roda'
require 'slim'

class App < Roda
  # App code
  plugin :render, engine: 'slim', views: 'views'
  plugin :assets, js: ['test.js', 'test-2.js', 'test-3.js', 'todomain.js', 'todoone.js', 'todo/TodoInput.js', 'todo/TodoList.js'],
                  # 'todo/TodoInput.vue', 'todo/TodoList.vue',
                  path: 'public/assests/'
  # plugin :assets, css: 'test.css', path: 'public/assests'

  plugin :common_logger, $stderr

  route do |rounting|
    response['Content-Type'] = 'text/html; charset=utf-8'
    rounting.assets

    rounting.root do
      view 'home'
    end

    rounting.on 'jquery' do
      rounting.assets
      view 'jquery_test'
    end

    rounting.on 'c' do
      view 'complicate'
    end

    rounting.on 'd' do
      view 'advanced'
    end

    rounting.on 'todo' do
      view 'todo'
    end
  end
end
