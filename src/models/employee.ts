class Employee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
  
    constructor(firstName: string,lastName:string,email:string,gender:string) {
      this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.gender = gender;
    }
  }
  
  export default Employee;