// const { Sequelize } = require('sequelize')
const Sequelize = require("sequelize");
const db = new Sequelize({
	// dialect: "mysql",
	// database: "twitter",
	// username: "greek",
	// password: "greek123",

	dialect: "mysql",
	database: process.env.MYSQL_ADDON_DB,
	username: process.env.MYSQL_ADDON_USER,
	password: process.env.MYSQL_ADDON_PASSWORD,
	port: process.env.MYSQL_ADDON_PORT,
	host: process.env.MYSQL_ADDON_HOST,
});
const colid = {
	type: Sequelize.DataTypes.INTEGER,
	autoIncrement: true,
	primaryKey: true,
};
const colusername = {
	type: Sequelize.DataTypes.STRING(15),
	unique: true,
	allowNull: false,
};

const Users = db.define("user", {
	id: colid,
	username: colusername,
});
const Posts = db.define("post", {
	id: colid,
	title: {
		type: Sequelize.DataTypes.STRING(50),
		allowNull: false,
	},
	body: {
		type: Sequelize.DataTypes.TEXT,
		allowNull: false,
	},
});
const Comments = db.define("comment", {
	id: colid,
	body: {
		type: Sequelize.DataTypes.TEXT("tiny"),
	},
});
Users.hasMany(Posts);
Posts.belongsTo(Users);

Posts.hasMany(Comments);
Comments.belongsTo(Posts);

Users.hasMany(Comments);
Comments.belongsTo(Users);

module.exports = {
	db,
	Posts,
	Users,
	Comments,
};
