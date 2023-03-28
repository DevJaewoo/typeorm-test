import { Member } from './Member';
import { AppDataSource } from '../../data-source';

export const memberRepository = AppDataSource.getRepository(Member).extend({});
