const Person = (sequelize: any, DataTypes: any) => {
    const Person = sequelize.define(
      "person",
      {
        id: {
          type: DataTypes.STRING,
          unique: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
        }
      },
      {
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return Person;
};

export default Person;