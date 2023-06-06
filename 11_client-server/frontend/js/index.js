const SERVER_URL = 'http://localhost:3000'


//добавленние нового студента на сервер
async function addStudentServer(obj) {

  let response = await fetch(SERVER_URL + '/api/students', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj),

  })
    let data = await response.json()

    return data
}

async function getStudentServer() {

  let response = await fetch(SERVER_URL + '/api/students', {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },

  })
    let data = await response.json()

    return data
}
async function searchStudent(search) {
  const url = new URL(`${SERVER_URL}/api/students`);
  url.searchParams.set('search', search)
  let response = await fetch(url, {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },

  })
    let data = await response.json()

    return data
}


async function deleteStudentServer(id) {

  let response = await fetch(SERVER_URL + '/api/students/' + id, {
      method: "DELETE",

  })
    let data = await response.json()

    return data
}




// let listStudents = [
//   {
//     name: 'Илья',
//     lastname: 'Иванов',
//     surname: 'Олегович',
//     birthday: new Date(1994, 5, 12),
//     faculty: "Философия",
//     studyStart: 2010,
//   },
//   {
//     name: 'Оля',
//     lastname: 'Студентова',
//     surname: 'Александровна',
//     birthday: new Date(1991, 11, 18),
//     faculty: "Экономика",
//     studyStart: 2011,
//   },
//   {
//     name: 'Татьяна',
//     lastname: 'Иванова',
//     surname: 'Олеговна',
//     birthday: new Date(1997, 4, 1),
//     faculty: "Информатика",
//     studyStart: 2010,
//   },
//   {
//     name: 'Арман',
//     lastname: 'Туляндиев',
//     surname: 'Нурланович',
//     birthday: new Date(1989, 11, 24),
//     faculty: "Медицина",
//     studyStart: 2007,
//   },

// ]



let serverData = await getStudentServer()

let listStudents = []

if (serverData !=null) {
  listStudents = serverData
}


//формат даты
function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
let sortColumnFlag = 'fio',
sortDirFlag = true

function $getNewStudentTR(studObj) {


  const $tr = document.createElement("tr")
  const $tdFIO = document.createElement("td")
  const $tdBirthday = document.createElement("td")
  const $tdFaculty = document.createElement("td")
  const $tdstudyStart = document.createElement("td")
  const $tdDelete = document.createElement("td")
  const $btnDelete = document.createElement("button")


  $btnDelete.classList.add("btn", "btn-danger")
  $btnDelete.textContent = "Удалить"


  //ФИО списка
  $tdFIO.textContent = `${studObj.lastname} ${studObj.name} ${studObj.surname}`

  //вычисление возраста, дата рождения
  function getAge(birthday) {
    const today = new Date();
    const age = today.getFullYear() -
                birthday.getFullYear() -
               (today.getMonth() < birthday.getMonth() ||
               (today.getMonth() === birthday.getMonth() &&
               today.getDate() < birthday.getDate()));
    return age;
  };

  $tdBirthday.textContent = formatDate(new Date(studObj.birthday)) + " (" + (getAge(new Date(studObj.birthday)) + " лет)");

  //Факультет
  $tdFaculty.textContent = `${studObj.faculty}`;

  //Расчет курсов
  function titleLearn(year) {

    let now = new Date;
    let nowYear = now.getFullYear(),
        nowMonth = now.getMonth();

    const course = (nowYear - year) + (nowMonth > 4 ? 2 : 1);

    if (course > 4) {
      return ('Завершил')
    }

    return course + ' курс';

  }
  //Год поступления
  $tdstudyStart.textContent = `${studObj.studyStart} (${titleLearn(studObj.studyStart)})`


  //удаление студента
  $btnDelete.addEventListener("click", async function() {
    await deleteStudentServer(studObj.id)
    $tr.remove()
  })

  $tdDelete.append($btnDelete); //вставка копки удаления
  $tr.append($tdFIO, $tdBirthday, $tdFaculty, $tdstudyStart, $tdDelete) //вставка студента в таблицу


  return $tr
}



const facultyTitle = document.getElementById('fuc__title')
const startTitle = document.getElementById('start__title')
const ageTitle = document.getElementById('age__title')
const fioTitle = document.getElementById('fio__title')

const filterForm = document.getElementById('filter-form')
const filterFio = document.getElementById('filter-form__fio-inp')
const filterFaculty = document.getElementById('filter-form__faculty-inp')

const filterStudents = async (event) => {
    const data = await searchStudent(event.currentTarget.value);
    render(data);
}

filterFio.addEventListener('input', filterStudents);
filterFaculty.addEventListener('input', filterStudents);



facultyTitle.style.cursor = "pointer";
startTitle.style.cursor = "pointer";
ageTitle.style.cursor = "pointer";
fioTitle.style.cursor = "pointer";

//клик сортировки
facultyTitle.addEventListener('click', function() {
sortColumnFlag = "faculty"
sortDirFlag = !sortDirFlag
render(listStudents)
});
ageTitle.addEventListener('click', function() {
sortColumnFlag = "birthday"
sortDirFlag = !sortDirFlag
render(listStudents)
});
fioTitle.addEventListener('click', function() {
sortColumnFlag = "fio"
sortDirFlag = !sortDirFlag
render(listStudents)
});
startTitle.addEventListener('click', function() {
sortColumnFlag = "studyStart"
sortDirFlag = !sortDirFlag
render(listStudents)
});



function render(arr) {
  let copyArr = [...arr]


  const $studTable = document.getElementById("stud-table")

//место для сортировки и фильтраций

for (const oneUser of copyArr) {
  oneUser.fio = oneUser.name + ' ' + oneUser.surname + ' ' + oneUser.lastname;
  oneUser.birthYear = 2023 - oneUser.age
}


copyArr = copyArr.sort(function(a, b) {
  let sort = a[sortColumnFlag] > b[sortColumnFlag]
  if (!sortDirFlag) {
    sort = a[sortColumnFlag] < b[sortColumnFlag]
  }
  // if (sort) return -1
  return sort ? -1 : 1;
})


  $studTable.textContent = ''
  for (const studObj of copyArr) {
    const $newTr = $getNewStudentTR(studObj);
    $studTable.append($newTr)
  }

}
 render(listStudents)

//обработчик события добавления студента
document.getElementById('add-form').addEventListener("submit", async function(event){
  event.preventDefault();


  let newStudentObj = {
    name: document.getElementById("name-inp").value,
    lastname: document.getElementById("lastname-inp").value,
    surname: document.getElementById("surname-inp").value,
    birthday: new Date(document.getElementById("birthday-inp").value),
    faculty: document.getElementById("faculty-inp").value,
    studyStart: document.getElementById("studyStart-inp").value,
  }

  this.reset()

  let serverDataObj = await addStudentServer(newStudentObj);

  serverDataObj.birthday = new Date(serverDataObj.birthday);

  listStudents.push(serverDataObj);
  render(listStudents)

});

