import pymysql
from flask import Flask, render_template, request, session
from flaskext.mysql import MySQL

app = Flask(__name__, template_folder="templates")
app.secret_key = "ensalada_de_gallina"

mysql = MySQL()

app.config["MYSQL_DATABASE_HOST"] = "localhost"
app.config["MYSQL_DATABASE_USER"] = "root"
app.config["MYSQL_DATABASE_PASSWORD"] = ""
app.config["MYSQL_DATABASE_DB"] = "flask_app_db"

mysql.init_app(app)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/auth/register", methods=["GET", "POST"])
def register():
    msg = ""
    if (
        request.method == "POST"
        and "username" in request.form
        and "password" in request.form
    ):
        # Get data from register form
        username = request.form["username"]
        password = request.form["password"]
        confirm_password = request.form["confirm_password"]

        # Check if password and confirm password match
        if password != confirm_password:
            msg = "Passwords do not match!"
            return render_template("auth/register.html", msg=msg)

        # Connect to the database
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)

        # Check if username already exists in the database
        cur.execute("SELECT * FROM users WHERE username = %s", (username,))
        account = cur.fetchone()

        if account:
            msg = "Username already exists!"
        else:
            # Insert new user into the database
            cur.execute(
                "INSERT INTO users  (username, password) VALUES (%s, %s)",
                (
                    username,
                    password,
                ),
            )
            conn.commit()
            msg = "You have successfully registered!"

    elif request.method == "POST":
        msg = "Please fill out the form!"

    return render_template("auth/register.html", msg=msg)


@app.route("/auth/login", methods=["GET", "POST"])
def login():
    msg = ""
    if (
        request.method == "POST"
        and "username" in request.form
        and "password" in request.form
    ):
        # Get data from login form
        username = request.form["username"]
        password = request.form["password"]

        # Connect to the database
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)

        # Check if username and password match in the database
        cur.execute(
            "SELECT * FROM users WHERE username = %s AND password = %s",
            (username, password),
        )
        user = cur.fetchone()

        if user:
            session["loggedin"] = True
            session["id"] = user["id"]
            session["username"] = user["username"]
            msg = "You're logged in!"
            return render_template("index.html", msg=msg)
        else:
            msg = "Incorrect username or password!"

    elif request.method == "POST":
        msg = "Please fill out the form!"

    return render_template("auth/login.html", msg=msg)

@app.route("/logout")
def logout():
    session.pop("loggedin", None)
    session.pop("id", None)
    session.pop("username", None)
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
