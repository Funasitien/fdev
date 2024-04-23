function detectOS() {
  var OSName = "Unknown OS";
  if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
  if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
  if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
  if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";

  var OSVersion = "Unknown";
  var OSArchitecture = "Unknown";
  if (OSName == "Windows") {
    if (navigator.appVersion.indexOf("Windows NT 10.0") != -1) {
      OSVersion = "10";
      if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1) {
        OSArchitecture = "64-bit";
      } else {
        OSArchitecture = "32-bit";
      }
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.3") != -1) {
      OSVersion = "8.1";
      if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1) {
        OSArchitecture = "64-bit";
      } else {
        OSArchitecture = "32-bit";
      }
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.2") != -1) {
      OSVersion = "8";
      if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1) {
        OSArchitecture = "64-bit";
      } else {
        OSArchitecture = "32-bit";
      }
    }
    else if (navigator.appVersion.indexOf("Windows NT 6.1") != -1) {
      OSVersion = "7";
      if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1) {
        OSArchitecture = "64-bit";
      } else {
        OSArchitecture = "32-bit";
      }
    }
    else if (navigator.appVersion.indexOf("Windows NT 5.1") != -1) {
      OSVersion = "XP";
      OSArchitecture = "32-bit";
    }
  }

  return { OSName, OSVersion, OSArchitecture };
}

function redirectToPage() {
  var { OSName, OSVersion, OSArchitecture } = detectOS();
  var redirectUrl;

  if (OSName === "Windows") {
    if (OSVersion === "10" && OSArchitecture === "64-bit") {
      redirectUrl = "windows10-64bit.html";
    } else if (OSVersion === "10" && OSArchitecture === "32-bit") {
      redirectUrl = "windows10-32bit.html";
    } else if (OSVersion === "8.1" && OSArchitecture === "64-bit") {
      redirectUrl = "windows8.1-64bit.html";
    } else if (OSVersion === "8.1" && OSArchitecture === "32-bit") {
      redirectUrl = "windows8.1-32bit.html";
    } else if (OSVersion === "8" && OSArchitecture === "64-bit") {
      redirectUrl = "windows8-64bit.html";
    } else if (OSVersion === "8" && OSArchitecture === "32-bit") {
      redirectUrl = "windows8-32bit.html";
    } else if (OSVersion === "7" && OSArchitecture === "64-bit") {
      redirectUrl = "windows7-64bit.html";
    } else if (OSVersion === "7" && OSArchitecture === "32-bit") {
      redirectUrl = "windows7-32bit.html";
    } else if (OSVersion === "XP") {
      redirectUrl = "windowsxp.html";
    } else {
      redirectUrl = "#";
    }
  } else if (OSName === "MacOS") {
    redirectUrl = "#";
  } else if (OSName === "Linux") {
    redirectUrl = "#";
  } else if (OSName === "UNIX") {
    redirectUrl = "#";
  } else {
    redirectUrl = "#";
  }

  // Update the OS information on the page
  document.getElementById("os-name").textContent = `Operating System: ${OSName}`;
  document.getElementById("os-version").textContent = `Version: ${OSVersion} (${OSArchitecture})`;

  window.location.href = redirectUrl;
}

// Detect OS and redirect
window.onload = function() {
  redirectToPage();
};
