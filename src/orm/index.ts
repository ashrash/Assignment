import { Sequelize, DataTypes } from 'sequelize';
import Students from './Students';
import Professors from './Professor';
import Person from './Person';
import Address from './Address';
import Vehicle from './Vehicle';
import Drive from './Drive';


const sequelize = new Sequelize(`mysql://ashwin:1234@localhost/test`);

const databaseObj = {
    Sequelize,
    sequelize,
    Students : Students(sequelize, DataTypes),
    Professors : Professors(sequelize, DataTypes),
    Person : Person(sequelize, DataTypes),
    Address : Address(sequelize, DataTypes),
    Vehicle : Vehicle(sequelize, DataTypes),
    Drive : Drive(sequelize, DataTypes),
};

databaseObj.Person.hasMany(databaseObj.Professors, {
    foreignKey: 'person_id'
});

databaseObj.Person.hasMany(databaseObj.Students,  {
    foreignKey: 'person_id'
});

databaseObj.Person.hasOne(databaseObj.Address, {
    foreignKey: 'person_id'
});

databaseObj.Person.hasMany(databaseObj.Vehicle, {
    foreignKey: 'person_id'
});

databaseObj.Vehicle.hasMany(databaseObj.Drive, {
    foreignKey: 'vehicle_id'
});

