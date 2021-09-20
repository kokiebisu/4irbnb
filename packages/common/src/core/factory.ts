export interface IBaseFactory<EntityProps, Entity> {
  create(props: EntityProps): Entity;
}
