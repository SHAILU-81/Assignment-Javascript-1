class StudentRegistry {
    constructor() {
      this.registry = {};
    }
  
    addStudent(name) {
      const regNum = Object.keys(this.registry).length + 1;
      this.registry[regNum] = name;
    }
  
    removeStudent(regNum) {
      if (regNum in this.registry) {
        delete this.registry[regNum];
      }
    }
  
    getStudentName(regNum) {
      return this.registry[regNum] || null;
    }
  }
  
  // Example usage:
  const registry = new StudentRegistry();
  
  registry.addStudent("A");
  registry.addStudent("B");
  registry.addStudent("C");
  registry.addStudent("D");
  registry.addStudent("E");
  
  console.log(registry.getStudentName(3));  // Output: "C"
  
  registry.removeStudent(4);
  
  console.log(registry.getStudentName(4));  // Output: null
  