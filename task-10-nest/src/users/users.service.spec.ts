import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { UsersService } from './users.service';



describe('UsersService', () => {
  let Usersservice: UsersService;
  let usersrepository:Repository<User>;
  let Userscontroller:UsersController;


  beforeEach(async () => {

   
    Usersservice=new UsersService(usersrepository);
    Userscontroller =new UsersController(Usersservice);
    }).compile();
    afterEach(()=>{
      Usersservice=null;
      Userscontroller=null;

  });

  it('should be defined', () => {
    expect(UsersService).toBeDefined();
  });

  // it('should be defined', () => {
  //   expect(Userscontroller).toBeDefined();
  // });

  
});





// describe('UsersController', () => {
//   let catsController: UsersController;
//   let catsService: UsersService;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//         controllers: [UsersController],
//         providers: [UsersService],
//       }).compile();

//     catsService = moduleRef.get<UsersService>(UsersService);
//     catsController = moduleRef.get<UsersController>(UsersController);
//   });
//   describe('findAll', () => {
//     it('should return an array of cats', async () => {
//       const result = ['test'];
//       jest.spyOn(catsService, 'find').mockImplementation(() => result);

//       expect(await catsController.find()).toBe(result);
//     });
//   });
// });