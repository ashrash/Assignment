const Vehicle = (sequelize: any, DataTypes: any) => {
    const Vehicle = sequelize.define(
      "Vehicle",
      {
        person_id: {
          type: DataTypes.STRING,
          references: 'person', 
          referencesKey: 'id' 
        },
        model_number: {
          type: DataTypes.STRING,
        }, 
        plate_number: {
            type: DataTypes.STRING,
        },
      },
      {
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return Vehicle;
};

export default Vehicle;