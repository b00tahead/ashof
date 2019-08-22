const degreeOne = document.getElementsByClassName("degree-1")[0];
const degreeTwo = document.getElementsByClassName("degree-2")[0];
const degreeThree = document.getElementsByClassName("degree-3")[0];
const departmentCollection = document.getElementsByClassName('department-container')[0];

if (degreeOne) {
  let degreeOneYear = degreeOne.children[1];
  updateYearElement(degreeOneYear, reformatYear(degreeOneYear), null);
}

if (degreeTwo) {
  let degreeTwoYear = degreeTwo.children[1];
  updateYearElement(degreeTwoYear, reformatYear(degreeTwoYear), degreeTwo);
}

if (degreeThree) {
  let degreeThreeYear = degreeThree.children[1];
  updateYearElement(degreeThreeYear, reformatYear(degreeThreeYear), degreeThree);
}

if (departmentCollection) {
  const departmentArray = departmentCollection.children[0].children;
  for (let i = 0; i < departmentArray.length; i++) {
    formatDepartment(departmentArray[i]);
    if (i < departmentArray.length - 1) {
      addCommaAndSpace(departmentArray[i]);
    }
  }
}

function reformatYear(year) {
  let yearToSlice = year.innerHTML;
  return "'" + yearToSlice.slice(2);
}

function updateYearElement(element, formattedYear, degree) {
  element.innerHTML = formattedYear;
  if (degree) {
    degree.children[0].innerHTML = ", " + degree.children[0].innerHTML;
  }
}

function formatDepartment(department) {
  return department.innerHTML = "Department of " + department.innerHTML;
}

function addCommaAndSpace(departmentDiv) {
  departmentDiv.innerHTML += ",&nbsp;";
}

function openFullBio() {
  console.log('biography');
}

// remove '.active' from parent div
function closeModal(elementId) {
  const parentModal = document.getElementById(elementId).parentElement;
  const modalBackground = document.getElementById("modal-background");
  parentModal.classList.remove('active');
  modalBackground.classList.remove('modal-active');

}
