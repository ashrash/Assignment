const Drive = (sequelize: any,  DataTypes: any) => {
    const Drive = sequelize.define(
      "Drive",
      {
        vehicle_id: {
          type: DataTypes.STRING,
        },
        date: {
          type: DataTypes.DATE,
        }, 
        distance: {
            type: DataTypes.INTEGER,
        },
      },
      {
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return Drive;
};

export default Drive;