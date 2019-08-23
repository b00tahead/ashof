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

function openFullBioModal() {
  const modalBackground = document.getElementById("modal-background");
  const bioModal = document.getElementById("bio-modal");
  modalBackground.classList.add('modal-active');
  bioModal.classList.add('active');
}

function openVideoModal() {
  const modalBackground = document.getElementById("modal-background");
  const videoModal = document.getElementById("video-modal");
  const vimeoUrlDiv = videoModal.children[0];

  buildIframe(getVimeoId(vimeoUrlDiv));
  vimeoUrlDiv.style.display = "none"; // hide the vimeoUrlDiv (only need it for its contents)
  modalBackground.classList.add('modal-active');
  videoModal.classList.add('active');
}

// remove '.active' from parent div
function closeModal(elementId) {
  const parentModal = document.getElementById(elementId).parentElement;
  const modalBackground = document.getElementById("modal-background");
  const iframeDiv = document.getElementById("vimeo-iframe");
  const iframe = iframeDiv.children[0];

  if (iframe) {
    removeIframe(iframe);
  }

  parentModal.classList.remove('active');
  modalBackground.classList.remove('modal-active');
}

function getVimeoId(vimeoUrlDiv) {
  const vimeoUrl = vimeoUrlDiv.innerHTML;
  // regex to get video ID
  const vimeoId = vimeoUrl.replace(/https:\/\/vimeo.com\//gm, '');
  return vimeoId;
}

function buildIframe(vimeoId) {
  // create iframe
  const iframe = document.createElement("iframe", { src: 'https://player.vimeo.com/video/294800835?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0', style: 'position:absolute;top:0;left:0;width:100%;height:100%;', frameborder: '0', allow: 'autoplay; fullscreen'});

  // Set the ID for the iframe for potential future use
  iframe.setAttribute("id", "video-" + vimeoId);

  // Set some attributes to get the video to autoplay
  iframe.setAttribute("src", "https://player.vimeo.com/video/" + vimeoId + "?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "autoplay; fullscreen");

  // Set the style properties needed for responsiveness
  iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";

  // append to #video-modal
  const vimeoIframeDiv = document.getElementById('vimeo-iframe');
  vimeoIframeDiv.appendChild(iframe);
}

function removeIframe(iframe) {
  iframe.remove();
}
