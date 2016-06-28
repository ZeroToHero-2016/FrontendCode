var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456759',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0123456789',
        salary: 45000
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0333456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Bob',
        phone: '0123426789',
        salary: 4500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456759',
        salary: 4500
    }
];
function alertFunction(row) {
    window.alert(employeesList[row].firstName + ' ' + employeesList[row].lastName + ' ' + employeesList[row].phone + ' ' + employeesList[row].salary);

}
function deleteFunct(row) {
    employeesList.splice(row,1);
}
function showNumbers(list) {
    var string = list[0].name;
    for(var i = 1 ; i < 5 ; i++) {
        string += ','+list[i].name;
    }
    return string;
}


var Stat = function (name,number) {
    this.name = name;
    this.number = number;
}
function showList() {
    var ok=0;
    var max=0;
    var current=0;
    var nameList = [];
    var secondList = [];
    var nr_stat = [];
    for(j=0 ; j<10 ; j++) {
        nr_stat.push(new Stat(j,0));
    }
    var sum=0;
    var myTable = '<table border="1" class="table table-striped"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th><th>Show</th><th>Delete</th></tr>';
    for(var i in employeesList) {
        sum += parseInt(employeesList[i].salary);
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' + employeesList[i].salary + '</td><td><button onclick="alertFunction(' + i + ')">Vizualizare</button></td><td><button onclick="deleteFunct(' + i + '); showList()">Delete</button></td></tr>';
        ok = 0;
        for (var j in nameList) {
            if (employeesList[i].firstName.localeCompare(nameList[j].name) == 0) {
                nameList[j].number++;
                //console.log(employeesList[i].firstName + " si " + nameList[j].name);
                if (nameList[j].number > max) {
                 //   console.log(nameList[j].number + "si" + max);
                    max = nameList[j].number;
                    current = j;
                }
                ok = 1;
            }
        }
        if (ok == 0) {
            nameList.push(new Stat(employeesList[i].firstName, 1));
            if(max == 0) {
                max++;
                current = nameList.length - 1;
            }
        } ok=0;
        for (var j in secondList) {
            if (employeesList[i].lastName.localeCompare(secondList[j].name) == 0) {
                secondList[j].number=1;

                ok = 1;
            }
        }
        if (ok == 0) {
            secondList.push(new Stat(employeesList[i].lastName, 0));
        }
        for(j=0 ; j<employeesList[i].phone.length ; j++) {
            nr_stat[parseInt(employeesList[i].phone[j])].number++;
        }

    }
    nr_stat.sort(function(a, b) {
        return b.number - a.number;
    });
    max=0;
    for (var i in secondList) {
        if(secondList[i].number==0) {
            max++;
        }
    }
    sum /= employeesList.length;
    myTable += '<tr><td>'+ nameList[current].name +'</td><td>'+ max +'</td><td>'+ showNumbers(nr_stat) +'</td><td>'+ sum +'</td></tr></table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function sort() {
    var option = parseInt(document.getElementById("option").value);
    console.log(option);
    if(option == 1) {
        employeesList.sort(function(a, b) {
            return a.firstName.localeCompare(b.firstName);
        });
    }
    else if (option == 2) {
        employeesList.sort(function(a, b) {
           return a.lastName.localeCompare(b.lastName);
        });
    }
    else if (option == 3) {
        employeesList.sort(function (a, b) {
            return a.phone.localeCompare(b.phone);
        });
    }
    else {
        employeesList.sort(function(a, b) {
            return a.salary - b.salary;
        });
    }
}
function filt() {
    var word = document.getElementById("word").value;
    //Metoda 1
    for(var i=0 ; i < employeesList.length ; i++) {
        if(!word.localeCompare(employeesList[i].firstName) || !word.localeCompare(employeesList[i].lastName) || !word.localeCompare(employeesList[i].phone)) {
            continue;
        }
        deleteFunct(i);
        i--;
    }
}
function showSalary() {
   var sum=0;
    for(var i in employeesList) {
        sum+=employeesList[i].salary;
    }
    var show_sum ='<button type="button" class="btn btn-default">'+sum+'</button>';
    var container = document.getElementById('sum_box');
    container.innerHTML =show_sum;
}
function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
}

function deleteEmployee() {
    employeesList.pop();
}