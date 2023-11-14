import SQ, { DATE } from 'sequelize';
import { sequelize } from '../db/database.js';

const DataTypes = SQ.DataTypes;

// orm, odm은 자동으로 table이름뒤에 s를 붙혀줌
// 테이블이 있으면 요놈들이 생성이 안됨.
// 하지만 테이블이 없으면 자동으로 생성이됨
export const User = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        url: DataTypes.TEXT
    },
    { timestamps: false }
)

export async function findByUsername(username) {
    return User.findOne({ where: { username }});
};

export async function findById(id) {
    return User.findByPk(id);
};

export async function createUser(user) {
    return User.create(user).then((data) => data.dataValues.id);
};