import MySQLdb

db = MySQLdb.connect(
    host="localhost",
    user="root",
    passwd="root",
    db="first_db"
)

curs = db.cursor()
curs.execute("insert into books (name, dicription) values(%s, %s);", ('-', '170'))
db.commit()
curs.close()
db.close()