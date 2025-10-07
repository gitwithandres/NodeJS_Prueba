import { DataTypes } from "sequelize";
import db from "../../config/db.js";

const user = db.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },



}, {
    timestamps: true,
    freezeTableName: true
})

export default user;