import { UserModel } from './user-model';

describe('StudentModel', () => {
  it('should create an instance', () => {
    expect(new UserModel()).toBeTruthy();
  });

  it (`Should have 'Aubert' as lastName`, () => {
    const student: UserModel = new UserModel()
    // Fill student object
    student.lastName = 'Aubert'
    student.email = 'jean-luc.aubert@aelion.fr'
    student.login = 'jlaubert'
    student.password = 'toto'

    expect(student.lastName).toBe('Aubert')
  })
});
