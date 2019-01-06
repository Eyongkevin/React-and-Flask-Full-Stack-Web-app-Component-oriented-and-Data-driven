from flask import render_template, Blueprint
medium_blueprint = Blueprint('medium_article',__name__)

@medium_blueprint.route('/articlelist')
def index():
	return render_template("index.html")
