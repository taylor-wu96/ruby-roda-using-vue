# app.rb
require 'roda'
require 'slim'

class App < Roda
  # App code
  plugin :render, engine: 'slim', views: 'views'
  plugin :assets, js: ['test.js', 'test-2.js'], path: 'public/assests/'
  # plugin :assets, css: 'test.css', path: 'public/assests'

  # plugin :assets, path: 'public/assests',
  #                 js: ['jquery_test.js']
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
  end
end
