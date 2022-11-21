const Professor = (sequelize: any, DataTypes: any) => {
    const Professor = sequelize.define(
      "Professor",
      {
        person_id: {
          type: DataTypes.STRING,
        },
        salary: {
          type: DataTypes.STRING,
        }
      },
      {
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return Professor;
};

export default Professor;