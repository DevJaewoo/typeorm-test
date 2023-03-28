import { AppDataSource } from './data-source';
import { Address } from './domain/delivery/Address';
import { Member } from './domain/member/Member';
import { memberRepository } from './domain/member/MemberRepository';

AppDataSource.initialize()
    .then(async () => {
        console.log('Inserting a new user into the database...');
        const member = new Member();
        member.name = 'test';
        member.address = new Address('city', 'street', 'zipcode');

        await memberRepository.save(member);

        console.log('Loading users from the database...');
        const members = await memberRepository.find();
        console.log('Loaded users: ', members);

        console.log(
            'Here you can setup and run express / fastify / any other framework.'
        );
    })
    .catch((error) => console.log(error));
