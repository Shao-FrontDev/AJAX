console.log("Ajax");
let GetCss = document.querySelector("#getCss");
let GetJs = document.querySelector("#getJs");
let GetHtml = document.querySelector("#getHtml");
let container = document.querySelector(".html");
let GetXML = document.querySelector("#getXml");
let getJson = document.querySelector("#getJson");

GetCss.addEventListener("click", () => {
  console.log("click");
  let request = new XMLHttpRequest();
  request.open("GET", "./style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("失败");
      }
    }
  };
  request.send();
});

GetJs.addEventListener("click", () => {
  console.log("click");
  let request = new XMLHttpRequest();
  request.open("GET", "script.js");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("请求失败");
      }
    }
  };
  request.send();
});

GetHtml.addEventListener("click", () => {
  console.log("click");
  let request = new XMLHttpRequest();
  request.open("GET", "./main.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        container.innerHTML = request.response;
      }
    }
  };
  request.send();
});

GetXML.addEventListener("click", () => {
  let request = new XMLHttpRequest();
  request.open("GET", "./demo.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        let text = dom.getElementsByTagName("warning")[0]
          .textContent;
        container.innerHTML = text;
      }
    }
  };
  request.send();
});

getJson.addEventListener("click", () => {
  console.log("Json");
  let request = new XMLHttpRequest();
  request.open("GET", "./people.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(typeof request.response);
        const object = JSON.parse(request.response); //获取到数组（对象）
        container.innerHTML = JSON.stringify(object);
      }
    }
  };
  request.send();
});
