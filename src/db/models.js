// const { Sequelize } = require('sequelize')
const Sequelize = require("sequelize");
const db = new Sequelize({
	dialect: "mysql",
	database: "twitter",
	username: "greek",
	password: "greek123",
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
