const Students = (sequelize: any,  DataTypes: any) => {
    const Students = sequelize.define(
      "students",
      {
        person_id: {
          type: DataTypes.STRING,
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
    return Students;
};

export default Students;