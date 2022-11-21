const Address = (sequelize: any, DataTypes: any) => {
    const Address = sequelize.define(
      "address",
      {
        person_id: {
          type: DataTypes.STRING,
        },
        street: {
          type: DataTypes.STRING,
        }, 
        city: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        }
      },
      {
        createdAt: "created_dttm",
        updatedAt: "updated_dttm"
      }
    );
    return Address;
};

export default Address;