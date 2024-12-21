import Errors, { Messege } from "../libs/Error";
import { Member, MemberInput } from "../libs/types/member";
import MemberModel from "../schema/Member.model";
import { HttpCode } from "../libs/Error";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
  private readonly memberModel;
  constructor() {
    this.memberModel = MemberModel;
  }

  public async processSignup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.SHOP })
      .exec();

      if (exist) throw new Errors(HttpCode.BAD_REQUEST, Messege.CREATE_FAILED);
    try {
      const result = await this.memberModel.create(input);

      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Messege.CREATE_FAILED);
    }
  }
}

export default MemberService;
