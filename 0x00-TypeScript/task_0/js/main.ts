interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentFirst: Student = {
    firstName: 'Juan',
    lastName: 'Lopez',
    age: 26,
    location: 'Madrid',
}

const studentSecond: Student = {
    firstName: 'Bart',
    lastName: 'Simpson',
    age: 12,
    location: 'Springfield',
}

const studentList = [studentFirst, studentSecond];
  
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  studentList.forEach((obj) => {
    const row = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellLocation = document.createElement('td');
    cellName.textContent = obj.firstName;
    cellLocation.textContent = obj.location;
    row.appendChild(cellName);
    row.appendChild(cellLocation);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);
  document.body.appendChild(table);
