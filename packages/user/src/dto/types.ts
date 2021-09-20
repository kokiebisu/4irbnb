export interface IDataTransferObjectProps {
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
}

export interface IDataTransferObject extends IDataTransferObjectProps {
  id: string;
}
