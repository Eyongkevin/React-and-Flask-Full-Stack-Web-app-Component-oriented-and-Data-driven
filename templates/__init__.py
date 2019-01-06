from flask import Flask
app = Flask(__name__,
  	static_folder = './public',
  	template_folder="./static")

from templates.hello.views import hello_blueprint
from templates.medium_articles.views import medium_blueprint

# register the blueprints
app.register_blueprint(hello_blueprint)
app.register_blueprint(medium_blueprint)
