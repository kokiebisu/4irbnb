import { ILoggerUtils, LoggerUtils, PACKAGE_NAME } from "@4irbnb/common";
import { Types as RepositoryTypes } from "../repos/user";
import { IService } from "./types";
import { Types as DomainTypes } from "../domains/user";

/**
 * @public Domain Service for {@link @user#User}. Supplements logic that cannot be enwrapped by the Stay entity.
 */
export class Service implements IService {
  #repo: RepositoryTypes.IRepository;
  #logger: ILoggerUtils = LoggerUtils.initialize({
    packageName: PACKAGE_NAME,
    className: this.constructor.name,
  });

  /**
   * @public
   * @param repo
   */
  private constructor(repo: RepositoryTypes.IRepository) {
    this.#repo = repo;
    this.#logger.log({
      location: "constructor",
      message: "Successfully initialized",
    });
  }

  /**
   * @public
   * @param user
   * @returns
   */
  public static initialize(repo: RepositoryTypes.IRepository) {
    return new Service(repo);
  }

  /**
   * @public
   * @param user
   * @returns
   */
  public async exists(user: DomainTypes.IEntityProps) {
    const result = await this.#repo.findByEmail(user.email.getValue());
    return !!result;
  }
}

// #serviceName = "UserService";
// #db: IDatabaseService;
// #idValidator: any;
// #tableName: string;
// #logger: ILoggerService;

// constructor({ db, idValidator }: IUserServiceConstructorParams) {
//   this.#db = db;
//   this.#idValidator = idValidator;
//   this.#tableName = this.#serviceName;
//   this.#logger = createLoggerService({
//     packageName: PackageEnum.stay,
//     className: this.#serviceName,
//   });
// }

// async get({ identifier }: IUserServiceGetParams): Promise<IUser | null> {
//   try {
//     if (!this.#idValidator({ identifier })) {
//       throw new InternalError({
//         location: "get:idValidator",
//         message: "Must be a valid id",
//       });
//     }
//     const user = await this.#db.findOne({
//       tableName: this.#tableName,
//       identifier,
//     });

//     if (!user) {
//       return null;
//     }

//     if (!isUser(user)) {
//       throw new InternalError({
//         location: "get:isStay",
//         message: "Not a valid stay was retrieved",
//       });
//     }
//     return user;
//   } catch (error) {
//     if (error instanceof InternalError) {
//       const { location, message } = error;
//       this.#logger.error({
//         location,
//         message,
//       });
//     } else {
//       this.#logger.error({
//         location: "get:findOne",
//         message: error as string,
//       });
//     }
//     return null;
//   }
// }
